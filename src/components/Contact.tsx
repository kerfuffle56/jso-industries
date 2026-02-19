export default function Contact() {
  return (
    <section id="contact" className="py-28 md:py-36 bg-[#0a0a0a]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20">
          {/* Left */}
          <div className="animate-fade-in-up">
            <p className="text-sm font-semibold text-accent uppercase tracking-widest mb-3">
              Get In Touch
            </p>
            <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight leading-tight">
              Let&apos;s
              <br />
              <span className="bg-gradient-to-r from-accent to-accent-light bg-clip-text text-transparent">
                Talk
              </span>
            </h2>
            <p className="mt-8 text-base text-white/50 leading-relaxed">
              Ready to start your next project? Get in touch for a free
              estimate.
            </p>

            {/* Contact Info */}
            <div className="mt-10 space-y-5">
              <a href="tel:9144194449" className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-xl bg-white/[0.07] border border-white/[0.1] flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-white transition-colors duration-300">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                  </svg>
                </div>
                <div>
                  <div className="text-xs text-white/40 uppercase tracking-wider font-medium">Phone</div>
                  <div className="text-base font-semibold text-white">(914) 419-4449</div>
                </div>
              </a>

              <a href="mailto:office@jsoindustries.com" className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-xl bg-white/[0.07] border border-white/[0.1] flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-white transition-colors duration-300">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                  </svg>
                </div>
                <div>
                  <div className="text-xs text-white/40 uppercase tracking-wider font-medium">Email</div>
                  <div className="text-base font-semibold text-white">office@jsoindustries.com</div>
                </div>
              </a>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-white/[0.07] border border-white/[0.1] flex items-center justify-center text-accent">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                  </svg>
                </div>
                <div>
                  <div className="text-xs text-white/40 uppercase tracking-wider font-medium">Serving</div>
                  <div className="text-base font-semibold text-white leading-relaxed">
                    Westchester County, NY<br />
                    Fairfield County, CT<br />
                    New York, NY
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right - Contact Form */}
          <div className="animate-fade-in-up-delay-2">
            <form
              action="https://formsubmit.co/office@jsoindustries.com"
              method="POST"
              className="space-y-5"
            >
              <input type="text" name="_honey" className="hidden" />
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_next" value="https://jsoindustries.com/thank-you" />

              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="name" className="block text-xs font-medium text-white/50 mb-2 uppercase tracking-wider">Name</label>
                  <input type="text" id="name" name="name" required className="w-full px-4 py-3.5 bg-white/[0.07] rounded border border-white/[0.1] focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all text-white placeholder:text-white/30 text-sm" />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-xs font-medium text-white/50 mb-2 uppercase tracking-wider">Phone</label>
                  <input type="tel" id="phone" name="phone" className="w-full px-4 py-3.5 bg-white/[0.07] rounded border border-white/[0.1] focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all text-white placeholder:text-white/30 text-sm" />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-xs font-medium text-white/50 mb-2 uppercase tracking-wider">Email</label>
                <input type="email" id="email" name="email" required className="w-full px-4 py-3.5 bg-white/[0.07] rounded border border-white/[0.1] focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all text-white placeholder:text-white/30 text-sm" />
              </div>

              <div>
                <label htmlFor="service" className="block text-xs font-medium text-white/50 mb-2 uppercase tracking-wider">Service</label>
                <select id="service" name="service" className="w-full px-4 py-3.5 bg-white/[0.07] rounded border border-white/[0.1] focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all text-white text-sm">
                  <option value="" className="bg-[#1a1a1a]">Select a service...</option>
                  <option value="commercial" className="bg-[#1a1a1a]">Commercial Construction</option>
                  <option value="residential" className="bg-[#1a1a1a]">Residential Construction</option>
                  <option value="renovations" className="bg-[#1a1a1a]">Renovations</option>
                  <option value="civil" className="bg-[#1a1a1a]">Civil Construction</option>
                  <option value="project-management" className="bg-[#1a1a1a]">Project Management</option>
                  <option value="specialty-trades" className="bg-[#1a1a1a]">Specialty Trades</option>
                  <option value="other" className="bg-[#1a1a1a]">Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-xs font-medium text-white/50 mb-2 uppercase tracking-wider">Message</label>
                <textarea id="message" name="message" rows={5} required className="w-full px-4 py-3.5 bg-white/[0.07] rounded border border-white/[0.1] focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all text-white placeholder:text-white/30 resize-none text-sm" />
              </div>

              <button type="submit" className="w-full bg-accent hover:bg-accent/90 text-white px-8 py-4 rounded text-base font-bold tracking-wide uppercase transition-all duration-300 shadow-lg shadow-accent/20 hover:shadow-xl hover:shadow-accent/25">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
