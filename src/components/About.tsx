"use client";

import { useEffect, useRef, useState } from "react";

export default function About() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="py-32 md:py-40 bg-gray-light" ref={sectionRef}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left Content */}
          <div className={visible ? "animate-fade-in-up" : "opacity-0"}>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-dark tracking-tight leading-tight">
              BUILT ON
              <br />
              <span className="text-accent">TRUST</span>
            </h2>
            <div className="mt-4 w-20 h-1 bg-accent" />
            <p className="mt-8 text-lg text-gray-mid leading-relaxed">
              JSO Industries Inc. is a New York-based construction company
              serving commercial and residential clients. As a licensed
              home improvement contractor, we bring professionalism, skill,
              and dedication to every project.
            </p>
            <p className="mt-6 text-lg text-gray-mid leading-relaxed">
              We are fully insured and committed to delivering results that
              exceed expectations. Quality materials, expert craftsmanship,
              and transparent communication from start to finish.
            </p>
          </div>

          {/* Right - Stats */}
          <div
            className={`grid grid-cols-2 gap-px bg-gray-200 ${
              visible ? "animate-fade-in-up-delay-2" : "opacity-0"
            }`}
          >
            {[
              { value: "100+", label: "Projects Completed" },
              { value: "15+", label: "Years Experience" },
              { value: "100%", label: "Fully Insured" },
              { value: "24/7", label: "Support" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="bg-white p-10 text-center"
              >
                <div className="text-4xl md:text-5xl font-bold text-accent">
                  {stat.value}
                </div>
                <div className="mt-2 text-gray-mid text-sm font-medium uppercase tracking-wide">
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
