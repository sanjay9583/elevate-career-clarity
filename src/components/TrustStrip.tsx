import { useInView } from "@/hooks/useInView";

const logos = [
    { name: "Google", letters: "G" },
    { name: "Deloitte", letters: "D" },
    { name: "Razorpay", letters: "R" },
    { name: "Swiggy", letters: "S" },
    { name: "TCS", letters: "T" },
    { name: "Amazon", letters: "A" },
];

const TrustStrip = () => {
    const { ref, isInView } = useInView(0.2);

    return (
        <section
            ref={ref as React.RefObject<HTMLElement>}
            className="py-10 px-6 lg:px-12 border-t border-divider bg-surface"
        >
            <div className="container mx-auto max-w-5xl">
                <p className={`text-xs tracking-[0.2em] uppercase text-muted-foreground text-center mb-6 reveal-fade ${isInView ? "revealed" : ""}`}>
                    Our speakers come from
                </p>
                <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
                    {logos.map((logo, i) => (
                        <div
                            key={logo.name}
                            className={`flex items-center gap-2 text-muted-foreground/60 reveal-fade ${isInView ? `revealed stagger-${i + 1}` : ""}`}
                        >
                            <span className="w-8 h-8 rounded-md bg-foreground/8 flex items-center justify-center text-xs font-bold text-foreground/40">
                                {logo.letters}
                            </span>
                            <span className="text-sm font-medium tracking-wide">{logo.name}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TrustStrip;
