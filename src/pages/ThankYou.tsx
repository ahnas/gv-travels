import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { CheckCircle2, Home, MessageCircle, Mail, Phone, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const ThankYou = () => {
    const navigate = useNavigate();

    useEffect(() => {
        // Confetti animation on mount
        const duration = 3 * 1000;
        const animationEnd = Date.now() + duration;
        const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

        const randomInRange = (min: number, max: number) => {
            return Math.random() * (max - min) + min;
        };

        const interval: NodeJS.Timeout = setInterval(() => {
            const timeLeft = animationEnd - Date.now();

            if (timeLeft <= 0) {
                return clearInterval(interval);
            }

            const particleCount = 50 * (timeLeft / duration);

            // Create confetti particles using DOM elements
            for (let i = 0; i < particleCount; i++) {
                const particle = document.createElement("div");
                particle.className = "confetti-particle";
                particle.style.left = `${randomInRange(0, 100)}%`;
                particle.style.backgroundColor = `hsl(${randomInRange(0, 360)}, 70%, 60%)`;
                particle.style.animationDuration = `${randomInRange(2, 4)}s`;
                document.body.appendChild(particle);

                setTimeout(() => particle.remove(), 4000);
            }
        }, 250);

        return () => clearInterval(interval);
    }, []);

    const handleWhatsAppClick = () => {
        window.open(
            "https://wa.me/971505505369?text=Hi%2C%20I%20just%20submitted%20a%20lead%20form%20and%20would%20like%20to%20know%20more%20about%20your%20travel%20packages.",
            "_blank"
        );
    };

    return (
        <div className="min-h-screen flex flex-col bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50">
            <Header />

            <main className="flex-1 flex items-center justify-center px-4 py-12 relative overflow-hidden">
                {/* Animated Background Elements */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <div className="absolute top-20 left-10 w-72 h-72 bg-emerald-300/20 rounded-full blur-3xl animate-pulse" />
                    <div className="absolute bottom-20 right-10 w-96 h-96 bg-teal-300/20 rounded-full blur-3xl animate-pulse delay-1000" />
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-300/10 rounded-full blur-3xl animate-pulse delay-500" />
                </div>

                <div className="max-w-4xl w-full relative z-10">
                    <div className="bg-white/90 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/50 overflow-hidden">
                        {/* Success Icon Section */}
                        <div className="relative bg-gradient-to-br from-emerald-500 via-teal-500 to-cyan-500 pt-16 pb-12 px-6 text-center">
                            <div className="absolute inset-0 bg-grid-white/10 [mask-image:linear-gradient(0deg,transparent,black)]" />

                            <div className="relative">
                                {/* Animated Success Icon */}
                                <div className="inline-flex relative mb-6">
                                    <div className="absolute inset-0 bg-white rounded-full blur-2xl opacity-40 animate-ping" />
                                    <div className="relative w-28 h-28 bg-white rounded-full flex items-center justify-center shadow-2xl transform hover:scale-110 transition-transform duration-300">
                                        <CheckCircle2 className="w-16 h-16 text-emerald-500 animate-in zoom-in duration-500" strokeWidth={3} />
                                    </div>
                                </div>

                                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 animate-in slide-in-from-bottom duration-500 delay-100">
                                    Thank You! 🎉
                                </h1>
                                <p className="text-xl md:text-2xl text-white/95 font-medium animate-in slide-in-from-bottom duration-500 delay-200">
                                    Your Journey Begins Here
                                </p>
                            </div>
                        </div>

                        {/* Content Section */}
                        <div className="p-8 md:p-12 space-y-8">
                            {/* Message */}
                            <div className="text-center space-y-4 animate-in fade-in slide-in-from-bottom duration-500 delay-300">
                                <h2 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 bg-clip-text text-transparent">
                                    We've Received Your Inquiry!
                                </h2>
                                <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                                    Our travel experts are already working on crafting the perfect journey for you.
                                    We'll get back to you within <span className="font-bold text-emerald-600">24 hours</span> with personalized recommendations.
                                </p>
                            </div>

                            {/* Next Steps */}
                            <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl p-6 md:p-8 space-y-4 animate-in fade-in slide-in-from-bottom duration-500 delay-400">
                                <h3 className="text-xl font-bold text-foreground flex items-center gap-2">
                                    <ArrowRight className="w-6 h-6 text-emerald-600" />
                                    What Happens Next?
                                </h3>
                                <ul className="space-y-3 text-muted-foreground">
                                    <li className="flex items-start gap-3">
                                        <div className="w-6 h-6 rounded-full bg-emerald-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                                            <span className="text-white text-xs font-bold">1</span>
                                        </div>
                                        <span>Our team reviews your travel preferences and requirements</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <div className="w-6 h-6 rounded-full bg-teal-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                                            <span className="text-white text-xs font-bold">2</span>
                                        </div>
                                        <span>We prepare a customized travel package tailored just for you</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <div className="w-6 h-6 rounded-full bg-cyan-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                                            <span className="text-white text-xs font-bold">3</span>
                                        </div>
                                        <span>You'll receive a detailed proposal via email or phone call</span>
                                    </li>
                                </ul>
                            </div>

                            {/* Contact Options */}
                            <div className="space-y-4 animate-in fade-in slide-in-from-bottom duration-500 delay-500">
                                <h3 className="text-xl font-bold text-center text-foreground">
                                    Can't Wait? Let's Talk Now!
                                </h3>

                                <div className="grid md:grid-cols-2 gap-4">
                                    {/* WhatsApp Button */}
                                    <Button
                                        onClick={handleWhatsAppClick}
                                        size="lg"
                                        className="h-16 bg-gradient-to-r from-[#25D366] to-[#128C7E] hover:from-[#128C7E] hover:to-[#075E54] text-white font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                                    >
                                        <MessageCircle className="w-6 h-6 mr-2" />
                                        Chat on WhatsApp
                                    </Button>

                                    {/* Call Button */}
                                    <Button
                                        asChild
                                        size="lg"
                                        variant="outline"
                                        className="h-16 border-2 border-emerald-500 hover:bg-emerald-50 font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                                    >
                                        <a href="tel:+971505505369" className="flex items-center justify-center">
                                            <Phone className="w-6 h-6 mr-2 text-emerald-600" />
                                            <span className="text-emerald-600">Call Us Now</span>
                                        </a>
                                    </Button>
                                </div>

                                {/* Email Info */}
                                <div className="flex items-center justify-center gap-2 text-muted-foreground">
                                    <Mail className="w-4 h-4" />
                                    <span className="text-sm">
                                        Or email us at{" "}
                                        <a
                                            href="mailto:packages@gv-travels.com"
                                            className="font-semibold text-emerald-600 hover:underline"
                                        >
                                            packages@gv-travels.com
                                        </a>
                                    </span>
                                </div>
                            </div>

                            {/* Navigation Buttons */}
                            <div className="flex flex-col sm:flex-row gap-4 pt-6 border-t animate-in fade-in slide-in-from-bottom duration-500 delay-600">
                                <Button
                                    onClick={() => navigate("/")}
                                    variant="outline"
                                    size="lg"
                                    className="flex-1 h-14 font-semibold hover:bg-emerald-50 border-emerald-200"
                                >
                                    <Home className="w-5 h-5 mr-2" />
                                    Back to Home
                                </Button>
                                <Button
                                    onClick={() => navigate("/packages")}
                                    size="lg"
                                    className="flex-1 h-14 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white font-semibold"
                                >
                                    Explore More Packages
                                </Button>
                            </div>
                        </div>
                    </div>

                    {/* Trust Badges */}
                    <div className="mt-8 text-center space-y-4 animate-in fade-in slide-in-from-bottom duration-500 delay-700">
                        <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
                            <div className="flex items-center gap-2">
                                <div className="w-2 h-2 bg-emerald-500 rounded-full" />
                                <span>24/7 Support</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="w-2 h-2 bg-cyan-500 rounded-full" />
                                <span>1000+ Happy Travelers</span>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            <Footer />

            <style>{`
        @keyframes fall {
          to {
            transform: translateY(100vh) rotate(360deg);
            opacity: 0;
          }
        }

        .confetti-particle {
          position: fixed;
          width: 10px;
          height: 10px;
          top: -10px;
          opacity: 1;
          animation: fall linear forwards;
          pointer-events: none;
          z-index: 9999;
        }

        @keyframes pulse {
          0%, 100% {
            transform: scale(1);
            opacity: 0.3;
          }
          50% {
            transform: scale(1.05);
            opacity: 0.5;
          }
        }

        .delay-500 {
          animation-delay: 500ms;
        }

        .delay-1000 {
          animation-delay: 1000ms;
        }
      `}</style>
        </div>
    );
};

export default ThankYou;
