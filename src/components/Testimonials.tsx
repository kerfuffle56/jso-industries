"use client";
import { useState, useEffect } from "react";

const testimonials = [
  {
    quote:
      "JSO Industries transformed our office space on time and on budget. Professional crew, zero headaches. We'll be using them for every project going forward.",
    name: "Michael R.",
    title: "Commercial Property Owner, Westchester",
  },
  {
    quote:
      "They handled our full home renovation from foundation to finish. The craftsmanship is outstanding. You can tell they take real pride in their work.",
    name: "Sandra T.",
    title: "Homeowner, Fairfield County",
  },
  {
    quote:
      "JSO came highly recommended and they did not disappoint. Our kitchen and bathroom remodel came out better than expected. Will absolutely use them again.",
    name: "Julia M.",
    title: "Homeowner, New Jersey",
  },
];

export default function Testimonials() {
  const [active, setActive] = useState(0);
  const [visible, setVisible] = useState(true);

  const goTo = (i: number) => {
    setVisible(false);
    setTimeout(() => {
      setActive(i);
      setVisible(true);
    }, 250);
  };

  useEffect(() => {
    const t = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setActive((prev) => (prev + 1) % testimonials.length);
        setVisible(true);
      }, 250);
    }, 6000);
    return () => clearInterval(t);
  }, []);

  const t = testimonials[active];

  return (
    <section className="py-28 md:py-36 bg-[#161616]/95 backdrop-blur-sm border-t border-white/[0.06] relative overflow-hidden">
      <span className="absolute top-8 right-6 text-[10rem] md:text-[13rem] font-black text-white/[0.025] select-none leading-none pointer-events-none">
        04
      </span>
      <div className="max-w-4xl mx-auto px-6 text-center">
        {/* Header */}
        <div className="mb-16">
          <p className="text-sm font-semibold text-accent-light uppercase tracking-widest mb-3">
            Testimonials
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
            Trusted by{" "}
            <span className="bg-gradient-to-r from-accent to-accent-light bg-clip-text text-transparent italic">
              Clients
            </span>
          </h2>
        </div>

        {/* Quote */}
        <div
          className="transition-opacity duration-[250ms]"
          style={{ opacity: visible ? 1 : 0 }}
        >
          <svg
            className="w-10 h-10 text-accent/40 mx-auto mb-6"
            fill="currentColor"
            viewBox="0 0 32 32"
            aria-hidden="true"
          >
            <path d="M10 8C6.686 8 4 10.686 4 14v10h10V14H7.999C7.999 11.794 9.793 10 12 10l-2-2zm14 0c-3.314 0-6 2.686-6 6v10h10V14h-6.001C21.999 11.794 23.793 10 26 10l-2-2z" />
          </svg>
          <blockquote className="text-xl md:text-2xl text-white/70 font-light leading-relaxed italic max-w-3xl mx-auto">
            &ldquo;{t.quote}&rdquo;
          </blockquote>
          <div className="mt-8">
            <p className="text-white font-semibold text-base">{t.name}</p>
            <p className="text-white/40 text-sm mt-1">{t.title}</p>
          </div>
        </div>

        {/* Controls */}
        <div className="flex items-center justify-center gap-5 mt-12">
          <button
            onClick={() => goTo((active - 1 + testimonials.length) % testimonials.length)}
            className="w-10 h-10 rounded-full border border-white/[0.12] text-white/40 hover:text-white hover:border-white/30 transition-all duration-200 flex items-center justify-center"
            aria-label="Previous testimonial"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <div className="flex gap-2 items-center">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                className={`h-1 rounded-full transition-all duration-300 ${
                  i === active ? "w-8 bg-accent" : "w-2 bg-white/20 hover:bg-white/40"
                }`}
                aria-label={`Go to testimonial ${i + 1}`}
              />
            ))}
          </div>
          <button
            onClick={() => goTo((active + 1) % testimonials.length)}
            className="w-10 h-10 rounded-full border border-white/[0.12] text-white/40 hover:text-white hover:border-white/30 transition-all duration-200 flex items-center justify-center"
            aria-label="Next testimonial"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
