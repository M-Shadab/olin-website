"use client";

import { useEffect, useRef } from "react";

const items = [
  {
    number: "01",
    title: "Laundry & Linen",
    description:
      "High-capacity washing, precision pressing, and spotless delivery specific to your inventory.",
  },
  {
    number: "02",
    title: "Supply & Rotation",
    description:
      "Automated inventory management ensuring you never run short of daily essentials.",
  },
  {
    number: "03",
    title: "Guest Room Support",
    description:
      "Beyond just sheets—duvets, robes, and specialized room textiles handled with care.",
  },
  {
    number: "04",
    title: "Amenity Curations",
    description:
      "Curated bathroom and room amenities from premium brands, packaged for your brand.",
  },
  {
    number: "05",
    title: "Facility Supply",
    description:
      "Housekeeping carts, cleaning chemicals, and staff uniforms sourced and delivered.",
  },
  {
    number: "06",
    title: "Sustainable Green-Care",
    description:
      "Eco-friendly processing options significantly reducing water and energy usage.",
  },
];

export default function Framework() {
  const headingRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    // ── Heading animation ──────────────────────────────────────────────────
    const headingEl = headingRef.current;
    if (headingEl) {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            headingEl.classList.add("fw-heading--visible");
            observer.unobserve(headingEl);
          }
        },
        { threshold: 0.5 },
      );
      observer.observe(headingEl);
    }

    // ── Cards staggered animation ──────────────────────────────────────────
    const cardObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const el = entry.target as HTMLElement;
          const idx = Number(el.dataset.fwIndex ?? 0);

          el.style.setProperty("--fw-delay", `${idx * 100}ms`);

          requestAnimationFrame(() => {
            requestAnimationFrame(() => {
              el.classList.add("fw-card--visible");
            });
          });

          cardObserver.unobserve(el);
        });
      },
      { threshold: 0.15 },
    );

    cardRefs.current.forEach((el) => {
      if (el) {
        el.classList.add("fw-card--ready");
        cardObserver.observe(el);
      }
    });

    return () => {
      cardObserver.disconnect();
    };
  }, []);

  const frameworkGridStyle =
    "flex md:grid md:grid-cols-2 lg:grid-cols-3 md:border-t md:border-l md:border-black/10 snap-x snap-mandatory md:snap-none overflow-x-auto scrollbar-hide md:overflow-hidden";

  const frameworkCardStyle =
    "fw-card group relative p-12 border border-r-0 md:border-t-0 md:border-l-0 md:border-r border-black/10 hover:bg-white transition-colors duration-500 min-w-[85vw] md:min-w-[280px] snap-center";

  return (
    <section className="py-16 md:py-24 px-6 bg-off-white bg-noise">
      <div className="max-w-7xl mx-auto">
        <div ref={headingRef} className="fw-heading mb-8 md:mb-16 text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-playfair font-medium text-navy">
            The OLIN Framework
          </h2>
          {/* Animated gold rule that draws in under the heading */}
          <div className="pillars-rule mx-auto mt-6 h-px bg-[#D4AF37]" />
        </div>

        {/* Mobile: Horizontal scroll, Desktop: Bordered grid */}
        <div className={frameworkGridStyle}>
          {items.map((item, index) => (
            <div
              key={item.number}
              ref={(el) => {
                cardRefs.current[index] = el;
              }}
              data-fw-index={index}
              className={frameworkCardStyle}
            >
              <span className="block text-xs font-mono text-gray-300 mb-4 md:mb-6 group-hover:text-gold transition-colors duration-300">
                {item.number}
              </span>
              <h3 className="text-xl md:text-2xl font-playfair font-medium text-navy mb-3 md:mb-4 group-hover:translate-x-1 transition-transform duration-300">
                {item.title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed font-light group-hover:text-gray-600 transition-colors duration-300">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
