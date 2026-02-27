import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Who is this bootcamp actually for?",
    answer: "Students or fresh graduates who are confused about career paths like consulting, finance, marketing, product, HR, or operations — especially non-tech backgrounds",
  },
  {
    question: "Is this career counseling or an online course?",
    answer: "Neither. It's a structured career discovery experience with live industry experts, HRs, and recent graduates — focused on reality, not generic advice.",
  },
  {
    question: "What makes this different from free YouTube career videos?",
    answer: "You interact directly with professionals who currently work in the domain and hiring HRs. Most free content doesn't show hiring psychology or real career trade-offs.",
  },
  {
    question: "How much time do I need to commit during the 5 days?",
    answer: "About 75–90 minutes per day for live sessions.",
  },
  {
    question: "Will recordings be available if I miss a session?",
    answer: "Yes. Lifetime access to all bootcamp recordings is included.",
  },
  {
    question: "Can beginners join even if they don't know anything about the domain?",
    answer: "Yes — the bootcamp starts from fundamentals and breaks down sub-domains clearly.",
  },
  {
    question: "Will this guarantee a job?",
    answer: "No. The bootcamp gives clarity and preparation direction — not placement guarantees.",
  },
  {
    question: "Are the speakers real professionals or influencers?",
    answer: "Sessions are led by working industry experts, HR recruiters, and recent hires — not motivational speakers.",
  },
  {
    question: "Will we actually be able to ask questions live?",
    answer: "Yes. Sessions are interactive with open Q&A.",
  },
  {
    question: "Is there a community after joining?",
    answer: "Yes. Bootcamp cohorts get access to a peer community and alumni insights.",
  },
];

const FAQSection = () => {
  return (
    <section id="faqs" className="py-24 lg:py-32 px-6 lg:px-12 border-t border-divider">
      <div className="container mx-auto max-w-3xl">
        <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-4">
          FAQS
        </p>
        <h2 className="text-4xl md:text-5xl font-semibold mb-16">
          Common Questions
        </h2>

        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, i) => (
            <AccordionItem key={i} value={`faq-${i}`} className="border-b border-divider py-2">
              <AccordionTrigger className="text-sm font-medium tracking-wide hover:no-underline py-5 text-left">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-sm text-muted-foreground leading-relaxed pb-5">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQSection;
