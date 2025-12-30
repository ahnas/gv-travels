import { useEffect, useState } from "react";
import { Check, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import gvLogo from "@/assets/gv-logo.png";

const ThankYou = () => {
  const [countdown, setCountdown] = useState(5);

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          // Redirect to WhatsApp
          window.location.href = "https://wa.me/971505505369?text=Hi%2C%20I%20just%20submitted%20a%20lead%20form%20and%20would%20like%20to%20know%20more%20about%20your%20travel%20packages.";
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleWhatsAppClick = () => {
    window.location.href = "https://wa.me/971505505369?text=Hi%2C%20I%20just%20submitted%20a%20lead%20form%20and%20would%20like%20to%20know%20more%20about%20your%20travel%20packages.";
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 via-background to-secondary/5 flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-card rounded-2xl shadow-2xl p-8 text-center space-y-6 border border-border">
        {/* Logo */}
        <img src={gvLogo} alt="GV Travel & Tourism" className="h-16 mx-auto" />
        
        {/* Success Icon */}
        <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mx-auto">
          <Check className="w-10 h-10 text-green-600" />
        </div>

        {/* Thank You Message */}
        <div className="space-y-2">
          <h1 className="text-2xl md:text-3xl font-bold text-foreground">
            Thank You!
          </h1>
          <p className="text-muted-foreground">
            Your inquiry has been submitted successfully. Our travel experts will contact you shortly.
          </p>
        </div>

        {/* Countdown */}
        <div className="py-4">
          <p className="text-sm text-muted-foreground mb-2">
            Redirecting to WhatsApp in
          </p>
          <div className="text-4xl font-bold text-primary">
            {countdown}
          </div>
          <p className="text-xs text-muted-foreground mt-2">seconds</p>
        </div>

        {/* WhatsApp Button */}
        <Button 
          onClick={handleWhatsAppClick}
          className="w-full h-14 bg-green-500 hover:bg-green-600 text-white text-lg font-semibold"
        >
          <MessageCircle className="w-5 h-5 mr-2" />
          Chat on WhatsApp Now
        </Button>

        {/* Back to Home */}
        <a 
          href="/" 
          className="inline-block text-sm text-primary hover:underline"
        >
          ← Back to Homepage
        </a>
      </div>
    </div>
  );
};

export default ThankYou;
