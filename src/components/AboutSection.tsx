const AboutSection = () => {
  return (
    <section id="about" className="py-16 lg:py-20 px-6 lg:px-12 border-t border-divider">
      <div className="container mx-auto max-w-5xl">
        <p className="text-sm md:text-base tracking-[0.3em] uppercase text-primary font-bold mb-6 bg-primary/10 inline-block px-4 py-1.5 rounded">
          ABOUT US
        </p>

        <div className="space-y-16">
          <div>
            <p className="text-muted-foreground leading-[1.8] text-sm">
              At CollegeHive, we have always believed that every student deserves the right guidance at the right time. From helping students ace their university exams to helping them choose the right career path, everything we have built has been driven by one simple goal. To never let a student feel lost.
            </p>
          </div>

          <div>
            <h3 className="text-2xl md:text-3xl font-semibold mb-6">
              What We Are Building Now
            </h3>
            <div className="space-y-4">
              <p className="text-muted-foreground leading-[1.8] text-sm">
                We are now addressing a challenge almost every student faces. Choosing the right domain to build their career in.
              </p>
              <p className="text-muted-foreground leading-[1.8] text-sm">
                Marketing, Finance, HR, Operations. The options exist but the clarity rarely does. Most students make one of the most important decisions of their academic life based on limited information or what simply sounds familiar.
              </p>
              <p className="text-muted-foreground leading-[1.8] text-sm">
                We believe experiences shape better outcomes. So we are bringing seasoned professionals from each domain together, people who have genuinely built careers in the fields you are trying to choose between. Through focused bootcamps, they share what those years of experience actually look and feel like on the ground.
              </p>
              <p className="text-muted-foreground leading-[1.8] text-sm">
                When guidance comes from people who have truly lived it, the perspective it builds is different. That is a promise we take seriously.
              </p>
            </div>
          </div>

          <div>
            <h3 className="text-2xl md:text-3xl font-semibold mb-6">
              Where It All Started
            </h3>
            <div className="space-y-4">
              <p className="text-muted-foreground leading-[1.8] text-sm">
                CollegeHive was started by students of IIM Bangalore who noticed a gap during their own undergraduate years and decided to do something about it.
              </p>
              <p className="text-muted-foreground leading-[1.8] text-sm">
                Through school, every student is well equipped to walk into an exam. The moment university begins, that changes completely. There is no structured resource, no reliable place to go before an internal exam, and students are left to manage on their own. We felt that gap firsthand and we knew it needed to be fixed.
              </p>
              <p className="text-muted-foreground leading-[1.8] text-sm">
                That realisation led to the creation of Hive Notes, a one stop platform built to help students ace their university exam preparation. What we thought was our problem alone turned out to be the silent struggle of an entire generation. Today, over 4,00,000 students across Bangalore and all over India trust CollegeHive for their exam preparation. The platform is incubated by NSRCEL at IIM Bangalore, one of India's leading startup incubators.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
