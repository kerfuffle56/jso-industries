export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center hero-gradient overflow-hidden">
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/40" />

      <div className="relative text-center px-6 py-32">
        {/* Main headline */}
        <h1 className="animate-fade-in-up text-5xl md:text-7xl lg:text-8xl font-bold text-white tracking-tight leading-none">
          BUILD WITH
          <br />
          <span className="text-accent">CONFIDENCE</span>
        </h1>

        {/* Subheading */}
        <p className="animate-fade-in-up-delay-1 mt-8 text-xl md:text-2xl text-white/60 max-w-2xl mx-auto font-light">
          Commercial &amp; Residential Construction
          <br className="hidden md:block" />
          Licensed &amp; Fully Insured in New York
        </p>

        {/* CTA Buttons */}
        <div className="animate-fade-in-up-delay-2 mt-12 flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#contact"
            className="inline-flex items-center justify-center bg-accent hover:bg-white hover:text-primary-dark text-white px-10 py-5 text-lg font-semibold transition-all"
          >
            GET A FREE ESTIMATE
          </a>
          <a
            href="tel:9144194449"
            className="inline-flex items-center justify-center bg-transparent hover:bg-white/10 text-white border border-white/30 px-10 py-5 text-lg font-semibold transition-all"
          >
            (914) 419-4449
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-white/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
}
