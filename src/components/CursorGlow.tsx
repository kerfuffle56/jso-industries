"use client";
import { useEffect, useRef } from "react";

export default function CursorGlow() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const move = (e: MouseEvent) => {
      if (!ref.current) return;
      ref.current.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
    };
    window.addEventListener("mousemove", move, { passive: true });
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <div
      ref={ref}
      aria-hidden="true"
      className="pointer-events-none fixed top-0 left-0 z-[9999] w-[700px] h-[700px] -translate-x-1/2 -translate-y-1/2 hidden md:block"
      style={{
        background:
          "radial-gradient(circle, rgba(220,38,38,0.055) 0%, transparent 65%)",
      }}
    />
  );
}
