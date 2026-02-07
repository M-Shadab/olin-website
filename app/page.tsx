"use client";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Image from "next/image";

export default function Home() {


  return (
    <div className="min-h-screen font-sans text-foreground bg-background selection:bg-gold selection:text-white">
      <Header />

      {/* Hero Section */}
      <section className="relative w-full h-screen min-h-[800px] flex items-center justify-center overflow-hidden">
        {/* Background - Simulating "Crisp white linen fold" with a high-quality abstract placeholder or color */}
        <div className="absolute inset-0 z-0 bg-navy">
             {/* Gradient Overlay for Depth */}
            <div className="absolute inset-0 bg-gradient-to-b from-navy/30 via-transparent to-navy/80 z-10 pointer-events-none" />
             {/* Hero Image */}
            <Image
              src="/imgs/hero.png"
              alt="Background"
              fill
              className="object-cover opacity-90"
              priority
            />
        </div>

        <div className="relative z-20 w-full max-w-5xl px-6 md:px-12 text-center pt-20">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-playfair font-medium text-white mb-8 tracking-tight leading-tight">
              The Invisible Standard.
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 font-light leading-relaxed max-w-3xl mx-auto mb-16 tracking-wide opacity-90">
              Orchestrating hospitality excellence for the world's most demanding properties.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <button 
                onClick={() => document.getElementById('partner-form')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-20 py-5 text-white bg-gold hover:bg-[#C5A028] transition-all duration-500 text-sm font-bold tracking-[0.2em] uppercase shadow-2xl hover:shadow-gold/20 rounded-sm cursor-pointer transform hover:-translate-y-1 cursor-pointer"
              >
                Partner With Us
              </button>
              {/* <button 
                onClick={() => document.getElementById('partner-form')?.scrollIntoView({ behavior: 'smooth' })}
                className="group px-10 py-5 text-white border border-white/20 hover:border-white hover:bg-white/5 transition-all duration-500 text-sm font-bold tracking-[0.2em] uppercase rounded-sm cursor-pointer flex items-center gap-3 cursor-pointer"
              >
                <span className="opacity-80 group-hover:opacity-100 transition-opacity">Visual Audit</span>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-x-1 transition-transform"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
              </button> */}
            </div>

            {/* Trust Anchor / Social Proof */}
            {/* <div className="mt-32 flex justify-center items-center gap-8 md:gap-16 opacity-60">
                <span className="text-xs font-mono text-white uppercase tracking-widest">San Francisco</span>
                <span className="w-1 h-1 bg-gold rounded-full"></span>
                <span className="text-xs font-mono text-white uppercase tracking-widest">Napa Valley</span>
                <span className="w-1 h-1 bg-gold rounded-full"></span>
                <span className="text-xs font-mono text-white uppercase tracking-widest">Sonoma</span>
            </div> */}
        </div>
      </section>

      {/* Service Visuals Row */}
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
                 <h3 className="font-playfair text-xl text-navy mb-2 group-hover:text-gold transition-colors duration-300">Laundry & Linen</h3>
                 <span className="text-[10px] tracking-[0.2em] uppercase text-gray-400 font-medium">Spotless Daily Service</span>
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
                 <h3 className="font-playfair text-xl text-navy mb-2 group-hover:text-gold transition-colors duration-300">Room Support</h3>
                 <span className="text-[10px] tracking-[0.2em] uppercase text-gray-400 font-medium">Textiles & Robes</span>
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
                 <h3 className="font-playfair text-xl text-navy mb-2 group-hover:text-gold transition-colors duration-300">Housekeeping</h3>
                 <span className="text-[10px] tracking-[0.2em] uppercase text-gray-400 font-medium">Staff Augmentation</span>
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
                 <h3 className="font-playfair text-xl text-navy mb-2 group-hover:text-gold transition-colors duration-300">Facility Supply</h3>
                 <span className="text-[10px] tracking-[0.2em] uppercase text-gray-400 font-medium">Chemicals & Carts</span>
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
                 <h3 className="font-playfair text-xl text-navy mb-2 group-hover:text-gold transition-colors duration-300">Sustainability</h3>
                 <span className="text-[10px] tracking-[0.2em] uppercase text-gray-400 font-medium">Eco-Certified Process</span>
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

      {/* The Grid: "The OPAL Framework" */}
      <section className="py-24 px-6 bg-off-white bg-noise">
        <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-playfair font-medium text-navy mb-16 text-center">The OPAL Framework</h2>
            
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
            — GM, The Evegren Suites
          </cite>
        </div>
      </section>

      {/* The Closer: "Simplification" */}
      <section id="partner-form" className="py-32 px-6 bg-white flex flex-col items-center justify-center">
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
                    className="px-12 py-5 bg-navy text-white text-sm font-bold tracking-[0.2em] uppercase hover:bg-gold transition-colors duration-500 rounded-sm cursor-pointer"
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

      <Footer />
    </div>
  );
}
