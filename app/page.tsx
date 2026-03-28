import { AboutMission } from "@/components/AboutMission";
import { FinalCtaFooter } from "@/components/FinalCtaFooter";
import { HeroSection } from "@/components/HeroSection";
import { SiteHeader } from "@/components/SiteHeader";
import { ValueGrid } from "@/components/ValueGrid";

export default function Home() {
  return (
    <div className="min-h-dvh bg-zinc-50 text-zinc-900 antialiased">
      <SiteHeader />
      <main>
        <HeroSection />
        <AboutMission />
        <ValueGrid />
        <FinalCtaFooter />
      </main>
    </div>
  );
}
