"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function FramerBackground() {
    const [mounted, setMounted] = useState(false);
    const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });

    useEffect(() => {
        setMounted(true);
        setWindowSize({ width: window.innerWidth, height: window.innerHeight });

        const handleResize = () => {
            setWindowSize({ width: window.innerWidth, height: window.innerHeight });
        };

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    if (!mounted) return null;

    // Create an array of circles for the background animation
    const circles = Array.from({ length: 40 });

    return (
        <div className="fixed inset-0 z-[-1] bg-black overflow-hidden pointer-events-none">
            {/* Subtle grid pattern overlay */}
            <div
                className="absolute inset-0 opacity-[0.03]"
                style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h40v40H0V0zm20 20h20v20H20V20zM0 20h20v20H0V20z' fill='%23ffffff' fill-opacity='1' fill-rule='evenodd'/%3E%3C/svg%3E")`
                }}
            />

            {/* Animated Glowing Orbs */}
            {circles.map((_, i) => (
                <motion.div
                    key={i}
                    className="absolute rounded-full opacity-20"
                    style={{
                        background: i % 3 === 0 ? "radial-gradient(circle, #18d26e 0%, transparent 70%)" : "radial-gradient(circle, #ffffff 0%, transparent 70%)",
                        width: Math.random() * 200 + 50 + "px",
                        height: Math.random() * 200 + 50 + "px",
                    }}
                    initial={{
                        x: Math.random() * windowSize.width,
                        y: Math.random() * windowSize.height,
                        scale: Math.random() * 0.5 + 0.5,
                    }}
                    animate={{
                        x: [
                            Math.random() * windowSize.width,
                            Math.random() * windowSize.width,
                            Math.random() * windowSize.width,
                        ],
                        y: [
                            Math.random() * windowSize.height,
                            Math.random() * windowSize.height,
                            Math.random() * windowSize.height,
                        ],
                    }}
                    transition={{
                        duration: Math.random() * 20 + 20,
                        repeat: Infinity,
                        repeatType: "reverse",
                        ease: "linear",
                    }}
                />
            ))}

            {/* Deep vignette to keep edges dark */}
            <div className="absolute inset-0 bg-black/50" />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/80" />
        </div>
    );
}
