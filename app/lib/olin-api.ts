export interface LeadPayload {
    name: string;
    email: string;
    phone: string;
    company: string;
    message: string;
    rooms?: string;
    service?: string;
    location?: string;
    source: string;
    page: string;
    metadata: {
        submittedAt: string;
        userAgent: string;
        ip?: string;
        city?: string;
        country?: string;
        latitude?: string;
        longitude?: string;
        browser?: string;
        os?: string;
        device?: string;
        screenResolution?: string;
        timezone?: string;
        referrer?: string;
        deviceType?: string;
        deviceVendor?: string;
        deviceModel?: string;
    };
}

export async function submitLeadToOlin(payload: LeadPayload): Promise<{ success: true } | { success: false; error: string; status?: number; errorText?: string }> {
    try {
        const apiRes = await fetch("https://app.olinhospitality.com/lead", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(payload),
        });

        if (!apiRes.ok) {
            const errorText = await apiRes.text();
            console.error(`[Olin API] Error (${apiRes.status}):`, errorText);
            return { success: false, error: "Failed to submit lead to system.", status: apiRes.status, errorText };
        }

        return { success: true };
    } catch (error) {
        console.error("[Olin API] Unexpected Error:", error);
        return { success: false, error: "An unexpected error occurred during API submission." };
    }
}
