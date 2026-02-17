"use client";

export default function Testimonial() {
  return (
    <section className="bg-navy py-32 px-6 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 text-gold opacity-10 font-playfair text-[30rem] leading-none pointer-events-none select-none">
        &rdquo;
      </div>
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <blockquote className="text-3xl md:text-5xl font-playfair font-medium text-white leading-tight mb-12">
          "OLIN is an extension of our own housekeeping team."
        </blockquote>
        <cite className="text-gold tracking-widest uppercase text-sm font-bold not-italic">
          — GM, The Evegren Suites
        </cite>
      </div>
    </section>
  );
}
