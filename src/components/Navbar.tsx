import { useState, useEffect } from "react";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // Simple scroll spy logic
      const sections = navLinks.map(link => link.name.toLowerCase());
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-black/80 backdrop-blur-md py-4 shadow-lg shadow-black/20" : "bg-transparent py-6"
        }`}
    >
      <div className="container mx-auto px-6 max-w-7xl flex items-center justify-between">

        {/* Logo */}
        <a href="#home" className="flex items-center gap-3 group">
          <img
            src="/bikramdailogo.png"
            alt="Er. Bikram Babu KC Logo"
            className="w-10 h-10 object-contain group-hover:drop-shadow-[0_0_8px_rgba(24,210,110,0.8)] transition-all duration-300"
          />
          <span className="font-bold text-xl tracking-wide text-white group-hover:text-neon transition-colors duration-300">
            BBKC
          </span>
        </a>

        {/* Links */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                className={`text-sm md:text-base font-medium transition-all relative pb-1 group ${activeSection === link.name.toLowerCase() ? "text-white" : "text-gray-400 hover:text-white"
                  }`}
              >
                {link.name}
                <span
                  className={`absolute left-0 bottom-0 h-0.5 bg-neon transition-all duration-300 ${activeSection === link.name.toLowerCase() ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
