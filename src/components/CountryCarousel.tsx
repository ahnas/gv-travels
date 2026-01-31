import { useEffect, useRef } from "react";

const CountryCarousel = () => {
  const row1Ref = useRef<HTMLDivElement>(null);
  const row2Ref = useRef<HTMLDivElement>(null);

  const countriesRow1 = [
    { name: "UAE", code: "ae" },
    { name: "Azerbaijan", code: "az" },
    { name: "Georgia", code: "ge" },
    { name: "Armenia", code: "am" },
    { name: "Thailand", code: "th" },
    { name: "Oman", code: "om" },
  ];

  const countriesRow2 = [
    { name: "Turkey", code: "tr" },
    { name: "India", code: "in" },
    { name: "Singapore", code: "sg" },
    { name: "Maldives", code: "mv" },
    { name: "Malaysia", code: "my" },
    { name: "Indonesia", code: "id" },
  ];

  // Duplicate for desktop auto-scroll
  const duplicatedRow1 = [...countriesRow1, ...countriesRow1, ...countriesRow1];
  const duplicatedRow2 = [...countriesRow2, ...countriesRow2, ...countriesRow2];

  return (
    <section className="py-12 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="mb-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
            We Serve Destinations Worldwide
          </h2>
          <p className="text-muted-foreground">
            Explore our popular travel destinations
          </p>
        </div>

        {/* Desktop Version - Auto-scroll Animation */}
        <div className="hidden md:block overflow-hidden">
          {/* Row 1 - Left to Right */}
          <div className="relative mb-4 overflow-hidden">
            <div
              ref={row1Ref}
              className="flex gap-4 animate-scroll-left"
              style={{ width: "fit-content" }}
            >
              {duplicatedRow1.map((country, index) => (
                <div
                  key={`desktop-row1-${index}`}
                  className="w-32 aspect-square bg-card rounded-2xl shadow-md flex flex-col items-center justify-center gap-2 border border-border hover:shadow-lg hover:scale-105 transition-all duration-300 cursor-pointer flex-shrink-0"
                >
                  <img
                    src={`https://flagcdn.com/w80/${country.code}.png`}
                    alt={`${country.name} flag`}
                    className="w-12 h-8 object-cover rounded shadow-sm"
                  />
                  <span className="text-sm font-medium text-foreground text-center">{country.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Row 2 - Right to Left */}
          <div className="relative overflow-hidden">
            <div
              ref={row2Ref}
              className="flex gap-4 animate-scroll-right"
              style={{ width: "fit-content" }}
            >
              {duplicatedRow2.map((country, index) => (
                <div
                  key={`desktop-row2-${index}`}
                  className="w-32 aspect-square bg-card rounded-2xl shadow-md flex flex-col items-center justify-center gap-2 border border-border hover:shadow-lg hover:scale-105 transition-all duration-300 cursor-pointer flex-shrink-0"
                >
                  <img
                    src={`https://flagcdn.com/w80/${country.code}.png`}
                    alt={`${country.name} flag`}
                    className="w-12 h-8 object-cover rounded shadow-sm"
                  />
                  <span className="text-sm font-medium text-foreground text-center">{country.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile Version - Swipeable Scroll */}
        <div className="md:hidden">
          {/* Row 1 */}
          <div className="relative mb-4">
            <div
              className="flex gap-4 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-2"
              style={{
                scrollbarWidth: 'thin',
                WebkitOverflowScrolling: 'touch',
              }}
            >
              {countriesRow1.map((country, index) => (
                <div
                  key={`mobile-row1-${index}`}
                  className="w-28 aspect-square bg-card rounded-2xl shadow-md flex flex-col items-center justify-center gap-2 border border-border hover:shadow-lg active:scale-95 transition-all duration-300 cursor-pointer flex-shrink-0 snap-center"
                >
                  <img
                    src={`https://flagcdn.com/w80/${country.code}.png`}
                    alt={`${country.name} flag`}
                    className="w-10 h-7 object-cover rounded shadow-sm"
                  />
                  <span className="text-xs font-medium text-foreground text-center">{country.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Row 2 */}
          <div className="relative">
            <div
              className="flex gap-4 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-2"
              style={{
                scrollbarWidth: 'thin',
                WebkitOverflowScrolling: 'touch',
              }}
            >
              {countriesRow2.map((country, index) => (
                <div
                  key={`mobile-row2-${index}`}
                  className="w-28 aspect-square bg-card rounded-2xl shadow-md flex flex-col items-center justify-center gap-2 border border-border hover:shadow-lg active:scale-95 transition-all duration-300 cursor-pointer flex-shrink-0 snap-center"
                >
                  <img
                    src={`https://flagcdn.com/w80/${country.code}.png`}
                    alt={`${country.name} flag`}
                    className="w-10 h-7 object-cover rounded shadow-sm"
                  />
                  <span className="text-xs font-medium text-foreground text-center">{country.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Mobile Swipe Hint */}
          <div className="text-center mt-4 text-sm text-muted-foreground">
            ← Swipe to explore destinations →
          </div>
        </div>
      </div>

      <style>{`
        /* Desktop Auto-scroll Animations */
        @keyframes scroll-left {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-33.33%);
          }
        }
        
        @keyframes scroll-right {
          0% {
            transform: translateX(-33.33%);
          }
          100% {
            transform: translateX(0);
          }
        }
        
        .animate-scroll-left {
          animation: scroll-left 20s linear infinite;
        }
        
        .animate-scroll-right {
          animation: scroll-right 20s linear infinite;
        }
        
        .animate-scroll-left:hover,
        .animate-scroll-right:hover {
          animation-play-state: paused;
        }

        /* Mobile Scrollbar Styling */
        div[class*="overflow-x-auto"]::-webkit-scrollbar {
          height: 6px;
        }
        div[class*="overflow-x-auto"]::-webkit-scrollbar-track {
          background: transparent;
        }
        div[class*="overflow-x-auto"]::-webkit-scrollbar-thumb {
          background: hsl(var(--primary) / 0.3);
          border-radius: 3px;
        }
        div[class*="overflow-x-auto"]::-webkit-scrollbar-thumb:hover {
          background: hsl(var(--primary) / 0.5);
        }
      `}</style>
    </section>
  );
};

export default CountryCarousel;