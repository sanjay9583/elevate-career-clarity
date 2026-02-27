import { FileText, Users, Video, Award, Briefcase, MessageSquare } from "lucide-react";

const bonuses = [
  { icon: FileText, title: "Career Toolkit PDF", description: "Comprehensive resource guide for continued self-learning" },
  { icon: Video, title: "Session Recordings", description: "Lifetime access to all bootcamp recordings" },
  { icon: Users, title: "Community Access", description: "Join our exclusive student and alumni network" },
  { icon: Award, title: "Certificate of Completion", description: "Verified certificate from CollegeHive" },
  { icon: Briefcase, title: "Resume Template Pack", description: "Industry-approved resume and cover letter templates" },
  { icon: MessageSquare, title: "1-on-1 Doubt Session", description: "Post-bootcamp doubt clearing with mentors" },
];

const BonusSection = () => {
  return (
    <section className="py-24 lg:py-32 px-6 lg:px-12 border-t border-divider">
      <div className="container mx-auto max-w-5xl">
        <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-4">
          BONUS DELIVERABLES
        </p>
        <h2 className="text-4xl md:text-5xl font-semibold mb-16">
          What You Also Get
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {bonuses.map((bonus, i) => {
            const Icon = bonus.icon;
            return (
              <div key={i} className="bg-surface px-6 py-6 flex items-start gap-4">
                <Icon size={20} className="text-muted-foreground mt-0.5 shrink-0" strokeWidth={1.5} />
                <div>
                  <p className="text-sm font-medium mb-1">{bonus.title}</p>
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
