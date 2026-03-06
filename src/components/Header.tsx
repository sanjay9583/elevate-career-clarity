import { useInView } from "@/hooks/useInView";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-divider">
      <div className="container mx-auto flex items-center justify-between py-4 px-6 lg:px-12">
        <div className="flex items-center gap-4">
          <a href="#" className="flex items-center gap-2.5">
            <svg viewBox="20 50 130 130" className="h-9 w-9" xmlns="http://www.w3.org/2000/svg">
              <circle cx="85" cy="75" r="14" fill="currentColor" />
              <path d="M 40 90 Q 60 90 85 105 Q 110 90 130 90 L 130 145 Q 110 145 85 160 Q 60 145 40 145 Z" fill="currentColor" />
            </svg>
            <span className="text-lg font-bold tracking-tight">CollegeHive</span>
          </a>
          <div className="h-8 w-px bg-divider" />
          <a href="https://www.nsrcel.org/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2" title="Incubated by NSRCEL, IIMB">
            <img src="/nsrcel-logo.png" alt="NSRCEL IIMB" className="h-9 bg-white rounded px-1" />
          </a>
        </div>

        <nav className="hidden lg:flex items-center gap-8">
          <a href="#bootcamp-overview" className="text-sm tracking-wide text-muted-foreground hover:text-foreground transition-colors">Overview</a>
          <a href="#speakers" className="text-sm tracking-wide text-muted-foreground hover:text-foreground transition-colors">Speakers</a>
          <a href="#about" className="text-sm tracking-wide text-muted-foreground hover:text-foreground transition-colors">About</a>
          <a href="#pricing" className="text-sm tracking-wide text-muted-foreground hover:text-foreground transition-colors">Pricing</a>
          <a href="#faqs" className="text-sm tracking-wide text-muted-foreground hover:text-foreground transition-colors">FAQs</a>
          <a
            href="#enroll"
            className="bg-accent text-accent-foreground px-6 py-2.5 text-sm font-medium tracking-wide rounded-full hover:opacity-90 transition-all hover:shadow-md"
          >
            Enroll Now
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
