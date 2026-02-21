"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

const services = [
  {
    src: "/imgs/services/service-1.jpg",
    srcMobile: "/imgs/services/service-1.jpg",
    alt: "Structured Operations",
    title: "Structured Operations",
    subtitle: "Predictable timelines. No last-minute coordination.",
  },
  {
    src: "/imgs/services/service-2.jpg",
    srcMobile: "/imgs/services/service-2.jpg",
    alt: "Inventory and Supply Control",
    title: "Inventory & Supply Control",
    subtitle: "Organized rotation. Zero service disruptions.",
  },
  {
    src: "/imgs/services/service-3.jpg",
    srcMobile: "/imgs/services/service-3.jpg",
    alt: "On-Property Support",
    title: "On-Property Support",
    subtitle: "Defined standards. Clear accountability.",
  },
  {
    src: "/imgs/services/service-4.jpg",
    srcMobile: "/imgs/services/service-4.jpg",
    alt: "Performance Tracking",
    title: "Performance Tracking",
    subtitle: "Measured visibility. You see how it performs.",
  },
];

const STAGGER_MS = 120;

export default function ServiceGrid() {
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const isMobile = window.innerWidth < 768;
    if (!isMobile) return;

    // Mark cards as "ready to animate" after mount — avoids SSR hydration mismatches
    // and prevents flash of invisible content on desktop.
    cardRefs.current.forEach((el) => {
      if (el) el.classList.add("sg-card--ready");
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;

          const el = entry.target as HTMLElement;
          const idx = Number(el.dataset.cardIndex ?? 0);

          el.style.setProperty("--reveal-delay", `${idx * STAGGER_MS}ms`);

          // Double rAF ensures browser has painted the hidden initial state
          // before triggering the transition — prevents instant snap.
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
        <div className="flex md:grid md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 overflow-x-auto md:overflow-visible snap-x snap-mandatory pb-8 md:pb-0 -mx-6 px-6 md:mx-0 md:px-0 scrollbar-hide flex-col md:flex-row">
          {services.map((service, index) => (
            <div
              key={service.title}
              ref={(el) => {
                cardRefs.current[index] = el;
              }}
              data-card-index={index}
              className="sg-card group cursor-pointer flex flex-col items-center w-full md:min-w-0 snap-center"
            >
              {/* Image container — 4:5 on mobile, 3:4 on desktop */}
              <div className="relative w-full aspect-[16/9] md:aspect-[16/20] overflow-hidden mb-5 bg-gray-100 shadow-sm transition-shadow duration-700 group-hover:shadow-xl">
                {/* Mobile image */}
                <Image
                  src={service.srcMobile}
                  alt={service.alt}
                  fill
                  className="object-cover object-center transition-transform duration-[1.5s] ease-out group-hover:scale-105 block md:hidden"
                  priority={index === 0}
                />
                {/* Desktop image */}
                <Image
                  src={service.src}
                  alt={service.alt}
                  fill
                  className="object-cover object-top transition-transform duration-[1.5s] ease-out group-hover:scale-105 hidden md:block"
                  priority={index === 0}
                />
                {/* Quiet hover tint — one signal only */}
                <div className="absolute inset-0 bg-navy/0 group-hover:bg-navy/15 transition-colors duration-700" />
              </div>

              {/* Text block */}
              <h3 className="font-playfair text-lg md:text-xl text-navy mb-1.5 group-hover:text-gold transition-colors duration-500 text-center leading-snug">
                {service.title}
              </h3>
              <span className="text-[12px] tracking-[0.18em] uppercase text-gray-400 font-medium text-center group-hover:text-gray-600 transition-colors duration-500 leading-relaxed">
                {service.subtitle}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
