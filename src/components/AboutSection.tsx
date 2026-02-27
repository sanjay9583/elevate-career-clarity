import { useInView } from "@/hooks/useInView";

const AboutSection = () => {
  const { ref: ref1, isInView: inView1 } = useInView(0.1);
  const { ref: ref2, isInView: inView2 } = useInView(0.1);
  const { ref: ref3, isInView: inView3 } = useInView(0.1);

  return (
    <section id="about" className="py-20 lg:py-28 px-6 lg:px-12 border-t border-divider">
      <div className="container mx-auto max-w-4xl">
        <div ref={ref1 as React.RefObject<HTMLDivElement>} className={`mb-16 reveal ${inView1 ? "revealed" : ""}`}>
          <p className="text-xs tracking-[0.3em] uppercase text-accent font-medium mb-3">
            ABOUT US
          </p>
          <p className="text-muted-foreground leading-[1.9] text-base max-w-3xl">
            At CollegeHive, we have always believed that every student deserves the right guidance at the right time. From helping students ace their university exams to helping them choose the right career path, everything we have built has been driven by one simple goal. <span className="text-foreground font-medium">To never let a student feel lost.</span>
          </p>
        </div>

        <div ref={ref2 as React.RefObject<HTMLDivElement>} className={`mb-16 reveal ${inView2 ? "revealed" : ""}`}>
          <h3 className="font-serif text-2xl md:text-3xl font-bold mb-6">
            What We Are Building Now
          </h3>
          <div className="space-y-4 text-muted-foreground text-sm leading-[1.9]">
            <p>
              We are now addressing a challenge almost every student faces. Choosing the right domain to build their career in.
            </p>
            <p>
              Marketing, Finance, HR, Operations. The options exist but the clarity rarely does. Most students make one of the most important decisions of their academic life based on limited information or what simply sounds familiar.
            </p>
            <p>
              We believe experiences shape better outcomes. So we are bringing seasoned professionals from each domain together, people who have genuinely built careers in the fields you are trying to choose between. Through focused bootcamps, they share what those years of experience actually look and feel like on the ground.
            </p>
            <p className="text-foreground font-medium italic">
              When guidance comes from people who have truly lived it, the perspective it builds is different. That is a promise we take seriously.
            </p>
          </div>
        </div>

        <div ref={ref3 as React.RefObject<HTMLDivElement>} className={`bg-surface rounded-xl p-8 border border-divider reveal ${inView3 ? "revealed" : ""}`}>
          <h3 className="font-serif text-2xl md:text-3xl font-bold mb-6">
            Where It All Started
          </h3>
          <div className="space-y-4 text-muted-foreground text-sm leading-[1.9]">
            <p>
              CollegeHive was started by students of IIM Bangalore who noticed a gap during their own undergraduate years and decided to do something about it.
            </p>
            <p>
              Through school, every student is well equipped to walk into an exam. The moment university begins, that changes completely. There is no structured resource, no reliable place to go before an internal exam, and students are left to manage on their own. We felt that gap firsthand and we knew it needed to be fixed.
            </p>
            <p>
              That realisation led to the creation of <span className="text-foreground font-medium">Hive Notes</span>, a one stop platform built to help students ace their university exam preparation. What we thought was our problem alone turned out to be the silent struggle of an entire generation. Today, over <span className="text-foreground font-medium">4,00,000 students</span> across Bangalore and all over India trust CollegeHive for their exam preparation. The platform is incubated by <span className="text-foreground font-medium">NSRCEL at IIM Bangalore</span>, one of India's leading startup incubators.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
