import { useState } from "react";
import { Menu, X } from "lucide-react";
import logoFull from "@/assets/logo-full.png";

const navLinks = [
  { label: "Bootcamp Overview", href: "#bootcamp-overview" },
  { label: "Speakers", href: "#speakers" },
  { label: "About", href: "#about" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQs", href: "#faqs" },
  { label: "Careers", href: "#careers" },
];

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-divider">
      <div className="h-[2px] bg-foreground" />
      <div className="container mx-auto flex items-center justify-between py-4 px-6 lg:px-12">
        <a href="#" className="flex items-center">
          <img src={logoFull} alt="CollegeHive" className="h-16 w-auto" />
        </a>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm tracking-wide text-muted-foreground hover:text-foreground transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#pricing"
            className="bg-primary text-primary-foreground px-6 py-2.5 text-sm font-medium tracking-wide rounded-full hover:opacity-90 transition-opacity"
          >
            SIGN UP
          </a>
        </nav>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden text-foreground"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {mobileOpen && (
        <nav className="lg:hidden border-t border-divider bg-background px-6 py-6 flex flex-col gap-4">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="text-sm tracking-wide text-muted-foreground hover:text-foreground transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#pricing"
            onClick={() => setMobileOpen(false)}
            className="bg-primary text-primary-foreground px-6 py-2.5 text-sm font-medium tracking-wide text-center rounded-full hover:opacity-90 transition-opacity"
          >
            SIGN UP
          </a>
        </nav>
      )}
    </header>
  );
};

export default Header;
