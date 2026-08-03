import { AboutSection } from "@/components/home/about-section";
import { AtmFinderSection } from "@/components/home/atm-finder-section";
import { FeaturesSection } from "@/components/home/features-section";
import { HeroSection } from "@/components/home/hero-section";
import { SavingsSection } from "@/components/home/savings-section";
import { TestimonialsSection } from "@/components/home/testimonials-section";
import { Showcase } from "@/components/showcase";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export default function Home() {
  return (
    <div className="site-shell">
      <a href="#main" className="focus-ring sr-only z-50 bg-white px-4 py-3 focus:not-sr-only focus:absolute focus:left-4 focus:top-4">Skip to main content</a>
      <SiteHeader />
      <main id="main">
        <HeroSection />
        <FeaturesSection />
        <AboutSection />
        <Showcase />
        <AtmFinderSection />
        <SavingsSection />
        <TestimonialsSection />
      </main>
      <SiteFooter />
    </div>
  );
}
