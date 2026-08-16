"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export type FormState = {
    success: boolean;
    error?: string;
};

export async function sendEmailAction(
    prevState: FormState,
    formData: FormData,
): Promise<FormState> {
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const message = formData.get("message") as string;

    if (!name || !email || !message) {
        return { success: false, error: "Please fill in all fields." };
    }

    try {
        const { error } = await resend.emails.send({
            from: "Portfolio Contact <onboarding@resend.dev>", // Replace with your domain when verified
            to: ["pavelmarr@gmail.com"], // Your actual recipient email
            replyTo: email,
            subject: `New Contact Form Submission from ${name}`,
            text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
        });

        if (error) {
            return { success: false, error: error.message };
        }

        return { success: true };
    } catch {
        return {
            success: false,
            error: "Failed to send message. Please try again later.",
        };
    }
}
