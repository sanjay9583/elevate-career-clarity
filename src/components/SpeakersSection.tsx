const speakers = [
  { name: "Arjun Mehta", designation: "Product Lead, Google" },
  { name: "Priya Sharma", designation: "Senior HR, Deloitte" },
  { name: "Rohan Kapoor", designation: "Founding Engineer, Razorpay" },
  { name: "Sneha Iyer", designation: "Marketing Director, Swiggy" },
  { name: "Vikram Desai", designation: "Campus Recruiter, TCS" },
  { name: "Ananya Rao", designation: "Recently Placed, Amazon" },
];

const SpeakersSection = () => {
  return (
    <section id="speakers" className="py-24 lg:py-32 px-6 lg:px-12 border-t border-divider">
      <div className="container mx-auto max-w-5xl">
        <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-4">
          SPEAKERS
        </p>
        <h2 className="text-4xl md:text-5xl font-semibold mb-16">
          Learn From The Best
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-12">
          {speakers.map((speaker, i) => (
            <div key={i}>
              <div className="aspect-[3/4] bg-surface mb-4" />
              <p className="font-medium text-sm tracking-wide">{speaker.name}</p>
              <p className="text-xs text-muted-foreground mt-0.5">{speaker.designation}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SpeakersSection;
