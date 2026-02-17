"use client";

import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative w-full h-[720px] md:h-screen md:min-h-[800px] flex items-center justify-center overflow-hidden">
      {/* Background - Simulating "Crisp white linen fold" with a high-quality abstract placeholder or color */}
      <div className="absolute inset-0 z-0 bg-navy">
        {/* Gradient Overlay for Depth */}
        <div className="absolute inset-0 bg-gradient-to-b from-navy/5 md:from-navy/30 md:via-transparent md:to-navy/80 to-navy/90 z-10 pointer-events-none" />
        {/* Desktop Hero image */}
        <Image
          src="/imgs/hero.png"
          alt="Background"
          fill
          className="object-cover opacity-90 hidden md:block"
          priority
        />

        {/* Mobile Hero image */}
        <Image
          // src="/imgs/hero-mobile.jpg"
          src="/imgs/new-hero-mobile.jpg"
          alt="Background mobile"
          fill
          className="object-cover opacity-90 block md:hidden"
          priority
        />
      </div>

      <div className="relative z-20 w-full max-w-5xl px-6 md:px-12 text-center pt-20">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-playfair font-medium text-white mb-8 tracking-tight leading-tight">
          The Invisible Standard <br />
          <span className="text-gray-100 md:text-white text-[2rem] md:text-[3rem] lg:text-[4rem]">
            in Hospitality Operations.
          </span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-200 font-light leading-relaxed max-w-3xl mx-auto mb-16 tracking-wide opacity-90">
          Orchestrating hospitality excellence for the world's most demanding
          properties.
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <button
            onClick={() =>
              document
                .getElementById("partner-form")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="px-14 md:px-20 py-5 text-white bg-gold hover:bg-[#C5A028] transition-all duration-500 text-sm font-bold tracking-[0.2em] uppercase shadow-2xl hover:shadow-gold/20 rounded-sm cursor-pointer transform hover:-translate-y-1 cursor-pointer"
          >
            Partner With Us
          </button>
        </div>
      </div>
    </section>
  );
}
