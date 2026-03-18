import { useInView } from "@/hooks/useInView";
import { Download, ArrowRight } from "lucide-react";

const BROCHURE_FORM_URL =
  "https://forms.zohopublic.in/saimaneash437gm1/form/MarketingBootcampBrochureDownload/formperma/2RE5JpZQXEwl-GdgeNiJaBF44ZABO6ZZlAgaRcDu3c0";

const PAYMENT_FORM_URL =
  "https://forms.zohopublic.in/saimaneash437gm1/form/PaymentForm/formperma/KvnhScsHQgA5t7CpZjfcy-4eMuR3R8ofNyVnYWeBbmk";

const MarketingBootcampSection = () => {
  const { ref, isInView } = useInView(0.1);

  return (
    <section
      id="marketing-bootcamp"
      ref={ref as React.RefObject<HTMLElement>}
      className="py-20 lg:py-28 px-6 lg:px-12 bg-surface border-t border-divider"
    >
      <div className="container mx-auto max-w-4xl">
        <div className={`reveal ${isInView ? "revealed" : ""}`}>
          <p className="text-xs tracking-[0.3em] uppercase text-accent font-medium mb-3">
            FLAGSHIP PROGRAM
          </p>
          <h2 className="font-serif text-3xl md:text-5xl font-bold mb-6">
            Marketing Bootcamp
          </h2>
        </div>

        <div className={`reveal ${isInView ? "revealed stagger-1" : ""}`}>
          <p className="text-muted-foreground leading-[1.9] text-base md:text-lg max-w-3xl mb-8">
            Most students pick marketing without really knowing what it is. Not the Instagram version, but the actual job. Over 5 days, CollegeHive's Marketing Bootcamp puts you in the room with industry professionals, recent hires, and HR managers who have made the decisions.
          </p>

          <p className="text-muted-foreground leading-[1.9] text-base md:text-lg max-w-3xl mb-10">
            You'll understand what domains like Brand, Performance, Growth, and Content actually look like day-to-day, what the career path and salaries really look like, how resumes get shortlisted and rejected, and what separates candidates who get offers from those who don't. You leave with a placement-ready resume, a prep plan, and the kind of clarity that most students only get after they've already made the wrong choice.
          </p>

          {/* Key areas */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-10">
            {["Brand Marketing", "Performance Marketing", "Growth & Strategy", "Content & Social"].map((area, i) => (
              <div
                key={i}
                className="bg-background border border-divider rounded-lg px-4 py-3 text-center text-sm font-medium text-foreground/80"
              >
                {area}
              </div>
            ))}
          </div>
        </div>

        {/* CTAs */}
        <div className={`flex flex-col sm:flex-row gap-4 reveal ${isInView ? "revealed stagger-2" : ""}`}>
          <a
            href={BROCHURE_FORM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-accent text-accent-foreground px-8 py-4 text-sm font-semibold tracking-wide rounded-full hover:opacity-90 transition-all hover:shadow-lg"
          >
            <Download size={15} />
            Download the Brochure
          </a>
          <a
            href={PAYMENT_FORM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 border border-divider text-foreground px-8 py-4 text-sm font-medium tracking-wide rounded-full hover:bg-surface transition-all"
          >
            Enroll Now
            <ArrowRight size={14} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default MarketingBootcampSection;
