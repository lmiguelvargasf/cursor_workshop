import { AboutMission } from "@/components/AboutMission";
import { ContactSection } from "@/components/ContactSection";
import { FaqSection } from "@/components/FaqSection";
import { FinalCtaSection } from "@/components/FinalCtaSection";
import { HeroSection } from "@/components/HeroSection";
import { PortfolioSection } from "@/components/PortfolioSection";
import { ProcessSection } from "@/components/ProcessSection";
import { ServicesSection } from "@/components/ServicesSection";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { TestimonialsSection } from "@/components/TestimonialsSection";

export default function Home() {
  return (
    <div className="min-h-dvh bg-zinc-50 text-zinc-900 antialiased">
      <SiteHeader />
      <main>
        <HeroSection />
        <AboutMission />
        <ServicesSection />
        <ProcessSection />
        <TestimonialsSection />
        <PortfolioSection />
        <FaqSection />
        <ContactSection />
        <FinalCtaSection />
        <SiteFooter />
      </main>
    </div>
  );
}
