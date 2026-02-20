"use server";

import { verifyTurnstileToken } from "../lib/turnstile";
import { submitLeadToOlin, LeadPayload } from "../lib/olin-api";
import { sendSuccessAlert, sendFailureAlert } from "../lib/telegram";
import { leadSchema } from "../lib/validations/lead";
import { getLeadMetadata } from "../lib/lead-metadata";
import { LRUCache } from "lru-cache";

// LRU In-Memory Rate Limiting (Prevents Memory Leaks)
const rateLimitCache = new LRUCache<string, { count: number, lastReset: number }>({
    max: 500, // Maximum of 500 unique IPs tracked at a time 
    ttl: 60 * 60 * 1000 // 1 hour TTL
});
const RATE_LIMIT_MAX = 10; // Max 10 submissions per hour

export async function submitLead(prevState: any, formData: FormData) {
    const turnstileToken = formData.get("cf-turnstile-response") as string;

    // Extract Form Data
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const rawPhone = formData.get("phone") as string;
    const company = formData.get("company") as string;
    const message = formData.get("message") as string || "";
    const rooms = formData.get("rooms") as string || "";
    const service = formData.get("service") as string || "";
    const baseLocation = formData.get("location") as string || "";
    const customLocation = formData.get("customLocation") as string || "";

    const location = baseLocation === "other" && customLocation ? customLocation : baseLocation;
    const fields = { name, email, phone: rawPhone, company, message, rooms, service, location: baseLocation, customLocation };

    // Run Zod Validation on critical fields
    const validationResult = leadSchema.safeParse({ name, company, rooms, service, location: baseLocation, email, rawPhone });
    if (!validationResult.success) {
        return {
            success: false,
            error: "Please fix the highlighted errors.",
            fieldErrors: validationResult.error.flatten().fieldErrors,
            fields,
            timestamp: Date.now()
        };
    }

    const phone = rawPhone ? (rawPhone.startsWith("+91") || rawPhone.startsWith("91") ? rawPhone : `+91 ${rawPhone}`) : "";

    // Parse Metadata
    const metadata = await getLeadMetadata(formData);

    // Rate Limiting Check
    const ip = metadata.ip;
    if (ip && ip !== "Unknown") {
        const now = Date.now();
        const record = rateLimitCache.get(ip);
        if (record) {
            if (now - record.lastReset > rateLimitCache.ttl) {
                rateLimitCache.set(ip, { count: 1, lastReset: now });
            } else if (record.count >= RATE_LIMIT_MAX) {
                // Rate limit triggered! Build temporary payload for Alert
                const alertPayload: LeadPayload = {
                    name, email, phone, company, message, rooms, service, location,
                    source: "website", page: "home",
                    metadata: { submittedAt: new Date().toISOString(), ...metadata }
                };

                await sendFailureAlert({
                    status: 429,
                    reason: "Rate Limit Exceeded (10 submissions/hour)",
                    payload: alertPayload
                });

                return {
                    success: false,
                    error: "Too many requests. Please try again later.",
                    fieldErrors: {},
                    fields,
                    timestamp: Date.now()
                };
            } else {
                record.count++;
            }
        } else {
            rateLimitCache.set(ip, { count: 1, lastReset: now });
        }
    }

    console.log(`[Lead Submission] Started for: ${email} (${company}) from IP: ${metadata.ip} (${metadata.deviceType} - ${metadata.deviceModel})`);

    // 1. Verify Turnstile (skip in Dev)
    if (process.env.NODE_ENV !== "development") {
        const turnstileResult = await verifyTurnstileToken(turnstileToken);
        if (!turnstileResult.success) {
            return { success: false, error: turnstileResult.error, fields, timestamp: Date.now() };
        }
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
            ...metadata
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
            return { success: false, error: "Failed to submit lead to system. Please try again later.", fields, timestamp: Date.now() };
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

        return { success: false, error: "An unexpected error occurred.", fields, timestamp: Date.now() };
    }
}
