import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroDubai from "@/assets/hero-dubai.jpg";
import heroDesert from "@/assets/hero-desert.jpg";

const slides = [
  {
    image: heroDubai,
    title: "Book. Pack. Go",
    subtitle: "Unseen Places, Unforgettable Experiences",
  },
  {
    image: heroDesert,
    title: "Desert Safari Adventure",
    subtitle: "Thrilling experiences in the golden dunes",
  },
];

const stats = [
  { value: "1000+", label: "Happy Travelers", color: "red" },
  { value: "200+", label: "Destinations", color: "teal" },
  { value: "5+", label: "Years Experience", color: "green" },
  { value: "24/7", label: "Customer Support", color: "indigo" }
];
const HeroCarousel = () => {
  const navigate = useNavigate();
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="relative w-full overflow-hidden">
      {/* Carousel */}
      <div className="relative h-[600px] md:h-[700px] lg:h-[800px]">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${index === currentSlide ? "opacity-100" : "opacity-0"
              }`}
          >
            <img
              src={slide.image}
              alt={slide.title}
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
            <div className="absolute inset-0 flex items-center">
              <div className="container mx-auto px-4">
                <div className="max-w-3xl mx-auto text-center space-y-6 animate-slide-up">
                  <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-white leading-tight">
                    {slide.title}
                  </h1>
                  <p className="text-xl md:text-2xl text-white/90">
                    {slide.subtitle}
                  </p>
                  {/* Action Buttons */}
                  <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
                    <Button
                      size="lg"
                      className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold min-w-[200px] shadow-lg shadow-primary/25"
                      onClick={() => navigate('/')}
                    >
                      TRAVEL PACKAGES
                    </Button>
                    <Button
                      size="lg"
                      className="bg-white/10 hover:bg-white/20 text-white border-white/20 backdrop-blur-md font-semibold min-w-[200px]"
                      onClick={() => navigate('/visa-services')}
                    >
                      VISA SERVICES
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}


        {/* Stats */}
        {/* <div className="absolute bottom-8 left-0 right-0 px-4">
          <div className="container mx-auto">
            <div className="flex flex-wrap justify-center gap-8 md:gap-16">
              {stats.map((stat, index) => (
                <div key={index} className="text-center text-white">
                  <p className={`text-2xl md:text-3xl font-bold text-${stat.color}-500`}>
                    {stat.value}
                  </p>
                  <p className="text-sm text-white/80">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div> */}

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 flex h-12 w-12 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-all"
        >
          <ChevronLeft className="h-6 w-6 text-white" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 flex h-12 w-12 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-all"
        >
          <ChevronRight className="h-6 w-6 text-white" />
        </button>

        {/* Dots */}
        <div className="absolute bottom-48 md:bottom-56 left-1/2 flex -translate-x-1/2 gap-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`h-2 rounded-full transition-all ${index === currentSlide ? "w-8 bg-white" : "w-2 bg-white/50"
                }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HeroCarousel;
