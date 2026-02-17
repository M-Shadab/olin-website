import ParentLayout from "./components/parent-layout";
import Hero from "./components/sections/Hero";
import ServiceGrid from "./components/sections/ServiceGrid";
import Pillars from "./components/sections/Pillars";
import Framework from "./components/sections/Framework";
import HumanElement from "./components/sections/HumanElement";
import Testimonial from "./components/sections/Testimonial";
import PartnerForm from "./components/sections/PartnerForm";

export default function Home() {
  return (
    <ParentLayout>
      <Hero />
      <ServiceGrid />
      <Pillars />
      <Framework />
      <HumanElement />
      <Testimonial />
      <PartnerForm />
    </ParentLayout>
  );
}
