import { useState } from "react";
import { useInView } from "@/hooks/useInView";

const days = [
  {
    day: "DAY 1",
    title: "What Is Marketing, Really?",
    topics: [
      "The Myths, Busted. Four of the biggest misconceptions about marketing, dismantled with real brand examples.",
      "What Marketing Actually Is. A real, honest explanation of what marketing does and why it's harder than it looks.",
      "The Five Worlds You Can Work In. FMCG, Tech, D2C, Agencies, and B2B/SaaS. What marketing looks like inside each one.",
      "The Six Sub-Domains, In Depth. Brand Management, Performance Marketing, Content, Growth, Product Marketing, and Insights. What each path actually involves day to day.",
      "The Career Trajectory. Three stages, real timelines, and honest CTCs from your first offer to senior leadership.",
      "Skills & Tools Companies Actually Expect. What hiring managers look for by sub-domain, at entry level and beyond.",
      "The Money, Compared. How all six sub-domains stack up on compensation at every career stage.",
      "Is This For You? A direct fit assessment: the green flags and red flags worth knowing before you commit.",
      "Live Q&A. 30 minutes of open, unfiltered questions with the expert. Nothing off limits.",
    ],
  },
  {
    day: "DAY 2",
    title: "Life Inside the Role",
    topics: [
      "The Honest Day-in-the-Life. What a senior professional actually does from Monday to Friday. Not the LinkedIn version.",
      "The Parts Nobody Tells You. Long hours, stress points, and the realities that never make it into placement brochures.",
      "How You Grow, Year by Year. The skills that matter in Year 1, the ones that matter in Year 5, and the gap between them.",
      "The Mistakes They Made. What your speaker got wrong early on, and what it cost them.",
      "Why They Stayed. What keeps people in this career, what burns them out, and whether they'd choose it again.",
      "Exit Opportunities. Where people go after 3 to 5 years and what paths open up over time.",
      "Is This Still For You? A second, more informed look at fit. Now that you know what the job actually is.",
      "Live Q&A. 45 minutes of completely open conversation. Ask the uncomfortable questions.",
    ],
  },
  {
    day: "DAY 3",
    title: "How Someone Just Like You Got In",
    topics: [
      "Where They Started. Their mindset, their confusion, and exactly where they were 12 months ago.",
      "The Moment It Clicked. How they decided on this domain, and what changed when they did.",
      "The Placement Timeline, Unfiltered. How many companies, how many rejections, and the real prep timeline that worked.",
      "Inside the Interview Rounds. The exact rounds they faced, the questions they were asked, and the moments they thought they'd failed.",
      "The First Six Months. What no one prepared them for: the learning curve, the culture shock, and the financial reality.",
      "What College Did and Didn't Prepare Them For. The honest gap between classroom and workplace.",
      "Your Questions, No Filter. 45 minutes of peer-to-peer Q&A including the questions people are afraid to ask out loud.",
    ],
  },
  {
    day: "DAY 4",
    title: "What HR Is Actually Looking For",
    topics: [
      "What Gets You Shortlisted in 10 Seconds. The signals that get a resume noticed, and the ones that get it rejected instantly.",
      "How ATS Filters Work. Why strong candidates get filtered out before a human ever sees their resume, and how to avoid it.",
      "The Resume Deep Dive, By Domain. Exactly what HR looks for in a consulting, finance, marketing, and HR resume, side by side.",
      "What Each Interview Round Is Really Testing. Round by round: what the interviewer is actually watching for, not what you think they are.",
      "The Persona We Hire. The traits that define the person who gets the offer in each domain, and how they're tested in 30 minutes.",
      "What Happens After You Leave the Room. The debrief conversation most students never hear about, and what tips the decision.",
      "What Gets You Out. The common derailers that eliminate strong candidates at the final stage.",
      "Your Anonymous Questions Answered. 40 minutes of live Q&A, including the questions no one asks out loud.",
    ],
  },
  {
    day: "DAY 5",
    title: "Your Placement Prep Plan",
    topics: [
      "Your Domain's Screening Test, Decoded. What actually appears in the test, how it's structured, and the one thing that improves your score fastest.",
      "The Mock Test Strategy. Three mocks, three purposes: how to use them as diagnostic tools, not performance events.",
      "The STAR Framework, Done Right. The component most students get wrong, and the version that actually lands in interviews.",
      "Domain-Specific Interview Techniques. Case frameworks for consulting, financial thinking for finance, the 5C brief for marketing, product sense for PM. Tailored to your path.",
      "Everything You're Getting, and How to Use It. Question banks, cheat sheets, alumni access, and prep timelines. Walked through so nothing sits unopened.",
      "Live Practice Round. Real questions, real answers, real feedback. In the room, not just in your head.",
      "Your 48-Hour Action Plan. You leave with three target companies, your biggest prep gap identified, and one concrete action to start this week.",
    ],
  },
];

const BootcampStructure = () => {
  const [activeDay, setActiveDay] = useState<number | null>(null);
  const { ref, isInView } = useInView(0.1);

  return (
    <section
      id="program-structure"
      ref={ref as React.RefObject<HTMLElement>}
      className="py-20 lg:py-28 px-6 lg:px-12 border-t border-divider"
    >
      <div className="container mx-auto max-w-4xl">
        <div className={`reveal ${isInView ? "revealed" : ""}`}>
          <p className="text-xs tracking-[0.3em] uppercase text-accent font-medium mb-3">
            PROGRAM STRUCTURE
          </p>
          <h2 className="font-serif text-3xl md:text-5xl font-bold mb-10">
            Five Days That
            <br />
            Change Everything
          </h2>
        </div>

        <div className={`flex flex-wrap gap-2 mb-10 reveal ${isInView ? "revealed stagger-1" : ""}`}>
          {days.map((day, i) => (
            <button
              key={i}
              onClick={() => setActiveDay(activeDay === i ? null : i)}
              className={`px-5 py-2.5 text-xs tracking-[0.15em] uppercase font-medium transition-all border rounded-full ${activeDay === i
                  ? "bg-foreground text-background border-foreground"
                  : "bg-background text-muted-foreground border-divider hover:border-foreground hover:text-foreground"
                }`}
            >
              {day.day}
            </button>
          ))}
        </div>

        {activeDay !== null && (
          <div className="border border-divider rounded-xl p-8 bg-surface/50">
            <h3 className="font-serif text-2xl md:text-3xl font-bold mb-6">
              {days[activeDay].title}
            </h3>
            <ul className="space-y-3">
              {days[activeDay].topics.map((topic, j) => (
                <li
                  key={j}
                  className="text-muted-foreground text-sm leading-relaxed pl-5 relative before:content-[''] before:absolute before:left-0 before:top-2 before:w-1.5 before:h-1.5 before:bg-accent/50 before:rounded-full"
                >
                  {topic}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </section>
  );
};

export default BootcampStructure;
