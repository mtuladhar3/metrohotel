import AboutSection from './about/AboutSection';
import BlogSection from './blog/BlogSection';
import BranchSection from './branches/BranchSection';
import CtaSection from './cta/CtaSection';
import EventSection from './events/EventSection';
import HeroSection from './hero/HeroSection';
import OfferSection from './offers/OfferSection';
import WhyUsSection from './whyus/WhyUsSection';

/**
 * Defines the homepage section order. Shared site chrome belongs in app/layout.tsx.
 */
export default function HomePage() {
  return (
    <main className="relative min-h-screen bg-slate-950">
      <HeroSection />

      <div className="relative z-20">
        <AboutSection />
        <BranchSection />
        <EventSection />
        <WhyUsSection />
        <OfferSection />
        <BlogSection />
        <CtaSection />
      </div>
    </main>
  );
}
