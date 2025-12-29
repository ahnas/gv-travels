import { Star, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCurrency } from "@/contexts/CurrencyContext";

interface PackageItem {
  title: string;
  image: string;
  tag?: string;
  rating?: number;
  reviews?: number;
  price: number;
}

interface CountryPackagesProps {
  country: string;
  headline: string;
  packages: PackageItem[];
}

const CountryPackages = ({ country, headline, packages }: CountryPackagesProps) => {
  const { formatPrice } = useCurrency();
  
  const scrollToForm = () => {
    const form = document.getElementById('lead-form-bottom');
    form?.scrollIntoView({ behavior: 'smooth', block: 'center' });
  };

  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
          {headline}
        </h2>
        
        <div className="grid gap-4 grid-cols-2 md:grid-cols-4">
          {packages.map((pkg, index) => (
            <div 
              key={index} 
              className="group cursor-pointer"
              onClick={scrollToForm}
            >
              <div className="relative overflow-hidden rounded-xl mb-3">
                <img
                  src={pkg.image}
                  alt={pkg.title}
                  className="w-full aspect-[4/3] object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <button className="absolute top-3 right-3 w-8 h-8 bg-foreground/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-foreground/40 transition-colors">
                  <Heart className="w-4 h-4 text-white" />
                </button>
              </div>
              
              <h3 className="font-semibold text-foreground line-clamp-1 group-hover:text-primary transition-colors">
                {pkg.title}
              </h3>
              
              <div className="flex items-center gap-2 mt-1">
                {pkg.rating ? (
                  <>
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    <span className="text-sm text-foreground">{pkg.rating}</span>
                    <span className="text-sm text-primary">({pkg.reviews} Reviews)</span>
                  </>
                ) : (
                  <span className="text-sm text-primary">{pkg.tag || "New"}</span>
                )}
              </div>
              
              <p className="font-bold text-foreground mt-1">
                {formatPrice(pkg.price)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CountryPackages;
