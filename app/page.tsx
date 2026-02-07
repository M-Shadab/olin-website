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
      <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-1 transition-all duration-300 bg-white/90 backdrop-blur-md border-b border-black/5">
        <div className="text-2xl font-bold font-playfair tracking-tighter text-navy flex items-center gap-2">
          {/* ALBS */}
          {/* OPAL */}
          <img src="/imgs/logo.png" alt="ALBA" height="44" className="w-16" />
          <p>OPAL Hospitality Services</p>
        </div>
        <div className="flex items-center gap-5">
          <nav className="hidden md:flex gap-8 text-sm font-medium tracking-wide text-gray-600">
            <a href="#" className="hover:text-navy transition-colors">Services</a>
            <a href="#" className="hover:text-navy transition-colors">About</a>
            <a href="#" className="hover:text-navy transition-colors">Testimonials</a>
          </nav>
          <button
            className={`px-6 py-2 text-sm font-medium text-white transition-all duration-500 transform ${
              showStickyButton
                ? "translate-y-0 opacity-100"
                : "-translate-y-4 opacity-0 pointer-events-none"
            } bg-gold hover:bg-[#C5A028] shadow-md rounded-sm cursor-pointer`}
          >
            Instant Quote
          </button>
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
      

      {/* The Pillars: "Built for Demands" */}
      <section className="py-32 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Pillar 1 */}
            <div className="group p-10 bg-off-white hover:-translate-y-2 transition-transform duration-500 ease-out border border-transparent hover:border-black/5 rounded-sm">
              <div className="mb-6 text-gold group-hover:scale-110 transition-transform duration-500">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>
              </div>
              <h3 className="text-2xl font-playfair font-semibold text-navy mb-3">Consistent Quality</h3>
              <p className="text-gray-600 leading-relaxed">Every linen, every day. Industrial consistency with boutique care.</p>
            </div>

            {/* Pillar 2 */}
            <div className="group p-10 bg-off-white hover:-translate-y-2 transition-transform duration-500 ease-out border border-transparent hover:border-black/5 rounded-sm">
              <div className="mb-6 text-gold group-hover:scale-110 transition-transform duration-500">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
              </div>
              <h3 className="text-2xl font-playfair font-semibold text-navy mb-3">Reliable Timing</h3>
              <p className="text-gray-600 leading-relaxed">GPS-tracked logistics. We arrive before you need us, every time.</p>
            </div>

            {/* Pillar 3 */}
            <div className="group p-10 bg-off-white hover:-translate-y-2 transition-transform duration-500 ease-out border border-transparent hover:border-black/5 rounded-sm">
              <div className="mb-6 text-gold group-hover:scale-110 transition-transform duration-500">
                 <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M3 3v18h18"/><path d="M18.7 8l-5.1 5.2-2.8-2.7L7 14.3"/></svg>
              </div>
              <h3 className="text-2xl font-playfair font-semibold text-navy mb-3">Adaptive Solutions</h3>
              <p className="text-gray-600 leading-relaxed">From 10 rooms to 500. We scale our operations to match your growth.</p>
            </div>
          </div>
        </div>
      </section>

      {/* The Grid: "Service Architecture" */}
      <section className="py-24 px-6 bg-off-white">
        <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-playfair font-medium text-navy mb-16 text-center">Service Architecture</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Active Card 1 */}
                <div className="bg-white p-8 border border-black/5 hover:shadow-xl transition-all duration-300">
                    <span className="inline-block px-3 py-1 bg-navy/5 text-navy text-xs font-bold tracking-widest uppercase mb-6 rounded-sm">Active</span>
                    <h3 className="text-xl font-playfair font-semibold text-navy mb-4">Laundry & Linen</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">High-capacity washing, precision pressing, and spotless delivery.</p>
                </div>
                 {/* Active Card 2 */}
                <div className="bg-white p-8 border border-black/5 hover:shadow-xl transition-all duration-300">
                    <span className="inline-block px-3 py-1 bg-navy/5 text-navy text-xs font-bold tracking-widest uppercase mb-6 rounded-sm">Active</span>
                    <h3 className="text-xl font-playfair font-semibold text-navy mb-4">Supply & Rotation</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">Inventory management ensuring you never run short of essentials.</p>
                </div>
                 {/* Active Card 3 */}
                <div className="bg-white p-8 border border-black/5 hover:shadow-xl transition-all duration-300">
                    <span className="inline-block px-3 py-1 bg-navy/5 text-navy text-xs font-bold tracking-widest uppercase mb-6 rounded-sm">Active</span>
                    <h3 className="text-xl font-playfair font-semibold text-navy mb-4">Guest Room Support</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">Beyond just sheets—duvets, robes, and specialized room textiles.</p>
                </div>

                {/* Coming Soon Card 1 */}
                <div className="bg-white p-8 border border-black/5 group cursor-default">
                    <span className="inline-block px-3 py-1 bg-gray-100 text-gray-400 text-xs font-bold tracking-widest uppercase mb-6 rounded-sm group-hover:bg-gold/10 group-hover:text-gold transition-colors">
                        <span className="group-hover:animate-pulse">Coming Soon</span>
                    </span>
                    <h3 className="text-xl font-playfair font-semibold text-navy mb-4">Amenity Curations</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">Curated bathroom and room amenities from premium brands.</p>
                </div>
                 {/* Coming Soon Card 2 */}
                <div className="bg-white p-8 border border-black/5 group cursor-default">
                    <span className="inline-block px-3 py-1 bg-gray-100 text-gray-400 text-xs font-bold tracking-widest uppercase mb-6 rounded-sm group-hover:bg-gold/10 group-hover:text-gold transition-colors">
                        <span className="group-hover:animate-pulse">Coming Soon</span>
                    </span>
                    <h3 className="text-xl font-playfair font-semibold text-navy mb-4">Facility Supply</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">Housekeeping carts, cleaning chemicals, and staff uniforms.</p>
                </div>
                 {/* Coming Soon Card 3 */}
                <div className="bg-white p-8 border border-black/5 group cursor-default">
                    <span className="inline-block px-3 py-1 bg-gray-100 text-gray-400 text-xs font-bold tracking-widest uppercase mb-6 rounded-sm group-hover:bg-gold/10 group-hover:text-gold transition-colors">
                        <span className="group-hover:animate-pulse">Coming Soon</span>
                    </span>
                    <h3 className="text-xl font-playfair font-semibold text-navy mb-4">Sustainable Green-Care</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">Eco-friendly processing options reducing water and energy usage.</p>
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
                 <div className="absolute inset-0 opacity-60 mix-blend-overlay bg-[url('https://images.unsplash.com/photo-1556910103-1c02745a30bf?q=80&w=2670&auto=format&fit=crop')] bg-cover bg-center" />
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
        <div className="w-full max-w-2xl bg-off-white p-12 md:p-20 rounded-sm shadow-sm border border-black/5">
          <h2 className="text-3xl font-playfair text-navy mb-12 text-center">Get Your Custom Quote</h2>
          <form className="space-y-12">
             <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div className="relative">
                  <input 
                    type="text" 
                    id="name" 
                    className="peer w-full bg-transparent border-b border-gray-300 py-2 text-navy focus:outline-none focus:border-gold transition-colors placeholder-transparent"
                    placeholder="Name"
                  />
                  <label 
                    htmlFor="name" 
                    className="absolute left-0 -top-3.5 text-gray-500 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-gray-500 peer-focus:text-sm"
                  >
                    Name
                  </label>
                </div>
                <div className="relative">
                  <input 
                    type="email" 
                    id="email" 
                    className="peer w-full bg-transparent border-b border-gray-300 py-2 text-navy focus:outline-none focus:border-gold transition-colors placeholder-transparent"
                    placeholder="Email"
                  />
                  <label 
                    htmlFor="email" 
                    className="absolute left-0 -top-3.5 text-gray-500 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-gray-500 peer-focus:text-sm"
                  >
                    Work Email
                  </label>
                </div>
             </div>

             <div className="relative">
                <input 
                  type="text" 
                  id="property" 
                  className="peer w-full bg-transparent border-b border-gray-300 py-2 text-navy focus:outline-none focus:border-gold transition-colors placeholder-transparent"
                  placeholder="Property Name"
                />
                <label 
                  htmlFor="property" 
                  className="absolute left-0 -top-3.5 text-gray-500 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-gray-500 peer-focus:text-sm"
                >
                  Property Name
                </label>
             </div>

             <button 
                type="button"
                className="w-full py-4 bg-navy text-white font-medium tracking-widest hover:bg-gold transition-colors duration-300 rounded-sm mt-8"
             >
                Get My Custom Quote
             </button>
          </form>
        </div>
      </section>

      {/* Footer Simple */}
      <footer className="bg-navy text-white/40 py-8 text-center text-sm">
        {/* <p>&copy; {new Date().getFullYear()} Alba Linen Services. All rights reserved.</p> */}
        <p>&copy; {new Date().getFullYear()} OPAL Hospitality Services. All rights reserved.</p>
      </footer>
    </div>
  );
}
