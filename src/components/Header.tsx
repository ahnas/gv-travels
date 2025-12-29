import { useState } from "react";
import { Menu, X, Phone, Mail, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import gvLogo from "@/assets/gv-logo.png";
import { useCurrency } from "@/contexts/CurrencyContext";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { currency, setCurrency } = useCurrency();

  const scrollToForm = () => {
    const form = document.getElementById('lead-form-bottom');
    form?.scrollIntoView({ behavior: 'smooth', block: 'center' });
    setMobileMenuOpen(false);
  };

  const navItems = [
    { label: "Destinations", sectionId: "destinations-section" },
    { label: "Tours & Activities", sectionId: "featured-packages-section" },
    { label: "Tour Packages", sectionId: "country-packages-section" },
    { label: "Deals", sectionId: "short-packages-section" },
    { label: "About Us", sectionId: "about-section" },
    { label: "Contact", sectionId: "lead-form-bottom" },
  ];

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    section?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    setMobileMenuOpen(false);
  };

  const currencies = [
    { code: "AED" as const, label: "AED" },
    { code: "INR" as const, label: "IN" },
    { code: "USD" as const, label: "EN" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-background shadow-md">
      {/* Top Bar */}
      <div className="border-b border-border bg-primary text-primary-foreground">
        <div className="container mx-auto flex h-10 items-center justify-between px-4 text-sm">
          <div className="flex items-center gap-4">
            <a href="tel:+971509164296" className="flex items-center gap-1 hover:opacity-80 transition-opacity">
              <Phone className="h-3 w-3" />
              <span className="hidden sm:inline">+971 50 916 4296</span>
            </a>
            <a href="mailto:info@gv-travels.com" className="flex items-center gap-1 hover:opacity-80 transition-opacity">
              <Mail className="h-3 w-3" />
              <span className="hidden sm:inline">info@gv-travels.com</span>
            </a>
          </div>
          <div className="flex items-center gap-1">
            {currencies.map((curr, index) => (
              <button
                key={curr.code}
                onClick={() => setCurrency(curr.code)}
                className={`px-2 py-0.5 text-xs rounded transition-all ${
                  currency === curr.code 
                    ? "bg-background text-primary font-semibold" 
                    : "hover:opacity-80"
                }`}
              >
                {curr.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="container mx-auto px-4">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <button onClick={scrollToForm} className="flex items-center">
            <img src={gvLogo} alt="GV Travel & Tourism" className="h-12 md:h-14 object-contain" />
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => scrollToSection(item.sectionId)}
                className="text-sm font-medium text-foreground hover:text-primary transition-colors"
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* CTA Button */}
          <Button 
            onClick={scrollToForm}
            className="hidden lg:inline-flex bg-accent hover:bg-accent/90 text-accent-foreground"
          >
            Book Now
          </Button>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="border-t border-border bg-background lg:hidden">
          <nav className="container mx-auto space-y-1 px-4 py-4">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => scrollToSection(item.sectionId)}
                className="block w-full text-left rounded-md px-3 py-2 text-base font-medium hover:bg-accent"
              >
                {item.label}
              </button>
            ))}
            <div className="pt-4">
              <Button 
                onClick={scrollToForm}
                className="w-full bg-accent hover:bg-accent/90 text-accent-foreground"
              >
                Book Now
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
