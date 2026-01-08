import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, MapPin, Calendar, Users, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import heroDubai from "@/assets/hero-dubai.jpg";
import heroDesert from "@/assets/hero-desert.jpg";
import heroFamily from "@/assets/hero-family.jpg";
import heroLuxury from "@/assets/hero-luxury.jpg";

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
  { value: "500+", label: "Happy Travelers" },
  { value: "50+", label: "Destinations" },
  { value: "10+", label: "Years Experience" },
  { value: "24/7", label: "Customer Support" },
];

const HeroCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const scrollToForm = () => {
    const form = document.getElementById('lead-form-bottom');
    form?.scrollIntoView({ behavior: 'smooth' });
  };

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
                  {/* Google Review Badge */}
                  <div className="flex items-center justify-center gap-3 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 mx-auto w-fit">
                    <svg className="w-6 h-6" viewBox="0 0 24 24">
                      <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                      <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                      <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                      <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                    </svg>
                    <div className="flex items-center gap-2">
                      <div className="flex gap-0.5">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <span key={star} className="text-yellow-400 text-sm">★</span>
                        ))}
                      </div>
                      <span className="text-white font-semibold">4.8/5</span>
                    </div>
                    <span className="text-white/80 text-sm">Trusted by 350+ Travellers</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}


        {/* Stats */}
        <div className="absolute bottom-8 left-0 right-0 px-4">
          <div className="container mx-auto">
            <div className="flex flex-wrap justify-center gap-8 md:gap-16">
              {stats.map((stat, index) => (
                <div key={index} className="text-center text-white">
                  <p className="text-2xl md:text-3xl font-bold">{stat.value}</p>
                  <p className="text-sm text-white/80">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

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
