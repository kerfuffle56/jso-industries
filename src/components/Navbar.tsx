"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const NAV_LINKS = [
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-[#e8e8e8]">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="flex flex-col leading-none" onClick={() => setOpen(false)}>
          <span className="text-[13px] font-semibold tracking-[0.18em] text-[#111] uppercase">
            JSO Industries
          </span>
          <span className="text-[9px] font-mono text-[#aaa] tracking-[0.22em] uppercase mt-0.5">
            Develop · Build · Own
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={`text-[12px] tracking-[0.12em] uppercase font-medium transition-colors duration-150 ${
                pathname === l.href ? "text-[#111]" : "text-[#999] hover:text-[#111]"
              }`}
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="ml-2 text-[12px] tracking-[0.12em] uppercase font-medium px-5 py-2.5 bg-[#bf2a2a] text-white hover:bg-[#d63031] transition-colors duration-150"
          >
            Get in Touch
          </Link>
        </nav>

        <button
          className="md:hidden flex flex-col justify-center gap-[5px] w-8 h-8"
          onClick={() => setOpen(!open)}
          aria-label="Toggle navigation"
        >
          <span className={`block h-px w-6 bg-[#111] transition-all duration-200 origin-center ${open ? "rotate-45 translate-y-[5px]" : ""}`} />
          <span className={`block h-px w-6 bg-[#111] transition-all duration-200 ${open ? "opacity-0" : ""}`} />
          <span className={`block h-px w-6 bg-[#111] transition-all duration-200 origin-center ${open ? "-rotate-45 -translate-y-[5px]" : ""}`} />
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-[#e8e8e8] bg-white">
          {NAV_LINKS.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block px-6 py-4 text-[12px] tracking-[0.12em] uppercase text-[#999] hover:text-[#111] border-b border-[#e8e8e8] transition-colors"
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={() => setOpen(false)}
            className="block px-6 py-4 text-[12px] tracking-[0.12em] uppercase text-white bg-[#bf2a2a]"
          >
            Get in Touch →
          </Link>
        </div>
      )}
    </header>
  );
}
