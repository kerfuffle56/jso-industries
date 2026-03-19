"use client";
import { useState, useEffect, useRef } from "react";

const clips = [
  {
    src: "https://assets.mixkit.co/videos/4170/4170-720.mp4",
    label: "Development",
  },
  {
    src: "https://assets.mixkit.co/videos/49845/49845-720.mp4",
    label: "Architecture",
  },
  {
    src: "https://assets.mixkit.co/videos/4046/4046-720.mp4",
    label: "Interiors",
  },
];

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const [fading, setFading] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    v.src = clips[current].src;
    v.load();
    v.play().catch(() => {});
  }, [current]);

  useEffect(() => {
    const t = setInterval(() => {
      setFading(true);
      setTimeout(() => {
        setCurrent((prev) => (prev + 1) % clips.length);
        setFading(false);
      }, 600);
    }, 8000);
    return () => clearInterval(t);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Video */}
      <div
        className="absolute inset-0 transition-opacity duration-[600ms]"
        style={{ opacity: fading ? 0 : 1 }}
      >
        <video
          ref={videoRef}
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        />
      </div>

      {/* Overlays */}
      <div className="absolute inset-0 bg-black/60" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/40" />

      {/* Film grain */}
      <div className="grain-overlay" aria-hidden="true" />

      {/* Progress bar */}
      <div
        key={current}
        className="absolute bottom-0 left-0 h-[2px] bg-accent animate-progress z-20"
      />

      <div className="relative z-10 text-center px-6 py-32 max-w-5xl mx-auto">
        {/* Clip labels */}
        <div className="animate-fade-in-up flex items-center justify-center gap-8 mb-10">
          {clips.map((clip, i) => (
            <span
              key={clip.label}
              className={`text-xs font-bold tracking-[0.25em] uppercase transition-all duration-500 ${
                i === current ? "text-white" : "text-white/20"
              }`}
            >
              {i === current && (
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-accent mr-2 align-middle" />
              )}
              {clip.label}
            </span>
          ))}
        </div>

        {/* Company wordmark */}
        <div className="animate-fade-in-up mb-8" style={{ animationDelay: "0.05s" }}>
          <p className="text-xs font-bold text-white/30 tracking-[0.45em] uppercase mb-2">
            Real Estate Development &amp; Contracting · NY, CT &amp; NJ
          </p>
          <p className="text-2xl md:text-3xl font-black text-white tracking-[0.25em] uppercase">
            JSO Industries Inc.
          </p>
        </div>

        {/* Tagline */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white tracking-tighter leading-[0.9]">
          <span className="block animate-word-up" style={{ animationDelay: "0.1s" }}>
            We Develop.
          </span>
          <span
            className="block animate-word-up bg-gradient-to-r from-accent to-accent-light bg-clip-text text-transparent italic"
            style={{ animationDelay: "0.25s" }}
          >
            We Build.
          </span>
        </h1>

        {/* Subheading */}
        <p className="animate-fade-in-up-delay-1 mt-10 text-lg md:text-xl text-white/45 max-w-xl mx-auto font-light leading-relaxed">
          We acquire, entitle, and build our own projects. We bring that same developer&apos;s eye to yours.
        </p>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <div className="w-px h-12 bg-gradient-to-b from-white/30 to-transparent" />
      </div>
    </section>
  );
}
