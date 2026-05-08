import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | JSO Industries",
  description:
    "JSO Industries is a vertically integrated real estate development and general contracting firm based in Westchester County, NY. Founded by Jonathan Oronzio.",
};

const VALUES = [
  {
    n: "01",
    title: "Radical Transparency",
    body: "We show you every line item. You know what things cost and why. No hidden fees, no padded estimates — just honest numbers.",
  },
  {
    n: "02",
    title: "Under Budget",
    body: "We treat your money like our own. Aggressive value engineering and honest contingency planning mean no surprises at closeout.",
  },
  {
    n: "03",
    title: "Ahead of Schedule",
    body: "We build float into every schedule and protect it. Our reputation is built on delivering when we say we will.",
  },
  {
    n: "04",
    title: "Customers for Life",
    body: "Our business runs on repeat clients and referrals. We build relationships the same way we build structures — to last.",
  },
];

export default function AboutPage() {
  return (
    <main className="pt-16">
      {/* ── PAGE HEADER ── */}
      <section className="border-b border-[#e8e8e8] bg-white">
        <div className="max-w-7xl mx-auto px-6 py-24 md:py-36">
          <p className="text-[10px] font-mono tracking-[0.3em] uppercase text-[#bbb] mb-6">
            About JSO Industries
          </p>
          <h1 className="text-[clamp(48px,7vw,96px)] font-light text-[#111] leading-[0.88] tracking-tight">
            Built on experience.
            <br />
            Driven by ownership.
          </h1>
        </div>
      </section>

      {/* ── COMPANY + FOUNDER ── */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-6 py-24 md:py-36">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
            <div>
              <p className="text-[10px] font-mono tracking-[0.3em] uppercase text-[#bbb] mb-8">
                The Company
              </p>
              <p className="text-[18px] md:text-[20px] text-[#444] font-light leading-relaxed mb-6">
                JSO Industries was founded on a simple premise: the best person to
                manage your construction project is someone who has skin in the
                game as a developer.
              </p>
              <p className="text-[15px] text-[#666] leading-relaxed mb-6">
                When you hire a developer who also self-performs construction, you
                eliminate the adversarial relationship between owner and
                contractor. You get one team, one set of incentives, and one point
                of accountability.
              </p>
              <p className="text-[15px] text-[#666] leading-relaxed">
                We operate across New York, Connecticut, and New Jersey, taking on
                ground-up development, commercial and residential construction,
                renovations, and advisory work for owners who want a
                developer&apos;s perspective on their projects.
              </p>
            </div>

            <div className="border border-[#e8e8e8]">
              <div className="px-10 pt-10 pb-6 border-b border-[#e8e8e8]">
                <p className="text-[10px] font-mono tracking-[0.3em] uppercase text-[#bbb] mb-6">
                  Founder
                </p>
                <p className="text-[28px] font-light text-[#111] mb-2">
                  Jonathan Oronzio
                </p>
                <p className="text-[11px] font-mono text-[#bbb] tracking-[0.2em] uppercase">
                  Founder &amp; Principal
                </p>
              </div>
              <div className="px-10 py-8 flex flex-col gap-5">
                <p className="text-[14px] text-[#666] leading-relaxed">
                  A decade of hands-on construction experience across residential,
                  commercial, and development projects in the tri-state area.
                </p>
                <p className="text-[14px] text-[#666] leading-relaxed">
                  B.S. Business, Fairfield University.
                </p>
                <p className="text-[14px] text-[#666] leading-relaxed">
                  Based in Westchester County, NY.
                </p>
              </div>
              <div className="px-10 py-8 border-t border-[#e8e8e8] bg-[#f9f9f7]">
                <p className="text-[12px] text-[#888] leading-relaxed">
                  Jonathan is personally involved in every JSO project — not as
                  an account manager, but as the person making decisions on your
                  site.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── VALUES ── */}
      <section className="border-t border-[#e8e8e8] bg-[#f7f7f5]">
        <div className="max-w-7xl mx-auto px-6 py-24 md:py-36">
          <p className="text-[10px] font-mono tracking-[0.3em] uppercase text-[#bbb] mb-4">
            How We Work
          </p>
          <h2 className="text-[clamp(28px,3.5vw,48px)] font-light text-[#111] mb-16">
            Our commitments to every client.
          </h2>
          <div className="border border-[#e0e0e0] bg-white">
            <div className="grid grid-cols-1 md:grid-cols-2">
              {VALUES.map((v, i) => (
                <div
                  key={v.n}
                  className={`p-10 ${i % 2 === 0 ? "md:border-r" : ""} ${
                    i < 2 ? "border-b" : ""
                  } border-[#e8e8e8]`}
                >
                  <p className="text-[10px] font-mono text-[#bf2a2a] mb-6 tracking-wider">
                    {v.n}
                  </p>
                  <p className="text-[19px] font-medium text-[#111] mb-4">{v.title}</p>
                  <p className="text-[14px] text-[#666] leading-relaxed">{v.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── DIFFERENTIATOR ── */}
      <section className="border-t border-[#e8e8e8] bg-white">
        <div className="max-w-7xl mx-auto px-6 py-24 md:py-36">
          <div className="max-w-3xl">
            <p className="text-[10px] font-mono tracking-[0.3em] uppercase text-[#bbb] mb-6">
              Why It Matters
            </p>
            <p className="text-[clamp(18px,2.2vw,26px)] font-light text-[#333] leading-relaxed mb-8">
              Most contractors don&apos;t think about your return on investment.
              Most developers don&apos;t get their hands dirty. We do both.
            </p>
            <p className="text-[15px] text-[#666] leading-relaxed">
              That vertical integration means we catch problems before they
              happen, because we understand both the construction risks and the
              financial consequences. Better decisions, faster execution, and a
              project that performs the way you underwrote it.
            </p>
          </div>
        </div>
      </section>

      {/* ── SERVICE AREAS ── */}
      <section className="border-t border-[#e8e8e8] bg-[#f7f7f5]">
        <div className="max-w-7xl mx-auto px-6 py-24 md:py-36">
          <p className="text-[10px] font-mono tracking-[0.3em] uppercase text-[#bbb] mb-4">
            Where We Work
          </p>
          <h2 className="text-[clamp(28px,3vw,44px)] font-light text-[#111] mb-12">
            Tri-state area.
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-10">
            {[
              {
                state: "New York",
                areas: ["Westchester County", "New York City", "Rockland County", "Long Island"],
              },
              { state: "Connecticut", areas: ["Fairfield County"] },
              { state: "New Jersey", areas: ["Bergen County", "Hudson County"] },
            ].map(({ state, areas }) => (
              <div key={state}>
                <p className="text-[10px] font-mono tracking-[0.3em] uppercase text-[#bf2a2a] mb-5">
                  {state}
                </p>
                {areas.map((a) => (
                  <p key={a} className="text-[14px] text-[#666] mb-2.5">{a}</p>
                ))}
              </div>
            ))}
          </div>
          <p className="text-[12px] text-[#bbb] font-mono mt-10">
            Licensed and fully insured in NY, CT, and NJ.
          </p>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-[#111]">
        <div className="max-w-7xl mx-auto px-6 py-24 md:py-36">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-10">
            <h2 className="text-[clamp(32px,4vw,56px)] font-light text-white">
              Ready to work together?
            </h2>
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
