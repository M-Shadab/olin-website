import ParentLayout from "../components/parent-layout";
import Framework from "../components/sections/Framework";
import Image from "next/image";

export default function Home() {
  return (
    <ParentLayout>
      <div className="pt-18">
        {/* Simple Hero */}
        <section className="relative py-20 px-6 bg-navy text-white text-center">
          <h1 className="text-5xl md:text-6xl font-playfair mb-6">
            Vision & Leadership
          </h1>
          <p className="max-w-2xl mx-auto text-white/80 font-light text-lg">
            Redefining hospitality with invisible excellence.
          </p>
        </section>

        {/* Founder Section */}
        <section className="py-24 px-6 max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            {/* Text Content */}
            <div className="md:w-1/2">
              <span className="text-gold text-xs font-bold tracking-[0.2em] uppercase mb-4 block">
                The Founder
              </span>
              <h2 className="text-4xl font-playfair text-navy mb-8">
                Vision & Leadership
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                OLIN was founded with a singular mission: to bridge the gap
                between industrial scale and boutique attention to detail. With
                years of experience in the hospitality sector, we understand
                that true luxury lies in the unseen perfection of daily
                operations.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Our commitment goes beyond simple service; we act as a strategic
                partner to the world's finest properties, ensuring that every
                guest interaction with our linens and amenities reflects the
                highest standards of quality and care.
              </p>
            </div>

            {/* Founder Image Placeholder */}
            <div className="md:w-1/2 w-full">
              <div className="relative w-full aspect-[3/4] bg-gray-200 border border-gray-300 flex items-center justify-center rounded-sm overflow-hidden shadow-2xl">
                <Image
                  src="/imgs/founder-best.jpg"
                  alt="Founder of OLIN"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </section>
      </div>
    </ParentLayout>
  );
}
