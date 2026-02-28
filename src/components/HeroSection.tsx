import { useInView } from "@/hooks/useInView";
import { ArrowDown, Users, Shield } from "lucide-react";

const HeroSection = () => {
  const { ref, isInView } = useInView(0.1);

  return (
    <section
      id="bootcamp-overview"
      ref={ref as React.RefObject<HTMLElement>}
      className="relative pt-28 pb-20 lg:pt-36 lg:pb-28 px-6 lg:px-12 overflow-hidden"
    >
      {/* Subtle decorative background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 right-10 w-72 h-72 bg-accent/5 rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-secondary rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto max-w-5xl relative">
        {/* Badge */}
        <div className={`reveal ${isInView ? "revealed" : ""}`}>
          <span className="inline-flex items-center gap-2 bg-surface text-muted-foreground text-xs tracking-[0.2em] uppercase px-4 py-2 rounded-full border border-divider mb-8">
            <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
            5-Day Domain Bootcamp
          </span>
        </div>

        {/* Heading */}
        <h1 className={`font-serif text-4xl md:text-5xl lg:text-7xl font-bold leading-[1.08] mb-6 max-w-4xl reveal ${isInView ? "revealed stagger-1" : ""}`}>
          From Confused to Confident:
          <br />
          <span className="text-muted-foreground">Discover Your True</span>
          <br />
          Career Path.
        </h1>

        {/* Subtext */}
        <p className={`text-lg md:text-xl text-muted-foreground max-w-xl leading-relaxed mb-10 reveal ${isInView ? "revealed stagger-2" : ""}`}>
          Structured exposure to industry experts, HRs, and recently placed graduates — across marketing, finance, consulting, HR & more.
        </p>

        {/* CTAs */}
        <div className={`flex flex-col sm:flex-row gap-4 mb-14 reveal ${isInView ? "revealed stagger-3" : ""}`}>
          <a
            href="#enroll"
            className="inline-flex items-center justify-center bg-accent text-accent-foreground px-8 py-4 text-sm font-semibold tracking-wide rounded-full hover:opacity-90 transition-all hover:shadow-lg"
          >
            Enroll Now — ₹999
          </a>
          <a
            href="#program-structure"
            className="inline-flex items-center justify-center gap-2 border border-divider text-foreground px-8 py-4 text-sm font-medium tracking-wide rounded-full hover:bg-surface transition-all"
          >
            See Program
            <ArrowDown size={14} />
          </a>
        </div>

        {/* Trust badges */}
        <div className={`flex flex-wrap items-center gap-6 text-xs text-muted-foreground reveal ${isInView ? "revealed stagger-4" : ""}`}>
          <span className="inline-flex items-center gap-1.5">
            <Users size={14} className="text-accent" />
            4,00,000+ students trust CollegeHive
          </span>
          <span className="hidden sm:inline text-divider">|</span>
          <span className="inline-flex items-center gap-1.5">
            <Shield size={14} className="text-accent" />
            Backed by NSRCEL, IIM Bangalore
          </span>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
