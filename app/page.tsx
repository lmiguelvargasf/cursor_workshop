import { About } from "@/components/About";
import { ContactSection } from "@/components/ContactSection";
import { CtaSection } from "@/components/CtaSection";
import { Faq } from "@/components/Faq";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Portfolio } from "@/components/Portfolio";
import { Process } from "@/components/Process";
import { Services } from "@/components/Services";
import { Testimonials } from "@/components/Testimonials";

export default function Home() {
  return (
    <div className="relative min-h-dvh overflow-hidden bg-zinc-950">
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_100%_70%_at_50%_-15%,rgba(255,255,255,0.07),transparent_55%)]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_100%_100%,rgba(255,255,255,0.04),transparent_50%)]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_0%_90%,rgba(255,255,255,0.03),transparent_45%)]"
        aria-hidden
      />

      <div className="relative z-10">
        <Header />
        <main>
          <Hero />
          <About />
          <Services />
          <Process />
          <Portfolio />
          <Testimonials />
          <Faq />
          <CtaSection />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </div>
  );
}
