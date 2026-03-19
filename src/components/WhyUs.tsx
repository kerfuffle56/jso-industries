
const reasons = [
  {
    title: "Vertically Integrated",
    description: "We are the developer and the GC. No middleman, no markup between concept and construction.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 16.875h3.375m0 0h3.375m-3.375 0V13.5m0 3.375v3.375M6 10.5h2.25a2.25 2.25 0 0 0 2.25-2.25V6a2.25 2.25 0 0 0-2.25-2.25H6A2.25 2.25 0 0 0 3.75 6v2.25A2.25 2.25 0 0 0 6 10.5Zm0 9.75h2.25A2.25 2.25 0 0 0 10.5 18v-2.25a2.25 2.25 0 0 0-2.25-2.25H6a2.25 2.25 0 0 0-2.25 2.25V18A2.25 2.25 0 0 0 6 20.25Zm9.75-9.75H18a2.25 2.25 0 0 0 2.25-2.25V6A2.25 2.25 0 0 0 18 3.75h-2.25A2.25 2.25 0 0 0 13.5 6v2.25a2.25 2.25 0 0 0 2.25 2.25Z" />
      </svg>
    ),
  },
  {
    title: "Developer's Mindset",
    description: "We build with ownership in mind. Every decision considers long-term asset value, not just project completion.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18 9 11.25l4.306 4.306a11.95 11.95 0 0 1 5.814-5.518l2.74-1.22m0 0-5.94-2.281m5.94 2.28-2.28 5.941" />
      </svg>
    ),
  },
  {
    title: "End-to-End Control",
    description: "From site identification to final delivery, we manage every phase in-house. No handoffs, no gaps.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
      </svg>
    ),
  },
  {
    title: "A Decade of Experience",
    description: "10+ years across commercial, residential, and civil construction in the NY Metro area.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
      </svg>
    ),
  },
];

export default function WhyUs() {
  return (
    <section id="why-us" className="py-28 md:py-36 bg-[#161616]/95 backdrop-blur-sm border-t border-white/[0.06] relative overflow-hidden">
      <span className="absolute top-8 right-6 text-[10rem] md:text-[13rem] font-black text-white/[0.025] select-none leading-none pointer-events-none">
        05
      </span>
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-sm font-semibold text-accent-light uppercase tracking-widest mb-3">
            The Advantage
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
            Why <span className="bg-gradient-to-r from-accent-light to-accent bg-clip-text text-transparent">JSO</span>
          </h2>
        </div>

        {/* Reasons Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {reasons.map((reason, i) => (
            <div
              key={reason.title}
              className="rounded-2xl bg-white/[0.06] border border-white/[0.08] p-8 text-center backdrop-blur-sm hover:bg-white/[0.1] transition-all duration-300 animate-fade-in-up"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div className="w-12 h-12 rounded-xl bg-accent/20 text-accent-light flex items-center justify-center mx-auto mb-5">
                {reason.icon}
              </div>
              <h3 className="text-base font-bold text-white mb-2">
                {reason.title}
              </h3>
              <p className="text-white/65 text-sm leading-relaxed">
                {reason.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
