"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

const services = [
  {
    // src: "/imgs/sec-1-1.1.jpg",
    src: "/imgs/services/service-1.jpg",
    srcMobile: "/imgs/services/service-1.jpg",
    // srcMobile: "/imgs/sec-1-1.2-mobile.jpg",
    alt: "Premium Towels",
    // title: "Laundry & Linen",
    // title: "Operational Framework",
    title: "Structured Operations",
    // subtitle: "Spotless Daily Service",
    subtitle:
      "System managing daily operations, service timelines, and inventory coordination.",
  },
  {
    src: "/imgs/services/service-2.jpg",
    // src: "/imgs/sec-1-2.1.jpg",
    srcMobile: "/imgs/services/service-2.jpg",
    alt: "Staff Support",
    // title: "Room Support",
    // title: "Supply & Asset Intelligence",
    title: "Inventory & Supply Control",
    // subtitle: "Textiles & Robes",
    subtitle:
      // "Structured inventory rotation, consumption forecasting, and continuity planning to eliminate operational disruption.",
      "Organized inventory rotation and demand planning to ensure uninterrupted service.",
    // "Real-time tracking and managed rotation of operational assets to ensure uninterrupted service delivery.",
  },
  {
    src: "/imgs/services/service-3.jpg",
    srcMobile: "/imgs/services/service-3.jpg",
    alt: "Housekeeping",
    // title: "Operational Support",
    title: "On-Property Support",
    // title: "Housekeeping",
    subtitle:
      "On-property execution aligned with clear workflows and service standards.",
    // "On-ground execution aligned with structured workflows, SLAs, and performance benchmarks.",
    // subtitle: "Staff Augmentation",
  },
  {
    src: "/imgs/services/service-4.jpg",
    // src: "/imgs/sec-1-4.4.jpg",
    alt: "Amenities",
    // title: "Performance Intelligence Layer",
    // title: "Performance & Commercial Uplift",
    title: "Performance Tracking",
    subtitle:
      "Clear reporting and measurable improvements in service quality and cost efficiency.",
    // "Turning structured operations into measurable gains across service quality, cost control, and revenue performance.",
    // "Measurable improvements across service quality, operational efficiency, and cost control.",
    // subtitle: "Chemicals & Carts",
  },
  // {
  //   src: "/imgs/sec-1-5.3.png",
  //   alt: "Sustainability",
  //   title: "Sustainability",
  //   subtitle: "Eco-Certified Process",
  // },
];

const STAGGER_MS = 120;

export default function ServiceGrid() {
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    // Use visualViewport width so DevTools mobile emulation works correctly.
    // Falls back to window.innerWidth which also respects DevTools viewport.
    const isMobile = window.innerWidth < 768;
    if (!isMobile) return;

    // Mark cards as "ready to animate" — this applies the hidden initial state
    // AFTER the component has mounted, preventing a flash of invisible content
    // on desktop and avoiding SSR hydration mismatches.
    cardRefs.current.forEach((el) => {
      if (el) el.classList.add("sg-card--ready");
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;

          const el = entry.target as HTMLElement;
          const idx = Number(el.dataset.cardIndex ?? 0);

          // Set the per-card stagger delay as a CSS custom property
          el.style.setProperty("--reveal-delay", `${idx * STAGGER_MS}ms`);

          // Small rAF ensures the browser has painted the hidden state
          // before we trigger the transition — prevents instant snap.
          requestAnimationFrame(() => {
            requestAnimationFrame(() => {
              el.classList.add("sg-card--visible");
            });
          });

          observer.unobserve(el);
        });
      },
      { threshold: 0.12 },
    );

    cardRefs.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section className="w-full px-6 -mt-20 relative z-30 mb-24">
      <div className="max-w-7xl mx-auto">
        <div className="flex md:grid md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-8 overflow-x-auto md:overflow-visible snap-x snap-mandatory pb-8 md:pb-0 -mx-6 px-6 md:mx-0 md:px-0 scrollbar-hide flex-col md:flex-row">
          {services.map((service, index) => (
            <div
              key={service.title}
              ref={(el) => {
                cardRefs.current[index] = el;
              }}
              data-card-index={index}
              className="sg-card group cursor-pointer flex flex-col items-center w-full md:min-w-0 snap-center mb-6 md:mb-0"
            >
              <div className="relative w-full aspect-[16/9] md:aspect-[3/4] overflow-hidden mb-6 bg-gray-100 shadow-sm transition-all duration-700 group-hover:shadow-2xl group-hover:shadow-navy/10 border border-transparent group-hover:border-gold/30">
                {/* Mobile image — shown only below md breakpoint */}
                <Image
                  src={service.srcMobile ?? service.src}
                  alt={service.alt}
                  fill
                  className="object-cover object-top transition-transform duration-[1.5s] ease-out group-hover:scale-105 block md:hidden"
                  priority={index === 0}
                />
                {/* Desktop image — shown only at md and above */}
                <Image
                  src={service.src}
                  alt={service.alt}
                  fill
                  className="object-cover object-center transition-transform duration-[1.5s] ease-out group-hover:scale-105 hidden md:block"
                  priority={index === 0}
                />
                <div className="absolute inset-0 bg-navy/0 group-hover:bg-navy/10 transition-colors duration-700" />
              </div>
              <h3 className="font-playfair text-xl text-navy mb-2 group-hover:text-gold transition-colors duration-500 text-center">
                {service.title}
              </h3>
              <span className="text-[10px] tracking-[0.2em] uppercase text-gray-400 font-medium text-center group-hover:text-navy transition-colors duration-500">
                {service.subtitle}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
