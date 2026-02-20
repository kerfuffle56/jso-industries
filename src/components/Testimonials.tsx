const testimonials = [
  {
    quote:
      "JSO Industries transformed our office space on time and on budget. Professional crew, zero headaches. We'll be using them for every project going forward.",
    name: "Michael R.",
    title: "Commercial Property Owner, Westchester",
  },
  {
    quote:
      "They handled our full home renovation from foundation to finish. The craftsmanship is outstanding — you can tell they take real pride in their work.",
    name: "Sandra T.",
    title: "Homeowner, Fairfield County",
  },
  {
    quote:
      "Responsive, transparent, and they actually showed up when they said they would. In this industry that's rare. Highly recommend JSO for any size project.",
    name: "David M.",
    title: "General Contractor, New York",
  },
];

export default function Testimonials() {
  return (
    <section className="py-28 md:py-36 bg-[#161616]/95 backdrop-blur-sm border-t border-white/[0.06]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 mb-4">
            <span className="w-8 h-[2px] bg-accent" />
            <span className="text-xs font-semibold text-white/50 tracking-widest uppercase">
              What Clients Say
            </span>
            <span className="w-8 h-[2px] bg-accent" />
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight">
            Trusted by{" "}
            <span className="bg-gradient-to-r from-accent to-accent-light bg-clip-text text-transparent">
              Clients
            </span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="bg-white/[0.05] border border-white/[0.08] rounded-2xl p-8 flex flex-col gap-6 hover:bg-white/[0.08] transition-colors duration-300"
            >
              {/* Quote mark */}
              <svg className="w-8 h-8 text-accent/60 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
              <p className="text-white/65 text-base leading-relaxed flex-1">{t.quote}</p>
              <div className="border-t border-white/[0.08] pt-5">
                <div className="text-sm font-bold text-white">{t.name}</div>
                <div className="text-xs text-white/40 mt-0.5">{t.title}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
