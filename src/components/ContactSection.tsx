"use client";

import { useState } from "react";
import SectionWrapper from "./SectionWrapper";
import { Send, Loader2 } from "lucide-react";
import { sendEmail } from "@/actions/sendEmail";

export default function ContactSection() {
    const [pending, setPending] = useState(false);
    const [status, setStatus] = useState<{ type: "success" | "error" | null; message: string }>({ type: null, message: "" });

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setPending(true);
        setStatus({ type: null, message: "" });

        const formData = new FormData(e.currentTarget);
        const result = await sendEmail(formData);

        if (result.error) {
            setStatus({ type: "error", message: result.error });
        } else if (result.success) {
            setStatus({ type: "success", message: "Message sent successfully! I will get back to you soon." });
            (e.target as HTMLFormElement).reset();
        }

        setPending(false);
    };

    return (
        <SectionWrapper id="contact" title="Get in Touch">
            <div className="max-w-2xl mx-auto mt-6 bg-white/5 border border-white/10 rounded-2xl p-6 sm:p-10 shadow-2xl backdrop-blur-sm">
                <p className="text-gray-400 mb-8 text-center text-lg">
                    Have a project in mind, need Vastu consultation, or looking for life coaching? Drop me a message below.
                </p>

                <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div className="space-y-2">
                            <label htmlFor="name" className="text-sm font-medium text-gray-300">Full Name</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                required
                                className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-neon focus:ring-1 focus:ring-neon transition-all"
                                placeholder="John Doe"
                            />
                        </div>
                        <div className="space-y-2">
                            <label htmlFor="email" className="text-sm font-medium text-gray-300">Email Address</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                required
                                className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-neon focus:ring-1 focus:ring-neon transition-all"
                                placeholder="john@example.com"
                            />
                        </div>
                    </div>

                    <div className="space-y-2">
                        <label htmlFor="message" className="text-sm font-medium text-gray-300">Your Message</label>
                        <textarea
                            id="message"
                            name="message"
                            required
                            rows={5}
                            className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-neon focus:ring-1 focus:ring-neon transition-all resize-none"
                            placeholder="How can I help you?"
                        ></textarea>
                    </div>

                    <button
                        type="submit"
                        disabled={pending}
                        className="w-full flex items-center justify-center gap-2 bg-neon hover:bg-neon/90 text-black font-bold py-4 rounded-lg transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-black focus:ring-neon disabled:opacity-70 disabled:cursor-not-allowed"
                    >
                        {pending ? (
                            <>
                                <Loader2 className="w-5 h-5 animate-spin" />
                                Sending...
                            </>
                        ) : (
                            <>
                                <Send className="w-5 h-5" />
                                Send Message
                            </>
                        )}
                    </button>

                    {status.type && (
                        <div className={`p-4 rounded-lg text-sm text-center font-medium ${status.type === "success" ? "bg-neon/10 text-neon border border-neon/20" : "bg-red-500/10 text-red-500 border border-red-500/20"}`}>
                            {status.message}
                        </div>
                    )}
                </form>
            </div>
        </SectionWrapper>
    );
}
