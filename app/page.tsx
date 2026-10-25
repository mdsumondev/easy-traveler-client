import { CtaBanner } from "@/components/cta-banner";
import { HeroSection } from "@/components/hero-section";
import { Testimonials } from "@/components/testimonials";
import { WhyChooseUs } from "@/components/why-choose-us";

export default function Home() {
  return (
    <main className="flex flex-1 flex-col">
      <HeroSection />
      <WhyChooseUs />
      <Testimonials />
      <CtaBanner />
    </main>
  );
}
