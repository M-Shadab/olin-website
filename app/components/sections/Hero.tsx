"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // 120ms delay ensures the browser has painted the initial hidden state
    // before the transition triggers. rAF standard can be too fast on heavy loads.
    const timer = setTimeout(() => {
      containerRef.current?.classList.add("hero-text--visible");
    }, 120);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative w-full h-[720px] md:h-screen md:min-h-[800px] flex items-center justify-center overflow-hidden bg-navy">
      {/* Background */}
      <div className="absolute inset-0 z-0 bg-navy">
        <div className="absolute inset-0 bg-gradient-to-b from-navy/10 md:from-navy/30 md:via-transparent md:to-navy/90 to-navy z-10 pointer-events-none" />

        {/* Texture Overlay (simulated via CSS if desired, or kept clean for dark mode) */}
        <div className="absolute inset-0 opacity-20 pointer-events-none mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>

        {/* Desktop Hero image */}
        <Image
          src="/imgs/hero.png"
          alt="Background"
          fill
          className="object-cover opacity-80 hidden md:block"
          priority
        />
        {/* Mobile Hero image */}
        <Image
          src="/imgs/new-hero-mobile.jpg"
          alt="Background mobile"
          fill
          className="object-cover opacity-80 block md:hidden"
          priority
        />
      </div>

      {/*
        hero-text: the wrapper that holds all animated children.
        Each child has a --hero-delay custom property for stagger.
        On mount, .hero-text--visible is added, triggering all transitions.
      */}
      <div
        ref={containerRef}
        className="hero-text relative z-20 w-full max-w-6xl px-6 md:px-12 text-center pt-24"
      >
        {/* Line 1: Headline */}
        <div
          className="hero-line"
          style={{ "--hero-delay": "0ms" } as React.CSSProperties}
        >
          <span className="inline-block text-gold text-xs md:text-sm font-bold tracking-[0.25em] uppercase mb-8">
            The New Standard
          </span>
        </div>

        <div
          className="hero-line"
          style={{ "--hero-delay": "100ms" } as React.CSSProperties}
        >
          <h1 className="text-5xl md:text-7xl lg:text-9xl font-playfair font-medium text-white tracking-tight leading-[1.1] mb-4">
            The Invisible Standard
          </h1>
        </div>

        {/* Line 2: Headline sub-line */}
        <div
          className="hero-line"
          style={{ "--hero-delay": "250ms" } as React.CSSProperties}
        >
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-playfair font-light text-gray-200 tracking-wide leading-tight mb-12">
            in Hospitality Operations.
          </h1>
        </div>

        {/* Line 3: Subtext */}
        <div
          className="hero-line"
          style={{ "--hero-delay": "400ms" } as React.CSSProperties}
        >
          <p className="text-lg md:text-2xl text-gray-300 font-light leading-relaxed max-w-3xl mx-auto mb-16 opacity-90">
            Run hospitality on one standard—workflows, service SLAs, inventory &
            consumables, and room-readiness systems,&nbsp;
            <span className="text-white font-normal border-b border-gold/50 pb-0.5">
              powered by&nbsp;OLIN.
            </span>
          </p>
        </div>

        {/* Line 4: CTA */}
        <div
          className="hero-line"
          style={{ "--hero-delay": "550ms" } as React.CSSProperties}
        >
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <button
              onClick={() =>
                document
                  .getElementById("partner-form")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="group relative px-12 py-5 text-navy bg-white hover:bg-gold transition-colors duration-500 text-sm font-bold tracking-[0.25em] uppercase overflow-hidden"
            >
              <span className="relative z-10 transition-colors duration-300">
                Partner With Us
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
