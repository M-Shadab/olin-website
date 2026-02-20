"use server";

export async function submitLead(formData: FormData) {
    const turnstileToken = formData.get("cf-turnstile-response") as string;
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const phone = formData.get("phone") as string;
    const company = formData.get("company") as string;
    const message = formData.get("message") as string;

    if (!turnstileToken) {
        return { success: false, error: "Turnstile token missing." };
    }

    // 1. Verify Turnstile Token
    const verifyRes = await fetch(
        "https://challenges.cloudflare.com/turnstile/v0/siteverify",
        {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                secret: process.env.TURNSTILE_SECRET_KEY,
                response: turnstileToken,
            }),
        }
    );

    const verifyData = await verifyRes.json();
    if (!verifyData.success) {
        return { success: false, error: "Turnstile verification failed." };
    }

    // 2. Submit Lead to Olin API
    try {
        const leadPayload = {
            name,
            email,
            phone,
            company,
            message,
            source: "website",
            page: "home",
            metadata: {
                submittedAt: new Date().toISOString(),
            },
        };

        const apiRes = await fetch("https://app.olinhospitality.com/lead", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(leadPayload),
        });

        if (!apiRes.ok) {
            console.error("API Error:", await apiRes.text());
            return { success: false, error: "Failed to submit lead to system." };
        }

        return { success: true };
    } catch (error) {
        console.error("Submission Error:", error);
        return { success: false, error: "An unexpected error occurred." };
    }
}
