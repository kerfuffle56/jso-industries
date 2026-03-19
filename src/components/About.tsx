export default function About() {
  return (
    <section id="about" className="py-28 md:py-36 bg-[#0a0a0a]/95 backdrop-blur-sm border-t border-white/[0.06] relative overflow-hidden">
      <span className="absolute top-8 right-6 text-[10rem] md:text-[13rem] font-black text-white/[0.025] select-none leading-none pointer-events-none">
        02
      </span>
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Left — Bio */}
          <div className="animate-fade-in-up">
            <p className="text-sm font-semibold text-accent-light uppercase tracking-widest mb-3">
              The Founder
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight leading-tight">
              Jonathan
              <br />
              <span className="bg-gradient-to-r from-accent to-accent-light bg-clip-text text-transparent italic">
                Oronzio
              </span>
            </h2>
            <p className="mt-3 text-sm font-semibold text-white/35 uppercase tracking-widest">
              Founder &amp; Principal
            </p>

            <p className="mt-8 text-base text-white/75 leading-relaxed">
              Jonathan Oronzio founded JSO Industries with a clear conviction:
              the best way to build is to think like an owner. With a decade of
              hands-on construction experience across New York, Connecticut, and
              New Jersey, spanning commercial, residential, and civil work, he
              brings a rare combination of field-level expertise and business
              acumen to every project.
            </p>
            <p className="mt-5 text-base text-white/75 leading-relaxed">
              A graduate of Fairfield University with a Bachelor&apos;s degree in
              Business, Jonathan has spent the past decade building toward a
              singular goal: developing real estate that creates lasting value.
              JSO Industries is the vehicle for that vision. A development firm
              that self-performs its own construction, eliminating the middleman
              and maintaining complete control from acquisition through delivery.
            </p>
            <p className="mt-5 text-base text-white/75 leading-relaxed">
              When he takes on a client project, he approaches it the same way
              he would his own: with an ownership mindset, an eye on long-term
              value, and zero tolerance for shortcuts.
            </p>
          </div>

          {/* Right — Credentials */}
          <div className="grid grid-cols-2 gap-4 animate-fade-in-up-delay-2 lg:mt-16">
            {[
              { value: "10+", label: "Years in Construction" },
              { value: "B.S.", label: "Business · Fairfield University" },
              { value: "GC", label: "Self-Performing General Contractor" },
              { value: "NY · CT · NJ", label: "Licensed &amp; Fully Insured" },
            ].map((item) => (
              <div
                key={item.label}
                className="bg-white/[0.07] border border-white/[0.1] rounded-2xl p-8 text-center"
              >
                <div
                  className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-accent to-accent-light bg-clip-text text-transparent leading-tight"
                  dangerouslySetInnerHTML={{ __html: item.value }}
                />
                <div
                  className="mt-2 text-white/60 text-xs font-medium leading-snug"
                  dangerouslySetInnerHTML={{ __html: item.label }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
