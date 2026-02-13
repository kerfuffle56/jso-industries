"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Why Us", href: "#why-us" },
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
          ? "bg-white/90 backdrop-blur-xl shadow-[0_1px_3px_rgba(0,0,0,0.08)]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-5 flex items-center">
        {/* Logo */}
        <a href="#home" className="flex-shrink-0 flex items-center gap-3">
          <div className="flex flex-col">
            <span
              className={`text-2xl lg:text-[1.7rem] font-bold tracking-tight leading-none ${
                scrolled ? "text-primary-dark" : "text-white"
              }`}
            >
              JSO
            </span>
            <span
              className={`text-[0.6rem] lg:text-[0.65rem] font-semibold tracking-[0.2em] uppercase ${
                scrolled ? "text-gray-mid" : "text-white/50"
              }`}
            >
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
              className={`text-base font-medium tracking-wide transition-colors duration-200 hover:text-accent ${
                scrolled ? "text-gray-dark" : "text-white/80"
              }`}
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
            href="tel:9144194449"
            className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
              scrolled
                ? "bg-accent text-white hover:bg-accent/90 shadow-md shadow-accent/20"
                : "bg-white/10 text-white border border-white/20 hover:bg-white/20"
            }`}
          >
            (914) 419-4449
          </a>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="lg:hidden flex flex-col gap-1.5 ml-auto p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <span
            className={`w-6 h-0.5 rounded-full transition-all duration-300 ${
              scrolled ? "bg-primary-dark" : "bg-white"
            } ${mobileOpen ? "rotate-45 translate-y-2" : ""}`}
          />
          <span
            className={`w-6 h-0.5 rounded-full transition-all duration-300 ${
              scrolled ? "bg-primary-dark" : "bg-white"
            } ${mobileOpen ? "opacity-0" : ""}`}
          />
          <span
            className={`w-6 h-0.5 rounded-full transition-all duration-300 ${
              scrolled ? "bg-primary-dark" : "bg-white"
            } ${mobileOpen ? "-rotate-45 -translate-y-2" : ""}`}
          />
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-white/95 backdrop-blur-xl border-t border-border">
          <div className="flex flex-col px-6 py-6 gap-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="text-base text-gray-dark font-medium hover:text-accent transition-colors py-1"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-4 border-t border-border flex flex-col gap-3">
              <a
                href="tel:9144194449"
                className="bg-accent text-white text-center px-6 py-3.5 rounded-full text-sm font-semibold"
              >
                Call (914) 419-4449
              </a>
              <a
                href="https://instagram.com/JSO_Industries"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 text-sm text-gray-dark font-medium hover:text-accent transition-colors"
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
