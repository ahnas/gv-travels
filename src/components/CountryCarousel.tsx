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

  // Duplicate items for seamless scroll
  const duplicatedRow1 = [...countriesRow1, ...countriesRow1, ...countriesRow1];
  const duplicatedRow2 = [...countriesRow2, ...countriesRow2, ...countriesRow2];

  return (
    <section className="py-12 bg-muted/30 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="mb-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
            We Serve Destinations Worldwide
          </h2>
          <p className="text-muted-foreground">
            Explore our popular travel destinations
          </p>
        </div>
        
        {/* Row 1 - Left to Right */}
        <div className="relative mb-4 overflow-hidden">
          <div 
            ref={row1Ref}
            className="flex gap-4 animate-scroll-left"
            style={{ width: "fit-content" }}
          >
            {duplicatedRow1.map((country, index) => (
              <div
                key={`row1-${index}`}
                className="w-28 md:w-32 aspect-square bg-card rounded-2xl shadow-md flex flex-col items-center justify-center gap-2 border border-border hover:shadow-lg hover:scale-105 transition-all duration-300 cursor-pointer flex-shrink-0"
              >
                <img 
                  src={`https://flagcdn.com/w80/${country.code}.png`}
                  alt={`${country.name} flag`}
                  className="w-10 h-7 md:w-12 md:h-8 object-cover rounded shadow-sm"
                />
                <span className="text-xs md:text-sm font-medium text-foreground text-center">{country.name}</span>
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
                key={`row2-${index}`}
                className="w-28 md:w-32 aspect-square bg-card rounded-2xl shadow-md flex flex-col items-center justify-center gap-2 border border-border hover:shadow-lg hover:scale-105 transition-all duration-300 cursor-pointer flex-shrink-0"
              >
                <img 
                  src={`https://flagcdn.com/w80/${country.code}.png`}
                  alt={`${country.name} flag`}
                  className="w-10 h-7 md:w-12 md:h-8 object-cover rounded shadow-sm"
                />
                <span className="text-xs md:text-sm font-medium text-foreground text-center">{country.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
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
      `}</style>
    </section>
  );
};

export default CountryCarousel;