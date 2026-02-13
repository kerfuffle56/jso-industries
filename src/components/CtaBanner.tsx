export default function CtaBanner() {
  return (
    <section className="py-20 md:py-24 hero-gradient relative overflow-hidden">
      <div className="absolute inset-0 hero-pattern" />
      <div className="relative max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight">
          Ready to Start Your Project?
        </h2>
        <p className="mt-4 text-lg text-white/50 max-w-xl mx-auto">
          Get in touch for a free estimate. We&apos;re here to bring your
          vision to life.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#contact"
            className="inline-flex items-center justify-center bg-accent hover:bg-accent/90 text-white px-8 py-4 rounded-full text-base font-semibold transition-all duration-300 shadow-lg shadow-accent/25"
          >
            Get a Free Estimate
          </a>
          <a
            href="tel:9144194449"
            className="inline-flex items-center justify-center bg-white/[0.07] hover:bg-white/[0.12] text-white border border-white/15 px-8 py-4 rounded-full text-base font-semibold transition-all duration-300"
          >
            (914) 419-4449
          </a>
        </div>
      </div>
    </section>
  );
}
