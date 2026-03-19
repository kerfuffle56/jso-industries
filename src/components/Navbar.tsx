"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Why JSO", href: "#why-us" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/95 backdrop-blur-xl border-b border-black/[0.07] shadow-sm"
          : "bg-black/25 backdrop-blur-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-5 flex items-center">
        {/* Logo */}
        <a href="#home" className="flex-shrink-0 flex items-center gap-3">
          <div className="flex flex-col">
            <span className={`text-xl lg:text-2xl font-bold tracking-tight leading-none transition-colors duration-300 ${scrolled ? "text-gray-900" : "text-white"}`}>
              JSO Industries
            </span>
            <span className={`text-[0.6rem] lg:text-[0.65rem] font-semibold tracking-[0.2em] uppercase transition-colors duration-300 ${scrolled ? "text-gray-400" : "text-white/40"}`}>
              Development &amp; Contracting
            </span>
          </div>
        </a>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center justify-center gap-10 absolute left-1/2 -translate-x-1/2">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`text-base font-medium tracking-wide transition-colors duration-200 hover:text-accent ${scrolled ? "text-gray-600 hover:text-accent" : "text-white/70 hover:text-white"}`}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Right Actions */}
        <div className="hidden lg:flex items-center gap-5 flex-shrink-0 ml-auto">
          <a
            href="https://instagram.com/JSO_Industries"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="transition-all duration-200 hover:scale-110"
          >
            <Image
              src="/logo-instagram.png"
              alt="Instagram"
              width={36}
              height={36}
              className="w-9 h-9 rounded-full"
            />
          </a>
          <a
            href="#contact"
            className="px-6 py-2.5 rounded text-sm font-bold uppercase tracking-wide bg-accent text-white hover:bg-accent/90 shadow-md shadow-accent/20 transition-all duration-300"
          >
            Contact Us
          </a>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="lg:hidden flex flex-col gap-1.5 ml-auto p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <span className={`w-6 h-0.5 rounded-full transition-all duration-300 ${scrolled ? "bg-gray-900" : "bg-white"} ${mobileOpen ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`w-6 h-0.5 rounded-full transition-all duration-300 ${scrolled ? "bg-gray-900" : "bg-white"} ${mobileOpen ? "opacity-0" : ""}`} />
          <span className={`w-6 h-0.5 rounded-full transition-all duration-300 ${scrolled ? "bg-gray-900" : "bg-white"} ${mobileOpen ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-white/98 backdrop-blur-xl border-t border-black/[0.06]">
          <div className="flex flex-col px-6 py-6 gap-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="text-base text-gray-700 font-medium hover:text-accent transition-colors py-1"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-4 border-t border-black/[0.06] flex flex-col gap-3">
              <a
                href="#contact"
                onClick={() => setMobileOpen(false)}
                className="bg-accent text-white text-center px-6 py-3.5 rounded text-sm font-bold uppercase tracking-wide"
              >
                Contact Us
              </a>
              <a
                href="https://instagram.com/JSO_Industries"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 text-sm text-gray-500 font-medium hover:text-accent transition-colors"
              >
                <Image
                  src="/logo-instagram.png"
                  alt="Instagram"
                  width={24}
                  height={24}
                  className="w-6 h-6 rounded-full"
                />
                @JSO_Industries
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
