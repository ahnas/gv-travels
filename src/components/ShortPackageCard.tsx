import { ChevronRight } from "lucide-react";
import { useCurrency } from "@/contexts/CurrencyContext";

interface ShortPackageCardProps {
  destination: string;
  image: string;
  nights: number;
  days: number;
  priceFrom: number;
}

const ShortPackageCard = ({ destination, image, nights, days, priceFrom }: ShortPackageCardProps) => {
  const { formatPrice } = useCurrency();
  
  const scrollToForm = () => {
    const form = document.getElementById('lead-form-bottom');
    form?.scrollIntoView({ behavior: 'smooth', block: 'center' });
  };

  return (
    <button onClick={scrollToForm} className="block group w-full text-left">
      <div className="relative overflow-hidden rounded-2xl h-[180px] transition-all duration-300 hover:shadow-2xl hover:scale-[1.02]">
        <img
          src={image}
          alt={destination}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent" />
        
        <div className="relative h-full flex items-center justify-between px-6">
          <div className="flex-1">
            <h3 className="text-white text-2xl md:text-3xl font-bold mb-2 drop-shadow-lg">
              {destination}
            </h3>
            <p className="text-white/90 text-sm mb-2">{days} Days / {nights} Nights</p>
            <div className="space-y-1">
              <p className="text-white/80 text-xs">Starting from</p>
              <span className="text-accent text-2xl md:text-3xl font-bold">
                {formatPrice(priceFrom)}
              </span>
            </div>
          </div>
          
          <div className="flex-shrink-0 ml-4">
            <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center transition-all duration-300 group-hover:bg-accent group-hover:scale-110">
              <ChevronRight className="w-6 h-6 text-white" />
            </div>
          </div>
        </div>
      </div>
    </button>
  );
};

export default ShortPackageCard;
