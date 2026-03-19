"use client";
import { useEffect, useRef, useState } from "react";

const stats = [
  { value: "10+", label: "Years in Construction" },
  { value: "100+", label: "Projects Delivered" },
  { value: "3", label: "States Operating" },
  { value: "1", label: "Point of Contact" },
];

function CountUp({ value }: { value: string }) {
  const num = parseInt(value);
  const suffix = value.replace(/[0-9]/g, "");
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const ran = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !ran.current) {
          ran.current = true;
          const duration = 1200;
          const start = performance.now();
          const tick = (now: number) => {
            const progress = Math.min((now - start) / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.round(eased * num));
            if (progress < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
        }
      },
      { threshold: 0.5 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [num]);

  return <span ref={ref}>{count}{suffix}</span>;
}

export default function Stats() {
  return (
    <section className="py-10 bg-accent/90 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-0 md:divide-x md:divide-white/20">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center py-2">
              <div className="text-4xl md:text-5xl font-black text-white tracking-tight">
                <CountUp value={stat.value} />
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
