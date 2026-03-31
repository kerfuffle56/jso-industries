const steps = [
  {
    number: "01",
    title: "Preconstruction",
    description:
      "Budget development, estimating, scheduling, and value engineering before a shovel hits the ground. We solve problems on paper — where they're still cheap.",
  },
  {
    number: "02",
    title: "Design & Permitting",
    description:
      "We coordinate architects, engineers, and consultants while driving municipal approvals and zoning. No hand-offs, no gaps — one team accountable for it all.",
  },
  {
    number: "03",
    title: "Construction",
    description:
      "Self-performing or managing subcontractors with the same ownership standard. Schedule-driven, quality-controlled, and in constant communication.",
  },
  {
    number: "04",
    title: "Closeout & Delivery",
    description:
      "Punch list, commissioning, certificate of occupancy, and final accounting. We see every project through to realized value — not just substantial completion.",
  },
];

export default function Process() {
  return (
    <section className="py-28 md:py-36 bg-[#111111] border-t border-white/[0.06] relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-sm font-semibold text-accent uppercase tracking-widest mb-3">
            How We Work
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight">
            The Process
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-0">
          {steps.map((step, i) => (
            <div
              key={step.number}
              className="relative p-8 border-t-2 border-white/[0.08] hover:border-accent transition-colors duration-300 group animate-fade-in-up"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
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
