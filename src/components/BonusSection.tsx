import { FileText, Users, Video, Award, Briefcase, MessageSquare } from "lucide-react";
import { useInView } from "@/hooks/useInView";

const bonuses = [
  { icon: FileText, title: "Career Toolkit PDF", description: "Comprehensive resource guide for continued self-learning" },
  { icon: Video, title: "Session Recordings", description: "Lifetime access to all bootcamp recordings" },
  { icon: Users, title: "Community Access", description: "Join our exclusive student and alumni network" },
  { icon: Award, title: "Certificate of Completion", description: "Verified certificate from CollegeHive" },
  { icon: Briefcase, title: "Resume Template Pack", description: "Industry-approved resume and cover letter templates" },
  { icon: MessageSquare, title: "1-on-1 Doubt Session", description: "Post-bootcamp doubt clearing with mentors" },
];

const BonusSection = () => {
  const { ref, isInView } = useInView(0.1);

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      className="py-20 lg:py-28 px-6 lg:px-12 bg-surface border-t border-divider"
    >
      <div className="container mx-auto max-w-5xl">
        <div className={`mb-14 reveal ${isInView ? "revealed" : ""}`}>
          <p className="text-xs tracking-[0.3em] uppercase text-accent font-medium mb-3">
            BONUS DELIVERABLES
          </p>
          <h2 className="font-serif text-3xl md:text-5xl font-bold">
            What You Also Get
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {bonuses.map((bonus, i) => {
            const Icon = bonus.icon;
            return (
              <div
                key={i}
                className={`bg-background border border-divider rounded-xl px-6 py-5 flex items-start gap-4 transition-all hover:shadow-md hover:border-accent/20 reveal-scale ${isInView ? `revealed stagger-${i + 1}` : ""}`}
              >
                <div className="w-9 h-9 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">
                  <Icon size={16} className="text-accent" />
                </div>
                <div>
                  <p className="text-sm font-semibold mb-0.5">{bonus.title}</p>
                  <p className="text-xs text-muted-foreground leading-relaxed">{bonus.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default BonusSection;
