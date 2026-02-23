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
        // 1. Send the primary notification email to Bikram
        const notificationData = await resend.emails.send({
            from: "Bikram Dai Portfolio <info@bikrambabu.com.np>", // Must be a verified domain and valid email format
            to: "bikram.babu11@gmail.com",
            replyTo: email,
            subject: `New Contact Form Message from ${name}`,
            text: `You have received a new message from your portfolio website.\n\nName: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
        });

        if (notificationData.error) {
            return { error: notificationData.error.message };
        }

        // 2. Send an acknowledgment email back to the client
        await resend.emails.send({
            from: "Er. Bikram Babu KC <info@bikrambabu.com.np>", // Must be a verified domain and valid email format
            to: email, // Sending to the client's email
            subject: "I received your message!",
            text: `Hi ${name},\n\nThank you for reaching out! I have received your message and will get back to you as soon as possible.\n\nHere is a copy of your message:\n${message}\n\nBest regards,\nEr. Bikram Babu KC\nFounder & CEO, PrimeFace Engineering Consultancy\nhttps://theprimeface.com`,
        });

        return { success: true };
    } catch (error: any) {
        return { error: error.message || "Failed to send email" };
    }
};
