import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PackageCard from "@/components/PackageCard";
import { MapPin, Users, DollarSign, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";

const DestinationDubai = () => {
  const packages = [
    {
      image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800&q=80",
      title: "Dubai City Tour with Burj Khalifa",
      location: "Dubai, UAE",
      days: 5,
      nights: 4,
      groupSize: "Up to 15 people",
      rating: 4.8,
      reviews: 324,
      priceFrom: 299,
      priceTo: 599,
      originalPrice: 699,
      tag: "bestseller" as const,
    },
    {
      image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&q=80",
      title: "Dhow Cruise Marina Dinner",
      location: "Dubai Marina",
      days: 1,
      nights: 0,
      groupSize: "Up to 30 people",
      rating: 4.6,
      reviews: 412,
      priceFrom: 149,
      priceTo: 249,
      tag: "new" as const,
    },
    {
      image: "https://images.unsplash.com/photo-1582672060674-bc2bd808a8b5?w=800&q=80",
      title: "Dubai Mall & Fountain Show",
      location: "Downtown Dubai",
      days: 1,
      nights: 0,
      groupSize: "Up to 20 people",
      rating: 4.7,
      reviews: 256,
      priceFrom: 99,
      priceTo: 199,
      tag: "featured" as const,
    },
  ];

  const quickFacts = [
    { icon: MapPin, label: "Area", value: "4,114 km²" },
    { icon: Users, label: "Population", value: "3.6 Million" },
    { icon: DollarSign, label: "Currency", value: "AED" },
    { icon: Calendar, label: "Best Time", value: "Nov - Apr" },
  ];

  const attractions = [
    "Burj Khalifa",
    "Dubai Mall",
    "Dubai Marina",
    "Palm Jumeirah",
    "Dubai Creek",
    "Gold Souk",
    "Jumeirah Beach",
    "Dubai Frame",
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <div className="relative h-[400px] md:h-[500px]">
          <img
            src="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=1920&q=80"
            alt="Dubai"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/30" />
          <div className="absolute inset-0 flex items-center">
            <div className="container mx-auto px-4">
              <div className="max-w-3xl space-y-4">
                <h1 className="text-4xl md:text-6xl font-bold text-white">
                  Discover Dubai
                </h1>
                <p className="text-xl md:text-2xl text-white/90">
                  Where tradition meets innovation in the heart of the desert
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Facts */}
        <section className="py-12 bg-card border-b border-border">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
              {quickFacts.map((fact, index) => {
                const Icon = fact.icon;
                return (
                  <div key={index} className="flex items-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">{fact.label}</p>
                      <p className="font-semibold text-foreground">{fact.value}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid gap-12 lg:grid-cols-2">
              <div className="space-y-6">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                  About Dubai
                </h2>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  Dubai is a city of superlatives, home to the world's tallest building, largest shopping mall, and most luxurious hotels. This gleaming metropolis in the United Arab Emirates has transformed from a humble fishing village to a global hub of commerce, tourism, and innovation.
                </p>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  Experience the perfect blend of traditional Arabian culture and cutting-edge modernity. From the historic Al Fahidi district to the futuristic skyline, Dubai offers unforgettable experiences for every traveler.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  Top Attractions
                </h3>
                <div className="grid grid-cols-2 gap-3">
                  {attractions.map((attraction, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-2 rounded-lg border border-border bg-card p-3"
                    >
                      <MapPin className="h-4 w-4 text-primary flex-shrink-0" />
                      <span className="text-sm font-medium text-foreground">
                        {attraction}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Available Packages */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="mb-10">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
                Dubai Tour Packages
              </h2>
              <p className="text-muted-foreground text-lg">
                Explore our curated selection of Dubai experiences
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {packages.map((pkg, index) => (
                <PackageCard key={index} {...pkg} />
              ))}
            </div>
            <div className="mt-10 text-center">
              <Button size="lg" className="bg-accent hover:bg-accent/90">
                View All Dubai Packages
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default DestinationDubai;
