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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="w-full px-10 lg:px-16 py-6 flex items-center">
        {/* Logo - Left */}
        <a href="#home" className="flex-shrink-0 flex items-center gap-4">
          {/* American Flag Icon - Color Matched */}
          <svg viewBox="0 0 60 40" className="w-14 h-10 lg:w-16 lg:h-12">
            {/* Light gray base */}
            <rect width="60" height="40" fill="#d1d5db" />
            {/* Dark gray Stripes */}
            <rect y="0" width="60" height="3.08" fill="#6b7280" />
            <rect y="6.16" width="60" height="3.08" fill="#6b7280" />
            <rect y="12.32" width="60" height="3.08" fill="#6b7280" />
            <rect y="18.48" width="60" height="3.08" fill="#6b7280" />
            <rect y="24.64" width="60" height="3.08" fill="#6b7280" />
            <rect y="30.8" width="60" height="3.08" fill="#6b7280" />
            <rect y="36.96" width="60" height="3.08" fill="#6b7280" />
            {/* Canton */}
            <rect width="24" height="21.6" fill="#374151" />
            {/* 50 Stars - 9 rows alternating 6 and 5 */}
            {/* Row 1 - 6 stars */}
            <circle cx="2" cy="1.2" r="0.8" fill="white" /><circle cx="6" cy="1.2" r="0.8" fill="white" /><circle cx="10" cy="1.2" r="0.8" fill="white" /><circle cx="14" cy="1.2" r="0.8" fill="white" /><circle cx="18" cy="1.2" r="0.8" fill="white" /><circle cx="22" cy="1.2" r="0.8" fill="white" />
            {/* Row 2 - 5 stars offset */}
            <circle cx="4" cy="3.6" r="0.8" fill="white" /><circle cx="8" cy="3.6" r="0.8" fill="white" /><circle cx="12" cy="3.6" r="0.8" fill="white" /><circle cx="16" cy="3.6" r="0.8" fill="white" /><circle cx="20" cy="3.6" r="0.8" fill="white" />
            {/* Row 3 - 6 stars */}
            <circle cx="2" cy="6" r="0.8" fill="white" /><circle cx="6" cy="6" r="0.8" fill="white" /><circle cx="10" cy="6" r="0.8" fill="white" /><circle cx="14" cy="6" r="0.8" fill="white" /><circle cx="18" cy="6" r="0.8" fill="white" /><circle cx="22" cy="6" r="0.8" fill="white" />
            {/* Row 4 - 5 stars offset */}
            <circle cx="4" cy="8.4" r="0.8" fill="white" /><circle cx="8" cy="8.4" r="0.8" fill="white" /><circle cx="12" cy="8.4" r="0.8" fill="white" /><circle cx="16" cy="8.4" r="0.8" fill="white" /><circle cx="20" cy="8.4" r="0.8" fill="white" />
            {/* Row 5 - 6 stars */}
            <circle cx="2" cy="10.8" r="0.8" fill="white" /><circle cx="6" cy="10.8" r="0.8" fill="white" /><circle cx="10" cy="10.8" r="0.8" fill="white" /><circle cx="14" cy="10.8" r="0.8" fill="white" /><circle cx="18" cy="10.8" r="0.8" fill="white" /><circle cx="22" cy="10.8" r="0.8" fill="white" />
            {/* Row 6 - 5 stars offset */}
            <circle cx="4" cy="13.2" r="0.8" fill="white" /><circle cx="8" cy="13.2" r="0.8" fill="white" /><circle cx="12" cy="13.2" r="0.8" fill="white" /><circle cx="16" cy="13.2" r="0.8" fill="white" /><circle cx="20" cy="13.2" r="0.8" fill="white" />
            {/* Row 7 - 6 stars */}
            <circle cx="2" cy="15.6" r="0.8" fill="white" /><circle cx="6" cy="15.6" r="0.8" fill="white" /><circle cx="10" cy="15.6" r="0.8" fill="white" /><circle cx="14" cy="15.6" r="0.8" fill="white" /><circle cx="18" cy="15.6" r="0.8" fill="white" /><circle cx="22" cy="15.6" r="0.8" fill="white" />
            {/* Row 8 - 5 stars offset */}
            <circle cx="4" cy="18" r="0.8" fill="white" /><circle cx="8" cy="18" r="0.8" fill="white" /><circle cx="12" cy="18" r="0.8" fill="white" /><circle cx="16" cy="18" r="0.8" fill="white" /><circle cx="20" cy="18" r="0.8" fill="white" />
            {/* Row 9 - 6 stars */}
            <circle cx="2" cy="20.4" r="0.8" fill="white" /><circle cx="6" cy="20.4" r="0.8" fill="white" /><circle cx="10" cy="20.4" r="0.8" fill="white" /><circle cx="14" cy="20.4" r="0.8" fill="white" /><circle cx="18" cy="20.4" r="0.8" fill="white" /><circle cx="22" cy="20.4" r="0.8" fill="white" />
          </svg>
          {/* Text */}
          <div className="flex flex-col">
            <span className={`text-2xl lg:text-3xl font-bold tracking-tight leading-none ${
              scrolled ? "text-primary-dark" : "text-white"
            }`}>
              JSO
            </span>
            <span className={`text-xs lg:text-sm font-medium tracking-widest uppercase ${
              scrolled ? "text-gray-mid" : "text-white/60"
            }`}>
              Industries Inc.
            </span>
          </div>
        </a>

        {/* Desktop Nav - Centered */}
        <div className="hidden lg:flex items-center justify-center flex-1 gap-14">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`text-lg font-medium transition-colors hover:text-accent ${
                scrolled ? "text-gray-dark" : "text-white/90"
              }`}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Right - Actions */}
        <div className="hidden lg:flex items-center gap-8 flex-shrink-0">
          <a
            href="https://instagram.com/JSO_Industries"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="transition-all hover:scale-105"
          >
            <Image
              src="/logo-instagram.png"
              alt="Instagram"
              width={48}
              height={48}
              className="w-12 h-12 rounded-full shadow-lg"
            />
          </a>
          <a
            href="tel:9144194449"
            className="bg-accent hover:bg-primary-light text-white px-8 py-4 rounded-none text-lg font-semibold transition-all hover:shadow-lg"
          >
            (914) 419-4449
          </a>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="lg:hidden flex flex-col gap-2 ml-auto"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <span
            className={`w-8 h-0.5 transition-all ${
              scrolled ? "bg-primary-dark" : "bg-white"
            } ${mobileOpen ? "rotate-45 translate-y-2.5" : ""}`}
          />
          <span
            className={`w-8 h-0.5 transition-all ${
              scrolled ? "bg-primary-dark" : "bg-white"
            } ${mobileOpen ? "opacity-0" : ""}`}
          />
          <span
            className={`w-8 h-0.5 transition-all ${
              scrolled ? "bg-primary-dark" : "bg-white"
            } ${mobileOpen ? "-rotate-45 -translate-y-2.5" : ""}`}
          />
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-white shadow-xl border-t">
          <div className="flex flex-col px-8 py-6 gap-5">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="text-lg text-gray-dark font-medium hover:text-accent transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href="tel:9144194449"
              className="bg-accent text-white text-center px-6 py-4 rounded-none text-lg font-semibold"
            >
              Call (914) 419-4449
            </a>
            <a
              href="https://instagram.com/JSO_Industries"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-lg text-gray-dark font-medium hover:text-accent transition-colors"
            >
              <Image
                src="/logo-instagram.png"
                alt="Instagram"
                width={32}
                height={32}
                className="w-8 h-8 rounded-full"
              />
              @JSO_Industries
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
