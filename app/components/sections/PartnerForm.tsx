"use client";

export default function PartnerForm() {
  return (
    <section
      id="partner-form"
      className="py-16 md:py-32 px-4 md:px-6 bg-white flex flex-col items-center justify-center"
    >
      <div className="w-full max-w-4xl bg-white p-6 md:p-12 lg:p-24 shadow-2xl shadow-navy/5 border border-black/5">
        <div className="text-center mb-10 md:mb-16">
          <span className="text-gold text-xs font-bold tracking-[0.2em] uppercase mb-3 md:mb-4 block">
            Initiate Partnership
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-playfair font-medium text-navy">
            Partner with OLIN
          </h2>
        </div>
        {/* The Lead Generation Form */}
        <form className="space-y-8 md:space-y-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            <div className="relative group">
              <input
                type="text"
                id="name"
                className="peer w-full bg-transparent border-b border-gray-300 py-3 md:py-4 text-navy focus:outline-none focus:border-gold transition-colors placeholder-transparent text-base md:text-lg"
                placeholder="Name"
              />
              <label
                htmlFor="name"
                className="absolute left-0 -top-3.5 text-gray-400 text-xs md:text-sm transition-all peer-placeholder-shown:text-sm md:peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-3 md:peer-placeholder-shown:top-4 peer-focus:-top-3.5 peer-focus:text-gold peer-focus:text-xs tracking-widest uppercase"
              >
                Full Name
              </label>
            </div>

            <div className="relative group">
              <input
                type="email"
                id="email"
                className="peer w-full bg-transparent border-b border-gray-300 py-3 md:py-4 text-navy focus:outline-none focus:border-gold transition-colors placeholder-transparent text-base md:text-lg"
                placeholder="Email"
              />
              <label
                htmlFor="email"
                className="absolute left-0 -top-3.5 text-gray-400 text-xs md:text-sm transition-all peer-placeholder-shown:text-sm md:peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-3 md:peer-placeholder-shown:top-4 peer-focus:-top-3.5 peer-focus:text-gold peer-focus:text-xs tracking-widest uppercase"
              >
                Work Email
              </label>
            </div>

            <div className="relative group">
              <input
                type="tel"
                id="phone"
                className="peer w-full bg-transparent border-b border-gray-300 py-3 md:py-4 text-navy focus:outline-none focus:border-gold transition-colors placeholder-transparent text-base md:text-lg"
                placeholder="Phone"
              />
              <label
                htmlFor="phone"
                className="absolute left-0 -top-3.5 text-gray-400 text-xs md:text-sm transition-all peer-placeholder-shown:text-sm md:peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-3 md:peer-placeholder-shown:top-4 peer-focus:-top-3.5 peer-focus:text-gold peer-focus:text-xs tracking-widest uppercase"
              >
                Direct Phone
              </label>
            </div>

            <div className="relative group">
              <input
                type="text"
                id="website"
                className="peer w-full bg-transparent border-b border-gray-300 py-3 md:py-4 text-navy focus:outline-none focus:border-gold transition-colors placeholder-transparent text-base md:text-lg"
                placeholder="Website"
              />
              <label
                htmlFor="website"
                className="absolute left-0 -top-3.5 text-gray-400 text-xs md:text-sm transition-all peer-placeholder-shown:text-sm md:peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-3 md:peer-placeholder-shown:top-4 peer-focus:-top-3.5 peer-focus:text-gold peer-focus:text-xs tracking-widest uppercase"
              >
                Company Website/Hotel Name
              </label>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            <div className="relative group">
              <select
                id="rooms"
                className="peer w-full bg-transparent border-b border-gray-300 py-3 md:py-4 text-navy focus:outline-none focus:border-gold transition-colors text-base md:text-lg appearance-none rounded-none"
              >
                <option value="" disabled selected>
                  Select Capacity
                </option>
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
                className="peer w-full bg-transparent border-b border-gray-300 py-3 md:py-4 text-navy focus:outline-none focus:border-gold transition-colors text-base md:text-lg appearance-none rounded-none"
              >
                <option value="" disabled selected>
                  Primary Interest
                </option>
                <option value="laundry">Laundry & Linen</option>
                <option value="staffing">Staffing Solutions</option>
                <option value="amenities">Amenity Curation</option>
                <option value="full-suite">Full OLIN Suite</option>
              </select>
              <label
                htmlFor="service"
                className="absolute left-0 -top-3.5 text-gold text-xs tracking-widest uppercase"
              >
                Service Interest
              </label>
            </div>
          </div>

          <div className="relative group pt-2 md:pt-4">
            <textarea
              id="message"
              rows={1}
              className="peer w-full bg-transparent border-b border-gray-300 py-3 md:py-4 text-navy focus:outline-none focus:border-gold transition-colors placeholder-transparent text-base md:text-lg resize-none min-h-[60px]"
              placeholder="Message"
            ></textarea>
            <label
              htmlFor="message"
              className="absolute left-0 -top-3.5 text-gray-400 text-xs md:text-sm transition-all peer-placeholder-shown:text-sm md:peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-3 md:peer-placeholder-shown:top-4 peer-focus:-top-3.5 peer-focus:text-gold peer-focus:text-xs tracking-widest uppercase"
            >
              Specific Requirements or Questions
            </label>
          </div>
          <div className="relative group">
            <select
              id="location"
              className="peer w-full bg-transparent border-b border-gray-300 py-3 md:py-4 text-navy focus:outline-none focus:border-gold transition-colors text-base md:text-lg appearance-none rounded-none"
            >
              <option value="" disabled selected>
                Location
              </option>
              <option value="karol-bagh">Karol Bagh</option>
              <option value="paharganj">Paharganj</option>
              <option value="saket">Saket</option>
              <option value="south-delhi">South Delhi</option>
              <option value="aerocity">Aerocity</option>
              <option value="rk-ashram">RK Ashram</option>
              <option value="dwarka">Dwarka</option>
              <option value="delhi">Delhi</option>
              <option value="mahipalpur">Mahipalpur</option>
              <option value="gurugram">Gurugram</option>
              <option value="noida">Noida</option>
              <option value="faridabad">Faridabad</option>
              <option value="ghaziabad">Ghaziabad</option>
            </select>
            <label
              htmlFor="location"
              className="absolute left-0 -top-3.5 text-gold text-xs tracking-widest uppercase"
            >
              Location
            </label>
          </div>

          <div className="pt-6 md:pt-8 text-center">
            <button
              type="button"
              className="w-full md:w-auto px-10 md:px-12 py-4 md:py-5 bg-navy text-white text-sm font-bold tracking-[0.2em] uppercase hover:bg-gold transition-colors duration-500 rounded-sm cursor-pointer"
            >
              Request Proposal
            </button>
            <p className="mt-4 md:mt-6 text-xs text-gray-400 font-light">
              Our team typically responds within 4 business hours.
            </p>
          </div>
        </form>
      </div>
    </section>
  );
}
