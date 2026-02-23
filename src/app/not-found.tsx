"use client";

import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";


export default function NotFound() {
    return (
        <div className="min-h-screen flex flex-col relative text-foreground">
            <Navbar />
            <main className="flex-1 flex items-center justify-center pt-20">
                <div className="text-center">
                    <h1 className="mb-4 text-6xl font-bold text-neon">404</h1>
                    <p className="mb-6 text-xl text-gray-400">Oops! Page not found</p>
                    <Link
                        href="/"
                        className="inline-block px-6 py-3 rounded-full border border-neon text-neon hover:bg-neon hover:text-black transition-all duration-300 font-medium"
                    >
                        Return to Home
                    </Link>
                </div>
            </main>
            <Footer />
        </div>
    );
}
