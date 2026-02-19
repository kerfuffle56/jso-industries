export default function CtaBanner() {
  return (
    <section className="py-20 md:py-24 hero-gradient relative overflow-hidden">
      <div className="absolute inset-0 hero-pattern" />
      <div className="relative max-w-4xl mx-auto px-6 text-center">
        <div className="inline-flex items-center gap-3 mb-6">
          <span className="w-8 h-[2px] bg-accent" />
          <span className="text-xs font-semibold text-white/50 tracking-widest uppercase">Ready to Build</span>
          <span className="w-8 h-[2px] bg-accent" />
        </div>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[0.95]">
          Let&apos;s Get to{" "}
          <span className="bg-gradient-to-r from-accent to-accent-light bg-clip-text text-transparent">
            Work.
          </span>
        </h2>
        <p className="mt-5 text-lg text-white/45 max-w-md mx-auto">
          Free estimates. No pressure. Just straight answers from an experienced crew.
        </p>
        <div className="mt-10 flex justify-center">
          <a
            href="#contact"
            className="inline-flex items-center justify-center bg-accent hover:bg-accent/90 text-white px-10 py-4 rounded text-base font-bold tracking-wide transition-all duration-300 shadow-lg shadow-accent/30 uppercase"
          >
            Get a Free Estimate
          </a>
        </div>
      </div>
    </section>
  );
}
