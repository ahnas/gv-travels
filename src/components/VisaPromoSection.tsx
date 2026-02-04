import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const VisaPromoSection = () => {
  const navigate = useNavigate();

  const visaCountries = [
    { name: "Slovenia", flag: "🇸🇮", type: "Sticker Visa", image: "https://images.unsplash.com/photo-1551867633-194f125bddfa?w=400&q=80" },
    { name: "Netherlands", flag: "🇳🇱", type: "Sticker Visa", image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80" },
    { name: "Sweden", flag: "🇸🇪", type: "Sticker Visa", image: "https://images.unsplash.com/photo-1508189860359-777d945909ef?w=400&q=80" },
    { name: "Norway", flag: "🇳🇴", type: "Sticker Visa", image: "https://images.unsplash.com/photo-1520769945061-0a448c463865?w=400&q=80" },
    { name: "Switzerland", flag: "🇨🇭", type: "Sticker Visa", image: "https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?w=400&q=80" },
    { name: "Germany", flag: "🇩🇪", type: "Sticker Visa", image: "https://images.unsplash.com/photo-1449452198679-05c7fd30f416?w=400&q=80" },
  ];

  return (
    <section id="visa-promo-section" className="py-16 bg-foreground relative overflow-hidden">
      {/* Wave pattern overlay */}
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" viewBox="0 0 1440 320" preserveAspectRatio="none">
          <path fill="currentColor" className="text-primary" d="M0,96L48,112C96,128,192,160,288,186.7C384,213,480,235,576,213.3C672,192,768,128,864,128C960,128,1056,192,1152,208C1248,224,1344,192,1392,176L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          {/* Left content */}
          <div className="text-background">
            <span className="inline-block px-4 py-1.5 bg-primary/20 text-primary rounded-full text-sm font-medium mb-6">
              Travel + Ready
            </span>

            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Visa stress?
            </h2>
            <p className="text-4xl md:text-5xl font-bold text-primary mb-6">
              Nope. Not on our watch.
            </p>

            <p className="text-lg text-background/80 mb-8">
              From paperwork to approvals.<br />
              We'll handle it all. fast, simple, and headache-Free.
            </p>

            <Button
              onClick={() => navigate("/visa-services")}
              className="bg-primary hover:bg-primary/90 text-primary-foreground h-12 px-8"
            >
              Get More About Visa
              <ArrowUpRight className="ml-2 w-5 h-5" />
            </Button>
          </div>

          {/* Right - Scrolling visa cards */}
          <div className="relative h-[400px] overflow-hidden">
            {/* Column 1 - Scrolling up */}
            <div className="absolute left-0 w-[48%] animate-scroll-up">
              <div className="space-y-4">
                {[...visaCountries.slice(0, 3), ...visaCountries.slice(0, 3)].map((country, index) => (
                  <div
                    key={index}
                    className="bg-card rounded-xl overflow-hidden shadow-lg"
                  >
                    <img
                      src={country.image}
                      alt={country.name}
                      className="w-full h-32 object-cover"
                    />
                    <div className="p-3 flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="text-xl">{country.flag}</span>
                        <span className="font-medium text-foreground">{country.name}</span>
                      </div>
                      <span className="text-xs bg-muted px-2 py-1 rounded text-muted-foreground">
                        {country.type}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Column 2 - Scrolling down */}
            <div className="absolute right-0 w-[48%] animate-scroll-down">
              <div className="space-y-4">
                {[...visaCountries.slice(3), ...visaCountries.slice(3)].map((country, index) => (
                  <div
                    key={index}
                    className="bg-card rounded-xl overflow-hidden shadow-lg"
                  >
                    <img
                      src={country.image}
                      alt={country.name}
                      className="w-full h-32 object-cover"
                    />
                    <div className="p-3 flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="text-xl">{country.flag}</span>
                        <span className="font-medium text-foreground">{country.name}</span>
                      </div>
                      <span className="text-xs bg-muted px-2 py-1 rounded text-muted-foreground">
                        {country.type}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisaPromoSection;
