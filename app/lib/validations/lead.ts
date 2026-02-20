import { z } from "zod";
import MailChecker from 'mailchecker';

export const leadSchema = z.object({
    name: z.string().min(2, "Full name is too short"),
    company: z.string().min(2, "Hotel/Property name is required"),
    rooms: z.string().min(1, "Please select room capacity"),
    service: z.string().min(1, "Please select primary focus area"),
    location: z.string().min(1, "Please select a location"),
    email: z.email("Invalid email format").refine((email) => {
        return MailChecker.isValid(email);
    }, { message: "Please use a valid email address." }),
    rawPhone: z.string().refine((phone) => {
        const digitsOnly = phone.replace(/\D/g, '');
        let rawDigits = digitsOnly;
        if (rawDigits.length === 12 && rawDigits.startsWith("91")) {
            rawDigits = rawDigits.slice(2);
        }
        if (rawDigits.length !== 10) return false;
        if (/^(\d)\1{9}$/.test(rawDigits)) return false;
        if (!/^[6-9]/.test(rawDigits)) return false;
        return true;
    }, { message: "Valid 10-digit Indian mobile number required." })
});

export type LeadFormData = z.infer<typeof leadSchema>;
