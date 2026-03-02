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
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
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
        { threshold: 0.5 },
      );
      headingObs.observe(headingEl);
    }

    // ── Staggered card reveal ───────────────────────────────────────────────
    const cardObs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const el = entry.target as HTMLElement;
          const idx = Number(el.dataset.ooIndex ?? 0);
          el.style.setProperty("--oo-delay", `${idx * 120}ms`);

          requestAnimationFrame(() => {
            requestAnimationFrame(() => {
              el.classList.add("oo-card--visible");
            });
          });

          cardObs.unobserve(el);
        });
      },
      { threshold: 0.15 },
    );

    cardRefs.current.forEach((el) => {
      if (el) {
        el.classList.add("oo-card--ready");
        cardObs.observe(el);
      }
    });

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

    return () => {
      cardObs.disconnect();
    };
  }, []);

  return (
    <section className="relative py-24 md:py-32 px-6 bg-navy bg-noise overflow-hidden">
      {/* Subtle gold vertical accent line — desktop only */}
      <div className="absolute left-1/2 top-0 bottom-0 w-px -ml-[0.5px] z-0 hidden md:block">
        <div className="w-full h-full bg-gold/10" />
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        {/* ── Heading Block ─────────────────────────────────────────────────── */}
        <div ref={headingRef} className="oo-heading mb-16 md:mb-20 text-center">
          <span className="text-gold text-xs font-bold tracking-[0.2em] uppercase mb-4 block">
            The Access Layer
          </span>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-playfair font-medium text-white tracking-tight">
            OLIN ONE
          </h2>

          <div className="pillars-rule mx-auto mt-8 h-px bg-gold" />

          <p className="mt-8 text-lg md:text-xl text-gray-300 font-light leading-relaxed max-w-2xl mx-auto">
            The unified operational access point for every OLIN property.
          </p>
        </div>

        {/* ── Core Explanation ───────────────────────────────────────────────── */}
        <div className="mb-16 md:mb-20 max-w-3xl mx-auto text-center">
          <p className="text-base md:text-lg text-gray-400 font-light leading-relaxed">
            OLIN ONE standardizes the way properties coordinate service, track
            execution timelines, raise structured requests, and maintain
            operational discipline. Every interaction follows a defined protocol
            — structured requests, defined timelines, measurable outcomes,
            predictable execution.
          </p>
        </div>

        {/* ── Capability Cards ──────────────────────────────────────────────── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-16 md:mb-20">
          {capabilities.map((item, index) => (
            <div
              key={item.number}
              ref={(el) => {
                cardRefs.current[index] = el;
              }}
              data-oo-index={index}
              className="oo-card group relative p-8 md:p-10 border border-white/8 bg-white/[0.03] backdrop-blur-sm hover:border-gold/25 hover:bg-white/[0.06] transition-all duration-500"
            >
              {/* Top gold accent bar on hover */}
              <div className="absolute top-0 left-0 w-0 h-px bg-gold transition-all duration-700 group-hover:w-full" />

              <span className="block text-3xl font-playfair text-white/15 mb-4 group-hover:text-gold/30 transition-colors duration-300">
                {item.number}
              </span>

              <h3 className="text-lg md:text-xl font-playfair font-medium text-white mb-3">
                {item.title}
              </h3>

              <p className="text-sm text-gray-400 leading-relaxed font-light">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* ── Access Note ────────────────────────────────────────────────────── */}
        <div
          ref={accessRef}
          className="reveal-up text-center border-t border-white/10 pt-10"
        >
          <p className="text-sm text-gray-500 font-light tracking-wide">
            Accessible via WhatsApp.
            <span className="text-gray-400 ml-1">
              No new software. No training required.
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}
