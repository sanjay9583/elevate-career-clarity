import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import TrustStrip from "@/components/TrustStrip";
import BootcampStructure from "@/components/BootcampStructure";
import SpeakersSection from "@/components/SpeakersSection";
import AboutSection from "@/components/AboutSection";
import PricingSection from "@/components/PricingSection";
import FAQSection from "@/components/FAQSection";
import BonusSection from "@/components/BonusSection";
import CTABanner from "@/components/CTABanner";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <TrustStrip />
        <BootcampStructure />
        <SpeakersSection />
        <AboutSection />
        <PricingSection />
        <FAQSection />
        <BonusSection />
        <CTABanner />
      </main>
      <Footer />

      {/* Floating Enroll Button */}
      <a
        href="#pricing"
        className="fixed bottom-6 right-6 z-50 bg-accent text-accent-foreground px-7 py-3.5 text-sm font-semibold tracking-wide shadow-lg rounded-full hover:opacity-90 transition-all hover:shadow-xl pulse-cta"
      >
        Enroll Now – ₹999
      </a>
    </div>
  );
};

export default Index;
