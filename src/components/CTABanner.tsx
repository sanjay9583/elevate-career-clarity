const CTABanner = () => {
  return (
    <section className="bg-primary text-primary-foreground py-16 lg:py-20 px-6 lg:px-12">
      <div className="container mx-auto max-w-3xl text-center">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight mb-8">
          Stop Guessing Your Career.<br />Start Building It.
        </h2>
        <a
          href="#pricing"
          className="inline-block bg-primary-foreground text-primary px-12 py-4 text-sm font-medium tracking-wide rounded-full hover:opacity-90 transition-opacity"
        >
          Enroll Now
        </a>
      </div>
    </section>
  );
};

export default CTABanner;
