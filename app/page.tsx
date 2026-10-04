import HeroSection from "@/components/sections/hero";
import ServicesSection from "@/components/sections/services";
import AboutSection from "@/components/sections/about";
import WhyChooseUsSection from "@/components/sections/why-choose-us";
import PortfolioSection from "@/components/sections/portfolio";
import ProcessSection from "@/components/sections/process";
import TechnologiesSection from "@/components/sections/technologies";
import PricingSection from "@/components/sections/pricing";
import FAQSection from "@/components/sections/faq";
import CTASection from "@/components/sections/cta";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <AboutSection />
      <WhyChooseUsSection />
      <PortfolioSection />
      <ProcessSection />
      <TechnologiesSection />
      <PricingSection />
      <FAQSection />
      <CTASection />
    </>
  );
}
