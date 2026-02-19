"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

export default function HumanElement() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("he-revealed");
          observer.unobserve(el);
        }
      },
      { threshold: 0.15 },
    );

    observer.observe(el);

    // Line observer
    const lineObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in-view");
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" },
    );

    if (lineRef.current) lineObserver.observe(lineRef.current);

    return () => {
      observer.disconnect();
      lineObserver.disconnect();
    };
  }, []);

  return (
    <section className="flex flex-col md:flex-row h-auto md:h-[700px] w-full relative">
      {/* Schematic Line - Center Spine (visible on desktop) */}
      <div className="absolute left-1/2 top-0 bottom-0 w-px -ml-[0.5px] z-20 hidden md:block pointer-events-none">
        <div
          ref={lineRef}
          className="draw-vertical-line h-0 w-full bg-gold/30 mx-auto"
        ></div>
      </div>

      <div className="hidden md:block w-full md:w-1/2 relative min-h-[400px]">
        <div className="absolute inset-0 bg-navy">
          <Image
            src="/imgs/hygiene-img.2.jpg"
            alt="Hygiene Standards"
            fill
            className="object-cover object-center opacity-80"
          />
          <div className="absolute inset-0 bg-navy/20 mix-blend-multiply"></div>
        </div>
      </div>

      {/* Visual Left (Mobile) */}
      <div className="md:hidden w-full md:w-1/2 relative min-h-[400px] overflow-hidden">
        <div className="absolute inset-0 bg-navy" />
        <div ref={sectionRef} className="he-img-wrap absolute inset-0">
          <div className="he-img absolute inset-0">
            <Image
              src="/imgs/hygiene-img.2.jpg"
              alt="Hygiene Standards"
              fill
              className="object-cover object-center scale-110"
            />
          </div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-navy/40 to-transparent pointer-events-none" />
      </div>

      {/* Copy Right */}
      <div className="w-full md:w-1/2 flex items-center justify-center bg-white bg-noise p-12 md:p-24 relative">
        <div className="max-w-md relative z-10">
          <span className="block text-gold text-xs font-bold tracking-[0.2em] uppercase mb-6">
            The Human Element
          </span>
          <h3 className="text-3xl md:text-5xl font-playfair font-medium text-navy mb-8 leading-tight">
            Your Silent Partner in Excellence.
          </h3>
          <p className="text-lg text-gray-600 leading-relaxed mb-12 font-light">
            &ldquo;We bridge the gap between industrial scale and boutique
            attention. Your reputation begins with the first thing a guest
            touches.&rdquo;
          </p>
          <a
            href="#"
            className="group inline-flex items-center gap-2 text-navy font-bold text-sm tracking-[0.15em] uppercase hover:text-gold transition-colors duration-300"
          >
            <span>Our Hygiene Standards</span>
            <span className="group-hover:translate-x-1 transition-transform duration-300">
              &rarr;
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
