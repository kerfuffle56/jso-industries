import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-primary-dark text-white/60 py-16">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-4 mb-6">
              {/* American Flag Icon */}
              <svg viewBox="0 0 60 40" className="w-12 h-8">
                <rect width="60" height="40" fill="#d1d5db" />
                <rect y="0" width="60" height="3.08" fill="#6b7280" />
                <rect y="6.16" width="60" height="3.08" fill="#6b7280" />
                <rect y="12.32" width="60" height="3.08" fill="#6b7280" />
                <rect y="18.48" width="60" height="3.08" fill="#6b7280" />
                <rect y="24.64" width="60" height="3.08" fill="#6b7280" />
                <rect y="30.8" width="60" height="3.08" fill="#6b7280" />
                <rect y="36.96" width="60" height="3.08" fill="#6b7280" />
                <rect width="24" height="21.6" fill="#374151" />
                {/* 50 Stars - 9 rows alternating 6 and 5 */}
                <circle cx="2" cy="1.2" r="0.8" fill="white" /><circle cx="6" cy="1.2" r="0.8" fill="white" /><circle cx="10" cy="1.2" r="0.8" fill="white" /><circle cx="14" cy="1.2" r="0.8" fill="white" /><circle cx="18" cy="1.2" r="0.8" fill="white" /><circle cx="22" cy="1.2" r="0.8" fill="white" />
                <circle cx="4" cy="3.6" r="0.8" fill="white" /><circle cx="8" cy="3.6" r="0.8" fill="white" /><circle cx="12" cy="3.6" r="0.8" fill="white" /><circle cx="16" cy="3.6" r="0.8" fill="white" /><circle cx="20" cy="3.6" r="0.8" fill="white" />
                <circle cx="2" cy="6" r="0.8" fill="white" /><circle cx="6" cy="6" r="0.8" fill="white" /><circle cx="10" cy="6" r="0.8" fill="white" /><circle cx="14" cy="6" r="0.8" fill="white" /><circle cx="18" cy="6" r="0.8" fill="white" /><circle cx="22" cy="6" r="0.8" fill="white" />
                <circle cx="4" cy="8.4" r="0.8" fill="white" /><circle cx="8" cy="8.4" r="0.8" fill="white" /><circle cx="12" cy="8.4" r="0.8" fill="white" /><circle cx="16" cy="8.4" r="0.8" fill="white" /><circle cx="20" cy="8.4" r="0.8" fill="white" />
                <circle cx="2" cy="10.8" r="0.8" fill="white" /><circle cx="6" cy="10.8" r="0.8" fill="white" /><circle cx="10" cy="10.8" r="0.8" fill="white" /><circle cx="14" cy="10.8" r="0.8" fill="white" /><circle cx="18" cy="10.8" r="0.8" fill="white" /><circle cx="22" cy="10.8" r="0.8" fill="white" />
                <circle cx="4" cy="13.2" r="0.8" fill="white" /><circle cx="8" cy="13.2" r="0.8" fill="white" /><circle cx="12" cy="13.2" r="0.8" fill="white" /><circle cx="16" cy="13.2" r="0.8" fill="white" /><circle cx="20" cy="13.2" r="0.8" fill="white" />
                <circle cx="2" cy="15.6" r="0.8" fill="white" /><circle cx="6" cy="15.6" r="0.8" fill="white" /><circle cx="10" cy="15.6" r="0.8" fill="white" /><circle cx="14" cy="15.6" r="0.8" fill="white" /><circle cx="18" cy="15.6" r="0.8" fill="white" /><circle cx="22" cy="15.6" r="0.8" fill="white" />
                <circle cx="4" cy="18" r="0.8" fill="white" /><circle cx="8" cy="18" r="0.8" fill="white" /><circle cx="12" cy="18" r="0.8" fill="white" /><circle cx="16" cy="18" r="0.8" fill="white" /><circle cx="20" cy="18" r="0.8" fill="white" />
                <circle cx="2" cy="20.4" r="0.8" fill="white" /><circle cx="6" cy="20.4" r="0.8" fill="white" /><circle cx="10" cy="20.4" r="0.8" fill="white" /><circle cx="14" cy="20.4" r="0.8" fill="white" /><circle cx="18" cy="20.4" r="0.8" fill="white" /><circle cx="22" cy="20.4" r="0.8" fill="white" />
              </svg>
              <div className="flex flex-col">
                <span className="text-xl font-bold text-white leading-none">JSO</span>
                <span className="text-xs font-medium tracking-widest uppercase text-white/60">Industries Inc.</span>
              </div>
            </div>
            <p className="text-sm leading-relaxed max-w-sm">
              Licensed home improvement contractor and fully insured
              construction company serving the New York area.
            </p>
            <a
              href="https://instagram.com/JSO_Industries"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 mt-6 text-sm hover:text-white transition-colors"
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

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-6 uppercase tracking-wide text-sm">Links</h4>
            <ul className="space-y-3 text-sm">
              {[
                { label: "Home", href: "#home" },
                { label: "Services", href: "#services" },
                { label: "About", href: "#about" },
                { label: "Contact", href: "#contact" },
              ].map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="hover:text-white transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-6 uppercase tracking-wide text-sm">Contact</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="tel:9144194449" className="hover:text-white transition-colors">
                  (914) 419-4449
                </a>
              </li>
              <li>
                <a href="mailto:info@jsoindustries.com" className="hover:text-white transition-colors">
                  info@jsoindustries.com
                </a>
              </li>
              <li>New York, NY</li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
          <p>&copy; {new Date().getFullYear()} JSO Industries Inc.</p>
          <p>Licensed &amp; Fully Insured</p>
        </div>
      </div>
    </footer>
  );
}
