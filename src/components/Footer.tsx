import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-primary-dark text-white/50 py-16">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-5">
              <div className="flex flex-col">
                <span className="text-xl font-bold text-white leading-none">
                  JSO
                </span>
                <span className="text-[0.6rem] font-semibold tracking-[0.2em] uppercase text-white/40">
                  Industries Inc.
                </span>
              </div>
            </div>
            <p className="text-sm leading-relaxed max-w-sm">
              Licensed home improvement contractor and fully insured
              construction company serving NY and CT.
            </p>
            <a
              href="https://instagram.com/JSO_Industries"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 mt-5 text-sm hover:text-white transition-colors duration-200"
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
            <h4 className="text-white font-semibold mb-5 text-xs uppercase tracking-wider">
              Links
            </h4>
            <ul className="space-y-3 text-sm">
              {[
                { label: "Home", href: "#home" },
                { label: "Services", href: "#services" },
                { label: "About", href: "#about" },
                { label: "Contact", href: "#contact" },
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="hover:text-white transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-5 text-xs uppercase tracking-wider">
              Contact
            </h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href="tel:9144194449"
                  className="hover:text-white transition-colors duration-200"
                >
                  (914) 419-4449
                </a>
              </li>
              <li>
                <a
                  href="mailto:office@jsoindustries.com"
                  className="hover:text-white transition-colors duration-200"
                >
                  office@jsoindustries.com
                </a>
              </li>
              <li>Westchester County, NY</li>
              <li>Fairfield County, CT</li>
              <li>New York, NY</li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-14 pt-8 border-t border-white/[0.06] flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white/35">
          <p>&copy; {new Date().getFullYear()} JSO Industries Inc.</p>
          <p>Licensed & Fully Insured in NY and CT</p>
        </div>
      </div>
    </footer>
  );
}
