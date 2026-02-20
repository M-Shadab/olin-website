"use client";

import { useEffect, useRef, useState, useActionState } from "react";
import Turnstile from "react-turnstile";
import { submitLead } from "../../actions/submit-lead";

import { getDeviceInfo } from "../../lib/client-device";

const initialState = {
  success: false,
  error: "",
};
// ... (rest of imports are fine, just adding this one)

export default function PartnerForm() {
  const lineRef = useRef<HTMLDivElement>(null);
  // @ts-ignore - useActionState types might conflict with server action return types depending on strictness
  const [state, formAction, isPending] = useActionState(
    submitLead,
    initialState,
  );
  const [turnstileToken, setTurnstileToken] = useState("");
  const [clientMetadata, setClientMetadata] = useState({});

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

    // Capture Client Metadata
    const fetchMetadata = async () => {
      try {
        const deviceInfo = getDeviceInfo();

        const browserData = {
          userAgent: navigator.userAgent,
          language: navigator.language,
          platform: navigator.platform,
          screenResolution: `${window.screen.width}x${window.screen.height}`,
          timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
          referrer: document.referrer || "Direct",
          ...deviceInfo, // Add type, vendor, model, os, browser
        };

        // Try fetching public IP/Location from client side
        let ipData = {};
        try {
          const res = await fetch("https://ipapi.co/json/");
          if (res.ok) {
            ipData = await res.json();
          }
        } catch (e) {
          console.warn("Could not fetch client IP data:", e);
        }

        setClientMetadata({ ...browserData, ...ipData });
      } catch (error) {
        console.error("Error capturing metadata:", error);
      }
    };

    fetchMetadata();

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

        {state?.success ? (
          <div className="text-center py-12">
            <h3 className="text-3xl font-playfair text-navy mb-4">
              Request Received
            </h3>
            <p className="text-gray-600 font-light text-lg">
              Thank you for your interest. Our team will review your details and
              contact you shortly to discuss a pilot program.
            </p>
            <button
              onClick={() => window.location.reload()}
              className="mt-8 text-gold text-sm font-bold tracking-[0.2em] uppercase hover:text-navy transition-colors"
            >
              Send another message
            </button>
          </div>
        ) : (
          /* The Lead Generation Form */
          <form action={formAction} className="space-y-12">
            <input
              type="hidden"
              name="cf-turnstile-response"
              value={turnstileToken}
            />
            <input
              type="hidden"
              name="client_metadata"
              value={JSON.stringify(clientMetadata)}
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {/* Input Field: Name */}
              <div className="relative group">
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="peer w-full bg-transparent border-b border-gray-200 py-4 text-navy focus:outline-none placeholder-transparent text-lg font-light"
                  placeholder="name"
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
                  name="email"
                  required
                  className="peer w-full bg-transparent border-b border-gray-200 py-4 text-navy focus:outline-none placeholder-transparent text-lg font-light"
                  placeholder="email"
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
                  name="phone"
                  className="peer w-full bg-transparent border-b border-gray-200 py-4 text-navy focus:outline-none placeholder-transparent text-lg font-light"
                  placeholder="phone"
                />
                <div className="absolute bottom-0 left-0 w-0 h-px bg-gold transition-all duration-500 peer-focus:w-full"></div>
                <label
                  htmlFor="phone"
                  className="absolute left-0 -top-4 text-gray-400 text-xs transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-4 peer-focus:-top-4 peer-focus:text-gold peer-focus:text-xs tracking-[0.1em] uppercase"
                >
                  Direct Phone
                </label>
              </div>

              {/* Input Field: Company */}
              <div className="relative group">
                <input
                  type="text"
                  id="company"
                  name="company"
                  className="peer w-full bg-transparent border-b border-gray-200 py-4 text-navy focus:outline-none placeholder-transparent text-lg font-light"
                  placeholder="company"
                />
                <div className="absolute bottom-0 left-0 w-0 h-px bg-gold transition-all duration-500 peer-focus:w-full"></div>
                <label
                  htmlFor="company"
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
                  name="rooms"
                  defaultValue=""
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
                  name="service"
                  defaultValue=""
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

            {/* Input Field: Message */}
            <div className="relative group">
              <textarea
                id="message"
                name="message"
                rows={1}
                className="peer block w-full bg-transparent border-b border-gray-200 py-4 text-navy focus:outline-none placeholder-transparent text-lg font-light resize-none min-h-[60px]"
                placeholder="Tell us about your operational needs..."
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
                id="location"
                name="location"
                defaultValue=""
                className="peer w-full bg-transparent border-b border-gray-200 py-4 text-navy focus:outline-none text-lg font-light appearance-none rounded-none"
              >
                <option value="" disabled>
                  Location
                </option>
                <option value="aerocity">Aerocity</option>
                <option value="connaught-place">Connaught Place</option>
                <option value="dwarka">Dwarka</option>
                <option value="greater-kailash">Greater Kailash</option>
                <option value="gurugram">Gurugram (General)</option>
                <option value="gurugram-cyber-hub">Gurugram - Cyber Hub</option>
                <option value="gurugram-golf-course-road">
                  Gurugram - Golf Course Road
                </option>
                <option value="gurugram-mg-road">Gurugram - MG Road</option>
                <option value="gurugram-sector-29">Gurugram - Sector 29</option>
                <option value="janakpuri">Janakpuri</option>
                <option value="jasola-okhla">Jasola / Okhla</option>
                <option value="karol-bagh">Karol Bagh</option>
                <option value="mahipalpur">Mahipalpur</option>
                <option value="new-friends-colony">New Friends Colony</option>
                <option value="noida">Noida (General)</option>
                <option value="noida-sector-18">Noida - Sector 18</option>
                <option value="noida-sector-62">Noida - Sector 62</option>
                <option value="paharganj">Paharganj</option>
                <option value="patel-nagar">Patel Nagar</option>
                <option value="rajouri-garden">Rajouri Garden</option>
                <option value="rk-ashram">RK Ashram</option>
                <option value="saket">Saket</option>
                <option value="south-delhi">South Delhi</option>
                <option value="vasant-kunj">Vasant Kunj</option>
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

            <div className="relative md:pt-8 flex flex-col items-center w-full">
              <div className="w-fit md:w-[250px] md:absolute md:right-0 md:top-8 flex justify-center md:block mb-8 md:mb-0 shrink-0 z-10">
                <div className="bg-gray-50 p-2 rounded">
                  <Turnstile
                    sitekey={process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY || ""}
                    onVerify={(token) => setTurnstileToken(token)}
                    theme="light"
                    size="normal"
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={isPending}
                className="group relative px-12 py-5 bg-navy text-white text-sm font-bold tracking-[0.25em] uppercase overflow-hidden disabled:opacity-70 disabled:cursor-not-allowed shrink-0"
              >
                <div className="absolute inset-0 bg-gold translate-y-[100%] group-hover:translate-y-0 transition-transform duration-500 ease-out"></div>
                <span className="relative z-10 group-hover:text-navy transition-colors duration-300">
                  {isPending ? "Sending..." : "Submit Inquiry"}
                </span>
              </button>

              {state?.error && (
                <p className="text-red-500 text-sm tracking-wide mt-4 order-last md:order-none">
                  {state.error}
                </p>
              )}

              <p className="mt-6 text-[10px] text-gray-400 uppercase tracking-widest font-medium">
                Response time: &lt; 4 Business Hours
              </p>
            </div>
          </form>
        )}
      </div>
    </section>
  );
}
