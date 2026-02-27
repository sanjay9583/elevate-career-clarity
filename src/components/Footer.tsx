const Footer = () => {
  return (
    <footer className="bg-foreground text-background/80 py-14 px-6 lg:px-12 border-t border-background/10">
      <div className="container mx-auto max-w-5xl">
        <div className="flex flex-col md:flex-row justify-between items-start gap-8">
          <div>
            <div className="flex items-center gap-2.5 mb-2">
              <svg viewBox="20 50 130 130" className="h-7 w-7 text-background" xmlns="http://www.w3.org/2000/svg">
                <circle cx="85" cy="75" r="14" fill="currentColor" />
                <path d="M 40 90 Q 60 90 85 105 Q 110 90 130 90 L 130 145 Q 110 145 85 160 Q 60 145 40 145 Z" fill="currentColor" />
              </svg>
              <span className="text-lg font-bold tracking-tight text-background">CollegeHive</span>
            </div>
            <p className="text-xs text-background/40">
              Proudly Backed by NSRCEL – IIM Bangalore
            </p>
          </div>
          <nav className="flex flex-wrap gap-6">
            <a href="#about" className="text-sm text-background/50 hover:text-background transition-colors">About</a>
            <a href="#faqs" className="text-sm text-background/50 hover:text-background transition-colors">FAQs</a>
            <a href="#" className="text-sm text-background/50 hover:text-background transition-colors">Contact</a>
            <a href="#" className="text-sm text-background/50 hover:text-background transition-colors">Privacy Policy</a>
          </nav>
        </div>
        <div className="border-t border-background/10 mt-10 pt-6">
          <p className="text-xs text-background/30">
            © {new Date().getFullYear()} CollegeHive. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
