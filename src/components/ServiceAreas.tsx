const areas = [
  {
    state: "New Jersey",
    counties: ["Bergen County", "Hudson County"],
  },
  {
    state: "New York",
    counties: ["Long Island", "NYC", "Rockland County", "Westchester County"],
  },
  {
    state: "Connecticut",
    counties: ["Fairfield County"],
  },
];

export default function ServiceAreas() {
  return (
    <section className="py-20 md:py-28 bg-[#0a0a0a] border-t border-white/[0.06]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <p className="text-sm font-semibold text-accent uppercase tracking-widest mb-3">
            Where We Work
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
            Areas We Service
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-5">
          {areas.map((area) => (
            <div
              key={area.state}
              className="bg-[#161616] border border-white/[0.07] rounded-2xl p-8"
            >
              <h3 className="text-lg font-bold text-white mb-5 pb-4 border-b border-white/[0.07]">
                {area.state}
              </h3>
              <ul className="space-y-2.5">
                {area.counties.map((county) => (
                  <li key={county} className="flex items-center gap-2.5 text-white/55 text-sm">
                    <span className="w-1 h-1 rounded-full bg-accent flex-shrink-0" />
                    {county}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
