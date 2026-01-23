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
import { packages } from "@/data/packages";

const Index = () => {
  const { formatPrice } = useCurrency();

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

        {/* Featured Packages - Group Departures */}
        <section id="featured-packages-section" className="py-16 bg-muted/30 overflow-hidden">
          <div className="container mx-auto px-4">
            <div className="mb-10 text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
                Upcoming Group Departures
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Join our curated group tours to exciting international destinations
              </p>
            </div>

            <div className="relative w-full">
              <div
                className="flex gap-6 animate-scroll-packages"
                style={{ width: "fit-content" }}
              >
                {/* Render packages 3 times for seamless infinite scroll */}
                {[...packages, ...packages, ...packages].map((pkg, index) => (
                  <div
                    key={`${pkg.id}-${index}`}
                    className="w-[300px] md:w-[350px] flex-shrink-0"
                  >
                    <PackageCard
                      title={pkg.title}
                      image={pkg.image}
                      location={pkg.country}
                      days={pkg.days}
                      nights={pkg.nights}
                      price={pkg.price}
                      rating={pkg.rating}
                      reviews={pkg.reviews}
                      groupSize={pkg.group}
                      departureDate={pkg.departureDate}
                      tag={pkg.tag}
                    />
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-12 text-center">
              <Button
                size="lg"
                variant="outline"
                className="border-primary text-primary hover:bg-primary hover:text-white transition-all w-full sm:w-auto px-8 py-6 text-lg"
                onClick={() => window.location.hash = "#/packages"}
              >
                View Full Package Details
              </Button>
            </div>
          </div>
          <style>{`
            @keyframes scroll-packages {
              0% {
                transform: translateX(0);
              }
              100% {
                transform: translateX(-33.33%);
              }
            }
            
            .animate-scroll-packages {
              animation: scroll-packages 180s linear infinite;
            }
            
            .animate-scroll-packages:hover {
              animation-play-state: paused;
            }
          `}</style>
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


      </main >
      <Footer />
    </div >
  );
};

export default Index;
