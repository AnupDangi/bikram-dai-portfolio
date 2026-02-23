import { motion } from "framer-motion";
import { ReactNode } from "react";

interface SectionWrapperProps {
    id: string;
    title?: string;
    children: ReactNode;
}

export default function SectionWrapper({ id, title, children }: SectionWrapperProps) {
    return (
        <section id={id} className="relative z-10 py-24 px-6 sm:px-12 md:px-24">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                className="max-w-5xl mx-auto bg-black/70 backdrop-blur-xl border border-white/5 rounded-3xl p-8 sm:p-12 shadow-2xl"
            >
                {title && (
                    <div className="mb-10">
                        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-2">{title}</h2>
                        <div className="w-12 h-1 bg-neon rounded-full" />
                    </div>
                )}
                <div className="text-gray-300 leading-relaxed">
                    {children}
                </div>
            </motion.div>
        </section>
    );
}
