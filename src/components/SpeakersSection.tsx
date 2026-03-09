import { useInView } from "@/hooks/useInView";
import { Linkedin } from "lucide-react";

const speakers = [
  { name: "Ruhan Naqash", designation: "Imarticus Learning", day: "Day 2", photo: "/speakers/ruhan.png", linkedin: "https://www.linkedin.com/in/ruhanmadninaqash/", color: "bg-sky-100 text-sky-700" },
  { name: "Nancy", designation: "IIFT Graduate", day: "Day 3", photo: "/speakers/nancy.png", linkedin: "https://www.linkedin.com/in/nancy-723231216/", color: "bg-rose-100 text-rose-700" },
  { name: "Aman Thoyaj Krishna", designation: "Marketing Lead, Reo.dev", day: "Speaker", photo: "/speakers/aman.png", linkedin: "https://www.linkedin.com/in/amanthoyaj/", color: "bg-emerald-100 text-emerald-700" },
  { name: "Nithya K", designation: "HR, MindMentor", day: "HR Speaker", photo: "/speakers/nithya.png", linkedin: "https://www.linkedin.com/in/nithyak-mindmentorzhr/", color: "bg-orange-100 text-orange-700" },
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

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {speakers.map((speaker, i) => (
            <div
              key={i}
              className={`group reveal-scale ${isInView ? `revealed stagger-${i + 1}` : ""}`}
            >
              <div className="bg-background border border-divider rounded-2xl p-6 md:p-8 transition-all hover:shadow-xl hover:-translate-y-1.5 hover:border-accent/30 text-center">
                {/* Day badge */}
                <span className="inline-block text-[10px] tracking-[0.2em] uppercase text-accent bg-accent/8 px-3 py-1 rounded-full font-semibold mb-5">
                  {speaker.day}
                </span>

                {/* Avatar */}
                <div className="flex justify-center mb-5">
                  <img
                    src={speaker.photo}
                    alt={speaker.name}
                    className="w-28 h-28 md:w-32 md:h-32 rounded-full object-cover border-[3px] border-accent/20 shadow-md transition-transform duration-300 group-hover:scale-105"
                  />
                </div>

                {/* Info */}
                <p className="font-semibold text-base tracking-wide mb-1">{speaker.name}</p>
                <p className="text-xs text-muted-foreground mb-4 leading-relaxed">{speaker.designation}</p>
                <a
                  href={speaker.linkedin || "#"}
                  target={speaker.linkedin ? "_blank" : undefined}
                  rel={speaker.linkedin ? "noopener noreferrer" : undefined}
                  className="inline-flex items-center gap-1.5 text-xs text-accent font-medium hover:underline transition-colors"
                >
                  <Linkedin size={13} />
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

