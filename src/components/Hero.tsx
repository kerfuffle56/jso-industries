export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Video background */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
        src="https://assets.mixkit.co/videos/4010/4010-1080.mp4"
      />

      {/* Overlays */}
      <div className="absolute inset-0 bg-black/60" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/40" />

      {/* Film grain */}
      <div className="grain-overlay" aria-hidden="true" />

      <div className="relative z-10 text-center px-6 py-32 max-w-5xl mx-auto">
        {/* Company wordmark */}
        <div className="animate-fade-in-up mb-10">
          <p className="text-xs font-bold text-white/30 tracking-[0.45em] uppercase mb-2">
            Licensed General Contractor · NY, CT &amp; NJ
          </p>
          <p className="text-2xl md:text-3xl font-black text-white tracking-[0.25em] uppercase">
            JSO Industries Inc.
          </p>
        </div>

        {/* Tagline */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white tracking-tighter leading-[0.9]">
          <span className="block animate-word-up" style={{ animationDelay: "0.1s" }}>
            Yours to Own.
          </span>
          <span
            className="block animate-word-up bg-gradient-to-r from-accent to-accent-light bg-clip-text text-transparent italic"
            style={{ animationDelay: "0.25s" }}
          >
            Ours to Build.
          </span>
        </h1>

        {/* Subheading */}
        <p className="animate-fade-in-up-delay-1 mt-10 text-lg md:text-xl text-white/45 max-w-lg mx-auto font-light leading-relaxed">
          Commercial, residential, and civil builds across NY, CT and NJ. No shortcuts, ever.
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
