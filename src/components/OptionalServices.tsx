import { Plane, MapPin, FileCheck } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import BookingModal from "./BookingModal";

const OptionalServices = () => {

  const services = [
    {
      icon: Plane,
      title: "Flight Ticket Booking",
      description: "Get the best deals on international and domestic flights. We compare prices across airlines to find you the perfect flight.",
      features: ["Competitive rates", "24/7 booking support", "Instant confirmation"],
      color: "from-primary/10 to-primary/5",
      iconColor: "text-primary",
      image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=400&q=80",
      discountColor: "bg-green-500",
    },
    {
      icon: MapPin,
      title: "Umrah Travel Packages",
      description: "Comprehensive Umrah packages with accommodation, transport, and guided services for a blessed pilgrimage experience.",
      features: ["Complete packages", "Expert guidance", "Comfortable stay"],
      color: "from-secondary/10 to-secondary/5",
      iconColor: "text-secondary",
      image: "https://images.unsplash.com/photo-1511652019870-fbd8713560bf?q=80&w=2173&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      discountColor: "bg-accent",
    },
    {
      icon: FileCheck,
      title: "Visa Services",
      description: "Hassle-free visa processing for UAE and international destinations. We handle all documentation and submissions.",
      features: ["Fast processing", "Document assistance", "High success rate"],
      color: "from-accent/10 to-accent/5",
      iconColor: "text-accent",
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400&q=80",
      discountColor: "bg-secondary",
    },
  ];

  return (
    <section id="optional-services-section" className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
            Additional Travel Services
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Complete travel solutions for all your needs - from flights to visas
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-border/50 overflow-hidden">
                {/* Service Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  {/* Discount Badge */}
                  <div className={`absolute bottom-4 left-4 w-12 h-12 rounded-xl bg-card/90 backdrop-blur-sm flex items-center justify-center`}>
                    <Icon className={`w-6 h-6 ${service.iconColor}`} />
                  </div>
                </div>

                <CardHeader className="relative pb-4">
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                  <CardDescription className="text-base mt-2">
                    {service.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="relative space-y-4">
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <span className={`w-1.5 h-1.5 rounded-full ${service.iconColor.replace('text-', 'bg-')}`} />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <BookingModal>
                  <Button
                    className="w-full mt-4 bg-primary hover:bg-primary/90 text-primary-foreground transition-colors"
                  >
                    Enquire Now
                  </Button>
                  </BookingModal>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default OptionalServices;
