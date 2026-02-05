"use client";

import { useEffect, useRef, useState } from "react";

const reasons = [
  { title: "Licensed & Certified", description: "Meeting all NY state and local requirements." },
  { title: "Fully Insured", description: "Complete coverage for your peace of mind." },
  { title: "Transparent Pricing", description: "No hidden fees. Detailed estimates upfront." },
  { title: "On-Time Delivery", description: "We respect deadlines without cutting corners." },
];

export default function WhyUs() {
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
    <section id="why-us" className="py-32 md:py-40 hero-gradient" ref={sectionRef}>
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight">
            WHY <span className="text-accent">JSO</span>
          </h2>
          <div className="mt-4 w-20 h-1 bg-accent mx-auto" />
        </div>

        {/* Reasons Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px">
          {reasons.map((reason, i) => (
            <div
              key={reason.title}
              className={`p-10 text-center border border-white/10 ${
                visible ? "animate-fade-in-up" : "opacity-0"
              }`}
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <h3 className="text-lg font-bold text-white mb-3">
                {reason.title}
              </h3>
              <p className="text-white/50 text-sm leading-relaxed">
                {reason.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
