"use client";

export default function HumanElement() {
  return (
    <section className="flex flex-col md:flex-row h-auto md:h-[600px] w-full">
      {/* Visual Left */}
      <div className="w-full md:w-1/2 relative min-h-[400px]">
        <div className="absolute inset-0 bg-navy">
          {/* Placeholder for "Candid, high-end photo of Alba staff inspecting quality" */}
          <div className="absolute inset-0 bg-[url('/imgs/hygiene-img.1.jpg')] bg-cover bg-center" />
        </div>
      </div>

      {/* Copy Right */}
      <div className="w-full md:w-1/2 flex items-center justify-center bg-white p-12 md:p-24">
        <div className="max-w-md">
          <h3 className="text-3xl md:text-4xl font-playfair font-medium text-navy mb-8">
            Your Silent Partner in Excellence.
          </h3>
          <p className="text-lg text-gray-600 leading-relaxed mb-10 font-light">
            "We bridge the gap between industrial scale and boutique attention.
            Your reputation begins with the first thing a guest touches."
          </p>
          <a
            href="#"
            className="text-gold font-medium tracking-wide hover:underline decoration-gold underline-offset-4 transition-all"
          >
            Our Hygiene Standards &rarr;
          </a>
        </div>
      </div>
    </section>
  );
}
