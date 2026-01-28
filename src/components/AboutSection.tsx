import { Shield, Clock, Users, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroDesert from "@/assets/hero-desert.jpg";
import { useNavigate } from "react-router-dom";

const AboutSection = () => {
  const navigate = useNavigate();

  const features = [
    {
      icon: Shield,
      title: "Safe & Secure",
      description: "Trusted payments",
      iconBg: "bg-green-500/10",
      iconColor: "text-green-500",
    },
    {
      icon: Users,
      title: "Expert Team",
      description: "5+ years exp",
      iconBg: "bg-secondary/10",
      iconColor: "text-secondary",
    },
    {
      icon: Clock,
      title: "24/7 Support",
      description: "Always here",
      iconBg: "bg-primary/10",
      iconColor: "text-primary",
    },
  ];

  return (
    <section id="about-section" className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Left - Image */}
          <div className="relative">
            <div className="rounded-2xl overflow-hidden">
              <img
                src={heroDesert}
                alt="Desert Safari Experience"
                className="w-full h-[400px] md:h-[500px] object-cover"
              />
            </div>
            {/* Experience Badge */}
            <div className="absolute bottom-6 right-6 bg-card rounded-xl shadow-xl p-4 flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center">
                <Star className="w-6 h-6 text-yellow-500" />
              </div>
              <div>
                <p className="text-2xl font-bold text-foreground">5+</p>
                <p className="text-sm text-muted-foreground">Years Experience</p>
              </div>
            </div>
          </div>

          {/* Right - Content */}
          <div className="space-y-6">
            <span className="inline-block px-4 py-1 bg-secondary text-secondary-foreground text-sm font-medium rounded-full">
              About Us
            </span>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                We’re here to make every trip unforgettable.
              </h2>
            </div>
            <p className="text-muted-foreground text-lg">
              We operate from the <span className="text-red-600 font-semibold">UAE and India</span>. With our trusted travel partners, we make worldwide travel possible at affordable rates.
            </p>

            <div className="grid grid-cols-2 gap-4">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div key={index} className="flex items-center gap-3">
                    <div className={`w-8 h-8 rounded-full ${feature.iconBg} flex items-center justify-center flex-shrink-0`}>
                      <Icon className={`w-4 h-4 ${feature.iconColor}`} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground text-sm">{feature.title}</h4>
                      <p className="text-xs text-muted-foreground">{feature.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            <Button
              onClick={() => navigate('/about')}
              className="bg-primary hover:bg-primary/90 text-primary-foreground h-12 px-8 mt-2"
            >
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
