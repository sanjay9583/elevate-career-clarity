import { useInView } from "@/hooks/useInView";
import { Linkedin } from "lucide-react";

const speakers = [
  { name: "Arjun Mehta", designation: "Product Lead, Google", initials: "AM", color: "bg-amber-100 text-amber-700" },
  { name: "Priya Sharma", designation: "Senior HR, Deloitte", initials: "PS", color: "bg-rose-100 text-rose-700" },
  { name: "Rohan Kapoor", designation: "Founding Engineer, Razorpay", initials: "RK", color: "bg-blue-100 text-blue-700" },
  { name: "Sneha Iyer", designation: "Marketing Director, Swiggy", initials: "SI", color: "bg-emerald-100 text-emerald-700" },
  { name: "Vikram Desai", designation: "Campus Recruiter, TCS", initials: "VD", color: "bg-violet-100 text-violet-700" },
  { name: "Ananya Rao", designation: "Recently Placed, Amazon", initials: "AR", color: "bg-orange-100 text-orange-700" },
];

const SpeakersSection = () => {
  const { ref, isInView } = useInView(0.1);

  return (
    <section
      id="speakers"
      ref={ref as React.RefObject<HTMLElement>}
      className="py-20 lg:py-28 px-6 lg:px-12 bg-surface border-t border-divider"
    >
      <div className="container mx-auto max-w-5xl">
        <div className={`reveal ${isInView ? "revealed" : ""}`}>
          <p className="text-xs tracking-[0.3em] uppercase text-accent font-medium mb-3">
            SPEAKERS
          </p>
          <h2 className="font-serif text-3xl md:text-5xl font-bold mb-14">
            Learn From The Best
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
          {speakers.map((speaker, i) => (
            <div
              key={i}
              className={`group reveal-scale ${isInView ? `revealed stagger-${i + 1}` : ""}`}
            >
              <div className="bg-background border border-divider rounded-xl p-6 transition-all hover:shadow-lg hover:-translate-y-1 hover:border-accent/30">
                <div className={`w-16 h-16 rounded-full ${speaker.color} flex items-center justify-center text-lg font-bold mb-4`}>
                  {speaker.initials}
                </div>
                <p className="font-semibold text-sm tracking-wide mb-0.5">{speaker.name}</p>
                <p className="text-xs text-muted-foreground mb-3">{speaker.designation}</p>
                <a href="#" className="inline-flex items-center gap-1 text-xs text-accent hover:underline">
                  <Linkedin size={12} />
                  LinkedIn
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SpeakersSection;
