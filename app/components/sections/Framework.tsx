"use client";

export default function Framework() {
  const frameworkGridStyle =
    "flex md:grid md:grid-cols-2 lg:grid-cols-3 md:border-t md:border-l md:border-black/10 snap-x snap-mandatory md:snap-none overflow-x-auto scrollbar-hide md:overflow-hidden";

  const frameworkCardStyle =
    "p-12 border border-r-0 md:border-t-0 md:border-l-0 md:border-r border-black/10 hover:bg-white transition-all duration-500 group min-w-[65vw] md:min-w-[280px] snap-center";

  return (
    <section className="py-16 md:py-24 px-6 bg-off-white bg-noise">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-playfair font-medium text-navy mb-8 md:mb-16 text-center">
          The OLIN Framework
        </h2>

        {/* Mobile: Horizontal scroll, Desktop: Bordered grid */}
        <div className={frameworkGridStyle}>
          {/* Item 1 */}
          <div className={frameworkCardStyle}>
            <span className="block text-xs font-mono text-gray-300 mb-4 md:mb-6 group-hover:text-gold transition-colors">
              01
            </span>
            <h3 className="text-xl md:text-2xl font-playfair font-medium text-navy mb-3 md:mb-4">
              Laundry & Linen
            </h3>
            <p className="text-gray-500 text-sm leading-relaxed font-light">
              High-capacity washing, precision pressing, and spotless delivery
              specific to your inventory.
            </p>
          </div>

          {/* Item 2 */}
          <div className={frameworkCardStyle}>
            <span className="block text-xs font-mono text-gray-300 mb-4 md:mb-6 group-hover:text-gold transition-colors">
              02
            </span>
            <h3 className="text-xl md:text-2xl font-playfair font-medium text-navy mb-3 md:mb-4">
              Supply & Rotation
            </h3>
            <p className="text-gray-500 text-sm leading-relaxed font-light">
              Automated inventory management ensuring you never run short of
              daily essentials.
            </p>
          </div>

          {/* Item 3 */}
          <div className={frameworkCardStyle}>
            <span className="block text-xs font-mono text-gray-300 mb-4 md:mb-6 group-hover:text-gold transition-colors">
              03
            </span>
            <h3 className="text-xl md:text-2xl font-playfair font-medium text-navy mb-3 md:mb-4">
              Guest Room Support
            </h3>
            <p className="text-gray-500 text-sm leading-relaxed font-light">
              Beyond just sheets—duvets, robes, and specialized room textiles
              handled with care.
            </p>
          </div>

          {/* Item 4 */}
          <div className={frameworkCardStyle}>
            <span className="block text-xs font-mono text-gray-300 mb-4 md:mb-6 group-hover:text-gold transition-colors">
              04
            </span>
            <h3 className="text-xl md:text-2xl font-playfair font-medium text-navy mb-3 md:mb-4">
              Amenity Curations
            </h3>
            <p className="text-gray-500 text-sm leading-relaxed font-light">
              Curated bathroom and room amenities from premium brands, packaged
              for your brand.
            </p>
          </div>

          {/* Item 5 */}
          <div className={frameworkCardStyle}>
            <span className="block text-xs font-mono text-gray-300 mb-4 md:mb-6 group-hover:text-gold transition-colors">
              05
            </span>
            <h3 className="text-xl md:text-2xl font-playfair font-medium text-navy mb-3 md:mb-4">
              Facility Supply
            </h3>
            <p className="text-gray-500 text-sm leading-relaxed font-light">
              Housekeeping carts, cleaning chemicals, and staff uniforms sourced
              and delivered.
            </p>
          </div>

          {/* Item 6 */}
          <div className={frameworkCardStyle}>
            <span className="block text-xs font-mono text-gray-300 mb-4 md:mb-6 group-hover:text-gold transition-colors">
              06
            </span>
            <h3 className="text-xl md:text-2xl font-playfair font-medium text-navy mb-3 md:mb-4">
              Sustainable Green-Care
            </h3>
            <p className="text-gray-500 text-sm leading-relaxed font-light">
              Eco-friendly processing options significantly reducing water and
              energy usage.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
