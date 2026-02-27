const footerLinks = [
  { label: "Careers", href: "#careers" },
  { label: "FAQs", href: "#faqs" },
  { label: "Contact", href: "#" },
  { label: "Privacy Policy", href: "#" },
];

const Footer = () => {
  return (
    <footer id="careers" className="bg-primary text-primary-foreground py-16 px-6 lg:px-12 border-t border-primary-foreground/10">
      <div className="container mx-auto max-w-5xl">
        <div className="flex flex-col md:flex-row justify-between items-start gap-10">
          <div>
            <span className="text-lg font-bold tracking-tight">CollegeHive</span>
            <p className="text-xs text-primary-foreground/50 mt-1">
              Proudly Backed by NSRCEL – IIM Bangalore
            </p>
          </div>
          <nav className="flex flex-wrap gap-8">
            {footerLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm text-primary-foreground/60 hover:text-primary-foreground transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
        <div className="border-t border-primary-foreground/10 mt-12 pt-8">
          <p className="text-xs text-primary-foreground/40">
            © {new Date().getFullYear()} CollegeHive. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
