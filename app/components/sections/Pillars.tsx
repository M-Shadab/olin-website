"use client";

import { useEffect, useRef } from "react";

const pillars = [
  {
    title: "Consistent Quality",
    description:
      "Every linen, every day. Industrial consistency with boutique care.",
    icon: (
      <svg
        width="40"
        height="40"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="pillar-icon"
      >
        <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
  },
  {
    title: "Reliable Timing",
    description:
      "GPS-tracked logistics. We arrive before you need us, every time.",
    icon: (
      <svg
        width="40"
        height="40"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="pillar-icon"
      >
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
  },
  {
    title: "Adaptive Solutions",
    description:
      "From 10 rooms to 500. We scale our operations to match your growth.",
    icon: (
      <svg
        width="40"
        height="40"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="pillar-icon"
      >
        <path d="M3 3v18h18" />
        <path d="M18.7 8l-5.1 5.2-2.8-2.7L7 14.3" />
      </svg>
    ),
  },
];

export default function Pillars() {
  const headingRef = useRef<HTMLDivElement>(null);
  const pillarRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    // ── Heading reveal ──────────────────────────────────────────────────────
    const headingEl = headingRef.current;
    if (headingEl) {
      const headingObserver = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            headingEl.classList.add("pillars-heading--visible");
            headingObserver.unobserve(headingEl);
          }
        },
        { threshold: 0.3 },
      );
      headingObserver.observe(headingEl);
    }

    // ── Pillar cards staggered reveal ───────────────────────────────────────
    const cardObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const el = entry.target as HTMLElement;
          const idx = Number(el.dataset.pillarIndex ?? 0);
          el.style.setProperty("--pillar-delay", `${idx * 150}ms`);
          requestAnimationFrame(() => {
            requestAnimationFrame(() => {
              el.classList.add("pillar-card--visible");
            });
          });
          cardObserver.unobserve(el);
        });
      },
      { threshold: 0.2 },
    );

    pillarRefs.current.forEach((el) => {
      if (el) {
        el.classList.add("pillar-card--ready");
        cardObserver.observe(el);
      }
    });

    return () => {
      cardObserver.disconnect();
    };
  }, []);

  return (
    <section className="py-24 md:py-32 px-6 bg-white border-b border-black/5">
      <div className="max-w-7xl mx-auto">
        {/* Heading — animates as one unit */}
        <div ref={headingRef} className="pillars-heading mb-20 text-center">
          <span className="text-gold text-xs font-bold tracking-[0.2em] uppercase mb-4 block">
            Why We Excel
          </span>
          <h2 className="text-4xl md:text-5xl font-playfair font-medium text-navy">
            The OLIN Standard
          </h2>
          {/* Animated gold rule that draws in under the heading */}
          <div className="pillars-rule mx-auto mt-6 h-px bg-gold" />
        </div>

        {/* Pillar cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-0 divide-y md:divide-y-0 md:divide-x divide-black/10">
          {pillars.map((pillar, index) => (
            <div
              key={pillar.title}
              ref={(el) => {
                pillarRefs.current[index] = el;
              }}
              data-pillar-index={index}
              className="pillar-card group px-6 md:px-12 py-8 md:py-4 text-center"
            >
              {/* Icon — strokes draw on when card becomes visible */}
              <div className="mb-6 text-gold flex justify-center group-hover:-translate-y-1 transition-transform duration-500">
                {pillar.icon}
              </div>

              <h3 className="text-2xl font-playfair font-medium text-navy mb-4">
                {pillar.title}
              </h3>
              <p className="text-gray-500 leading-relaxed font-light">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
