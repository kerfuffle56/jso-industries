const stats = [
  { value: "100+", label: "Projects Completed" },
  { value: "15+", label: "Years Experience" },
  { value: "2", label: "States Licensed" },
  { value: "100%", label: "Fully Insured" },
];

export default function Stats() {
  return (
    <section className="py-10 bg-accent/90 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-0 md:divide-x md:divide-white/20">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center py-2">
              <div className="text-4xl md:text-5xl font-black text-white tracking-tight">
                {stat.value}
              </div>
              <div className="mt-1 text-sm font-medium text-white/75 uppercase tracking-wider">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
