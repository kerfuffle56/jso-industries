export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center hero-gradient overflow-hidden"
    >
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 hero-pattern" />
      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/30" />
      {/* Subtle radial glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-accent/5 rounded-full blur-3xl" />

      <div className="relative text-center px-6 py-32 max-w-4xl mx-auto">
        {/* Badge */}
        <div className="animate-fade-in-up inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.07] border border-white/10 mb-10">
          <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
          <span className="text-sm font-medium text-white/70 tracking-wide">
            Licensed & Fully Insured in NY and CT
          </span>
        </div>

        {/* Main headline */}
        <h1 className="animate-fade-in-up text-5xl md:text-7xl lg:text-8xl font-bold text-white tracking-tight leading-[0.95]">
          Build With
          <br />
          <span className="bg-gradient-to-r from-accent-light to-accent bg-clip-text text-transparent">
            Confidence
          </span>
        </h1>

        {/* Subheading */}
        <p className="animate-fade-in-up-delay-1 mt-8 text-lg md:text-xl text-white/50 max-w-xl mx-auto font-light leading-relaxed">
          Commercial & residential construction, delivered with expert
          craftsmanship and transparent communication.
        </p>

        {/* CTA Buttons */}
        <div className="animate-fade-in-up-delay-2 mt-12 flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#contact"
            className="inline-flex items-center justify-center bg-accent hover:bg-accent/90 text-white px-8 py-4 rounded-full text-base font-semibold transition-all duration-300 shadow-lg shadow-accent/25 hover:shadow-xl hover:shadow-accent/30"
          >
            Get a Free Estimate
            <svg
              className="w-4 h-4 ml-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </a>
          <a
            href="tel:9144194449"
            className="inline-flex items-center justify-center bg-white/[0.07] hover:bg-white/[0.12] text-white border border-white/15 px-8 py-4 rounded-full text-base font-semibold transition-all duration-300"
          >
            (914) 419-4449
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <div className="w-6 h-10 rounded-full border-2 border-white/20 flex items-start justify-center p-1.5">
          <div className="w-1 h-2.5 rounded-full bg-white/40 animate-bounce" />
        </div>
      </div>
    </section>
  );
}
