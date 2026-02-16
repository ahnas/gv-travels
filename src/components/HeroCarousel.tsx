import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroDubai from "@/assets/hero-dubai.jpg";
import heroDesert from "@/assets/hero-desert.jpg";

const slides = [
  {
    image: "https://images.unsplash.com/photo-1513072064285-240f87fa81e8?q=80&w=927&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Eid Special Offers",
    subtitle: "Celebrate with Joy & Travel",
    type: 'eid',
    primaryAction: { label: "VIEW OFFERS", path: "/packages" },
    secondaryAction: { label: "CONTACT US", path: "/contact" }
  },
  {
    image: heroDubai,
    title: "Book. Pack. Go",
    subtitle: "Unseen Places, Unforgettable Experiences",
    primaryAction: { label: "TRAVEL PACKAGES", path: "/packages" },
    secondaryAction: { label: "VISA SERVICES", path: "/visa-services" }
  },
  {
    image: heroDesert,
    title: "Desert Safari Adventure",
    subtitle: "Thrilling experiences in the golden dunes",
    primaryAction: { label: "EXPLORE DESERT", path: "/packages" },
    secondaryAction: { label: "BOOK NOW", path: "/contact" }
  },
];
// ... (keep stats array same)

const HeroCarousel = () => {
  // ... (keep simple hooks same)
  const navigate = useNavigate();
  const [currentSlide, setCurrentSlide] = useState(0);
  // Auto-play removed as per user request to keep the Eid slide static until manual navigation
  /* 
  useEffect(() => {
    if (!isAutoPlaying) return;

    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [isAutoPlaying]);
  */

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
            className={`absolute inset-0 transition-opacity duration-1000 ${index === currentSlide
              ? "opacity-100 z-10"
              : "opacity-0 z-0 pointer-events-none"
              }`}
          >
            <img
              src={slide.image}
              alt={slide.title}
              className="h-full w-full object-cover"
            />

            {/* Conditional Overlay */}
            <div className={`absolute inset-0 ${slide.type === 'eid'
              ? "bg-gradient-to-r from-emerald-900/90 via-emerald-800/60 to-transparent"
              : "bg-gradient-to-b from-black/60 via-black/40 to-black/70"
              }`} />

            <div className="absolute inset-0 flex items-center">
              <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto text-center space-y-6 animate-slide-up">

                  {slide.type === 'eid' ? (
                    <div className="relative z-10 perspective-[1000px]">
                      {/* Eid Content */}
                      <div className="font-serif text-white mb-4 md:mb-8">
                        <h2
                          className="text-5xl sm:text-6xl md:text-8xl lg:text-9xl font-bold text-emerald-100 drop-shadow-[0_0_25px_rgba(16,185,129,0.6)] animate-fade-in origin-center"
                          style={{ fontFamily: 'serif' }}
                        >
                          Eid Mubarak
                        </h2>
                        <div className="text-xl sm:text-2xl md:text-5xl font-bold text-amber-400 uppercase tracking-[0.2em] mt-2 animate-float">
                          Special Offer
                        </div>
                      </div>

                      <div className="bg-white/10 backdrop-blur-md border border-white/20 p-4 sm:p-6 md:p-8 rounded-2xl md:rounded-3xl inline-block max-w-2xl w-full mx-auto transform transition-all hover:bg-white/15 animate-slide-up shadow-[0_8px_32px_0_rgba(16,185,129,0.37)]">
                        <p className="text-white/90 text-sm md:text-xl font-medium mb-1 md:mb-2 uppercase tracking-wide">Starting From</p>

                        <div className="relative inline-block mb-3 md:mb-6 group">
                          <p className="text-5xl sm:text-6xl md:text-8xl font-black text-white drop-shadow-lg group-hover:scale-110 transition-transform duration-300">
                            <span className="text-2xl md:text-4xl align-top opacity-80 mr-1">AED</span>2,199
                          </p>
                          <div className="absolute -inset-4 bg-emerald-500/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        </div>

                        <div className="flex flex-wrap justify-center gap-2 md:gap-4 text-xs sm:text-sm md:text-base font-bold text-white uppercase px-2 md:px-4">
                          {[
                            { name: 'Georgia', path: '/destination/georgia' },
                            { name: 'Azerbaijan', path: '/destination/azerbaijan' },
                            { name: 'Armenia', path: '/destination/armenia' }
                          ].map((country, index) => (
                            <button
                              key={country.name}
                              onClick={() => navigate(country.path)}
                              className="bg-emerald-600/90 hover:bg-emerald-500 px-3 py-1.5 sm:px-4 sm:py-2 md:px-6 md:py-2.5 rounded-full shadow-lg transition-all hover:scale-105 hover:shadow-emerald-500/50 backdrop-blur-sm border border-emerald-400/30 cursor-pointer"
                              style={{ animation: `pop-in 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275) backwards ${0.8 + index * 0.15}s` }}
                            >
                              {country.name}
                            </button>
                          ))}
                        </div>
                      </div>
                      <style>{`
                        @keyframes fade-in {
                          0% { opacity: 0; transform: translateY(20px); }
                          100% { opacity: 1; transform: translateY(0); }
                        }
                        .animate-fade-in {
                          animation: fade-in 1.5s ease-out;
                        }
                        @keyframes pop-in {
                          0% { transform: scale(0); opacity: 0; }
                          100% { transform: scale(1); opacity: 1; }
                        }
                      `}</style>
                    </div>
                  ) : (
                    <>
                      <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-white leading-tight">
                        {slide.title}
                      </h1>
                      <p className="text-xl md:text-2xl text-white/90">
                        {slide.subtitle}
                      </p>
                    </>
                  )}

                  {/* Action Buttons */}
                  <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
                    <Button
                      size="lg"
                      className={`${slide.type === 'eid' ? 'bg-emerald-600 hover:bg-emerald-700 border-emerald-500' : 'bg-primary hover:bg-primary/90'} text-white font-semibold min-w-[200px] shadow-xl text-lg h-auto py-4`}
                      onClick={() => navigate(slide.primaryAction?.path || '/')}
                    >
                      {slide.primaryAction?.label || "TRAVEL PACKAGES"}
                    </Button>
                    <Button
                      size="lg"
                      className="bg-white/10 hover:bg-white/20 text-white border-white/20 backdrop-blur-md font-semibold min-w-[200px] text-lg h-auto py-4"
                      onClick={() => navigate(slide.secondaryAction?.path || '/visa-services')}
                    >
                      {slide.secondaryAction?.label || "VISA SERVICES"}
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
          className="flex absolute left-4 top-1/2 -translate-y-1/2 h-12 w-12 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-all z-20"
        >
          <ChevronLeft className="h-6 w-6 text-white" />
        </button>
        <button
          onClick={nextSlide}
          className="flex absolute right-4 top-1/2 -translate-y-1/2 h-12 w-12 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-all z-20"
        >
          <ChevronRight className="h-6 w-6 text-white" />
        </button>

        {/* Dots */}
        <div className="absolute bottom-12 left-1/2 flex -translate-x-1/2 gap-2 z-20">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setCurrentSlide(index);
              }}
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
