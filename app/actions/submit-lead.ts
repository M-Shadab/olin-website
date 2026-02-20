"use server";

import { verifyTurnstileToken } from "../lib/turnstile";
import { submitLeadToOlin, LeadPayload } from "../lib/olin-api";
import { sendSuccessAlert, sendFailureAlert } from "../lib/telegram";

import { headers } from "next/headers";

export async function submitLead(prevState: any, formData: FormData) {
    const turnstileToken = formData.get("cf-turnstile-response") as string;

    // Extract Form Data
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const phone = formData.get("phone") as string;
    const company = formData.get("company") as string;
    const message = formData.get("message") as string;
    const rooms = formData.get("rooms") as string;
    const service = formData.get("service") as string;
    const location = formData.get("location") as string;

    const headerStore = await headers();
    const serverUserAgent = headerStore.get("user-agent") || "Unknown";
    const forwardedFor = headerStore.get("x-forwarded-for");
    let serverIp = forwardedFor ? forwardedFor.split(",")[0].trim() : "Unknown";
    serverIp = serverIp === "Unknown" ? (headerStore.get("x-real-ip") || "Unknown") : serverIp;
    const serverCity = headerStore.get("x-vercel-ip-city") || "Unknown";
    const serverCountry = headerStore.get("x-vercel-ip-country") || "Unknown";
    const serverLat = headerStore.get("x-vercel-ip-latitude") || "";
    const serverLon = headerStore.get("x-vercel-ip-longitude") || "";

    // Parse Client Metadata (Visual/Browser context)
    let clientMeta: any = {};
    try {
        const rawClientMeta = formData.get("client_metadata") as string;
        if (rawClientMeta) {
            clientMeta = JSON.parse(rawClientMeta);
        }
    } catch (e) {
        console.warn("Failed to parse client metadata", e);
    }

    // Server-Side IP Lookup (Privacy Focused)
    let serverIpData: any = {};
    if (serverIp && serverIp !== "Unknown" && serverIp !== "127.0.0.1") {
        try {
            const res = await fetch(`https://ipapi.co/${serverIp}/json/`);
            if (res.ok) {
                serverIpData = await res.json();
            }
        } catch (e) {
            console.warn("Server-side IP lookup failed", e);
        }
    }

    // Prioritize Server IP Data (fetched securely) -> Client Data -> Header Fallback
    const ip = serverIp;
    const city = serverIpData.city || clientMeta.city || serverCity;
    const country = serverIpData.country_name || clientMeta.country_name || clientMeta.country || serverCountry;
    const latitude = serverIpData.latitude || clientMeta.latitude || serverLat;
    const longitude = serverIpData.longitude || clientMeta.longitude || serverLon;
    const userAgent = clientMeta.userAgent || serverUserAgent;

    // Extra client specific fields
    const screenRes = clientMeta.screenResolution;
    const timezone = clientMeta.timezone;
    const referrer = clientMeta.referrer;
    const deviceType = clientMeta.type || "Unknown";
    const deviceVendor = clientMeta.vendor || "Unknown";
    const deviceModel = clientMeta.model || "Unknown";
    const os = clientMeta.os || "Unknown";
    const browser = clientMeta.browser || "Unknown";

    console.log(`[Lead Submission] Started for: ${email} (${company}) from IP: ${ip} (${deviceType} - ${deviceModel})`);

    // 1. Verify Turnstile
    const turnstileResult = await verifyTurnstileToken(turnstileToken);
    if (!turnstileResult.success) {
        return { success: false, error: turnstileResult.error };
    }

    // 2. Prepare Payload
    const leadPayload: LeadPayload = {
        name,
        email,
        phone,
        company,
        message,
        rooms,
        service,
        location,
        source: "website",
        page: "home",
        metadata: {
            submittedAt: new Date().toISOString(),
            userAgent,
            ip,
            city,
            country,
            latitude,
            longitude,
            screenResolution: screenRes,
            timezone,
            referrer,
            deviceType,
            deviceVendor,
            deviceModel,
            os,
            browser,
        },
    };

    // 3. Submit to API
    try {
        const apiResult = await submitLeadToOlin(leadPayload);

        if (!apiResult.success) {
            // Log & Alert Failure
            await sendFailureAlert({
                status: apiResult.status,
                reason: apiResult.errorText,
                payload: leadPayload
            });
            return { success: false, error: "Failed to submit lead to system. Please try again later." };
        }

        console.log(`[Lead Submission] Success: Lead created for ${email}`);

        // 4. Alert Success
        await sendSuccessAlert(leadPayload);

        return { success: true };

    } catch (error) {
        console.error("[Lead Submission] Unexpected Error:", error);

        // Alert Critical Failure
        await sendFailureAlert({
            error,
            context: { email, company }
        });

        return { success: false, error: "An unexpected error occurred." };
    }
}
