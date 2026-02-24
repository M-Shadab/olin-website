/**
 * Telegram Lead Alert Service
 * 
 * Thin API client that dispatches neatly formatted lead submission
 * notifications to the central olin-chat microservice.
 */

export async function sendTelegramAlert(channel: "LEAD_GEN_SUCCESS" | "LEAD_GEN_FAILED", message: string) {
    console.log("[Telegram] Sending alert for lead:", message);

    const BASE_URL = process.env.BASE_URL_OLIN_CHAT || "http://localhost:3001";
    const API_SECRET = process.env.OLIN_CHAT_API_SECRET;

    console.log(`[Telegram] DEBUG → BASE_URL="${BASE_URL}" | SECRET_SET=${!!API_SECRET} | SECRET_LEN=${API_SECRET?.length ?? 0}`);

    if (!API_SECRET) {
        console.warn(`[Telegram] ❌ Missing OLIN_CHAT_API_SECRET. Cannot dispatch ${channel} alert.`);
        return;
    }

    try {
        const response = await fetch(`${BASE_URL}/api/telegram/send`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${API_SECRET}`
            },
            body: JSON.stringify({
                channel: channel,
                text: message,
            }),
        });

        if (!response.ok) {
            console.error("[Telegram] Central Hub rejected alert:", response.status, await response.text());
        }
    } catch (err) {
        console.error("[Telegram] Network error dispatching to central hub:", err);
    }
}

export async function sendSuccessAlert(lead: any) {
    console.log("[Telegram] Sending success alert for lead:", lead);

    const meta = lead.metadata || {};
    const locationStr = meta.city && meta.country ? `${meta.city}, ${meta.country}` : "Unknown";
    const geoLink = meta.latitude && meta.longitude ? `[Map](https://www.google.com/maps?q=${meta.latitude},${meta.longitude})` : "";

    const message = `
✅ *New Lead Recieved* ✅

👤 *Contact Info*
*Name:* ${lead.name}
*Email:* ${lead.email}
*Phone:* ${lead.phone}
*Company:* ${lead.company}

🏨 *Requirement Details*
*Hub Location:* ${lead.location}
*Rooms:* ${lead.rooms}
*Service:* ${lead.service}

🌍 *User Metadata*
*IP:* ${meta.ip}
*Location:* ${locationStr} ${geoLink}
*Device:* ${meta.deviceType || "Unknown"} | ${meta.deviceVendor || "Unknown"} ${meta.deviceModel || ""}
*System:* ${meta.os || "Unknown"} | ${meta.browser || "Unknown"}
*Screen:* ${meta.screenResolution || "Unknown"}
*Timezone:* ${meta.timezone || "Unknown"}
*Referrer:* ${meta.referrer || "Direct"}
*Time:* ${new Date(meta.submittedAt).toLocaleString("en-IN", { timeZone: "Asia/Kolkata" })}

📝 *Message:*
${lead.message}
`;
    await sendTelegramAlert("LEAD_GEN_SUCCESS", message);
}

export async function sendFailureAlert(errorDetails: { status?: number; reason?: string; payload?: any; error?: any; context?: any }) {
    let message = "";

    if (errorDetails.error) {
        // Critical/Unexpected Error
        message = `
🚨 *Critical Submission Error* 🚨

*Error:* ${errorDetails.error instanceof Error ? errorDetails.error.message : String(errorDetails.error)}

*Context:*
User: ${errorDetails.context?.email}
Company: ${errorDetails.context?.company}
`;
    } else {
        // API Error or Rate Limit
        const payload = errorDetails.payload || {};
        const meta = payload.metadata || {};

        const header = errorDetails.status === 429 ? "🚨 *RATE LIMIT SPAM ALERT* 🚨" : "🚨 *Lead Submission Failed* 🚨";

        message = `
${header}

*Error Code:* ${errorDetails.status || "N/A"}
*Reason:* ${errorDetails.reason}

*User Context:*
*IP:* ${meta.ip || "Unknown"}
*Location:* ${meta.city || "Unknown"}, ${meta.country || "Unknown"}
*Device:* ${meta.deviceType || "Unknown"} | ${meta.userAgent || "Unknown"}

*Payload Attempted:*
\`\`\`json
${JSON.stringify(errorDetails.payload || errorDetails.context, null, 2)}
\`\`\`
`;
    }

    await sendTelegramAlert("LEAD_GEN_FAILED", message);
}
