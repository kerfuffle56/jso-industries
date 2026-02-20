"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Why Us", href: "#why-us" },
  { label: "About", href: "#about" },
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
          ? "bg-black/90 backdrop-blur-xl border-b border-white/[0.06] shadow-lg"
          : "bg-black/30 backdrop-blur-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-5 flex items-center">
        {/* Logo */}
        <a href="#home" className="flex-shrink-0 flex items-center gap-3">
          <div className="flex flex-col">
            <span className="text-2xl lg:text-[1.7rem] font-bold tracking-tight leading-none text-white">
              JSO
            </span>
            <span className="text-[0.6rem] lg:text-[0.65rem] font-semibold tracking-[0.2em] uppercase text-white/40">
              Industries Inc.
            </span>
          </div>
        </a>

        {/* Desktop Nav - Absolute centered */}
        <div className="hidden lg:flex items-center justify-center gap-10 absolute left-1/2 -translate-x-1/2">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-base font-medium tracking-wide text-white/70 hover:text-white transition-colors duration-200"
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
            Free Estimate
          </a>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="lg:hidden flex flex-col gap-1.5 ml-auto p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <span className={`w-6 h-0.5 rounded-full bg-white transition-all duration-300 ${mobileOpen ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`w-6 h-0.5 rounded-full bg-white transition-all duration-300 ${mobileOpen ? "opacity-0" : ""}`} />
          <span className={`w-6 h-0.5 rounded-full bg-white transition-all duration-300 ${mobileOpen ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-black/95 backdrop-blur-xl border-t border-white/[0.06]">
          <div className="flex flex-col px-6 py-6 gap-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="text-base text-white/70 font-medium hover:text-white transition-colors py-1"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-4 border-t border-white/[0.08] flex flex-col gap-3">
              <a
                href="#contact"
                onClick={() => setMobileOpen(false)}
                className="bg-accent text-white text-center px-6 py-3.5 rounded text-sm font-bold uppercase tracking-wide"
              >
                Free Estimate
              </a>
              <a
                href="https://instagram.com/JSO_Industries"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 text-sm text-white/50 font-medium hover:text-white transition-colors"
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
