import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | JSO Industries",
  description:
    "Get in touch with JSO Industries. Call (914) 419-4449 or send a message. Serving Westchester County, NYC, Fairfield County CT, and Bergen County NJ.",
};

export default function ContactPage() {
  return (
    <main className="pt-16">
      {/* ── PAGE HEADER ── */}
      <section className="border-b border-[#e8e8e8] bg-white">
        <div className="max-w-7xl mx-auto px-6 py-24 md:py-36">
          <p className="text-[10px] font-mono tracking-[0.3em] uppercase text-[#bbb] mb-6">
            Get in Touch
          </p>
          <h1 className="text-[clamp(48px,7vw,96px)] font-light text-[#111] leading-[0.88] tracking-tight">
            Let&apos;s talk about
            <br />
            your project.
          </h1>
        </div>
      </section>

      {/* ── CONTACT CONTENT ── */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-6 py-24 md:py-36">
          <div className="grid grid-cols-1 md:grid-cols-[1fr_1.6fr] gap-16 md:gap-24">

            {/* ── LEFT: INFO ── */}
            <div>
              <p className="text-[10px] font-mono tracking-[0.3em] uppercase text-[#bbb] mb-10">
                Contact Information
              </p>

              <div className="flex flex-col gap-9 mb-16">
                <div>
                  <p className="text-[10px] font-mono tracking-[0.2em] uppercase text-[#ccc] mb-2.5">
                    Phone
                  </p>
                  <a
                    href="tel:+19144194449"
                    className="text-[22px] font-light text-[#111] hover:text-[#bf2a2a] transition-colors"
                  >
                    (914) 419-4449
                  </a>
                </div>
                <div>
                  <p className="text-[10px] font-mono tracking-[0.2em] uppercase text-[#ccc] mb-2.5">
                    Email
                  </p>
                  <a
                    href="mailto:office@jsoindustries.com"
                    className="text-[22px] font-light text-[#111] hover:text-[#bf2a2a] transition-colors"
                  >
                    office@jsoindustries.com
                  </a>
                </div>
                <div>
                  <p className="text-[10px] font-mono tracking-[0.2em] uppercase text-[#ccc] mb-2.5">
                    Instagram
                  </p>
                  <a
                    href="https://instagram.com/JSO_Industries"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[22px] font-light text-[#111] hover:text-[#bf2a2a] transition-colors"
                  >
                    @JSO_Industries
                  </a>
                </div>
              </div>

              <div className="border-t border-[#e8e8e8] pt-10">
                <p className="text-[10px] font-mono tracking-[0.2em] uppercase text-[#ccc] mb-6">
                  Service Areas
                </p>
                <div className="flex flex-col gap-6">
                  {[
                    { state: "New York", areas: "Westchester County, NYC, Rockland County, Long Island" },
                    { state: "Connecticut", areas: "Fairfield County" },
                    { state: "New Jersey", areas: "Bergen County, Hudson County" },
                  ].map(({ state, areas }) => (
                    <div key={state}>
                      <p className="text-[10px] font-mono text-[#bf2a2a] tracking-[0.2em] uppercase mb-1">
                        {state}
                      </p>
                      <p className="text-[14px] text-[#666]">{areas}</p>
                    </div>
                  ))}
                </div>
                <p className="text-[12px] text-[#bbb] font-mono mt-8">
                  Licensed and fully insured in NY, CT, and NJ.
                </p>
              </div>
            </div>

            {/* ── RIGHT: FORM ── */}
            <div>
              <p className="text-[10px] font-mono tracking-[0.3em] uppercase text-[#bbb] mb-10">
                Send a Message
              </p>
              <form
                action="https://formsubmit.co/office@jsoindustries.com"
                method="POST"
                encType="multipart/form-data"
                className="flex flex-col gap-7"
              >
                <input type="hidden" name="_next" value="https://jsoindustries.com/thank-you" />
                <input type="hidden" name="_captcha" value="false" />
                <input type="hidden" name="_subject" value="New Project Inquiry — JSO Industries" />

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-7">
                  <div>
                    <label className="block text-[10px] font-mono tracking-[0.2em] uppercase text-[#aaa] mb-3">
                      Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      placeholder="Your name"
                      className="w-full bg-white border border-[#ddd] text-[#111] text-[15px] px-4 py-3.5 placeholder-[#ccc] focus:outline-none focus:border-[#999] transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] font-mono tracking-[0.2em] uppercase text-[#aaa] mb-3">
                      Phone
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      placeholder="(xxx) xxx-xxxx"
                      className="w-full bg-white border border-[#ddd] text-[#111] text-[15px] px-4 py-3.5 placeholder-[#ccc] focus:outline-none focus:border-[#999] transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[10px] font-mono tracking-[0.2em] uppercase text-[#aaa] mb-3">
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="you@email.com"
                    className="w-full bg-white border border-[#ddd] text-[#111] text-[15px] px-4 py-3.5 placeholder-[#ccc] focus:outline-none focus:border-[#999] transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-[10px] font-mono tracking-[0.2em] uppercase text-[#aaa] mb-3">
                    Inquiry Type
                  </label>
                  <select
                    name="inquiry_type"
                    className="w-full bg-white border border-[#ddd] text-[#111] text-[15px] px-4 py-3.5 focus:outline-none focus:border-[#999] transition-colors appearance-none cursor-pointer"
                  >
                    <option value="">Select a service</option>
                    <option>Real Estate Development</option>
                    <option>Ground-Up Construction</option>
                    <option>Commercial Construction</option>
                    <option>Residential Construction</option>
                    <option>Interior Renovations</option>
                    <option>Exterior Renovations</option>
                    <option>Construction Management</option>
                    <option>Owner&apos;s Representative</option>
                    <option>Preconstruction</option>
                    <option>General Inquiry</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[10px] font-mono tracking-[0.2em] uppercase text-[#aaa] mb-3">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={6}
                    placeholder="Tell us about your project..."
                    className="w-full bg-white border border-[#ddd] text-[#111] text-[15px] px-4 py-3.5 placeholder-[#ccc] focus:outline-none focus:border-[#999] transition-colors resize-none"
                  />
                </div>

                <div>
                  <label className="block text-[10px] font-mono tracking-[0.2em] uppercase text-[#aaa] mb-3">
                    Attachments{" "}
                    <span className="text-[#ccc] normal-case tracking-normal font-sans text-[11px]">
                      (plans, surveys, photos)
                    </span>
                  </label>
                  <input
                    type="file"
                    name="attachment"
                    accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
                    className="w-full text-[13px] text-[#888] file:mr-4 file:py-2.5 file:px-5 file:border file:border-[#ddd] file:bg-white file:text-[#666] file:text-[11px] file:tracking-wider file:uppercase file:cursor-pointer hover:file:bg-[#f5f5f5] file:transition-colors"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="px-10 py-4 bg-[#bf2a2a] text-white text-[12px] font-semibold tracking-[0.12em] uppercase hover:bg-[#d63031] transition-colors"
                  >
                    Send Message →
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
