import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroCarousel from "@/components/HeroCarousel";
import PackageCard from "@/components/PackageCard";
import OptionalServices from "@/components/OptionalServices";
import FloatingButtons from "@/components/FloatingButtons";
import AboutSection from "@/components/AboutSection";
import GallerySection from "@/components/GallerySection";
import CountryCarousel from "@/components/CountryCarousel";
import VisaPromoSection from "@/components/VisaPromoSection";
import FlightPromoSection from "@/components/FlightPromoSection";
import CTAButtons from "@/components/CTAButtons";
import BookingModal from "@/components/BookingModal";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useCurrency } from "@/contexts/CurrencyContext";

const Index = () => {
  const { formatPrice } = useCurrency();
  const featuredPackages = [
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
      tag: "bestseller" as const,
    },
    {
      image: "https://images.unsplash.com/photo-1451337516015-6b6e9a44a8a3?w=800&q=80",
      title: "Desert Safari with BBQ Dinner",
      location: "Dubai Desert",
      days: 2,
      nights: 1,
      groupSize: "Up to 25 people",
      rating: 4.9,
      reviews: 567,
      priceFrom: 199,
      priceTo: 349,
      tag: "featured" as const,
    },
    {
      image: "https://images.unsplash.com/photo-1582672060674-bc2bd808a8b5?w=800&q=80",
      title: "Abu Dhabi Grand Mosque",
      location: "Abu Dhabi, UAE",
      days: 3,
      nights: 2,
      groupSize: "Up to 20 people",
      rating: 4.7,
      reviews: 289,
      priceFrom: 249,
      priceTo: 449,
      tag: "premium" as const,
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
  ];

  const destinations = [
    {
      name: "Dubai",
      image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=600&q=80",
      days: 5,
      nights: 4,
      priceFrom: 299,
      priceTo: 999,
      tag: "featured" as const,
    },
    {
      name: "Abu Dhabi",
      image: "https://images.unsplash.com/photo-1512632578888-169bbbc64f33?w=600&q=80",
      days: 4,
      nights: 3,
      priceFrom: 249,
      priceTo: 799,
      tag: "premium" as const,
    },
    {
      name: "Sharjah",
      image: "https://images.unsplash.com/photo-1580674285054-bed31e145f59?w=600&q=80",
      days: 3,
      nights: 2,
      priceFrom: 199,
      priceTo: 499,
      tag: "bestseller" as const,
    },
    {
      name: "Al Ain",
      image: "https://images.unsplash.com/photo-1547036967-23d11aacaee0?w=600&q=80",
      days: 2,
      nights: 1,
      priceFrom: 149,
      priceTo: 349,
      tag: "new" as const,
    },
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      location: "United Kingdom",
      rating: 5,
      text: "Amazing experience! The desert safari was breathtaking and the guide was incredibly knowledgeable. Highly recommended!",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80",
    },
    {
      name: "Mohammed Al-Rashid",
      location: "Saudi Arabia",
      rating: 5,
      text: "Professional service from start to finish. The Dubai city tour exceeded all expectations. Will book again!",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80",
    },
    {
      name: "Emily Chen",
      location: "Singapore",
      rating: 5,
      text: "Perfect family vacation! Everything was well organized and the kids had an unforgettable time. Thank you GV Travel!",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&q=80",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <FloatingButtons />
      <main className="flex-1">
        <HeroCarousel />

        {/* Featured Packages */}
        <section id="featured-packages-section" className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="mb-10 text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
                Featured Tour Packages
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Discover our most popular experiences across the UAE
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {featuredPackages.map((pkg, index) => (
                <PackageCard key={index} {...pkg} />
              ))}
            </div>
          </div>
        </section>

        {/* CTA Buttons */}
        <CTAButtons />

        {/* About Section */}
        <AboutSection />

        {/* Country Carousel */}
        <CountryCarousel />

        {/* CTA Buttons after Country Logos */}
        <CTAButtons />

        {/* Visa Promo Section */}
        <VisaPromoSection />

        {/* Optional Services */}
        <OptionalServices />

        {/* Destinations */}
        <section id="destinations-section" className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="mb-10 text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
                Explore Destinations
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                From vibrant cities to serene deserts, discover the Emirates
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {destinations.map((destination, index) => {
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
                return (
                  <div
                    key={index}
                    className="group relative overflow-hidden rounded-xl cursor-pointer text-left"
                  >
                    <img
                      src={destination.image}
                      alt={destination.name}
                      className="h-80 w-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                    {/* Tag Badge */}
                    <Badge className={`absolute top-3 left-3 ${tagStyles[destination.tag]}`}>
                      {tagLabels[destination.tag]}
                    </Badge>
                    <div className="absolute bottom-0 left-0 right-0 p-4 text-white space-y-2">
                      <h3 className="text-xl font-bold">{destination.name}</h3>
                      <p className="text-white/90 text-sm">{destination.days} Days / {destination.nights} Nights</p>
                      <p className="text-sm">
                        <span className="text-white/80">From </span>
                        <span className="text-accent font-bold">{formatPrice(destination.priceFrom)}</span>
                        <span className="text-white/80"> - {formatPrice(destination.priceTo)}</span>
                      </p>
                      <BookingModal>
                        <Button
                          size="sm"
                          className="w-full bg-accent hover:bg-accent/90 text-accent-foreground mt-2"
                        >
                          Enquire Now
                        </Button>
                      </BookingModal>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA Buttons */}
        <CTAButtons />

        {/* Testimonials */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="mb-10 text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
                What Our Travelers Say
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Real experiences from our satisfied customers
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-3">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="rounded-xl border border-border bg-card p-6 space-y-4">
                  <div className="flex items-center gap-4">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-14 h-14 rounded-full object-cover"
                    />
                    <div>
                      <p className="font-semibold text-foreground">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                    </div>
                  </div>
                  <div className="flex gap-1">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <span key={i} className="text-yellow-400">★</span>
                    ))}
                  </div>
                  <p className="text-muted-foreground">{testimonial.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Flight Promo Section */}
        <FlightPromoSection />
        {/* Gallery Section */}
        <GallerySection />


      </main>
      <Footer />
    </div>
  );
};

export default Index;
