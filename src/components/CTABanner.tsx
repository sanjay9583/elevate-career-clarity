import { useInView } from "@/hooks/useInView";

const CTABanner = () => {
  const { ref, isInView } = useInView(0.15);

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      className="bg-foreground text-background py-20 lg:py-28 px-6 lg:px-12"
    >
      <div className={`container mx-auto max-w-3xl text-center reveal ${isInView ? "revealed" : ""}`}>
        <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-4">
          Stop Guessing Your Career.
          <br />
          Start Building It.
        </h2>
        <p className="text-background/60 text-sm mb-10 max-w-lg mx-auto">
          Join 4,00,000+ students who trust CollegeHive. Your 5-day career clarity journey starts here.
        </p>
        <a
          href="https://forms.zohopublic.in/saimaneash437gm1/form/PaymentForm/formperma/KvnhScsHQgA5t7CpZjfcy-4eMuR3R8ofNyVnYWeBbmk"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center bg-accent text-accent-foreground px-12 py-4 text-sm font-semibold tracking-wide rounded-full hover:opacity-90 transition-all hover:shadow-lg"
        >
          Enroll Now
        </a>
      </div>
    </section>
  );
};

export default CTABanner;
