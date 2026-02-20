import { UAParser } from "ua-parser-js";

export interface DeviceInfo {
    type: "Mobile" | "Tablet" | "Desktop";
    os: string;
    browser: string;
    vendor: string;
    model: string;
}

export function getDeviceInfo(): DeviceInfo {
    if (typeof window === "undefined") {
        return {
            type: "Desktop",
            os: "Unknown",
            browser: "Unknown",
            vendor: "Unknown",
            model: "Unknown"
        };
    }

    const parser = new UAParser(navigator.userAgent);
    const result = parser.getResult();

    // Map Device Type
    let type: "Mobile" | "Tablet" | "Desktop" = "Desktop";
    if (result.device.type === "mobile") type = "Mobile";
    else if (result.device.type === "tablet") type = "Tablet";
    else if (result.device.type === "smarttv") type = "Desktop"; // Treat TV as large screen
    else if (result.device.type === "wearable") type = "Mobile";
    else if (result.device.type === "embedded") type = "Mobile";
    // Default to Desktop if type is undefined (usually PC/Laptop)

    return {
        type,
        os: `${result.os.name || "Unknown"} ${result.os.version || ""}`.trim(),
        browser: `${result.browser.name || "Unknown"} ${result.browser.version || ""}`.trim(),
        vendor: result.device.vendor || "Unknown",
        model: result.device.model || "Unknown"
    };
}
