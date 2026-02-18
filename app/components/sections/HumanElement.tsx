"use client";

import { useEffect, useRef } from "react";

export default function HumanElement() {
  const sectionRef = useRef<HTMLDivElement>(null);

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
    return () => observer.disconnect();
  }, []);

  return (
    <section className="flex flex-col md:flex-row h-auto md:h-[600px] w-full">
      {/* Visual Left */}
      <div className="w-full md:w-1/2 relative min-h-[400px] overflow-hidden">
        {/* Dark base so there's no flash before image loads */}
        <div className="absolute inset-0 bg-navy" />

        {/*
          he-img-wrap: clips from left → right on reveal (clip-path wipe)
          he-img:      slow Ken Burns zoom + subtle pan
        */}
        <div ref={sectionRef} className="he-img-wrap absolute inset-0">
          <div className="he-img absolute inset-0 bg-[url('/imgs/hygiene-img.1.jpg')] bg-cover bg-center scale-110" />
        </div>

        {/* Subtle dark vignette for depth */}
        <div className="absolute inset-0 bg-gradient-to-r from-navy/20 to-transparent pointer-events-none" />
      </div>

      {/* Copy Right */}
      <div className="w-full md:w-1/2 flex items-center justify-center bg-white p-12 md:p-24">
        <div className="max-w-md">
          <h3 className="text-3xl md:text-4xl font-playfair font-medium text-navy mb-8">
            Your Silent Partner in Excellence.
          </h3>
          <p className="text-lg text-gray-600 leading-relaxed mb-10 font-light">
            &ldquo;We bridge the gap between industrial scale and boutique
            attention. Your reputation begins with the first thing a guest
            touches.&rdquo;
          </p>
          <a
            href="#"
            className="text-gold font-medium tracking-wide hover:underline decoration-gold underline-offset-4 transition-all"
          >
            Our Hygiene Standards &rarr;
          </a>
        </div>
      </div>
    </section>
  );
}
