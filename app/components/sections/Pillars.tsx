"use client";

export default function Pillars() {
  return (
    <section className="py-24 md:py-32 px-6 bg-white border-b border-black/5">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20 text-center">
          <span className="text-gold text-xs font-bold tracking-[0.2em] uppercase mb-4 block">
            Why We Excel
          </span>
          <h2 className="text-4xl md:text-5xl font-playfair font-medium text-navy">
            The OLIN Standard
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-0 divide-y md:divide-y-0 md:divide-x divide-black/10">
          {/* Pillar 1 */}
          <div className="group px-6 md:px-12 py-8 md:py-4 text-center">
            <div className="mb-6 text-gold flex justify-center group-hover:-translate-y-1 transition-transform duration-500">
              <svg
                width="40"
                height="40"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
            </div>
            <h3 className="text-2xl font-playfair font-medium text-navy mb-4">
              Consistent Quality
            </h3>
            <p className="text-gray-500 leading-relaxed font-light">
              Every linen, every day. Industrial consistency with boutique care.
            </p>
          </div>

          {/* Pillar 2 */}
          <div className="group px-6 md:px-12 py-8 md:py-4 text-center">
            <div className="mb-6 text-gold flex justify-center group-hover:-translate-y-1 transition-transform duration-500">
              <svg
                width="40"
                height="40"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="12" r="10" />
                <polyline points="12 6 12 12 16 14" />
              </svg>
            </div>
            <h3 className="text-2xl font-playfair font-medium text-navy mb-4">
              Reliable Timing
            </h3>
            <p className="text-gray-500 leading-relaxed font-light">
              GPS-tracked logistics. We arrive before you need us, every time.
            </p>
          </div>

          {/* Pillar 3 */}
          <div className="group px-6 md:px-12 py-8 md:py-4 text-center">
            <div className="mb-6 text-gold flex justify-center group-hover:-translate-y-1 transition-transform duration-500">
              <svg
                width="40"
                height="40"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M3 3v18h18" />
                <path d="M18.7 8l-5.1 5.2-2.8-2.7L7 14.3" />
              </svg>
            </div>
            <h3 className="text-2xl font-playfair font-medium text-navy mb-4">
              Adaptive Solutions
            </h3>
            <p className="text-gray-500 leading-relaxed font-light">
              From 10 rooms to 500. We scale our operations to match your
              growth.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
