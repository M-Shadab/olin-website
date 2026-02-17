"use client";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Hero from "./components/sections/Hero";
import ServiceGrid from "./components/sections/ServiceGrid";
import Pillars from "./components/sections/Pillars";
import Framework from "./components/sections/Framework";
import HumanElement from "./components/sections/HumanElement";
import Testimonial from "./components/sections/Testimonial";
import PartnerForm from "./components/sections/PartnerForm";

export default function Home() {
  return (
    <div className="min-h-screen font-sans text-foreground bg-background selection:bg-gold selection:text-white">
      <Header />

      <Hero />
      <ServiceGrid />
      <Pillars />
      <Framework />
      <HumanElement />
      <Testimonial />
      <PartnerForm />

      <Footer />
    </div>
  );
}
