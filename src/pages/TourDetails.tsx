import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Star, Clock, Users, MapPin, Check, X, Calendar, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";

const TourDetails = () => {
  const itinerary = [
    {
      day: "Day 1",
      title: "Arrival & Dubai Marina",
      description: "Pick up from your hotel, welcome briefing, and evening dhow cruise at Dubai Marina with dinner.",
    },
    {
      day: "Day 2",
      title: "Dubai City Tour",
      description: "Visit Burj Khalifa, Dubai Mall, Dubai Frame, and explore the historic Al Fahidi district.",
    },
    {
      day: "Day 3",
      title: "Desert Safari Adventure",
      description: "Thrilling dune bashing, camel riding, sandboarding, and traditional BBQ dinner under the stars.",
    },
  ];

  const inclusions = [
    "Hotel pickup and drop-off",
    "Professional tour guide",
    "All entrance fees",
    "Lunch and dinner as per itinerary",
    "Air-conditioned transportation",
    "Travel insurance",
  ];

  const exclusions = [
    "Personal expenses",
    "Tips and gratuities",
    "Additional activities",
    "Visa fees",
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <div className="relative h-[400px] md:h-[500px]">
          <img
            src="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=1920&q=80"
            alt="Dubai Tour"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-8">
            <div className="container mx-auto">
              <Badge className="mb-3 bg-accent text-accent-foreground">Best Seller</Badge>
              <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">
                Dubai Luxury 3-Day Experience
              </h1>
              <div className="flex flex-wrap gap-4 text-white">
                <div className="flex items-center gap-2">
                  <MapPin className="h-5 w-5" />
                  <span>Dubai, UAE</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-5 w-5" />
                  <span>3 Days / 2 Nights</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="h-5 w-5" />
                  <span>Up to 15 people</span>
                </div>
                <div className="flex items-center gap-2">
                  <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  <span>4.8 (324 reviews)</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 py-12">
          <div className="grid gap-8 lg:grid-cols-3">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Overview */}
              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">Overview</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Experience the best of Dubai in this comprehensive 3-day luxury tour. From the iconic Burj Khalifa to the traditional souks, and from thrilling desert adventures to elegant marina cruises, this package offers the perfect blend of modern luxury and cultural heritage. Our expert guides ensure you discover both the famous landmarks and hidden gems of this magnificent city.
                </p>
              </section>

              {/* Itinerary */}
              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">Day-by-Day Itinerary</h2>
                <Accordion type="single" collapsible className="w-full">
                  {itinerary.map((day, index) => (
                    <AccordionItem key={index} value={`item-${index}`}>
                      <AccordionTrigger className="text-left">
                        <div>
                          <span className="font-semibold text-primary">{day.day}</span>
                          <span className="ml-2 text-foreground">{day.title}</span>
                        </div>
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground">
                        {day.description}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </section>

              {/* Inclusions & Exclusions */}
              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">What's Included</h2>
                <div className="grid gap-6 md:grid-cols-2">
                  <Card>
                    <CardContent className="p-6">
                      <h3 className="font-semibold text-foreground mb-4 flex items-center gap-2">
                        <Check className="h-5 w-5 text-success" />
                        Included
                      </h3>
                      <ul className="space-y-2">
                        {inclusions.map((item, index) => (
                          <li key={index} className="flex items-start gap-2 text-sm text-muted-foreground">
                            <Check className="h-4 w-4 text-success mt-0.5 flex-shrink-0" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="p-6">
                      <h3 className="font-semibold text-foreground mb-4 flex items-center gap-2">
                        <X className="h-5 w-5 text-destructive" />
                        Not Included
                      </h3>
                      <ul className="space-y-2">
                        {exclusions.map((item, index) => (
                          <li key={index} className="flex items-start gap-2 text-sm text-muted-foreground">
                            <X className="h-4 w-4 text-destructive mt-0.5 flex-shrink-0" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </section>

              {/* Price Breakdown */}
              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">Price Details</h2>
                <Card>
                  <CardContent className="p-6">
                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="text-muted-foreground">Base Price (per person)</span>
                        <span className="font-semibold">AED 899</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-muted-foreground">Service Charge</span>
                        <span className="font-semibold">AED 50</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-success">Early Bird Discount (20%)</span>
                        <span className="text-success font-semibold">-AED 190</span>
                      </div>
                      <div className="border-t border-border pt-3 flex justify-between items-center">
                        <span className="text-lg font-bold text-foreground">Total Price</span>
                        <span className="text-2xl font-bold text-primary">AED 759</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </section>
            </div>

            {/* Booking Sidebar */}
            <div className="lg:sticky lg:top-32 h-fit">
              <Card className="border-2 border-primary">
                <CardContent className="p-6 space-y-6">
                  <div>
                    <div className="flex items-baseline gap-2 mb-2">
                      <span className="text-3xl font-bold text-primary">AED 759</span>
                      <span className="text-lg text-muted-foreground line-through">AED 949</span>
                    </div>
                    <p className="text-sm text-muted-foreground">per person</p>
                  </div>

                  <div className="space-y-3">
                    <div>
                      <label className="text-sm font-medium text-foreground mb-1 block">
                        Select Date
                      </label>
                      <div className="relative">
                        <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                        <input
                          type="date"
                          className="w-full rounded-lg border border-input bg-background px-3 py-2 pl-10 text-sm"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="text-sm font-medium text-foreground mb-1 block">
                        Number of Guests
                      </label>
                      <div className="relative">
                        <Users className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                        <input
                          type="number"
                          min="1"
                          defaultValue="2"
                          className="w-full rounded-lg border border-input bg-background px-3 py-2 pl-10 text-sm"
                        />
                      </div>
                    </div>
                  </div>

                  <Button className="w-full bg-accent hover:bg-accent/90 h-12 text-lg">
                    Connect Now
                  </Button>

                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Shield className="h-4 w-4 text-success" />
                    <span>Free cancellation up to 24 hours before</span>
                  </div>

                  <div className="border-t border-border pt-4">
                    <h4 className="font-semibold text-foreground mb-3">Need Help?</h4>
                    <div className="space-y-2 text-sm">
                      <p className="text-muted-foreground">
                        Contact our travel experts for assistance
                      </p>
                      <a href="tel:+971505505369" className="block text-primary hover:underline">
                        +971 50 505 369
                      </a>
                      <a href="mailto:info@uaetours.ae" className="block text-primary hover:underline">
                        info@uaetours.ae
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default TourDetails;
