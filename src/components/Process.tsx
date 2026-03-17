const steps = [
  {
    number: "01",
    title: "Consultation",
    description:
      "Tell us about your project. We schedule a site visit, ask the right questions, and get a clear picture of what you need.",
  },
  {
    number: "02",
    title: "Proposal",
    description:
      "You get a detailed scope of work, an honest timeline, and a lump sum number. No surprises, no change order games.",
  },
  {
    number: "03",
    title: "Build",
    description:
      "We manage the job from permits to punch list. Our crew is on site every day. You get progress updates, not headaches.",
  },
  {
    number: "04",
    title: "Handoff",
    description:
      "Final walkthrough, everything done right. Your project is complete and built the way it was supposed to be.",
  },
];

export default function Process() {
  return (
    <section className="py-28 md:py-36 bg-[#0a0a0a]/95 backdrop-blur-sm border-t border-white/[0.06] relative overflow-hidden">
      <span className="absolute top-8 right-6 text-[10rem] md:text-[13rem] font-black text-white/[0.025] select-none leading-none pointer-events-none">
        02
      </span>
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-sm font-semibold text-accent-light uppercase tracking-widest mb-3">
            How It Works
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
            The Process
          </h2>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-0">
          {steps.map((step, i) => (
            <div
              key={step.number}
              className="relative p-8 border-t-2 border-white/[0.06] hover:border-accent transition-colors duration-300 group animate-fade-in-up"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              {/* Step number */}
              <p className="text-5xl font-black text-accent/20 group-hover:text-accent/40 transition-colors duration-300 leading-none mb-6">
                {step.number}
              </p>
              <h3 className="text-lg font-bold text-white mb-3">
                {step.title}
              </h3>
              <p className="text-white/45 text-sm leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
