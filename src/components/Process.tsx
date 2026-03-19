const steps = [
  {
    number: "01",
    title: "Site & Opportunity",
    description:
      "We identify and underwrite development opportunities. Site visits, feasibility analysis, market study, and acquisition strategy.",
  },
  {
    number: "02",
    title: "Entitlements & Design",
    description:
      "We navigate permitting, municipal approvals, zoning, and design development. We know this process from the inside out.",
  },
  {
    number: "03",
    title: "Construction",
    description:
      "We manage the build. Our crews, our schedule, our quality standards. No GC markup layer, no finger-pointing between developer and contractor.",
  },
  {
    number: "04",
    title: "Delivery & Value",
    description:
      "Certificate of occupancy, lease-up, or sale. We see every project through to realized value, not just substantial completion.",
  },
];

export default function Process() {
  return (
    <section className="py-28 md:py-36 bg-[#e8e8e8] border-t border-black/[0.06] relative overflow-hidden">
      <span className="absolute top-8 right-6 text-[10rem] md:text-[13rem] font-black text-black/[0.04] select-none leading-none pointer-events-none">
        04
      </span>
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-sm font-semibold text-accent uppercase tracking-widest mb-3">
            How We Develop
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight">
            The Process
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-0">
          {steps.map((step, i) => (
            <div
              key={step.number}
              className="relative p-8 border-t-2 border-black/[0.08] hover:border-accent transition-colors duration-300 group animate-fade-in-up"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <p className="text-5xl font-black text-accent/20 group-hover:text-accent/40 transition-colors duration-300 leading-none mb-6">
                {step.number}
              </p>
              <h3 className="text-lg font-bold text-gray-900 mb-3">
                {step.title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
