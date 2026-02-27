const PricingSection = () => {
  return (
    <section id="pricing" className="py-16 lg:py-20 px-6 lg:px-12 border-t border-divider">
      <div className="container mx-auto max-w-2xl text-center">
        <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-4">
          PRICING
        </p>
        <h2 className="text-4xl md:text-5xl font-semibold mb-12">
          Invest In Your Future
        </h2>

        <div className="mb-2">
          <span className="text-muted-foreground line-through text-lg">₹1999</span>
        </div>
        <div className="mb-10">
          <span className="text-6xl md:text-7xl font-bold">₹999</span>
        </div>
        <p className="text-sm text-muted-foreground mb-10 max-w-sm mx-auto leading-relaxed">
          Full access to 5 days of live sessions, expert panels, career toolkit, and community.
        </p>
        <a
          href="#"
          className="inline-block bg-primary text-primary-foreground px-12 py-4 text-sm font-medium tracking-wide rounded-full hover:opacity-90 transition-opacity"
        >
          Enroll Now
        </a>
      </div>
    </section>
  );
};

export default PricingSection;
