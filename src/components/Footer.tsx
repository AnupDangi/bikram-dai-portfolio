"use client";
import Image from "next/image";

const Footer = () => (
  <footer className="border-t border-white/5 py-8 mt-12 relative z-10 w-full">
    <div className="container mx-auto px-6 max-w-5xl flex flex-col md:flex-row items-center justify-between gap-4">
      {/* Brand */}
      <div className="flex items-center gap-3">
        <Image
          src="/bikramdailogo.png"
          alt="Logo"
          width={50}
          height={50}
          className="rounded-full"
        />
        <span className="text-xl font-bold text-white">BBKC</span>
      </div>

      {/* Copyright */}
      <div className="text-center md:text-right">
        <p className="text-xs text-gray-500">
          © {new Date().getFullYear()} Er. Bikram Babu KC. All Rights Reserved.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
