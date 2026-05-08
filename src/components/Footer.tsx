import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-[#1e1e1e] bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-6 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="md:col-span-2">
            <p className="text-[13px] font-semibold tracking-[0.18em] uppercase text-white mb-1">
              JSO Industries
            </p>
            <p className="text-[9px] font-mono text-[#444] tracking-[0.22em] uppercase mb-6">
              Develop · Build · Own
            </p>
            <p className="text-[14px] text-[#666] leading-relaxed max-w-sm">
              Real estate development and general contracting. We acquire,
              entitle, and build our own projects — and bring that same
              developer&apos;s eye to yours.
            </p>
            <p className="text-[12px] text-[#444] mt-6 font-mono tracking-wider">
              Licensed & Insured — NY · CT · NJ
            </p>
          </div>

          <div>
            <p className="text-[10px] font-mono tracking-[0.25em] uppercase text-[#444] mb-6">
              Navigation
            </p>
            <div className="flex flex-col gap-3">
              {[
                { href: "/", label: "Home" },
                { href: "/about", label: "About" },
                { href: "/services", label: "Services" },
                { href: "/contact", label: "Contact" },
              ].map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  className="text-[14px] text-[#777] hover:text-white transition-colors"
                >
                  {l.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <p className="text-[10px] font-mono tracking-[0.25em] uppercase text-[#444] mb-6">
              Contact
            </p>
            <div className="flex flex-col gap-3">
              <a
                href="tel:+19144194449"
                className="text-[14px] text-[#777] hover:text-white transition-colors"
              >
                (914) 419-4449
              </a>
              <a
                href="mailto:office@jsoindustries.com"
                className="text-[14px] text-[#777] hover:text-white transition-colors"
              >
                office@jsoindustries.com
              </a>
              <a
                href="https://instagram.com/JSO_Industries"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[14px] text-[#777] hover:text-white transition-colors"
              >
                @JSO_Industries
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-[#1e1e1e] mt-16 pt-8 flex flex-col sm:flex-row justify-between gap-4">
          <p className="text-[12px] text-[#3a3a3a]">
            © {new Date().getFullYear()} JSO Industries Inc. All rights reserved.
          </p>
          <p className="text-[12px] text-[#3a3a3a]">
            Westchester · NYC · Fairfield County · Bergen County
          </p>
        </div>
      </div>
    </footer>
  );
}
