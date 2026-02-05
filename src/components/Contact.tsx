"use client";

import { useEffect, useRef, useState } from "react";

export default function Contact() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="contact" className="py-32 md:py-40 bg-white" ref={sectionRef}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left */}
          <div className={visible ? "animate-fade-in-up" : "opacity-0"}>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-dark tracking-tight leading-tight">
              LET&apos;S
              <br />
              <span className="text-accent">TALK</span>
            </h2>
            <div className="mt-4 w-20 h-1 bg-accent" />
            <p className="mt-8 text-lg text-gray-mid">
              Ready to start your next project? Get in touch for a free estimate.
            </p>

            {/* Contact Info */}
            <div className="mt-12 space-y-6">
              <a href="tel:9144194449" className="flex items-center gap-4 group">
                <div className="w-14 h-14 bg-gray-light flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-white transition-colors">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <div className="text-sm text-gray-mid uppercase tracking-wide">Phone</div>
                  <div className="text-lg font-semibold text-primary-dark">(914) 419-4449</div>
                </div>
              </a>

              <a href="mailto:info@jsoindustries.com" className="flex items-center gap-4 group">
                <div className="w-14 h-14 bg-gray-light flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-white transition-colors">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <div className="text-sm text-gray-mid uppercase tracking-wide">Email</div>
                  <div className="text-lg font-semibold text-primary-dark">info@jsoindustries.com</div>
                </div>
              </a>

              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-gray-light flex items-center justify-center text-accent">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <div className="text-sm text-gray-mid uppercase tracking-wide">Location</div>
                  <div className="text-lg font-semibold text-primary-dark">New York, NY</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right - Contact Form */}
          <div className={visible ? "animate-fade-in-up-delay-2" : "opacity-0"}>
            <form
              action="https://formsubmit.co/info@jsoindustries.com"
              method="POST"
              className="space-y-6"
            >
              <input type="text" name="_honey" className="hidden" />
              <input type="hidden" name="_captcha" value="false" />

              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-dark mb-2 uppercase tracking-wide">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-4 bg-gray-light border-0 focus:ring-2 focus:ring-accent outline-none transition-all text-primary-dark"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-dark mb-2 uppercase tracking-wide">
                    Phone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="w-full px-4 py-4 bg-gray-light border-0 focus:ring-2 focus:ring-accent outline-none transition-all text-primary-dark"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-dark mb-2 uppercase tracking-wide">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-4 bg-gray-light border-0 focus:ring-2 focus:ring-accent outline-none transition-all text-primary-dark"
                />
              </div>

              <div>
                <label htmlFor="service" className="block text-sm font-medium text-gray-dark mb-2 uppercase tracking-wide">
                  Service
                </label>
                <select
                  id="service"
                  name="service"
                  className="w-full px-4 py-4 bg-gray-light border-0 focus:ring-2 focus:ring-accent outline-none transition-all text-primary-dark"
                >
                  <option value="">Select a service...</option>
                  <option value="commercial">Commercial Construction</option>
                  <option value="residential">Residential Construction</option>
                  <option value="home-improvement">Home Improvement</option>
                  <option value="renovation">Interior Renovation</option>
                  <option value="exterior">Exterior &amp; Structural</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-dark mb-2 uppercase tracking-wide">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  className="w-full px-4 py-4 bg-gray-light border-0 focus:ring-2 focus:ring-accent outline-none transition-all text-primary-dark resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-accent hover:bg-primary-dark text-white px-8 py-5 text-lg font-semibold transition-all uppercase tracking-wide"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
