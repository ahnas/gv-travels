import { Star, Clock, MapPin, Users, Calendar, Plane, Hotel, Car, Coffee, Camera } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { useCurrency } from "@/contexts/CurrencyContext";
import BookingModal from "@/components/BookingModal";
import type { Inclusion } from "@/data/packages";

interface PackageCardProps {
  image: string;
  title: string;
  location: string;
  days: number;
  nights: number;
  groupSize?: string;
  departureDate?: string;
  rating: number;
  reviews: number;
  priceFrom?: number;
  priceTo?: number;
  price?: number;
  originalPrice?: number;
  badge?: string;
  tag?: "featured" | "bestseller" | "premium" | "new";
  inclusions?: Inclusion[];
}

const tagStyles = {
  featured: "bg-secondary text-secondary-foreground",
  bestseller: "bg-accent text-accent-foreground",
  premium: "bg-primary text-primary-foreground",
  new: "bg-green-500 text-white",
};

const tagLabels = {
  featured: "Featured",
  bestseller: "Bestseller",
  premium: "Premium",
  new: "New Season",
};

const inclusionIcons: Record<Inclusion, typeof Plane> = {
  Flight: Plane,
  Hotel: Hotel,
  Transport: Car,
  Breakfast: Coffee,
  Sightseeing: Camera,
};

const PackageCard = ({
  image,
  title,
  location,
  days,
  nights,
  groupSize,
  departureDate,
  rating,
  reviews,
  priceFrom,
  priceTo,
  price,
  originalPrice,
  badge,
  tag,
  inclusions,
}: PackageCardProps) => {
  const { formatPrice } = useCurrency();

  return (
    <Card className="group overflow-hidden border-border hover:shadow-elevated transition-all duration-300">
      <div className="relative overflow-hidden">
        <img
          src={image}
          alt={title}
          className="h-56 w-full object-cover transition-transform duration-300 group-hover:scale-110"
        />
        {tag && (
          <Badge className={`absolute top-3 left-3 ${tagStyles[tag]}`}>
            {tagLabels[tag]}
          </Badge>
        )}
        {badge && !tag && (
          <Badge className="absolute top-3 left-3 bg-accent text-accent-foreground">
            {badge}
          </Badge>
        )}
        <div className="absolute top-3 right-3 flex items-center gap-1 rounded-full bg-white/90 px-2 py-1 text-sm font-semibold">
          <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
          <span>{rating}</span>
          <span className="text-xs text-muted-foreground">({reviews})</span>
        </div>
      </div>

      <CardContent className="p-4 space-y-3">
        <h3 className="text-lg font-bold text-foreground line-clamp-2 group-hover:text-primary transition-colors">
          {title}
        </h3>

        <div className="space-y-2 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <MapPin className="h-4 w-4 text-primary flex-shrink-0" />
            <span>{location}</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="h-4 w-4 text-primary flex-shrink-0" />
            <span>{days} Days / {nights} Nights</span>
          </div>
          {departureDate && (
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4 text-primary flex-shrink-0" />
              <span>Departure: {departureDate}</span>
            </div>
          )}
          {groupSize && (
            <div className="flex items-center gap-2">
              <Users className="h-4 w-4 text-primary flex-shrink-0" />
              <span>{groupSize}</span>
            </div>
          )}
        </div>

        {inclusions && inclusions.length > 0 && (
          <div className="pt-3 border-t border-border">
            <p className="text-xs font-semibold text-muted-foreground mb-2 uppercase tracking-wide">
              Inclusions
            </p>
            <div className="flex flex-wrap gap-2">
              {inclusions.map((inclusion) => {
                const Icon = inclusionIcons[inclusion];
                return (
                  <div
                    key={inclusion}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-primary/5 border border-primary/10 text-xs font-medium text-foreground transition-all hover:bg-primary/10 hover:border-primary/20"
                  >
                    <Icon className="h-3.5 w-3.5 text-primary" />
                    <span>{inclusion}</span>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </CardContent>

      <CardFooter className="flex flex-col gap-3 border-t border-border p-4">
        <div className="w-full space-y-1">
          <p className="text-xs text-muted-foreground">
            {price ? "Package Price" : "Starting from"}
          </p>
          <div className="flex items-baseline gap-2">
            <span className="text-xl font-bold text-primary">
              {price ? formatPrice(price) : formatPrice(priceFrom || 0)}
            </span>
            {priceTo && (
              <span className="text-sm text-muted-foreground">- {formatPrice(priceTo)}</span>
            )}
          </div>
          {originalPrice && (
            <span className="text-sm text-muted-foreground line-through">
              {formatPrice(originalPrice)}
            </span>
          )}
        </div>
        <BookingModal>
          <Button size="sm" className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">
            Enquire Now
          </Button>
        </BookingModal>
      </CardFooter>
    </Card>
  );
};

export default PackageCard;
