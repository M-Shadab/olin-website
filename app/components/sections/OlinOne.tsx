"use client";

import { useEffect, useRef } from "react";

const capabilities = [
  {
    number: "01",
    title: "Scheduled Pickups",
    description:
      "Structure collection cycles with defined windows — no ad-hoc coordination required.",
  },
  {
    number: "02",
    title: "Service Tracking",
    description:
      "Follow processing status and timeline adherence across every active request.",
  },
  {
    number: "03",
    title: "Service Tickets",
    description:
      "Raise, monitor, and resolve structured service requests with documented accountability.",
  },
  {
    number: "04",
    title: "Performance Snapshots",
    description:
      "Access service delivery reports, inventory summaries, and operational visibility — on demand.",
  },
];

export default function OlinOne() {
  const headingRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const accessRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // ── Heading reveal ──────────────────────────────────────────────────────
    const headingEl = headingRef.current;
    if (headingEl) {
      const headingObs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            headingEl.classList.add("oo-heading--visible");
            headingObs.unobserve(headingEl);
          }
        },
        { threshold: 0.3 },
      );
      headingObs.observe(headingEl);
    }

    // ── Grid items staggered reveal ─────────────────────────────────────────
    const gridEl = gridRef.current;
    if (gridEl) {
      const items = gridEl.querySelectorAll<HTMLElement>(".oo-item");
      const gridObs = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (!entry.isIntersecting) return;
            const el = entry.target as HTMLElement;
            const idx = Number(el.dataset.ooIndex ?? 0);
            el.style.setProperty("--oo-delay", `${idx * 120}ms`);

            requestAnimationFrame(() => {
              requestAnimationFrame(() => {
                el.classList.add("oo-item--visible");
              });
            });

            gridObs.unobserve(el);
          });
        },
        { threshold: 0.15 },
      );

      items.forEach((el) => {
        el.classList.add("oo-item--ready");
        gridObs.observe(el);
      });

      return () => gridObs.disconnect();
    }

    // ── Access note reveal ──────────────────────────────────────────────────
    const accessEl = accessRef.current;
    if (accessEl) {
      const accessObs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            accessEl.classList.add("in-view");
            accessObs.unobserve(accessEl);
          }
        },
        { threshold: 0.3 },
      );
      accessObs.observe(accessEl);
    }
  }, []);

  return (
    <section className="relative py-24 md:py-32 px-6 bg-white bg-noise overflow-hidden">
      {/* Subtle gold vertical accent line — desktop only */}
      <div className="absolute left-1/2 top-0 bottom-0 w-px -ml-[0.5px] z-0 hidden md:block">
        <div className="w-full h-full bg-gold/20" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* ── Heading Block ─────────────────────────────────────────────────── */}
        <div ref={headingRef} className="oo-heading mb-16 md:mb-24 text-center">
          <span className="text-gold text-xs font-bold tracking-[0.2em] uppercase mb-4 block">
            The Access Layer
          </span>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-playfair font-medium text-navy tracking-tight">
            OLIN ONE
          </h2>

          <div className="pillars-rule mx-auto mt-8 h-px bg-gold" />

          <p className="mt-8 text-lg md:text-xl text-gray-500 font-light leading-relaxed max-w-2xl mx-auto">
            The unified operational access point for every OLIN property.
          </p>

          <p className="mt-6 text-base text-gray-400 font-light leading-relaxed max-w-3xl mx-auto">
            OLIN ONE standardizes the way properties coordinate service, track
            execution timelines, raise structured requests, and maintain
            operational discipline. Every interaction follows a defined protocol
            — structured requests, defined timelines, measurable outcomes,
            predictable execution.
          </p>
        </div>

        {/* ── Capability Grid ──────────────────────────────────────────────── */}
        <div
          ref={gridRef}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0 mb-16 md:mb-20"
        >
          {capabilities.map((item, index) => (
            <div
              key={item.number}
              data-oo-index={index}
              className="oo-item group relative text-center p-8 md:p-10 lg:p-12"
            >
              {/* Left border for items 2-4 on desktop */}
              {index > 0 && (
                <div className="absolute top-8 bottom-8 left-0 w-px bg-gray-200 hidden lg:block" />
              )}
              {/* Top border for stacked items on mobile/tablet */}
              {index > 0 && (
                <div className="absolute top-0 left-8 right-8 h-px bg-gray-200 lg:hidden" />
              )}

              {/* Large number */}
              <span className="block text-5xl md:text-6xl font-playfair text-gray-100 mb-6 group-hover:text-gold/20 transition-colors duration-500">
                {item.number}
              </span>

              {/* Gold accent */}
              <div className="w-8 h-px bg-gold/40 mx-auto mb-6 group-hover:w-12 group-hover:bg-gold transition-all duration-500" />

              {/* Title */}
              <h3 className="text-lg font-playfair font-medium text-navy mb-4 group-hover:text-gold transition-colors duration-300">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-sm text-gray-400 leading-relaxed font-light">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* ── Access Note ────────────────────────────────────────────────────── */}
        <div ref={accessRef} className="reveal-up text-center">
          <p className="text-sm text-gray-400 font-light tracking-wide">
            Accessible via WhatsApp.
            <span className="text-gray-500 ml-1">
              No new software. No training required.
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}
