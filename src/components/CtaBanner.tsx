export default function CtaBanner() {
  return (
    <section className="py-12 md:py-16 bg-[#111111] relative">
      <div className="relative max-w-4xl mx-auto px-6 text-center">
        <div className="inline-flex items-center gap-3 mb-6">
          <span className="w-8 h-[2px] bg-accent" />
          <span className="text-xs font-semibold text-white/50 tracking-widest uppercase">Ready to Build</span>
          <span className="w-8 h-[2px] bg-accent" />
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[0.95]">
          Have a{" "}
          <span className="bg-gradient-to-r from-accent to-red-400 bg-clip-text text-transparent italic">
            Project?
          </span>
        </h2>
        <p className="mt-5 text-lg text-white/50 max-w-lg mx-auto">
          Whether you need a developer, a builder, or someone to manage it all — we&apos;re ready to talk.
        </p>
        <div className="mt-10 flex justify-center">
          <a
            href="#contact"
            className="inline-flex items-center justify-center bg-accent hover:bg-accent/90 text-white px-10 py-4 rounded text-base font-bold tracking-wide transition-all duration-300 shadow-lg shadow-accent/30 uppercase"
          >
            Start a Conversation
          </a>
        </div>
      </div>
    </section>
  );
}
