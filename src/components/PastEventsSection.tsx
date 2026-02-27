import { useInView } from "@/hooks/useInView";
import { pastEvents } from "@/data/events";
import { ArrowRight, CalendarDays, MapPin, Users } from "lucide-react";
import { Link } from "react-router-dom";

const PastEventsSection = () => {
    const { ref, isInView } = useInView(0.1);

    return (
        <section
            id="past-events"
            ref={ref as React.RefObject<HTMLElement>}
            className="py-20 lg:py-28 px-6 lg:px-12 border-t border-divider"
        >
            <div className="container mx-auto max-w-5xl">
                <div className={`mb-14 reveal ${isInView ? "revealed" : ""}`}>
                    <p className="text-xs tracking-[0.3em] uppercase text-accent font-medium mb-3">
                        PAST EVENTS
                    </p>
                    <h2 className="font-serif text-3xl md:text-5xl font-bold">
                        What We've Done So Far
                    </h2>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                    {pastEvents.map((event, i) => (
                        <Link
                            to={`/events/${event.id}`}
                            key={event.id}
                            className={`group block reveal-scale ${isInView ? `revealed stagger-${i + 1}` : ""}`}
                        >
                            <div className="bg-background border border-divider rounded-xl overflow-hidden transition-all hover:shadow-lg hover:-translate-y-1 hover:border-accent/30">
                                {/* Cover image */}
                                <div className="relative h-52 overflow-hidden">
                                    <img
                                        src={event.images[0].src}
                                        alt={event.title}
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent" />
                                    <div className="absolute bottom-4 left-5 right-5">
                                        <span className="inline-flex items-center gap-1.5 text-white/80 text-xs">
                                            <Users size={12} />
                                            {event.attendees} students
                                        </span>
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="p-6">
                                    <h3 className="font-serif text-lg font-bold mb-2 group-hover:text-accent transition-colors">
                                        {event.title}
                                    </h3>
                                    <div className="flex flex-wrap gap-4 text-xs text-muted-foreground mb-4">
                                        <span className="inline-flex items-center gap-1">
                                            <CalendarDays size={12} />
                                            {event.date}
                                        </span>
                                        <span className="inline-flex items-center gap-1">
                                            <MapPin size={12} />
                                            {event.location}
                                        </span>
                                    </div>
                                    <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2 mb-4">
                                        {event.description}
                                    </p>
                                    <span className="inline-flex items-center gap-1 text-xs font-medium text-accent group-hover:gap-2 transition-all">
                                        View Details
                                        <ArrowRight size={12} />
                                    </span>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default PastEventsSection;
