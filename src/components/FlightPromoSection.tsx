import { Button } from "@/components/ui/button";
import { ArrowUpRight, Plane } from "lucide-react";

const FlightPromoSection = () => {
  const scrollToForm = () => {
    const form = document.getElementById('lead-form-bottom');
    form?.scrollIntoView({ behavior: 'smooth', block: 'center' });
  };

  const flightDestinations = [
    { name: "London", airline: "Emirates", image: "https://images.unsplash.com/photo-1529655683826-aba9b3e77383?w=400&q=80" },
    { name: "Paris", airline: "Qatar Airways", image: "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=400&q=80" },
    { name: "New York", airline: "Etihad", image: "https://images.unsplash.com/photo-1534430480872-3498386e7856?w=400&q=80" },
    { name: "Singapore", airline: "Singapore Air", image: "https://images.unsplash.com/photo-1565967511849-76a60a516170?w=400&q=80" },
    { name: "Tokyo", airline: "ANA", image: "https://images.unsplash.com/photo-1536098561742-ca998e48cbcc?w=400&q=80" },
    { name: "Sydney", airline: "Qantas", image: "https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?w=400&q=80" },
  ];

  return (
    <section id="flight-promo-section" className="py-16 bg-foreground relative overflow-hidden">
      {/* Wave pattern overlay */}
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" viewBox="0 0 1440 320" preserveAspectRatio="none">
          <path fill="currentColor" className="text-secondary" d="M0,96L48,112C96,128,192,160,288,186.7C384,213,480,235,576,213.3C672,192,768,128,864,128C960,128,1056,192,1152,208C1248,224,1344,192,1392,176L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          {/* Left content */}
          <div className="text-background">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-secondary/20 text-secondary rounded-full text-sm font-medium mb-6">
              <Plane className="w-4 h-4" />
              Flight Bookings
            </span>

            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Flight bookings?
            </h2>
            <p className="text-4xl md:text-5xl font-bold text-secondary mb-6">
              Leave it to us.
            </p>

            <p className="text-lg text-background/80 mb-8">
              Best deals on flights worldwide.<br />
              Competitive prices, trusted airlines, seamless booking.
            </p>

            <Button
              onClick={scrollToForm}
              className="bg-secondary hover:bg-secondary/90 text-secondary-foreground h-12 px-8"
            >
              Book Flight Now
              <ArrowUpRight className="ml-2 w-5 h-5" />
            </Button>
          </div>

          {/* Right - Scrolling flight cards */}
          <div className="relative h-[400px] overflow-hidden">
            {/* Column 1 - Scrolling up */}
            <div className="absolute left-0 w-[48%] animate-scroll-up">
              <div className="space-y-4">
                {[...flightDestinations.slice(0, 3), ...flightDestinations.slice(0, 3)].map((dest, index) => (
                  <div
                    key={index}
                    className="bg-card rounded-xl overflow-hidden shadow-lg"
                  >
                    <img
                      src={dest.image}
                      alt={dest.name}
                      className="w-full h-32 object-cover"
                    />
                    <div className="p-3 flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Plane className="w-4 h-4 text-secondary" />
                        <span className="font-medium text-foreground">{dest.name}</span>
                      </div>
                      <span className="text-xs bg-muted px-2 py-1 rounded text-muted-foreground">
                        {dest.airline}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Column 2 - Scrolling down */}
            <div className="absolute right-0 w-[48%] animate-scroll-down">
              <div className="space-y-4">
                {[...flightDestinations.slice(3), ...flightDestinations.slice(3)].map((dest, index) => (
                  <div
                    key={index}
                    className="bg-card rounded-xl overflow-hidden shadow-lg"
                  >
                    <img
                      src={dest.image}
                      alt={dest.name}
                      className="w-full h-32 object-cover"
                    />
                    <div className="p-3 flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Plane className="w-4 h-4 text-secondary" />
                        <span className="font-medium text-foreground">{dest.name}</span>
                      </div>
                      <span className="text-xs bg-muted px-2 py-1 rounded text-muted-foreground">
                        {dest.airline}
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

export default FlightPromoSection;
