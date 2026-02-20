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
    const serverIp = headerStore.get("x-forwarded-for") || headerStore.get("x-real-ip") || "Unknown";
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

    // Prioritize Client Data for "User Context", Fallback to Server
    const ip = clientMeta.ip || serverIp;
    const city = clientMeta.city || serverCity;
    const country = clientMeta.country_name || clientMeta.country || serverCountry; // ipapi uses country_name
    const latitude = clientMeta.latitude || serverLat;
    const longitude = clientMeta.longitude || serverLon;
    const userAgent = clientMeta.userAgent || serverUserAgent;

    // Extra client specific fields
    const screenRes = clientMeta.screenResolution;
    const timezone = clientMeta.timezone;
    const referrer = clientMeta.referrer;

    console.log(`[Lead Submission] Started for: ${email} (${company}) from IP: ${ip}`);

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
