export default function About() {
  return (
    <section id="about" className="py-28 md:py-36 bg-[#111111] border-t border-white/[0.06] relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <div className="max-w-3xl animate-fade-in-up">
          <p className="text-sm font-semibold text-accent uppercase tracking-widest mb-3">
            The Founder
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight leading-tight">
            Jonathan
            <br />
            <span className="bg-gradient-to-r from-accent to-red-400 bg-clip-text text-transparent italic">
              Oronzio
            </span>
          </h2>
          <p className="mt-3 text-sm font-semibold text-white/30 uppercase tracking-widest">
            Founder &amp; Principal
          </p>

          <p className="mt-8 text-base text-white/55 leading-relaxed">
            JSO Industries was founded in 2025 with a straightforward goal:
            deliver exceptional work and exceptional experiences — every time.
            We don&apos;t build for one-time transactions. We build relationships
            that last, by earning the trust of every client we work with.
          </p>
          <p className="mt-5 text-base text-white/55 leading-relaxed">
            That means radical transparency from day one, communication that
            is prompt and proactive, and a consistent track record of coming in
            under budget and ahead of schedule. No surprises, no excuses.
          </p>
          <p className="mt-5 text-base text-white/55 leading-relaxed">
            Jonathan brings a decade of hands-on construction experience across
            New York, Connecticut, and New Jersey — and approaches every client
            project the same way he approaches his own: with full ownership,
            full accountability, and zero tolerance for shortcuts.
          </p>
        </div>
      </div>
    </section>
  );
}
