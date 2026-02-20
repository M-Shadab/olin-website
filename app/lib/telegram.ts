export async function sendTelegramAlert(token: string, chatId: string, message: string) {
    if (!token || !chatId) {
        console.warn("[Telegram] Missing token or chat ID, skipping alert.");
        return;
    }

    try {
        await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                chat_id: chatId,
                text: message,
                parse_mode: "Markdown",
            }),
        });
    } catch (err) {
        console.error("[Telegram] Failed to send alert:", err);
    }
}

export async function sendSuccessAlert(lead: any) {
    const token = process.env.TELEGRAM_LEAD_GEN_SUCCESS_TOKEN;
    const chatId = process.env.TELEGRAM_LEAD_GEN_SUCCESS_CHAT_ID;

    if (!token || !chatId) return;

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
    await sendTelegramAlert(token, chatId, message);
}

export async function sendFailureAlert(errorDetails: { status?: number; reason?: string; payload?: any; error?: any; context?: any }) {
    const token = process.env.TELEGRAM_LEAD_GEN_FAILED_TOKEN;
    const chatId = process.env.TELEGRAM_LEAD_GEN_FAILED_CHAT_ID;

    if (!token || !chatId) return;

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
        // API Error
        const payload = errorDetails.payload || {};
        const meta = payload.metadata || {};

        message = `
🚨 *Lead Submission Failed* 🚨

*Error Code:* ${errorDetails.status}
*Reason:* ${errorDetails.reason}

*User Context:*
*IP:* ${meta.ip}
*Location:* ${meta.city}, ${meta.country}
*Device:* ${meta.userAgent}

*Payload:*
\`\`\`json
${JSON.stringify(errorDetails.payload, null, 2)}
\`\`\`
`;
    }

    await sendTelegramAlert(token, chatId, message);
}
