"use client";

import { useEffect, useRef } from "react";
import { Workflow, Clock, Scaling } from "lucide-react";

const pillars = [
  {
    title: "Consistent Quality",
    description:
      "Every linen, every day. Industrial consistency with boutique care.",
    icon: Workflow,
  },
  {
    title: "Reliable Timing",
    description:
      "GPS-tracked logistics. We arrive before you need us, every time.",
    icon: Clock,
  },
  {
    title: "Adaptive Solutions",
    description:
      "From 10 rooms to 500. We scale our operations to match your growth.",
    icon: Scaling,
  },
];

export default function Pillars() {
  const headingRef = useRef<HTMLDivElement>(null);
  const pillarRefs = useRef<(HTMLDivElement | null)[]>([]);
  const lineRef = useRef<HTMLDivElement>(null);
  const horizontalLineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
            if (entry.target.classList.contains("pillar-card")) {
              entry.target.classList.add("pillar-card--visible");
            }
            if (entry.target.classList.contains("pillars-heading")) {
              entry.target.classList.add("pillars-heading--visible");
            }
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -50px 0px" },
    );

    if (headingRef.current) observer.observe(headingRef.current);
    if (lineRef.current) observer.observe(lineRef.current);
    if (horizontalLineRef.current) observer.observe(horizontalLineRef.current);

    pillarRefs.current.forEach((el) => {
      if (el) {
        el.classList.add("pillar-card--ready");
        observer.observe(el);
      }
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section className="relative py-32 px-6 bg-white bg-noise border-b border-gray-100 overflow-hidden">
      {/* Schematic Line - Center Spine */}
      <div className="absolute left-1/2 top-0 bottom-0 w-px -ml-[0.5px] z-0 hidden md:block">
        <div
          ref={lineRef}
          className="draw-vertical-line h-0 w-full bg-gold/20 mx-auto"
        ></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Heading */}
        <div
          ref={headingRef}
          className="pillars-heading mb-20 text-center relative z-20"
        >
          <span className="text-gold text-xs font-bold tracking-[0.2em] uppercase mb-4 block">
            Why We Excel
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-playfair font-medium text-navy">
            The OLIN Standard
          </h2>
          <div className="pillars-rule mx-auto mt-8 h-px bg-gold" />
        </div>

        {/* Schematic Crossbar (Desktop Only) */}
        <div className="absolute top-[380px] left-0 right-0 hidden md:flex justify-center items-center pointer-events-none z-0">
          {/* The horizontal line container */}
          <div className="w-full max-w-5xl h-px relative">
            <div
              ref={horizontalLineRef}
              className="absolute inset-0 bg-gold/20 origin-center scale-x-0 transition-transform duration-[1.5s] ease-out in-view:scale-x-100"
            ></div>
            {/* Connection Nodes */}
            <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-gold rounded-full opacity-0 transition-opacity duration-1000 delay-1000 in-view:opacity-100"></div>
            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-gold rounded-full opacity-0 transition-opacity duration-1000 delay-1000 in-view:opacity-100"></div>
          </div>
        </div>

        {/* Pillar cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-12 relative z-10">
          {pillars.map((pillar, index) => (
            <div
              key={pillar.title}
              ref={(el) => {
                pillarRefs.current[index] = el;
              }}
              style={
                { "--pillar-delay": `${index * 150}ms` } as React.CSSProperties
              }
              className="pillar-card group text-center bg-white p-8 md:p-12 relative"
            >
              {/* Icon Container with connector node for center card */}
              <div className="mb-8 relative inline-flex items-center justify-center w-20 h-20 rounded-full bg-gray-50 group-hover:bg-navy/5 transition-colors duration-500 z-10">
                {/* Connection Node for Center Card */}
                {index === 1 && (
                  <div className="absolute top-0 -mt-12 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-gold rounded-full hidden md:block"></div>
                )}
                <pillar.icon className="pillar-icon w-8 h-8 text-navy stroke-[1.5] group-hover:scale-110 transition-transform duration-500" />
              </div>

              <h3 className="text-2xl md:text-3xl font-playfair font-medium text-navy mb-6">
                {pillar.title}
              </h3>
              <p className="text-gray-500 leading-loose font-light text-lg">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
