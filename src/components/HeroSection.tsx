const HeroSection = () => {
  return (
    <section id="bootcamp-overview" className="pt-32 pb-16 lg:pt-40 lg:pb-20 px-6 lg:px-12">
      <div className="container mx-auto max-w-4xl">
        <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-6">
          5-DAY DOMAIN BOOTCAMP
        </p>
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-semibold leading-[1.1] mb-8">
          From Confused to Confident:<br />Discover Your True Career Path,<br />Then Land It.
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-xl leading-relaxed">
          Structured exposure to industry experts, HRs, and recently placed graduates.
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
