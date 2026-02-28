import { useInView } from "@/hooks/useInView";
import { Check, Clock, Zap } from "lucide-react";

const includes = [
  "5 days of live expert sessions",
  "Interactive Q&A with industry professionals",
  "Career toolkit PDF & resource pack",
  "Lifetime access to session recordings",
  "Certificate of completion",
  "Exclusive community access",
  "Resume template pack",
  "Post-bootcamp 1-on-1 doubt session",
];

const PricingSection = () => {
  const { ref, isInView } = useInView(0.1);

  return (
    <section
      id="pricing"
      ref={ref as React.RefObject<HTMLElement>}
      className="py-20 lg:py-28 px-6 lg:px-12 bg-surface border-t border-divider"
    >
      <div className="container mx-auto max-w-3xl">
        <div className={`text-center mb-12 reveal ${isInView ? "revealed" : ""}`}>
          <p className="text-xs tracking-[0.3em] uppercase text-accent font-medium mb-3">
            PRICING
          </p>
          <h2 className="font-serif text-3xl md:text-5xl font-bold">
            Invest In Your Future
          </h2>
        </div>

        <div className={`bg-background border border-divider rounded-2xl overflow-hidden reveal-scale ${isInView ? "revealed stagger-1" : ""}`}>
          {/* Price header */}
          <div className="text-center px-8 pt-10 pb-8">
            <div className="inline-flex items-center gap-2 bg-accent/10 text-accent text-xs font-semibold tracking-wider uppercase px-3 py-1.5 rounded-full mb-6">
              <Zap size={12} />
              50% OFF — Early Bird
            </div>

            <div className="mb-1">
              <span className="text-muted-foreground line-through text-lg">₹1999</span>
            </div>
            <div className="mb-2">
              <span className="text-6xl md:text-7xl font-bold tracking-tight">₹999</span>
            </div>
            <p className="text-xs text-muted-foreground">
              That's just <span className="text-foreground font-medium">₹200/day</span> for 5 expert-led sessions
            </p>
          </div>

          {/* Divider */}
          <div className="border-t border-divider mx-8" />

          {/* Includes */}
          <div className="px-8 py-8">
            <p className="text-xs tracking-[0.2em] uppercase text-muted-foreground mb-5 font-medium">
              EVERYTHING INCLUDED
            </p>
            <ul className="grid sm:grid-cols-2 gap-3">
              {includes.map((item, i) => (
                <li key={i} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                  <Check size={15} className="text-accent shrink-0 mt-0.5" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* CTA */}
          <div className="px-8 pb-10 pt-2 text-center">
            <a
              href="#enroll"
              className="inline-flex items-center justify-center w-full sm:w-auto bg-accent text-accent-foreground px-12 py-4 text-sm font-semibold tracking-wide rounded-full hover:opacity-90 transition-all hover:shadow-lg"
            >
              Enroll Now
            </a>

            <div className="flex items-center justify-center gap-4 mt-5 text-xs text-muted-foreground">
              <span className="inline-flex items-center gap-1">
                <Clock size={12} />
                Next cohort starts soon
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
