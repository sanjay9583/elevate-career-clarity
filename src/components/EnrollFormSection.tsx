import { useInView } from "@/hooks/useInView";
import { useEffect, useRef } from "react";

const ZOHO_FORM_URL =
    "https://forms.zohopublic.in/saimaneash437gm1/form/SignInForm/formperma/dIyBPpVqIeBS1fwCFaGkYcAtI72pdFrvTP9RnvoyM3c?zf_rszfm=1";

const EnrollFormSection = () => {
    const { ref, isInView } = useInView(0.1);
    const containerRef = useRef<HTMLDivElement>(null);
    const iframeLoaded = useRef(false);

    useEffect(() => {
        if (!containerRef.current || iframeLoaded.current) return;

        const f = document.createElement("iframe");
        f.src = ZOHO_FORM_URL;
        f.style.border = "none";
        f.style.height = "832px";
        f.style.width = "100%";
        f.style.transition = "all 0.5s ease";
        f.style.borderRadius = "12px";
        f.setAttribute("aria-label", "Enrollment Form");

        containerRef.current.appendChild(f);
        iframeLoaded.current = true;

        const handleMessage = (event: MessageEvent) => {
            const evntData = event.data;
            if (evntData && typeof evntData === "string") {
                const parts = evntData.split("|");
                if (parts.length === 2 || parts.length === 3) {
                    const zf_perma = parts[0];
                    const newHeight = parseInt(parts[1], 10) + 15 + "px";
                    if (f.src.indexOf("formperma") > 0 && f.src.indexOf(zf_perma) > 0) {
                        const prevHeight = f.style.height;
                        if (parts.length === 3) {
                            f.scrollIntoView({ behavior: "smooth", block: "start" });
                        }
                        if (prevHeight !== newHeight) {
                            if (parts.length === 3) {
                                setTimeout(() => { f.style.height = newHeight; }, 500);
                            } else {
                                f.style.height = newHeight;
                            }
                        }
                    }
                }
            }
        };

        window.addEventListener("message", handleMessage, false);
        return () => window.removeEventListener("message", handleMessage, false);
    }, []);

    return (
        <section
            id="enroll"
            ref={ref as React.RefObject<HTMLElement>}
            className="py-20 lg:py-28 px-6 lg:px-12 bg-surface border-t border-divider"
        >
            <div className="container mx-auto max-w-3xl">
                <div className={`text-center mb-10 reveal ${isInView ? "revealed" : ""}`}>
                    <p className="text-xs tracking-[0.3em] uppercase text-accent font-medium mb-3">
                        ENROLL NOW
                    </p>
                    <h2 className="font-serif text-3xl md:text-5xl font-bold mb-4">
                        Secure Your Spot
                    </h2>
                    <p className="text-muted-foreground text-sm max-w-lg mx-auto leading-relaxed">
                        Fill in your details below to register for the bootcamp. You'll receive a confirmation email with payment details and next steps.
                    </p>
                </div>

                <div
                    ref={containerRef}
                    className={`reveal-scale ${isInView ? "revealed" : ""}`}
                />
            </div>
        </section>
    );
};

export default EnrollFormSection;
