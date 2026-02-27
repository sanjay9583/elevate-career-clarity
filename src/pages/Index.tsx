import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
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
        className="fixed bottom-6 right-6 z-50 bg-primary text-primary-foreground px-8 py-4 text-sm font-medium tracking-wide shadow-lg rounded-full hover:opacity-90 transition-opacity"
      >
        Enroll Now – ₹999
      </a>
    </div>
  );
};

export default Index;
