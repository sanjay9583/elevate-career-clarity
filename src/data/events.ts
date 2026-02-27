export interface EventData {
    id: string;
    title: string;
    date: string;
    location: string;
    attendees: number;
    description: string;
    highlights: string[];
    images: { src: string; caption: string }[];
    testimonial?: { quote: string; name: string; role: string };
}

export const pastEvents: EventData[] = [
    {
        id: "marketing-bootcamp-jan-2026",
        title: "Marketing Domain Bootcamp — Cohort 1",
        date: "January 13–17, 2026",
        location: "Online (Live Sessions)",
        attendees: 185,
        description:
            "Our inaugural 5-day marketing bootcamp connected 185 students with industry professionals from Google, Swiggy, and top agencies. Participants explored sub-domains including brand management, performance marketing, content strategy, and growth — hearing directly from people working in these roles every day.",
        highlights: [
            "5 live expert sessions across 5 days",
            "Panel with 3 marketing leaders on career trajectories",
            "Live resume review session with HR from Deloitte",
            "Peer networking breakout rooms with 40+ connections made",
            "Career toolkit PDF with domain-specific prep guides distributed",
        ],
        images: [
            { src: "/events/workshop.png", caption: "Live session with 185+ students" },
            { src: "/events/panel.png", caption: "Panel discussion with marketing leaders" },
            { src: "/events/networking.png", caption: "Networking session during breaks" },
            { src: "/events/group.png", caption: "Cohort 1 participants" },
        ],
        testimonial: {
            quote: "I went from having zero clarity about marketing to knowing exactly which sub-domain I want to pursue. The HR session alone was worth it.",
            name: "Meera K.",
            role: "Final year, Christ University",
        },
    },
    {
        id: "finance-bootcamp-dec-2025",
        title: "Finance Domain Bootcamp — Pilot Batch",
        date: "December 8–12, 2025",
        location: "Online (Live Sessions)",
        attendees: 120,
        description:
            "The pilot finance bootcamp brought together 120 students exploring careers in investment banking, corporate finance, financial planning, and fintech. Sessions were led by professionals from JP Morgan, KPMG, and Razorpay's finance team.",
        highlights: [
            "Deep dive into 4 finance sub-domains over 5 days",
            "Recently placed graduate shared their full placement journey",
            "Mock interview round with real HR feedback",
            "Lifetime access to all session recordings provided",
            "Community access with 120 peer connections",
        ],
        images: [
            { src: "/events/panel.png", caption: "Finance professionals on stage" },
            { src: "/events/workshop.png", caption: "Interactive session with students" },
            { src: "/events/group.png", caption: "Pilot batch participants" },
            { src: "/events/networking.png", caption: "Post-session networking" },
        ],
        testimonial: {
            quote: "The finance bootcamp helped me understand the real difference between IB and corporate finance — things no YouTube video ever explained.",
            name: "Arjun R.",
            role: "3rd year, BMS College",
        },
    },
];
