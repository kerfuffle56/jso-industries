import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services | JSO Industries",
  description:
    "Nine service lines from preconstruction through closeout. Real estate development, ground-up construction, commercial, residential, renovations, construction management, owner's representative, and more.",
};

const SERVICES = [
  {
    n: "01",
    name: "Real Estate Development",
    body: "We acquire land and existing assets, navigate entitlements, and execute ground-up development in Westchester and the broader tri-state market. Our projects are underwritten conservatively and executed with a builder's discipline.",
  },
  {
    n: "02",
    name: "Ground-Up Construction",
    body: "From foundation to certificate of occupancy, we self-perform and manage new construction for residential and commercial clients. Full site supervision by Jonathan on every project.",
  },
  {
    n: "03",
    name: "Commercial Construction",
    body: "Retail build-outs, office renovations, mixed-use construction, and commercial tenant improvements. We understand lease timelines and the cost of delays.",
  },
  {
    n: "04",
    name: "Residential Construction",
    body: "Custom homes, additions, and full residential ground-up builds. We bring development-grade project management to residential work.",
  },
  {
    n: "05",
    name: "Interior Renovations",
    body: "Complete interior gut renovations, kitchen and bath remodels, unit upgrades, and value-add repositioning for investors and owners alike.",
  },
  {
    n: "06",
    name: "Exterior Renovations",
    body: "Facade work, roofing, siding, windows, and exterior envelope upgrades. We approach exterior work with an eye toward long-term performance and curb appeal.",
  },
  {
    n: "07",
    name: "Construction Management",
    body: "For owners who need a sophisticated project manager on their side. We coordinate subcontractors, manage schedules and budgets, and represent your interests throughout construction.",
  },
  {
    n: "08",
    name: "Owner's Representative",
    body: "You're busy. We act as your eyes and ears on the project — reviewing contracts, approving pay applications, monitoring progress, and making sure your interests are protected.",
  },
  {
    n: "09",
    name: "Preconstruction",
    body: "Budgeting, estimating, value engineering, scheduling, and contractor procurement before a shovel hits the ground. The most valuable thing we do is often what happens before construction starts.",
  },
];

const PROCESS = [
  {
    n: "01",
    phase: "Preconstruction",
    desc: "Budget, schedule, team assembly, permit strategy. We set the project up to succeed before anything is built.",
  },
  {
    n: "02",
    phase: "Design & Entitlement",
    desc: "Drawings, approvals, variance applications, and permitting. We navigate municipalities so you don't have to.",
  },
  {
    n: "03",
    phase: "Construction",
    desc: "Daily site supervision. Weekly owner updates. Proactive problem-solving. No surprises.",
  },
  {
    n: "04",
    phase: "Closeout",
    desc: "Punch list, certificate of occupancy, warranty documentation, and final accounting. Clean handoff every time.",
  },
];

export default function ServicesPage() {
  return (
    <main className="pt-16">
      {/* ── PAGE HEADER ── */}
      <section className="border-b border-[#1e1e1e]">
        <div className="max-w-7xl mx-auto px-6 py-24 md:py-36">
          <p className="text-[10px] font-mono tracking-[0.3em] uppercase text-[#555] mb-6">
            What We Do
          </p>
          <h1 className="text-[clamp(48px,7vw,96px)] font-light text-white leading-[0.88] tracking-tight">
            Nine service lines.
            <br />
            One team.
          </h1>
        </div>
      </section>

      {/* ── INTRO ── */}
      <section className="max-w-7xl mx-auto px-6 py-16 md:py-20">
        <p className="text-[17px] md:text-[19px] text-[#aaa] font-light leading-relaxed max-w-2xl">
          From the first pencil drawing to the final punch list, JSO Industries
          handles the full development and construction lifecycle. You can engage
          us at any stage.
        </p>
      </section>

      {/* ── SERVICES LIST ── */}
      <section className="border-t border-[#1e1e1e]">
        <div className="max-w-7xl mx-auto">
          {SERVICES.map((s) => (
            <div
              key={s.n}
              className="grid grid-cols-1 md:grid-cols-[100px_1fr_1.4fr] gap-0 border-b border-[#1e1e1e] px-6 py-10 md:py-14 hover:bg-[#0d0d0d] transition-colors"
            >
              <div className="mb-3 md:mb-0 md:pt-1">
                <p className="text-[10px] font-mono text-[#bf2a2a] tracking-[0.2em]">
                  {s.n}
                </p>
              </div>
              <div className="md:pr-12 mb-3 md:mb-0">
                <h2 className="text-[20px] md:text-[24px] font-medium text-white leading-tight">
                  {s.name}
                </h2>
              </div>
              <div>
                <p className="text-[14px] text-[#888] leading-relaxed">{s.body}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── PROCESS ── */}
      <section className="border-t border-[#1e1e1e] bg-[#0d0d0d]">
        <div className="max-w-7xl mx-auto px-6 py-24 md:py-36">
          <p className="text-[10px] font-mono tracking-[0.3em] uppercase text-[#555] mb-4">
            Process
          </p>
          <h2 className="text-[clamp(28px,3vw,44px)] font-light text-white mb-16">
            How a project moves.
          </h2>
          <div className="border border-[#1e1e1e]">
            <div className="grid grid-cols-1 md:grid-cols-4">
              {PROCESS.map((step, i) => (
                <div
                  key={step.n}
                  className={`p-8 md:p-10 border-b md:border-b-0 border-[#1e1e1e] last:border-b-0 ${
                    i < 3 ? "md:border-r" : ""
                  }`}
                >
                  <p className="text-[10px] font-mono text-[#bf2a2a] mb-6 tracking-wider">
                    {step.n}
                  </p>
                  <p className="text-[17px] font-medium text-white mb-3">
                    {step.phase}
                  </p>
                  <p className="text-[13px] text-[#888] leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="border-t border-[#1e1e1e]">
        <div className="max-w-7xl mx-auto px-6 py-24 md:py-36">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-10">
            <div>
              <h2 className="text-[clamp(32px,4vw,56px)] font-light text-white">
                Start with a conversation.
              </h2>
              <p className="text-[16px] text-[#777] mt-3">
                Tell us what you&apos;re working on. We&apos;ll tell you if we can help.
              </p>
            </div>
            <Link
              href="/contact"
              className="px-10 py-4 bg-[#bf2a2a] text-white text-[12px] font-semibold tracking-[0.12em] uppercase hover:bg-[#d63031] transition-colors shrink-0 text-center"
            >
              Get in Touch →
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
