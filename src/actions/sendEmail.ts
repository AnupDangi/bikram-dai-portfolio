"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (formData: FormData) => {
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const message = formData.get("message") as string;

    if (!name || !email || !message) {
        return { error: "Please fill in all fields." };
    }

    try {
        const data = await resend.emails.send({
            from: "Portfolio Contact <onboarding@resend.dev>", // Replace with your verified domain in production if needed
            to: "bikram.babu11@gmail.com",
            replyTo: email,
            subject: `New Contact Form Message from ${name}`,
            text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
        });

        if (data.error) {
            return { error: data.error.message };
        }

        return { success: true };
    } catch (error: any) {
        return { error: error.message || "Failed to send email" };
    }
};
