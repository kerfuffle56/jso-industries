import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services | JSO Industries",
  description: "Full-service real estate development and general contracting across NY, CT, and NJ.",
};

const SERVICES = [
  {
    n: "01", name: "Real Estate Development",
    body: "We acquire land and existing assets, navigate entitlements, and execute ground-up development in Westchester and the broader tri-state market. Our projects are underwritten conservatively and executed with a builder's discipline because we are the builder.",
  },
  {
    n: "02", name: "Commercial Construction",
    body: "Retail build-outs, office renovations, mixed-use construction, and commercial tenant improvements. We understand lease timelines, landlord obligations, and the real cost of delays.",
  },
  {
    n: "03", name: "Residential Construction",
    body: "Custom homes, additions, and full residential builds. We bring development-grade project management to residential work. Same rigor, same accountability, smaller scale.",
  },
  {
    n: "04", name: "Renovations",
    body: "Interior gut renovations, kitchen and bath remodels, facade work, roofing, siding, windows, and exterior envelope upgrades. Value-add repositioning for investors. Full-scope rehabs for owners.",
  },
  {
    n: "05", name: "Construction Management",
    body: "For owners who need a sophisticated project manager on their side. We coordinate subcontractors, manage schedules and budgets, and represent your interests from preconstruction through closeout.",
  },
  {
    n: "06", name: "Owner's Representative",
    body: "You are busy. We act as your eyes and ears on the project, reviewing contracts, approving pay applications, monitoring progress, and making sure your interests are protected at every stage.",
  },
];

const PROCESS = [
  { n: "01", phase: "Preconstruction",      desc: "Budget, schedule, team assembly, permit strategy, and value engineering. We set the project up to succeed before a shovel hits the ground." },
  { n: "02", phase: "Design and Entitlement", desc: "Drawings, approvals, variance applications, and permitting. We navigate municipalities so you do not have to." },
  { n: "03", phase: "Construction",          desc: "Daily site supervision. Weekly owner updates. Proactive problem-solving. No surprises." },
  { n: "04", phase: "Closeout",              desc: "Punch list, certificate of occupancy, warranty documentation, and final accounting. Clean handoff every time." },
];

export default function ServicesPage() {
  return (
    <main className="pt-16">
      <section className="bg-[#0a0a0a] border-b border-[#1e1e1e]" style={{ borderTop: "3px solid #bf2a2a" }}>
        <div className="max-w-7xl mx-auto px-6 py-24 md:py-36">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-[2px] bg-[#bf2a2a]" />
            <p className="text-[10px] font-mono tracking-[0.3em] uppercase text-[#bf2a2a]">What We Do</p>
          </div>
          <h1 className="text-[clamp(48px,7vw,96px)] font-light text-white leading-[0.88] tracking-tight">
            Six service lines.<br />One team.
          </h1>
        </div>
      </section>

      <section className="bg-[#141414]">
        <div className="max-w-7xl mx-auto px-6 py-14 md:py-20">
          <p className="text-[17px] md:text-[19px] text-[#888] font-light leading-relaxed max-w-2xl">
            From the first pencil drawing to the final punch list, JSO Industries handles the full development and construction lifecycle. You can engage us at any stage.
          </p>
        </div>
      </section>

      <section className="border-t border-[#1e1e1e]">
        <div className="max-w-7xl mx-auto">
          {SERVICES.map((s, i) => (
            <div key={s.n}
              className={`grid grid-cols-1 md:grid-cols-[80px_1fr_1.4fr] gap-0 border-b border-[#1e1e1e] px-6 py-10 md:py-14 group transition-colors ${
                i % 2 === 0 ? "bg-[#0a0a0a] hover:bg-[#0e0e0e]" : "bg-[#141414] hover:bg-[#161616]"
              }`}
            >
              <div className="mb-3 md:mb-0 md:pt-1">
                <p className="text-[13px] font-semibold text-[#bf2a2a]">{s.n}</p>
              </div>
              <div className="md:pr-12 mb-3 md:mb-0">
                <h2 className="text-[20px] md:text-[24px] font-semibold text-white leading-tight group-hover:text-[#bf2a2a] transition-colors">{s.name}</h2>
              </div>
              <div>
                <p className="text-[14px] text-[#666] leading-relaxed">{s.body}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-[#141414] border-t border-[#1e1e1e]">
        <div className="max-w-7xl mx-auto px-6 py-24 md:py-36">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-[2px] bg-[#bf2a2a]" />
            <p className="text-[10px] font-mono tracking-[0.3em] uppercase text-[#bf2a2a]">Process</p>
          </div>
          <h2 className="text-[clamp(28px,3vw,44px)] font-light text-white mb-16">How a project moves.</h2>
          <div className="border border-[#222]">
            <div className="grid grid-cols-1 md:grid-cols-4">
              {PROCESS.map((step, i) => (
                <div key={step.n} className={`p-8 md:p-10 bg-[#0d0d0d] border-b md:border-b-0 border-[#1e1e1e] last:border-b-0 ${i < 3 ? "md:border-r" : ""}`}>
                  <p className="text-[13px] font-semibold text-[#bf2a2a] mb-5">{step.n}</p>
                  <p className="text-[17px] font-semibold text-white mb-3">{step.phase}</p>
                  <p className="text-[13px] text-[#666] leading-relaxed">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#0a0a0a] border-t border-[#1e1e1e]">
        <div className="max-w-7xl mx-auto px-6 py-24 md:py-36">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-10">
            <div>
              <h2 className="text-[clamp(32px,4vw,56px)] font-light text-white">Start with a conversation.</h2>
              <p className="text-[16px] text-[#555] mt-3">Tell us what you are working on. We will tell you if we can help.</p>
            </div>
            <Link href="/contact" className="px-10 py-4 bg-[#bf2a2a] text-white text-[12px] font-semibold tracking-[0.12em] uppercase hover:bg-[#d63031] transition-colors shrink-0 text-center">
              Get in Touch
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
