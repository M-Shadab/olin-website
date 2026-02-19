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

  return (
    <section className="py-24 md:py-32 px-6 bg-off-white bg-noise relative">
      <div className="max-w-7xl mx-auto">
        <div ref={headingRef} className="fw-heading mb-16 md:mb-24 text-center">
          <span className="text-gold text-xs font-bold tracking-[0.2em] uppercase mb-4 block">
            The System
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-playfair font-medium text-navy">
            The OLIN Framework
          </h2>
          <div className="pillars-rule mx-auto mt-8 h-px bg-gold" />
        </div>

        {/* Mobile: Horizontal scroll, Desktop: Clean Grid */}
        <div className="flex md:grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-12 overflow-x-auto md:overflow-visible pb-8 md:pb-0 scrollbar-hide">
          {items.map((item, index) => (
            <div
              key={item.number}
              ref={(el) => {
                cardRefs.current[index] = el;
              }}
              data-fw-index={index}
              className="fw-card group relative p-10 bg-white border border-gray-100 hover:border-gold/30 shadow-sm hover:shadow-lg hover:-translate-y-2 transition-all duration-500 min-w-[85vw] md:min-w-0"
            >
              <div className="absolute top-0 left-0 w-0 h-1 bg-gold transition-all duration-700 group-hover:w-full"></div>

              <span className="block text-4xl font-playfair text-gray-200 mb-6 group-hover:text-gold/50 transition-colors duration-300">
                {item.number}
              </span>
              <h3 className="text-xl md:text-2xl font-playfair font-medium text-navy mb-4">
                {item.title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed font-light">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
