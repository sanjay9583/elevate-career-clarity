import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import TrustStrip from "@/components/TrustStrip";
import BootcampStructure from "@/components/BootcampStructure";
import MarketingBootcampSection from "@/components/MarketingBootcampSection";
import SpeakersSection from "@/components/SpeakersSection";
import AboutSection from "@/components/AboutSection";
// import PastEventsSection from "@/components/PastEventsSection";
// import PricingSection from "@/components/PricingSection";
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
        <MarketingBootcampSection />
        <SpeakersSection />
        <AboutSection />
        {/* <PastEventsSection /> */}
        {/* <PricingSection /> */}
        <FAQSection />
        <BonusSection />
        <CTABanner />
      </main>
      <Footer />

      {/* Floating Enroll Button */}
      <a
        href="https://forms.zohopublic.in/saimaneash437gm1/form/PaymentForm/formperma/KvnhScsHQgA5t7CpZjfcy-4eMuR3R8ofNyVnYWeBbmk"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-accent text-accent-foreground px-7 py-3.5 text-sm font-semibold tracking-wide shadow-lg rounded-full hover:opacity-90 transition-all hover:shadow-xl pulse-cta"
      >
        Enroll Now
      </a>
    </div>
  );
};

export default Index;
