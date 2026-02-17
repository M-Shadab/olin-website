"use client";

import Image from "next/image";

export default function ServiceGrid() {
  return (
    <section className="w-full px-6 -mt-20 relative z-30">
      <div className="max-w-7xl mx-auto">
        <div className="flex md:grid md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-12 overflow-x-auto md:overflow-visible snap-x snap-mandatory pb-8 md:pb-0 -mx-6 px-6 md:mx-0 md:px-0 scrollbar-hide">
          {/* Item 1: Laundry & Linen */}
          <div className="group cursor-pointer flex flex-col items-center min-w-[240px] md:min-w-0 snap-center">
            <div className="relative w-full aspect-[3/4] overflow-hidden mb-6 bg-gray-100 shadow-sm transition-shadow duration-500 group-hover:shadow-md">
              <Image
                src="/imgs/sec-1-1.png"
                alt="Premium Towels"
                fill
                className="object-cover transition-transform duration-1000 group-hover:scale-105"
                priority
              />
              <div className="absolute inset-0 bg-navy/0 group-hover:bg-navy/5 transition-colors duration-500" />
            </div>
            <h3 className="font-playfair text-xl dark:text-gray-300 dark:md:text-navy text-navy mb-2 group-hover:text-gold transition-colors duration-300">
              Laundry & Linen
            </h3>
            <span className="text-[10px] tracking-[0.2em] uppercase text-gray-400 font-medium">
              Spotless Daily Service
            </span>
          </div>

          {/* Item 2: Guest Room Support */}
          <div className="group cursor-pointer flex flex-col items-center min-w-[240px] md:min-w-0 snap-center">
            <div className="relative w-full aspect-[3/4] overflow-hidden mb-6 bg-gray-100 shadow-sm transition-shadow duration-500 group-hover:shadow-md">
              <Image
                src="/imgs/sec-1-2.png"
                alt="Staff Support"
                fill
                className="object-cover transition-transform duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-navy/0 group-hover:bg-navy/5 transition-colors duration-500" />
            </div>
            <h3 className="font-playfair text-xl dark:text-gray-300 dark:md:text-navy text-navy mb-2 group-hover:text-gold transition-colors duration-300">
              Room Support
            </h3>
            <span className="text-[10px] tracking-[0.2em] uppercase text-gray-400 font-medium">
              Textiles & Robes
            </span>
          </div>

          {/* Item 3: Housekeeping */}
          <div className="group cursor-pointer flex flex-col items-center min-w-[240px] md:min-w-0 snap-center">
            <div className="relative w-full aspect-[3/4] overflow-hidden mb-6 bg-gray-100 shadow-sm transition-shadow duration-500 group-hover:shadow-md">
              <Image
                src="/imgs/sec-1-3.png"
                alt="Housekeeping"
                fill
                className="object-cover transition-transform duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-navy/0 group-hover:bg-navy/5 transition-colors duration-500" />
            </div>
            <h3 className="font-playfair text-xl dark:text-gray-300 dark:md:text-navy text-navy mb-2 group-hover:text-gold transition-colors duration-300">
              Housekeeping
            </h3>
            <span className="text-[10px] tracking-[0.2em] uppercase text-gray-400 font-medium">
              Staff Augmentation
            </span>
          </div>

          {/* Item 4: Facility Supply */}
          <div className="group cursor-pointer flex flex-col items-center min-w-[240px] md:min-w-0 snap-center">
            <div className="relative w-full aspect-[3/4] overflow-hidden mb-6 bg-gray-100 shadow-sm transition-shadow duration-500 group-hover:shadow-md">
              <Image
                src="/imgs/sec-1-4.png"
                alt="Amenities"
                fill
                className="object-cover transition-transform duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-navy/0 group-hover:bg-navy/5 transition-colors duration-500" />
            </div>
            <h3 className="font-playfair text-xl dark:text-gray-300 dark:md:text-navy text-navy mb-2 group-hover:text-gold transition-colors duration-300">
              Facility Supply
            </h3>
            <span className="text-[10px] tracking-[0.2em] uppercase text-gray-400 font-medium">
              Chemicals & Carts
            </span>
          </div>

          {/* Item 5: Sustainability */}
          <div className="group cursor-pointer flex flex-col items-center min-w-[240px] md:min-w-0 snap-center">
            <div className="relative w-full aspect-[3/4] overflow-hidden mb-6 bg-gray-100 shadow-sm transition-shadow duration-500 group-hover:shadow-md">
              <Image
                src="/imgs/sec-1-5.png"
                alt="Sustainability"
                fill
                className="object-cover transition-transform duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-navy/0 group-hover:bg-navy/5 transition-colors duration-500" />
            </div>
            <h3 className="font-playfair text-xl dark:text-gray-300 dark:md:text-navy text-navy mb-2 group-hover:text-gold transition-colors duration-300">
              Sustainability
            </h3>
            <span className="text-[10px] tracking-[0.2em] uppercase text-gray-400 font-medium">
              Eco-Certified Process
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
