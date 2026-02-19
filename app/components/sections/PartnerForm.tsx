"use client";

import { useEffect, useRef } from "react";

export default function PartnerForm() {
  const lineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in-view");
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" },
    );

    if (lineRef.current) observer.observe(lineRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="partner-form"
      className="py-24 md:py-40 px-4 md:px-6 bg-off-white bg-noise flex flex-col items-center justify-center relative overflow-hidden"
    >
      {/* Schematic Line - Center Spine (ends here) */}
      <div className="absolute left-1/2 top-0 h-32 w-px -ml-[0.5px] z-0 hidden md:block">
        <div
          ref={lineRef}
          className="draw-vertical-line h-0 w-full bg-gold/30 mx-auto"
        ></div>
      </div>

      <div className="w-full max-w-5xl bg-white p-8 md:p-16 lg:p-24 shadow-2xl shadow-navy/5 border border-gray-100 relative z-10">
        <div className="text-center mb-16">
          <span className="text-gold text-xs font-bold tracking-[0.2em] uppercase mb-4 block">
            Initiate Partnership
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-playfair font-medium text-navy">
            Partner with OLIN
          </h2>
        </div>

        {/* The Lead Generation Form */}
        <form className="space-y-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Input Field: Name */}
            <div className="relative group">
              <input
                type="text"
                id="name"
                className="peer w-full bg-transparent border-b border-gray-200 py-4 text-navy focus:outline-none placeholder-transparent text-lg font-light"
                placeholder="Name"
              />
              <div className="absolute bottom-0 left-0 w-0 h-px bg-gold transition-all duration-500 peer-focus:w-full"></div>
              <label
                htmlFor="name"
                className="absolute left-0 -top-4 text-gray-400 text-xs transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-4 peer-focus:-top-4 peer-focus:text-gold peer-focus:text-xs tracking-[0.1em] uppercase"
              >
                Full Name
              </label>
            </div>

            {/* Input Field: Email */}
            <div className="relative group">
              <input
                type="email"
                id="email"
                className="peer w-full bg-transparent border-b border-gray-200 py-4 text-navy focus:outline-none placeholder-transparent text-lg font-light"
                placeholder="Email"
              />
              <div className="absolute bottom-0 left-0 w-0 h-px bg-gold transition-all duration-500 peer-focus:w-full"></div>
              <label
                htmlFor="email"
                className="absolute left-0 -top-4 text-gray-400 text-xs transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-4 peer-focus:-top-4 peer-focus:text-gold peer-focus:text-xs tracking-[0.1em] uppercase"
              >
                Work Email
              </label>
            </div>

            {/* Input Field: Phone */}
            <div className="relative group">
              <input
                type="tel"
                id="phone"
                className="peer w-full bg-transparent border-b border-gray-200 py-4 text-navy focus:outline-none placeholder-transparent text-lg font-light"
                placeholder="Phone"
              />
              <div className="absolute bottom-0 left-0 w-0 h-px bg-gold transition-all duration-500 peer-focus:w-full"></div>
              <label
                htmlFor="phone"
                className="absolute left-0 -top-4 text-gray-400 text-xs transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-4 peer-focus:-top-4 peer-focus:text-gold peer-focus:text-xs tracking-[0.1em] uppercase"
              >
                Direct Phone
              </label>
            </div>

            {/* Input Field: Website */}
            <div className="relative group">
              <input
                type="text"
                id="website"
                className="peer w-full bg-transparent border-b border-gray-200 py-4 text-navy focus:outline-none placeholder-transparent text-lg font-light"
                placeholder="Website"
              />
              <div className="absolute bottom-0 left-0 w-0 h-px bg-gold transition-all duration-500 peer-focus:w-full"></div>
              <label
                htmlFor="website"
                className="absolute left-0 -top-4 text-gray-400 text-xs transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-4 peer-focus:-top-4 peer-focus:text-gold peer-focus:text-xs tracking-[0.1em] uppercase"
              >
                Hotel / Company Name
              </label>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="relative group">
              <select
                id="rooms"
                defaultValue={""}
                className="peer w-full bg-transparent border-b border-gray-200 py-4 text-navy focus:outline-none text-lg font-light appearance-none rounded-none"
              >
                <option value="" disabled>
                  Select Capacity
                </option>
                <option value="10-50">10 - 50 Rooms</option>
                <option value="50-100">50 - 100 Rooms</option>
                <option value="100-250">100 - 250 Rooms</option>
                <option value="250+">250+ Rooms</option>
              </select>
              <div className="absolute bottom-0 left-0 w-0 h-px bg-gold transition-all duration-500 peer-focus:w-full"></div>
              <label
                htmlFor="rooms"
                className="absolute left-0 -top-4 text-gold text-xs tracking-[0.1em] uppercase"
              >
                Room Count
              </label>
            </div>

            <div className="relative group">
              <select
                id="service"
                defaultValue={""}
                className="peer w-full bg-transparent border-b border-gray-200 py-4 text-navy focus:outline-none text-lg font-light appearance-none rounded-none"
              >
                <option value="" disabled>
                  Primary Interest
                </option>
                <option value="laundry">Laundry & Linen</option>
                <option value="staffing">Staffing Solutions</option>
                <option value="amenities">Amenity Curation</option>
                <option value="full-suite">Full OLIN Suite</option>
              </select>
              <div className="absolute bottom-0 left-0 w-0 h-px bg-gold transition-all duration-500 peer-focus:w-full"></div>
              <label
                htmlFor="service"
                className="absolute left-0 -top-4 text-gold text-xs tracking-[0.1em] uppercase"
              >
                Service Interest
              </label>
            </div>
          </div>

          <div className="relative group">
            <textarea
              id="message"
              rows={1}
              className="peer w-full bg-transparent border-b border-gray-200 py-4 text-navy focus:outline-none placeholder-transparent text-lg font-light resize-none min-h-[60px]"
              placeholder="Message"
            ></textarea>
            <div className="absolute bottom-0 left-0 w-0 h-px bg-gold transition-all duration-500 peer-focus:w-full"></div>
            <label
              htmlFor="message"
              className="absolute left-0 -top-4 text-gray-400 text-xs transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-4 peer-focus:-top-4 peer-focus:text-gold peer-focus:text-xs tracking-[0.1em] uppercase"
            >
              Specific Requirements
            </label>
          </div>

          <div className="relative group">
            <select
              defaultValue={""}
              id="location"
              className="peer w-full bg-transparent border-b border-gray-200 py-4 text-navy focus:outline-none text-lg font-light appearance-none rounded-none"
            >
              <option value="" disabled>
                Location
              </option>
              <option value="karol-bagh">Karol Bagh</option>
              <option value="paharganj">Paharganj</option>
              <option value="saket">Saket</option>
              <option value="south-delhi">South Delhi</option>
              <option value="aerocity">Aerocity</option>
              <option value="rk-ashram">RK Ashram</option>
              <option value="gurugram">Gurugram</option>
              <option value="noida">Noida</option>
              <option value="other">Other</option>
            </select>
            <div className="absolute bottom-0 left-0 w-0 h-px bg-gold transition-all duration-500 peer-focus:w-full"></div>
            <label
              htmlFor="location"
              className="absolute left-0 -top-4 text-gold text-xs tracking-[0.1em] uppercase"
            >
              Location
            </label>
          </div>

          <div className="pt-8 text-center">
            <button
              type="button"
              className="group relative w-full md:w-auto px-16 py-5 bg-navy text-white text-sm font-bold tracking-[0.25em] uppercase overflow-hidden"
            >
              <div className="absolute inset-0 bg-gold translate-y-[100%] group-hover:translate-y-0 transition-transform duration-500 ease-out"></div>
              <span className="relative z-10 group-hover:text-navy transition-colors duration-300">
                Request Proposal
              </span>
            </button>
            <p className="mt-6 text-[10px] text-gray-400 uppercase tracking-widest font-medium">
              Response time: &lt; 4 Business Hours
            </p>
          </div>
        </form>
      </div>
    </section>
  );
}
