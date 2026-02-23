const Footer = () => (
  <footer className="border-t border-white/5 py-8 mt-12 relative z-10 w-full">
    <div className="container mx-auto px-6 max-w-5xl flex flex-col md:flex-row items-center justify-between gap-4">
      {/* Brand */}
      <div className="flex items-center gap-3">
        <span className="text-xl font-bold text-neon">BK</span>
        <span className="text-sm font-medium text-gray-400">Er. Bikram Babu KC</span>
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
