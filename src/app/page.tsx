"use client";

import Link from "next/link";

const STATS = [
  { value: "10+", label: "Years in Construction" },
  { value: "3", label: "States Licensed" },
  { value: "9", label: "Service Lines" },
  { value: "1", label: "Principal on Every Project" },
];

const SERVICES = [
  { n: "01", name: "Real Estate Development" },
  { n: "02", name: "Ground-Up Construction" },
  { n: "03", name: "Commercial Construction" },
  { n: "04", name: "Residential Construction" },
  { n: "05", name: "Interior Renovations" },
  { n: "06", name: "Exterior Renovations" },
  { n: "07", name: "Construction Management" },
  { n: "08", name: "Owner's Representative" },
  { n: "09", name: "Preconstruction" },
];

const AREAS = [
  {
    state: "New York",
    places: ["Westchester County", "New York City", "Rockland County", "Long Island"],
  },
  { state: "Connecticut", places: ["Fairfield County"] },
  { state: "New Jersey", places: ["Bergen County", "Hudson County"] },
];

export default function HomePage() {
  return (
    <main>
      {/* ── HERO ── */}
      <section className="relative h-screen min-h-[640px] flex items-end overflow-hidden bg-[#0d0d0d]">
        <video
          autoPlay muted loop playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-30"
          src="https://assets.mixkit.co/videos/9686/9686-720.mp4"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d0d] via-[#0d0d0d]/50 to-transparent" />
        {/* red top bar */}
        <div className="absolute top-0 left-0 right-0 h-[3px] bg-[#bf2a2a]" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 pb-20 md:pb-28 w-full">
          <p className="fade-up text-[11px] font-mono tracking-[0.3em] uppercase text-[#bf2a2a] mb-8">
            JSO Industries / Est. 2025
          </p>
          <h1 className="fade-up-1 text-[clamp(60px,10vw,128px)] font-light leading-[0.88] tracking-tight text-white mb-8">
            DEVELOP.
            <br />
            BUILD.
            <br />
            OWN.
          </h1>
          <p className="fade-up-2 text-[16px] md:text-[18px] text-[#aaa] font-light leading-relaxed max-w-lg mb-10">
            We acquire, entitle, and build our own projects. We bring that same
            developer&apos;s eye to yours.
          </p>
          <div className="fade-up-3 flex flex-wrap gap-4">
            <Link
              href="/services"
              className="px-8 py-3.5 bg-[#bf2a2a] text-white text-[12px] font-semibold tracking-[0.12em] uppercase hover:bg-[#d63031] transition-colors"
            >
              Our Services
            </Link>
            <Link
              href="/contact"
              className="px-8 py-3.5 border border-[#555] text-white text-[12px] font-semibold tracking-[0.12em] uppercase hover:border-white transition-colors"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </section>

      {/* ── STATS BAR ── */}
      <section className="border-b border-[#e8e8e8] bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-y md:divide-y-0 divide-[#e8e8e8]">
            {STATS.map((s) => (
              <div key={s.label} className="px-8 py-10 group">
                <p className="text-[40px] md:text-[48px] font-light text-[#bf2a2a] tracking-tight leading-none mb-2">
                  {s.value}
                </p>
                <p className="text-[11px] text-[#999] uppercase tracking-[0.12em]">
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ABOUT TEASER ── */}
      <section className="bg-white border-b border-[#e8e8e8]">
        <div className="max-w-7xl mx-auto px-6 py-24 md:py-36">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
            <div>
              {/* red rule + label */}
              <div className="flex items-center gap-3 mb-8">
                <div className="w-8 h-[2px] bg-[#bf2a2a]" />
                <p className="text-[10px] font-mono tracking-[0.3em] uppercase text-[#bf2a2a]">
                  About
                </p>
              </div>
              <h2 className="text-[clamp(30px,3.5vw,48px)] font-light text-[#111] leading-tight mb-8">
                A developer who builds.
                <br />A builder who develops.
              </h2>
              <p className="text-[16px] text-[#555] leading-relaxed mb-6">
                JSO Industries is a vertically integrated real estate development
                and general contracting firm based in Westchester County, NY.
                Founded by Jonathan Oronzio, a decade of field experience means
                we don&apos;t just plan projects — we execute them.
              </p>
              <p className="text-[16px] text-[#555] leading-relaxed mb-10">
                No middlemen. No markups on the builder. One principal on every
                project, every time.
              </p>
              <Link
                href="/about"
                className="inline-flex items-center gap-3 text-[12px] tracking-[0.12em] uppercase text-[#bf2a2a] font-semibold hover:gap-5 transition-all"
              >
                Learn More <span>→</span>
              </Link>
            </div>

            <div className="border border-[#e8e8e8]">
              <div className="px-8 md:px-10 pt-8 md:pt-10 pb-4 bg-[#bf2a2a]">
                <p className="text-[10px] font-mono tracking-[0.3em] uppercase text-white/70">
                  Our Commitments
                </p>
              </div>
              {[
                ["Radical Transparency", "You know the numbers. All of them."],
                ["Under Budget", "We treat your money like our own."],
                ["Ahead of Schedule", "We set timelines we can actually hit."],
                ["One Point of Contact", "Jonathan on every project, period."],
              ].map(([title, desc]) => (
                <div key={title} className="px-8 md:px-10 py-6 border-t border-[#e8e8e8]">
                  <p className="text-[14px] font-semibold text-[#111] mb-1">{title}</p>
                  <p className="text-[13px] text-[#888]">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section className="bg-[#f7f7f5] border-b border-[#e8e8e8]">
        <div className="max-w-7xl mx-auto px-6 py-24 md:py-36">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-[2px] bg-[#bf2a2a]" />
                <p className="text-[10px] font-mono tracking-[0.3em] uppercase text-[#bf2a2a]">
                  Services
                </p>
              </div>
              <h2 className="text-[clamp(30px,3.5vw,48px)] font-light text-[#111] leading-tight">
                Full-service, start to finish.
              </h2>
            </div>
            <Link
              href="/services"
              className="text-[12px] tracking-[0.12em] uppercase text-[#bf2a2a] font-semibold hover:underline shrink-0"
            >
              View All →
            </Link>
          </div>

          <div className="border border-[#e0e0e0] bg-white">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
              {SERVICES.map((s, i) => (
                <div
                  key={s.n}
                  className={`p-8 group hover:bg-[#bf2a2a] transition-colors duration-200 border-[#e8e8e8] cursor-default ${
                    i % 3 !== 2 ? "md:border-r" : ""
                  } ${i < 6 ? "border-b" : ""} ${
                    i % 2 === 0 ? "sm:border-r md:border-r-0" : ""
                  } ${i < 8 ? "sm:border-b" : ""}`}
                >
                  <p className="text-[11px] font-mono text-[#bf2a2a] group-hover:text-white/70 mb-4 tracking-wider transition-colors">
                    {s.n}
                  </p>
                  <p className="text-[15px] font-medium text-[#111] group-hover:text-white transition-colors">
                    {s.name}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── SERVICE AREAS ── */}
      <section className="bg-white border-b border-[#e8e8e8]">
        <div className="max-w-7xl mx-auto px-6 py-24 md:py-36">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-[2px] bg-[#bf2a2a]" />
            <p className="text-[10px] font-mono tracking-[0.3em] uppercase text-[#bf2a2a]">
              Service Areas
            </p>
          </div>
          <h2 className="text-[clamp(28px,3vw,44px)] font-light text-[#111] mb-16">
            Serving the tri-state area.
          </h2>
          <div className="border border-[#e8e8e8]">
            <div className="grid grid-cols-1 md:grid-cols-3">
              {AREAS.map((a, i) => (
                <div
                  key={a.state}
                  className={`p-8 md:p-10 border-b md:border-b-0 border-[#e8e8e8] last:border-b-0 ${
                    i < 2 ? "md:border-r" : ""
                  }`}
                >
                  <p className="text-[13px] font-semibold text-[#bf2a2a] mb-5">
                    {a.state}
                  </p>
                  <div className="flex flex-col gap-3">
                    {a.places.map((p) => (
                      <p key={p} className="text-[15px] text-[#555]">{p}</p>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <p className="text-[12px] text-[#bbb] mt-6 font-mono">
            Licensed and fully insured in New York, Connecticut, and New Jersey.
          </p>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-[#111]">
        <div className="max-w-7xl mx-auto px-6 py-24 md:py-36">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-10">
            <div>
              <h2 className="text-[clamp(36px,5vw,72px)] font-light text-white leading-tight">
                Have a project?
              </h2>
              <p className="text-[16px] text-[#888] mt-3">
                Let&apos;s talk through what you&apos;re building.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 shrink-0">
              <Link
                href="/contact"
                className="px-10 py-4 bg-[#bf2a2a] text-white text-[12px] font-semibold tracking-[0.12em] uppercase hover:bg-[#d63031] transition-colors text-center"
              >
                Start a Conversation
              </Link>
              <a
                href="tel:+19144194449"
                className="px-10 py-4 border border-[#333] text-white text-[12px] font-semibold tracking-[0.12em] uppercase hover:border-white transition-colors text-center"
              >
                (914) 419-4449
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
