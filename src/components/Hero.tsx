import VantaBackground from "./VantaBackground";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0a0a0a]"
    >
      <VantaBackground />
      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-black/50" />

      <div className="relative z-10 text-center px-6 py-32 max-w-5xl mx-auto">
        {/* Badge */}
        <div className="animate-fade-in-up inline-flex items-center gap-3 mb-10">
          <span className="w-8 h-[2px] bg-accent" />
          <span className="text-sm font-semibold text-white/60 tracking-widest uppercase">
            Licensed & Fully Insured · NY & CT
          </span>
          <span className="w-8 h-[2px] bg-accent" />
        </div>

        {/* Main headline */}
        <h1 className="animate-fade-in-up text-6xl md:text-8xl lg:text-9xl font-black text-white tracking-tighter leading-[0.9]">
          Built Right.
          <br />
          <span className="bg-gradient-to-r from-accent to-accent-light bg-clip-text text-transparent">
            Built to Last.
          </span>
        </h1>

        {/* Subheading */}
        <p className="animate-fade-in-up-delay-1 mt-10 text-lg md:text-xl text-white/45 max-w-lg mx-auto font-light leading-relaxed">
          New York&apos;s licensed and insured construction company. Commercial, residential, and civil builds — no shortcuts, ever.
        </p>

        {/* CTA */}
        <div className="animate-fade-in-up-delay-2 mt-12 flex justify-center">
          <a
            href="#contact"
            className="inline-flex items-center justify-center bg-accent hover:bg-accent/90 text-white px-10 py-4 rounded text-base font-bold tracking-wide transition-all duration-300 shadow-lg shadow-accent/30 hover:shadow-xl hover:shadow-accent/40 uppercase"
          >
            Get a Free Estimate
            <svg className="w-4 h-4 ml-2.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <div className="w-px h-12 bg-gradient-to-b from-white/30 to-transparent" />
      </div>
    </section>
  );
}
