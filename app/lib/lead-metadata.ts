import { headers } from "next/headers";

export interface LeadMetadata {
    ip: string;
    city: string;
    country: string;
    latitude: string;
    longitude: string;
    userAgent: string;
    screenResolution?: string;
    timezone?: string;
    referrer?: string;
    deviceType?: string;
    deviceVendor?: string;
    deviceModel?: string;
    os?: string;
    browser?: string;
}

export async function getLeadMetadata(formData: FormData): Promise<LeadMetadata> {
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

    return {
        ip,
        city,
        country,
        latitude,
        longitude,
        userAgent,
        screenResolution: clientMeta.screenResolution,
        timezone: clientMeta.timezone,
        referrer: clientMeta.referrer,
        deviceType: clientMeta.type || "Unknown",
        deviceVendor: clientMeta.vendor || "Unknown",
        deviceModel: clientMeta.model || "Unknown",
        os: clientMeta.os || "Unknown",
        browser: clientMeta.browser || "Unknown",
    };
}
