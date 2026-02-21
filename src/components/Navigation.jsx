import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const heroHeight = window.innerHeight;
      setIsScrolled(window.scrollY > heroHeight - 80);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About Us", href: "#aboutus" },
    { name: "Specifications", href: "#specifications" },
    { name: "Floorplans", href: "#floor-plans" },
    { name: "Location", href: "#location" },
  ];

  return (
    <nav
      className={`w-full fixed z-20 md:z-50 transition-all duration-500 ${
        isScrolled
          ? "fixed top-0 bg-white/80 backdrop-blur-xl shadow-lg"
          : "absolute top-0 max-sm:bg-white max-sm:shadow-lg"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-18">
          
          {/* Logo */}
          <img
          src="/logo.png"
          alt="Gaur Butterfly Logo"
          className={`h-10 w-auto transition-all duration-300 ${
            isScrolled ? 'filter-none' : 'md:brightness-0 md:invert'
          }`}
        />

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-12">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`relative font-light tracking-wide transition-colors duration-300 ${
                  isScrolled
                    ? "text-gray-800 hover:text-amber-600"
                    : "text-white hover:text-amber-400"
                }`}
              >
                {link.name}

                {/* Elegant Underline Animation */}
                <span className="absolute left-0 -bottom-2 w-0 h-[1px] bg-amber-500 transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}

            {/* Premium CTA */}
            <a
              href="#enquire"
              className="ml-6 border border-amber-500 text-amber-500 px-6 py-2 uppercase text-sm tracking-widest hover:bg-amber-500 hover:text-white transition-all duration-300"
            >
              Enquire Now
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`p-2 ${
                isScrolled ? "text-black" : "text-white"
              }`}
            >
              {isMobileMenuOpen ? (
                <X className="h-7 w-7 bg-black" />
              ) : (
                <Menu className="h-8 w-8 bg-amber-500" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`md:hidden transition-all duration-500 ${
          isMobileMenuOpen
            ? "max-h-screen opacity-100"
            : "max-h-0 opacity-0 overflow-hidden"
        }`}
      >
        <div className="bg-black text-white px-8 py-8 space-y-6">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="block text-lg font-light tracking-wide hover:text-amber-400 transition-colors"
            >
              {link.name}
            </a>
          ))}

          <a
            href="#enquire"
            onClick={() => setIsMobileMenuOpen(false)}
            className="block mt-4 border border-amber-500 text-amber-500 px-6 py-3 text-center uppercase tracking-widest hover:bg-amber-500 hover:text-white transition-all"
          >
            Enquire Now
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;