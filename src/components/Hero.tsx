"use client";
import { useState, useEffect, useRef } from "react";

const clips = [
  {
    src: "https://assets.mixkit.co/videos/30390/30390-720.mp4",
    label: "Development",
  },
  {
    src: "https://assets.mixkit.co/videos/41159/41159-720.mp4",
    label: "Commercial",
  },
  {
    src: "https://assets.mixkit.co/videos/48394/48394-720.mp4",
    label: "Residential",
  },
];

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const [activeSlot, setActiveSlot] = useState<0 | 1>(0);
  const [crossfading, setCrossfading] = useState(false);
  const videoA = useRef<HTMLVideoElement>(null);
  const videoB = useRef<HTMLVideoElement>(null);

  // Initial load: A plays clip 0, B silently preloads clip 1
  useEffect(() => {
    if (videoA.current) {
      videoA.current.src = clips[0].src;
      videoA.current.load();
      videoA.current.play().catch(() => {});
    }
    if (videoB.current) {
      videoB.current.src = clips[1 % clips.length].src;
      videoB.current.load();
    }
  }, []);

  // Cycle every 8s with crossfade
  useEffect(() => {
    const t = setInterval(() => {
      const nextIndex = (current + 1) % clips.length;
      const nextSlot = activeSlot === 0 ? 1 : 0;
      const nextVideo = nextSlot === 0 ? videoA.current : videoB.current;
      const prevVideo = activeSlot === 0 ? videoA.current : videoB.current;

      // Play the preloaded next video
      if (nextVideo) nextVideo.play().catch(() => {});

      setCrossfading(true);

      setTimeout(() => {
        setActiveSlot(nextSlot as 0 | 1);
        setCurrent(nextIndex);
        setCrossfading(false);

        // Preload the clip after next into the now-background slot
        const afterNextIndex = (nextIndex + 1) % clips.length;
        if (prevVideo) {
          prevVideo.src = clips[afterNextIndex].src;
          prevVideo.load();
        }
      }, 900);
    }, 8000);

    return () => clearInterval(t);
  }, [current, activeSlot]);

  // Opacity: active slot = 1, background slot = 0; swap during crossfade
  const opacityA = crossfading
    ? (activeSlot === 0 ? 0 : 1)
    : (activeSlot === 0 ? 1 : 0);

  const opacityB = crossfading
    ? (activeSlot === 1 ? 0 : 1)
    : (activeSlot === 1 ? 1 : 0);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Video slot A */}
      <div
        className="absolute inset-0 transition-opacity duration-[900ms] ease-in-out"
        style={{ opacity: opacityA }}
      >
        <video ref={videoA} muted loop playsInline className="w-full h-full object-cover" />
      </div>

      {/* Video slot B */}
      <div
        className="absolute inset-0 transition-opacity duration-[900ms] ease-in-out"
        style={{ opacity: opacityB }}
      >
        <video ref={videoB} muted loop playsInline className="w-full h-full object-cover" />
      </div>

      {/* Overlays */}
      <div className="absolute inset-0 bg-black/55" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/15 to-black/35" />

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
              className={`text-xs font-bold tracking-[0.25em] uppercase transition-all duration-700 ${
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
            Real Estate Development &amp; General Contracting · NY, CT &amp; NJ
          </p>
          <p className="text-2xl md:text-3xl font-black text-white tracking-[0.25em] uppercase">
            JSO Industries
          </p>
        </div>

        {/* Tagline */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white tracking-tighter leading-[0.9]">
          <span className="block animate-word-up" style={{ animationDelay: "0.1s" }}>
            Develop.
          </span>
          <span className="block animate-word-up" style={{ animationDelay: "0.2s" }}>
            Build.
          </span>
          <span
            className="block animate-word-up bg-gradient-to-r from-accent to-red-400 bg-clip-text text-transparent italic"
            style={{ animationDelay: "0.32s" }}
          >
            Own.
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
