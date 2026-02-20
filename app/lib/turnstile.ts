export async function verifyTurnstileToken(token: string): Promise<{ success: true } | { success: false; error: string }> {
    if (!token) {
        console.error("[Turnstile] Error: Token missing");
        return { success: false, error: "Turnstile token missing." };
    }

    try {
        const verifyRes = await fetch(
            "https://challenges.cloudflare.com/turnstile/v0/siteverify",
            {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    secret: process.env.TURNSTILE_SECRET_KEY,
                    response: token,
                }),
            }
        );

        const verifyData = await verifyRes.json();
        if (!verifyData.success) {
            console.error("[Turnstile] Verification Failed:", verifyData["error-codes"]);
            return { success: false, error: "Security check failed. Please refresh and try again." };
        }

        console.log("[Turnstile] Token verified successfully");
        return { success: true };
    } catch (err) {
        console.error("[Turnstile] Unexpected Error:", err);
        return { success: false, error: "Security check error." };
    }
}
