"use client";

import { useEffect, useRef } from "react";

export default function Testimonial() {
  const lineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in-view");
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" },
    );

    if (lineRef.current) observer.observe(lineRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="bg-navy py-32 md:py-48 px-6 relative overflow-hidden">
      {/* Texture Overlay */}
      <div className="absolute inset-0 opacity-10 pointer-events-none mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>

      {/* Schematic Line - Center Spine */}
      <div className="absolute left-1/2 top-0 bottom-0 w-px -ml-[0.5px] z-0 hidden md:block">
        <div
          ref={lineRef}
          className="draw-vertical-line h-0 w-full bg-gold/20 mx-auto"
        ></div>
      </div>

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-gold opacity-5 font-playfair text-[20rem] md:text-[30rem] leading-none pointer-events-none select-none">
        &rdquo;
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <blockquote className="text-3xl md:text-5xl lg:text-6xl font-playfair font-medium text-white leading-tight mb-16">
          "OLIN is an extension of our own housekeeping team."
        </blockquote>
        <cite className="inline-block px-4 py-2 border border-gold/30 rounded-full text-gold tracking-[0.2em] uppercase text-xs md:text-sm font-bold not-italic">
          GM, The Evegren Suites
        </cite>
      </div>
    </section>
  );
}
