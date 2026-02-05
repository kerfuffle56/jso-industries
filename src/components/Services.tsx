"use client";

import { useEffect, useRef, useState } from "react";

const services = [
  {
    title: "Commercial Construction",
    description: "Office buildouts, retail spaces, and commercial projects delivered on time and on budget.",
  },
  {
    title: "Residential Construction",
    description: "Custom homes, additions, and new builds with precision craftsmanship.",
  },
  {
    title: "Home Improvement",
    description: "Kitchens, bathrooms, basements, and complete home renovations.",
  },
  {
    title: "Interior Renovation",
    description: "Flooring, drywall, painting, electrical, plumbing, and custom finishes.",
  },
  {
    title: "Exterior & Structural",
    description: "Roofing, siding, foundations, and structural repairs.",
  },
  {
    title: "Project Management",
    description: "End-to-end oversight including permitting, scheduling, and quality control.",
  },
];

export default function Services() {
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
    <section id="services" className="py-32 md:py-40 bg-white" ref={sectionRef}>
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-dark tracking-tight">
            OUR SERVICES
          </h2>
          <div className="mt-4 w-20 h-1 bg-accent mx-auto" />
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-gray-200">
          {services.map((service, i) => (
            <div
              key={service.title}
              className={`bg-white p-10 md:p-12 group hover:bg-gray-light transition-colors ${
                visible ? "animate-fade-in-up" : "opacity-0"
              }`}
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <h3 className="text-xl font-bold text-primary-dark mb-4 group-hover:text-accent transition-colors">
                {service.title}
              </h3>
              <p className="text-gray-mid leading-relaxed">
                {service.description}
              </p>
              <a
                href="#contact"
                className="inline-block mt-6 text-sm font-semibold text-accent hover:text-primary-dark transition-colors"
              >
                LEARN MORE →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
