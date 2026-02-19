export default function About() {
  return (
    <section id="about" className="py-28 md:py-36 concrete-bg">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          {/* Left Content */}
          <div className="animate-fade-in-up">
            <p className="text-sm font-semibold text-accent-light uppercase tracking-widest mb-3">
              Who We Are
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight leading-tight">
              Built on
              <br />
              <span className="bg-gradient-to-r from-accent to-accent-light bg-clip-text text-transparent">
                Trust
              </span>
            </h2>
            <p className="mt-8 text-base text-white/60 leading-relaxed">
              JSO Industries Inc. is a New York-based construction company
              serving commercial and residential clients. As a licensed home
              improvement contractor, we bring professionalism, skill, and
              dedication to every project.
            </p>
            <p className="mt-5 text-base text-white/60 leading-relaxed">
              We are fully insured and committed to delivering results that
              exceed expectations. Quality materials, expert craftsmanship, and
              transparent communication from start to finish.
            </p>
          </div>

          {/* Right - Stats */}
          <div className="grid grid-cols-2 gap-4 animate-fade-in-up-delay-2">
            {[
              { value: "100+", label: "Projects Completed" },
              { value: "15+", label: "Years Experience" },
              { value: "100%", label: "Fully Insured" },
              { value: "24/7", label: "Support" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="bg-white/[0.07] border border-white/[0.1] rounded-2xl p-8 text-center"
              >
                <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-accent to-accent-light bg-clip-text text-transparent">
                  {stat.value}
                </div>
                <div className="mt-2 text-white/50 text-sm font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
