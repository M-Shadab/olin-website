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
    <section className="relative w-full h-[720px] md:h-screen md:min-h-[800px] flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0 bg-navy">
        <div className="absolute inset-0 bg-gradient-to-b from-navy/5 md:from-navy/30 md:via-transparent md:to-navy/80 to-navy/90 z-10 pointer-events-none" />
        {/* Desktop Hero image */}
        <Image
          src="/imgs/hero.png"
          alt="Background"
          fill
          className="object-cover opacity-90 hidden md:block"
          priority
        />
        {/* Mobile Hero image */}
        <Image
          src="/imgs/new-hero-mobile.jpg"
          alt="Background mobile"
          fill
          className="object-cover opacity-90 block md:hidden"
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
        className="hero-text relative z-20 w-full max-w-5xl px-6 md:px-12 text-center pt-20"
      >
        {/* Line 1: Headline */}
        <div
          className="hero-line"
          style={{ "--hero-delay": "0ms" } as React.CSSProperties}
        >
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-playfair font-medium text-white tracking-tight leading-tight">
            The Invisible Standard
          </h1>
        </div>

        {/* Line 2: Headline sub-line */}
        <div
          className="hero-line"
          style={{ "--hero-delay": "140ms" } as React.CSSProperties}
        >
          <h1 className="text-[2rem] md:text-[3rem] lg:text-[4rem] font-playfair font-medium text-gray-100 md:text-white tracking-tight leading-tight mb-8">
            in Hospitality Operations.
          </h1>
        </div>

        {/* Line 3: Subtext */}
        <div
          className="hero-line"
          style={{ "--hero-delay": "280ms" } as React.CSSProperties}
        >
          <p className="text-xl md:text-2xl text-gray-200 font-light leading-relaxed max-w-3xl mx-auto mb-16 tracking-wide opacity-90">
            Run hospitality on one standard—workflows, service SLAs, inventory &
            consumables, and room-readiness systems, powered by OLIN.
          </p>
        </div>

        {/* Line 4: CTA */}
        <div
          className="hero-line"
          style={{ "--hero-delay": "420ms" } as React.CSSProperties}
        >
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <button
              onClick={() =>
                document
                  .getElementById("partner-form")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="px-14 md:px-20 py-5 text-white bg-gold hover:bg-[#C5A028] transition-all duration-500 text-sm font-bold tracking-[0.2em] uppercase shadow-2xl hover:shadow-gold/20 rounded-sm cursor-pointer transform hover:-translate-y-1"
            >
              Partner With Us
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
