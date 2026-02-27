const founders = [
  { name: "Rahul Verma", role: "Co-Founder & CEO" },
  { name: "Kavya Nair", role: "Co-Founder & COO" },
  { name: "Aditya Singh", role: "Co-Founder & CTO" },
];

const FoundersSection = () => {
  return (
    <section className="py-24 lg:py-32 px-6 lg:px-12 border-t border-divider">
      <div className="container mx-auto max-w-5xl">
        <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-4">
          FOUNDERS
        </p>
        <h2 className="font-serif text-4xl md:text-5xl font-medium mb-16">
          The Team Behind CollegeHive
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-12 max-w-3xl">
          {founders.map((founder, i) => (
            <div key={i}>
              <div className="aspect-square bg-surface mb-4" />
              <p className="font-medium text-sm tracking-wide">{founder.name}</p>
              <p className="text-xs text-muted-foreground mt-0.5">{founder.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FoundersSection;
