/**
 * WhatsApp Lead Confirmation Service
 * 
 * Interacts with the central olin-chat microservice to dispatch
 * automated WhatsApp messages to users who submit the Lead Form.
 */

export async function sendWhatsAppText(to: string, text: string): Promise<{ success: boolean; error?: string }> {
    const BASE_URL = process.env.BASE_URL_OLIN_CHAT || "http://localhost:3001";
    const API_SECRET = process.env.OLIN_CHAT_API_SECRET;

    if (!API_SECRET) {
        console.warn(`[WhatsApp] ❌ Missing OLIN_CHAT_API_SECRET. Cannot dispatch message to ${to}.`);
        return { success: false, error: "Missing API Secret" };
    }

    try {
        const response = await fetch(`${BASE_URL}/api/notifications/send`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${API_SECRET}`
            },
            body: JSON.stringify({
                to,
                text,
                type: "text"
            }),
        });

        if (!response.ok) {
            const errorText = await response.text();
            console.error(`[WhatsApp] Central Hub rejected message to ${to}:`, response.status, errorText);
            return { success: false, error: `API Error ${response.status}: ${errorText}` };
        }

        console.log(`[WhatsApp] Successfully dispatched message via Proxy to ${to}`);
        return { success: true };
    } catch (err: any) {
        console.error(`[WhatsApp] Network error dispatching to ${to}:`, err);
        return { success: false, error: err.message };
    }
}
