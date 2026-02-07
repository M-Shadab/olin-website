"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function Home() {
  const [showStickyButton, setShowStickyButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowStickyButton(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen font-sans text-foreground bg-background selection:bg-gold selection:text-white">
      {/* Sticky Navigation Header */}
      <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-5 transition-all duration-300 bg-white/95 backdrop-blur-sm border-b border-black/5">
        <div className="flex items-baseline gap-1">
            <span className="text-2xl font-playfair font-bold text-navy tracking-tight">OPAL.</span>
            <span className="hidden md:inline-block text-xs font-mono text-gray-400 uppercase tracking-widest pl-2">Hospitality</span>
        </div>
        
        <div className="flex items-center gap-8">
          <nav className="hidden md:flex gap-8 text-xs font-bold tracking-[0.15em] uppercase text-navy/60">
            <a href="#" className="hover:text-navy transition-colors">Expertise</a>
            <a href="#" className="hover:text-navy transition-colors">The Standard</a>
            <a href="#" className="hover:text-navy transition-colors">Stories</a>
          </nav>
          
          <div className="flex items-center gap-6 pl-6 border-l border-black/5">
              <a href="#" className="hidden md:block text-xs font-medium text-navy/40 hover:text-navy transition-colors">
                  Member Login
              </a>
              <button
                className={`px-6 py-2.5 text-xs font-bold tracking-[0.15em] uppercase text-white transition-all duration-500 transform ${
                  showStickyButton
                    ? "translate-y-0 opacity-100"
                    : "translate-y-0 opacity-100" // Always show for now to maintain premium feel, or keep dynamic if preferred. Let's keep it visible for "Inquire"
                } bg-navy hover:bg-gold transition-colors shadow-sm rounded-sm cursor-pointer`}
              >
                Inquire
              </button>
          </div>
        </div>  
      </header>

      {/* Hero Section */}
      <section className="relative w-full h-[560px] flex justify-center overflow-hidden mt-16">
        {/* Background - Simulating "Crisp white linen fold" with a high-quality abstract placeholder or color */}
        <div className="absolute inset-0 z-0 bg-off-white">
             {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-navy/40 to-transparent z-10 pointer-events-none" />
             {/* Hero Image */}
            <div className="absolute inset-0 bg-[url('/imgs/hero.png')] bg-cover bg-center" />
        </div>

        <div className="relative z-20 w-full max-w-7xl px-6 md:px-12 pt-20">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-5xl font-playfair font-bold leading-[1.1] text-white mb-8">
              Hotel-Grade Hospitality. <br />
              <span className="text-white">Ready When You Are.</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-100 font-light leading-relaxed max-w-2xl mb-12">
              Scaling professional linen and guest support for boutique gems and
              premium icons.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-5">
              <button className="px-8 py-4 text-white bg-gold hover:bg-[#C5A028] transition-colors text-lg font-medium tracking-wide shadow-lg rounded-sm cursor-pointer">
                Request a Quote
              </button>
              <button className="px-8 py-4 text-gray-200 border border-gray-200/20 hover:border-gray-200 hover:bg-gray-200/5 transition-all text-lg font-medium tracking-wide rounded-sm flex items-center gap-3 cursor-pointer">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polygon points="10 8 16 12 10 16 10 8"/></svg>
                Watch Process Video
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Service Visuals Row */}
      <section className="w-full px-6 -mt-20 relative z-30">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
             {/* Card 1: Laundry & Linen */}
             <div className="group bg-white border border-black/5 shadow-sm hover:shadow-xl transition-all duration-500 rounded-sm overflow-hidden">
                 <div className="relative aspect-square overflow-hidden bg-gray-100">
                    <Image 
                      src="/imgs/sec-1-1.png" 
                      alt="Premium Towels" 
                      fill 
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute bottom-4 right-4 bg-white p-3 w-10 h-10 flex items-center justify-center shadow-sm rounded-sm">
                       <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-navy"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
                    </div>
                 </div>
                 <div className="p-6">
                    <h3 className="font-playfair text-lg font-medium text-navy mb-3">Laundry & Linen Care</h3>
                    <p className="text-sm text-gray-500 leading-relaxed font-light">
                      Industrial washing with boutique care. Crisp, spotless, and always on time.
                    </p>
                 </div>
             </div>

             {/* Card 2: Guest Room Support */}
             <div className="group bg-white border border-black/5 shadow-sm hover:shadow-xl transition-all duration-500 rounded-sm overflow-hidden">
                 <div className="relative aspect-square overflow-hidden bg-gray-100">
                    <Image 
                      src="/imgs/sec-1-2.png" 
                      alt="Staff Support" 
                      fill 
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute bottom-4 right-4 bg-white p-3 w-10 h-10 flex items-center justify-center shadow-sm rounded-sm">
                       <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-navy"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
                    </div>
                 </div>
                 <div className="p-6">
                    <h3 className="font-playfair text-lg font-medium text-navy mb-3">Guest Room Support</h3>
                    <p className="text-sm text-gray-500 leading-relaxed font-light">
                      Extra towels, robes, and specialized textiles delivered directly to closets.
                    </p>
                 </div>
             </div>

             {/* Card 3: Housekeeping Support */}
             <div className="group bg-white border border-black/5 shadow-sm hover:shadow-xl transition-all duration-500 rounded-sm overflow-hidden">
                 <div className="relative aspect-square overflow-hidden bg-gray-100">
                    <Image 
                      src="/imgs/sec-1-3.png" 
                      alt="Housekeeping" 
                      fill 
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute bottom-4 right-4 bg-white p-3 w-10 h-10 flex items-center justify-center shadow-sm rounded-sm">
                       <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-navy"><path d="M21 2l-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4"></path></svg>
                    </div>
                 </div>
                 <div className="p-6">
                    <h3 className="font-playfair text-lg font-medium text-navy mb-3">Housekeeping Support</h3>
                    <p className="text-sm text-gray-500 leading-relaxed font-light">
                      Professional staff augmentation to ensure rooms are turned over flawlessly.
                    </p>
                 </div>
             </div>

             {/* Card 4: Facility Supply */}
             <div className="group bg-white border border-black/5 shadow-sm hover:shadow-xl transition-all duration-500 rounded-sm overflow-hidden">
                 <div className="relative aspect-square overflow-hidden bg-gray-100">
                    <Image 
                      src="/imgs/sec-1-4.png" 
                      alt="Amenities" 
                      fill 
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute bottom-4 right-4 bg-white p-3 w-10 h-10 flex items-center justify-center shadow-sm rounded-sm">
                       <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-navy"><path d="M2 20h20"></path><path d="M5 20v-5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v5"></path><path d="M10 13V8a2 2 0 0 0-2-2 2 2 0 0 0-2 2v5"></path></svg>
                    </div>
                 </div>
                 <div className="p-6">
                    <h3 className="font-playfair text-lg font-medium text-navy mb-3">Facility Supply</h3>
                    <p className="text-sm text-gray-500 leading-relaxed font-light">
                      From cleaning chemicals to carts, we supply the backbone of your operations.
                    </p>
                 </div>
             </div>

             {/* Card 5: Sustainable Solutions */}
             <div className="group bg-white border border-black/5 shadow-sm hover:shadow-xl transition-all duration-500 rounded-sm overflow-hidden">
                 <div className="relative aspect-square overflow-hidden bg-gray-100">
                    <Image 
                      src="/imgs/sec-1-5.png" 
                      alt="Sustainability" 
                      fill 
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute bottom-4 right-4 bg-white p-3 w-10 h-10 flex items-center justify-center shadow-sm rounded-sm">
                       <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-navy"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>
                    </div>
                 </div>
                 <div className="p-6">
                    <h3 className="font-playfair text-lg font-medium text-navy mb-3">Sustainable Solutions</h3>
                    <p className="text-sm text-gray-500 leading-relaxed font-light">
                      Green-certified processes that reduce water use and environmental impact.
                    </p>
                 </div>
             </div>
          </div>
        </div>
      </section>
      {/* <section className="relative z-30 -mt-20 px-6">
        <div className="max-w-6xl mx-auto bg-white shadow-xl rounded-sm p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 border-b-4 border-gold">
          <span className="text-gray-500 font-medium tracking-widest text-sm uppercase shrink-0">
            Trusted by Independent & Flagship Properties
          </span>
          <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-60 grayscale hover:grayscale-0 transition-all duration-500"> */}
             {/* Placeholder Logos */}
             {/* <div className="font-playfair text-2xl font-bold font-serif text-navy">Marriott</div>
             <div className="font-playfair text-2xl font-bold font-serif text-navy">Hilton</div>
             <div className="font-playfair text-2xl font-bold font-serif text-navy">Hyatt</div>
             <div className="font-playfair text-2xl font-bold font-serif text-navy">Four Seasons</div>
          </div>
        </div>
      </section> */}
      

      {/* The Pillars: "The Alba Standard" */}
      <section className="py-24 md:py-32 px-6 bg-white border-b border-black/5">
        <div className="max-w-7xl mx-auto">
          <div className="mb-20 text-center">
             <span className="text-gold text-xs font-bold tracking-[0.2em] uppercase mb-4 block">Why We Excel</span>
             <h2 className="text-4xl md:text-5xl font-playfair font-medium text-navy">The OPAL Standard</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-0 divide-y md:divide-y-0 md:divide-x divide-black/10">
            {/* Pillar 1 */}
            <div className="group px-6 md:px-12 py-8 md:py-4 text-center">
              <div className="mb-6 text-gold flex justify-center group-hover:-translate-y-1 transition-transform duration-500">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
              </div>
              <h3 className="text-2xl font-playfair font-medium text-navy mb-4">Consistent Quality</h3>
              <p className="text-gray-500 leading-relaxed font-light">Every linen, every day. Industrial consistency with boutique care.</p>
            </div>

            {/* Pillar 2 */}
            <div className="group px-6 md:px-12 py-8 md:py-4 text-center">
              <div className="mb-6 text-gold flex justify-center group-hover:-translate-y-1 transition-transform duration-500">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
              </div>
              <h3 className="text-2xl font-playfair font-medium text-navy mb-4">Reliable Timing</h3>
              <p className="text-gray-500 leading-relaxed font-light">GPS-tracked logistics. We arrive before you need us, every time.</p>
            </div>

            {/* Pillar 3 */}
            <div className="group px-6 md:px-12 py-8 md:py-4 text-center">
              <div className="mb-6 text-gold flex justify-center group-hover:-translate-y-1 transition-transform duration-500">
                 <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 3v18h18"/><path d="M18.7 8l-5.1 5.2-2.8-2.7L7 14.3"/></svg>
              </div>
              <h3 className="text-2xl font-playfair font-medium text-navy mb-4">Adaptive Solutions</h3>
              <p className="text-gray-500 leading-relaxed font-light">From 10 rooms to 500. We scale our operations to match your growth.</p>
            </div>
          </div>
        </div>
      </section>

      {/* The Grid: "Service Architecture" */}
      <section className="py-24 px-6 bg-off-white">
        <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-playfair font-medium text-navy mb-16 text-center">Service Architecture</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border-t border-l border-black/10">
                {/* Item 1 */}
                <div className="p-12 border-r border-b border-black/10 hover:bg-white transition-all duration-500 group">
                    <span className="block text-xs font-mono text-gray-300 mb-6 group-hover:text-gold transition-colors">01</span>
                    <h3 className="text-2xl font-playfair font-medium text-navy mb-4">Laundry & Linen</h3>
                    <p className="text-gray-500 text-sm leading-relaxed font-light">High-capacity washing, precision pressing, and spotless delivery specific to your inventory.</p>
                </div>
                
                 {/* Item 2 */}
                <div className="p-12 border-r border-b border-black/10 hover:bg-white transition-all duration-500 group">
                    <span className="block text-xs font-mono text-gray-300 mb-6 group-hover:text-gold transition-colors">02</span>
                    <h3 className="text-2xl font-playfair font-medium text-navy mb-4">Supply & Rotation</h3>
                    <p className="text-gray-500 text-sm leading-relaxed font-light">Automated inventory management ensuring you never run short of daily essentials.</p>
                </div>
                
                 {/* Item 3 */}
                <div className="p-12 border-r border-b border-black/10 hover:bg-white transition-all duration-500 group">
                    <span className="block text-xs font-mono text-gray-300 mb-6 group-hover:text-gold transition-colors">03</span>
                    <h3 className="text-2xl font-playfair font-medium text-navy mb-4">Guest Room Support</h3>
                    <p className="text-gray-500 text-sm leading-relaxed font-light">Beyond just sheets—duvets, robes, and specialized room textiles handled with care.</p>
                </div>

                {/* Item 4 */}
                <div className="p-12 border-r border-b border-black/10 hover:bg-white transition-all duration-500 group">
                    <span className="block text-xs font-mono text-gray-300 mb-6 group-hover:text-gold transition-colors">04</span>
                    <h3 className="text-2xl font-playfair font-medium text-navy mb-4">Amenity Curations</h3>
                    <p className="text-gray-500 text-sm leading-relaxed font-light">Curated bathroom and room amenities from premium brands, packaged for your brand.</p>
                </div>
                
                 {/* Item 5 */}
                <div className="p-12 border-r border-b border-black/10 hover:bg-white transition-all duration-500 group">
                    <span className="block text-xs font-mono text-gray-300 mb-6 group-hover:text-gold transition-colors">05</span>
                    <h3 className="text-2xl font-playfair font-medium text-navy mb-4">Facility Supply</h3>
                    <p className="text-gray-500 text-sm leading-relaxed font-light">Housekeeping carts, cleaning chemicals, and staff uniforms sourced and delivered.</p>
                </div>
                
                 {/* Item 6 */}
                <div className="p-12 border-r border-b border-black/10 hover:bg-white transition-all duration-500 group">
                    <span className="block text-xs font-mono text-gray-300 mb-6 group-hover:text-gold transition-colors">06</span>
                    <h3 className="text-2xl font-playfair font-medium text-navy mb-4">Sustainable Green-Care</h3>
                    <p className="text-gray-500 text-sm leading-relaxed font-light">Eco-friendly processing options significantly reducing water and energy usage.</p>
                </div>
            </div>
        </div>
      </section>

      {/* The Human Element: "Silent Partner" */}
      <section className="flex flex-col md:flex-row h-auto md:h-[600px] w-full">
         {/* Visual Left */}
        <div className="w-full md:w-1/2 relative min-h-[400px]">
            <div className="absolute inset-0 bg-navy">
                 {/* Placeholder for "Candid, high-end photo of Alba staff inspecting quality" */}
                 <div className="absolute inset-0 bg-[url('/imgs/hygiene-img.png')] bg-cover bg-center" />
            </div>
        </div>
        
        {/* Copy Right */}
        <div className="w-full md:w-1/2 flex items-center justify-center bg-white p-12 md:p-24">
            <div className="max-w-md">
                <h3 className="text-3xl md:text-4xl font-playfair font-medium text-navy mb-8">
                    Your Silent Partner in Excellence.
                </h3>
                <p className="text-lg text-gray-600 leading-relaxed mb-10 font-light">
                    "We bridge the gap between industrial scale and boutique attention. Your reputation begins with the first thing a guest touches."
                </p>
                <a href="#" className="text-gold font-medium tracking-wide hover:underline decoration-gold underline-offset-4 transition-all">
                    Our Hygiene Standards &rarr;
                </a>
            </div>
        </div>
      </section>

      {/* The Proof: "Operational Echo" */}
      <section className="bg-navy py-32 px-6 relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 text-gold opacity-10 font-playfair text-[30rem] leading-none pointer-events-none select-none">
          &rdquo;
        </div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <blockquote className="text-3xl md:text-5xl font-playfair font-medium text-white leading-tight mb-12">
            "OPAL is an extension of our own housekeeping team."
          </blockquote>
          <cite className="text-gold tracking-widest uppercase text-sm font-bold not-italic">
            — GM, The Evergreen Suites
          </cite>
        </div>
      </section>

      {/* The Closer: "Simplification" */}
      <section className="py-32 px-6 bg-white flex flex-col items-center justify-center">
        <div className="w-full max-w-4xl bg-white p-12 md:p-24 shadow-2xl shadow-navy/5 border border-black/5">
          <div className="text-center mb-16">
             <span className="text-gold text-xs font-bold tracking-[0.2em] uppercase mb-4 block">Initiate Partnership</span>
             <h2 className="text-4xl md:text-5xl font-playfair font-medium text-navy">Partner with OPAL</h2>
          </div>
          
          <form className="space-y-12">
             <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div className="relative group">
                  <input 
                    type="text" 
                    id="name" 
                    className="peer w-full bg-transparent border-b border-gray-300 py-4 text-navy focus:outline-none focus:border-gold transition-colors placeholder-transparent text-lg"
                    placeholder="Name"
                  />
                  <label 
                    htmlFor="name" 
                    className="absolute left-0 -top-3.5 text-gray-400 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-4 peer-focus:-top-3.5 peer-focus:text-gold peer-focus:text-xs tracking-widest uppercase"
                  >
                    Full Name
                  </label>
                </div>
                
                <div className="relative group">
                  <input 
                    type="email" 
                    id="email" 
                    className="peer w-full bg-transparent border-b border-gray-300 py-4 text-navy focus:outline-none focus:border-gold transition-colors placeholder-transparent text-lg"
                    placeholder="Email"
                  />
                  <label 
                    htmlFor="email" 
                    className="absolute left-0 -top-3.5 text-gray-400 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-4 peer-focus:-top-3.5 peer-focus:text-gold peer-focus:text-xs tracking-widest uppercase"
                  >
                    Work Email
                  </label>
                </div>
                
                <div className="relative group">
                  <input 
                    type="tel" 
                    id="phone" 
                    className="peer w-full bg-transparent border-b border-gray-300 py-4 text-navy focus:outline-none focus:border-gold transition-colors placeholder-transparent text-lg"
                    placeholder="Phone"
                  />
                  <label 
                    htmlFor="phone" 
                    className="absolute left-0 -top-3.5 text-gray-400 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-4 peer-focus:-top-3.5 peer-focus:text-gold peer-focus:text-xs tracking-widest uppercase"
                  >
                    Direct Phone
                  </label>
                </div>

                <div className="relative group">
                  <input 
                    type="text" 
                    id="website" 
                    className="peer w-full bg-transparent border-b border-gray-300 py-4 text-navy focus:outline-none focus:border-gold transition-colors placeholder-transparent text-lg"
                    placeholder="Website"
                  />
                  <label 
                    htmlFor="website" 
                    className="absolute left-0 -top-3.5 text-gray-400 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-4 peer-focus:-top-3.5 peer-focus:text-gold peer-focus:text-xs tracking-widest uppercase"
                  >
                    Company Website/Hotel Name
                  </label>
                </div>
             </div>

             <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                 <div className="relative group">
                    <select 
                        id="rooms" 
                        className="peer w-full bg-transparent border-b border-gray-300 py-4 text-navy focus:outline-none focus:border-gold transition-colors text-lg appearance-none rounded-none"
                    >
                        <option value="" disabled selected>Select Capacity</option>
                        <option value="10-50">10 - 50 Rooms</option>
                        <option value="50-100">50 - 100 Rooms</option>
                        <option value="100-250">100 - 250 Rooms</option>
                        <option value="250+">250+ Rooms</option>
                    </select>
                    <label 
                        htmlFor="rooms" 
                        className="absolute left-0 -top-3.5 text-gold text-xs tracking-widest uppercase"
                    >
                        Room Count
                    </label>
                 </div>

                 <div className="relative group">
                    <select 
                        id="service" 
                        className="peer w-full bg-transparent border-b border-gray-300 py-4 text-navy focus:outline-none focus:border-gold transition-colors text-lg appearance-none rounded-none"
                    >
                        <option value="" disabled selected>Primary Interest</option>
                        <option value="laundry">Laundry & Linen</option>
                        <option value="staffing">Staffing Solutions</option>
                        <option value="amenities">Amenity Curation</option>
                        <option value="full-suite">Full OPAL Suite</option>
                    </select>
                    <label 
                        htmlFor="service" 
                        className="absolute left-0 -top-3.5 text-gold text-xs tracking-widest uppercase"
                    >
                        Service Interest
                    </label>
                 </div>
             </div>
             
             <div className="relative group pt-4">
                  <textarea 
                    id="message" 
                    rows={1}
                    className="peer w-full bg-transparent border-b border-gray-300 py-4 text-navy focus:outline-none focus:border-gold transition-colors placeholder-transparent text-lg resize-none min-h-[60px]"
                    placeholder="Message"
                  ></textarea>
                  <label 
                    htmlFor="message" 
                    className="absolute left-0 -top-3.5 text-gray-400 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-4 peer-focus:-top-3.5 peer-focus:text-gold peer-focus:text-xs tracking-widest uppercase"
                  >
                    Specific Requirements or Questions
                  </label>
             </div>

             <div className="pt-8 text-center">
                 <button 
                    type="button"
                    className="px-12 py-5 bg-navy text-white text-sm font-bold tracking-[0.2em] uppercase hover:bg-gold transition-colors duration-500 rounded-sm"
                 >
                    Request Proposal
                 </button>
                 <p className="mt-6 text-xs text-gray-400 font-light">
                    Our team typically responds within 4 business hours.
                 </p>
             </div>
          </form>
        </div>
      </section>

      {/* Footer Professional */}
      <footer className="bg-navy text-white pt-24 pb-12 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 mb-16">
                {/* Col 1: Brand */}
                <div className="col-span-1 md:col-span-1">
                    <h3 className="text-2xl font-playfair text-white mb-6">OPAL</h3>
                    <p className="text-white/40 text-sm leading-relaxed mb-6 font-light">
                        The silent partner in hospitality excellence. enhancing guest experience through invisible perfection.
                    </p>
                    <div className="flex gap-4">
                        {/* Placeholder Social Icons */}
                        <div className="w-8 h-8 rounded-full bg-white/5 hover:bg-gold/20 transition-colors flex items-center justify-center text-gold cursor-pointer">
                            <span className="sr-only">LinkedIn</span>
                            <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                        </div>
                        <div className="w-8 h-8 rounded-full bg-white/5 hover:bg-gold/20 transition-colors flex items-center justify-center text-gold cursor-pointer">
                            <span className="sr-only">Twitter</span>
                             <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg>
                        </div>
                    </div>
                </div>

                {/* Col 2: Company */}
                <div className="col-span-1 md:col-span-1 md:ml-auto">
                    <h4 className="text-gold text-xs font-bold tracking-[0.2em] uppercase mb-6">Company</h4>
                    <ul className="space-y-4 text-sm text-white/60 font-light">
                        <li><a href="#" className="hover:text-gold transition-colors">About Us</a></li>
                        <li><a href="#" className="hover:text-gold transition-colors">Our Standard</a></li>
                        <li><a href="#" className="hover:text-gold transition-colors">Sustainability</a></li>
                        <li><a href="#" className="hover:text-gold transition-colors">Careers</a></li>
                    </ul>
                </div>

                {/* Col 3: Legal */}
                <div className="col-span-1 md:col-span-1">
                    <h4 className="text-gold text-xs font-bold tracking-[0.2em] uppercase mb-6">Legal</h4>
                    <ul className="space-y-4 text-sm text-white/60 font-light">
                        <li><a href="#" className="hover:text-gold transition-colors">Privacy Policy</a></li>
                        <li><a href="#" className="hover:text-gold transition-colors">Terms of Service</a></li>
                        <li><a href="#" className="hover:text-gold transition-colors">Cookie Policy</a></li>
                    </ul>
                </div>

                {/* Col 4: Contact */}
                <div className="col-span-1 md:col-span-1">
                    <h4 className="text-gold text-xs font-bold tracking-[0.2em] uppercase mb-6">Contact</h4>
                     <ul className="space-y-4 text-sm text-white/60 font-light">
                        <li className="flex items-start gap-3">
                            <span className="text-gold mt-1">
                                <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                            </span>
                            +1 (800) 555-0199
                        </li>
                        <li className="flex items-start gap-3">
                            <span className="text-gold mt-1">
                                <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
                            </span>
                            partners@opal-hospitality.com
                        </li>
                        <li className="flex items-start gap-3">
                             <span className="text-gold mt-1">
                                <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
                             </span>
                             123 Hospitality Lane, Suite 100<br/>San Francisco, CA 94107
                        </li>
                    </ul>
                </div>
            </div>

            <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                <p className="text-white/20 text-xs font-light tracking-wide">
                    &copy; {new Date().getFullYear()} OPAL Hospitality Services. All rights reserved.
                </p>
                <p className="text-white/20 text-xs font-light tracking-wide">
                    Designed for Excellence.
                </p>
            </div>
        </div>
      </footer>
    </div>
  );
}
