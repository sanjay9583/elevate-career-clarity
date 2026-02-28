import { useParams, Link } from "react-router-dom";
import { pastEvents } from "@/data/events";
import { useInView } from "@/hooks/useInView";
import { ArrowLeft, CalendarDays, MapPin, Users, Check, Quote } from "lucide-react";
import { useEffect } from "react";

const EventDetail = () => {
    const { eventId } = useParams<{ eventId: string }>();
    const event = pastEvents.find((e) => e.id === eventId);
    const { ref: heroRef, isInView: heroInView } = useInView(0.1);
    const { ref: galleryRef, isInView: galleryInView } = useInView(0.1);
    const { ref: highlightsRef, isInView: highlightsInView } = useInView(0.1);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    if (!event) {
        return (
            <div className="min-h-screen bg-background flex items-center justify-center">
                <div className="text-center">
                    <h1 className="font-serif text-3xl font-bold mb-4">Event Not Found</h1>
                    <Link to="/" className="text-accent hover:underline">← Back to Home</Link>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-background">
            {/* Header */}
            <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-divider">
                <div className="container mx-auto flex items-center justify-between py-4 px-6 lg:px-12">
                    <Link to="/" className="flex items-center gap-2.5">
                        <svg viewBox="20 50 130 130" className="h-9 w-9" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="85" cy="75" r="14" fill="currentColor" />
                            <path d="M 40 90 Q 60 90 85 105 Q 110 90 130 90 L 130 145 Q 110 145 85 160 Q 60 145 40 145 Z" fill="currentColor" />
                        </svg>
                        <span className="text-lg font-bold tracking-tight">CollegeHive</span>
                    </Link>
                    <Link
                        to="/"
                        className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                        <ArrowLeft size={14} />
                        Back to Home
                    </Link>
                </div>
            </header>

            {/* Hero */}
            <section
                ref={heroRef as React.RefObject<HTMLElement>}
                className="pt-28 pb-16 lg:pt-36 lg:pb-20 px-6 lg:px-12"
            >
                <div className={`container mx-auto max-w-4xl reveal ${heroInView ? "revealed" : ""}`}>
                    <Link
                        to="/#past-events"
                        className="inline-flex items-center gap-1 text-xs text-accent hover:underline mb-6"
                    >
                        <ArrowLeft size={12} />
                        All Past Events
                    </Link>

                    <h1 className="font-serif text-3xl md:text-5xl font-bold leading-tight mb-6">
                        {event.title}
                    </h1>

                    <div className="flex flex-wrap gap-6 text-sm text-muted-foreground mb-8">
                        <span className="inline-flex items-center gap-1.5">
                            <CalendarDays size={14} className="text-accent" />
                            {event.date}
                        </span>
                        <span className="inline-flex items-center gap-1.5">
                            <MapPin size={14} className="text-accent" />
                            {event.location}
                        </span>
                        <span className="inline-flex items-center gap-1.5">
                            <Users size={14} className="text-accent" />
                            {event.attendees} students attended
                        </span>
                    </div>

                    <p className="text-muted-foreground leading-[1.9] text-base max-w-3xl">
                        {event.description}
                    </p>
                </div>
            </section>

            {/* Photo Gallery */}
            <section
                ref={galleryRef as React.RefObject<HTMLElement>}
                className="py-16 px-6 lg:px-12 bg-surface border-t border-divider"
            >
                <div className="container mx-auto max-w-5xl">
                    <div className={`mb-10 reveal ${galleryInView ? "revealed" : ""}`}>
                        <p className="text-xs tracking-[0.3em] uppercase text-accent font-medium mb-3">
                            EVENT GALLERY
                        </p>
                        <h2 className="font-serif text-2xl md:text-4xl font-bold">
                            Moments From The Event
                        </h2>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        {event.images.map((img, i) => (
                            <div
                                key={i}
                                className={`group relative rounded-xl overflow-hidden reveal-scale ${galleryInView ? `revealed stagger-${i + 1}` : ""}`}
                            >
                                <img
                                    src={img.src}
                                    alt={img.caption}
                                    className="w-full h-48 md:h-64 object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                <p className="absolute bottom-0 left-0 right-0 px-4 py-3 text-xs text-white/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    {img.caption}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Highlights */}
            <section
                ref={highlightsRef as React.RefObject<HTMLElement>}
                className="py-16 px-6 lg:px-12 border-t border-divider"
            >
                <div className="container mx-auto max-w-4xl">
                    <div className={`mb-10 reveal ${highlightsInView ? "revealed" : ""}`}>
                        <p className="text-xs tracking-[0.3em] uppercase text-accent font-medium mb-3">
                            HIGHLIGHTS
                        </p>
                        <h2 className="font-serif text-2xl md:text-4xl font-bold">
                            What Happened
                        </h2>
                    </div>

                    <ul className={`space-y-4 mb-16 reveal ${highlightsInView ? "revealed stagger-1" : ""}`}>
                        {event.highlights.map((item, i) => (
                            <li
                                key={i}
                                className="flex items-start gap-3 text-muted-foreground text-sm leading-relaxed"
                            >
                                <div className="w-6 h-6 rounded-md bg-accent/10 flex items-center justify-center shrink-0 mt-0.5">
                                    <Check size={13} className="text-accent" />
                                </div>
                                {item}
                            </li>
                        ))}
                    </ul>

                    {/* Testimonial */}
                    {event.testimonial && (
                        <div className={`bg-surface rounded-xl p-8 border border-divider reveal ${highlightsInView ? "revealed stagger-2" : ""}`}>
                            <Quote size={24} className="text-accent/30 mb-4" />
                            <blockquote className="font-serif text-lg md:text-xl leading-relaxed text-foreground mb-5 italic">
                                "{event.testimonial.quote}"
                            </blockquote>
                            <div>
                                <p className="text-sm font-semibold">{event.testimonial.name}</p>
                                <p className="text-xs text-muted-foreground">{event.testimonial.role}</p>
                            </div>
                        </div>
                    )}
                </div>
            </section>

            {/* CTA Bar */}
            <section className="bg-foreground text-background py-16 px-6 lg:px-12">
                <div className="container mx-auto max-w-3xl text-center">
                    <h2 className="font-serif text-2xl md:text-3xl font-bold mb-3">
                        Don't Miss The Next One
                    </h2>
                    <p className="text-background/60 text-sm mb-8">
                        Our next bootcamp cohort is opening soon. Be among the first to know.
                    </p>
                    <Link
                        to="/#enroll"
                        className="inline-flex items-center justify-center bg-accent text-accent-foreground px-10 py-4 text-sm font-semibold tracking-wide rounded-full hover:opacity-90 transition-all hover:shadow-lg"
                    >
                        Enroll Now — ₹999
                    </Link>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-foreground text-background/80 py-10 px-6 lg:px-12 border-t border-background/10">
                <div className="container mx-auto max-w-5xl flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-xs text-background/30">
                        © {new Date().getFullYear()} CollegeHive. All rights reserved.
                    </p>
                    <nav className="flex gap-6">
                        <Link to="/" className="text-sm text-background/50 hover:text-background transition-colors">Home</Link>
                        <Link to="/#about" className="text-sm text-background/50 hover:text-background transition-colors">About</Link>
                        <Link to="/#faqs" className="text-sm text-background/50 hover:text-background transition-colors">FAQs</Link>
                    </nav>
                </div>
            </footer>
        </div>
    );
};

export default EventDetail;
