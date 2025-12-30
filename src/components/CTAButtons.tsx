import { Phone, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const CTAButtons = () => {
  return (
    <section className="py-8 bg-secondary/5">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center gap-4">
          <a
            href="https://wa.me/971505505369"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button className="bg-[#25D366] hover:bg-[#25D366]/90 text-white h-12 px-6">
              <MessageCircle className="w-5 h-5 mr-2" />
              WhatsApp Us
            </Button>
          </a>
          <a href="tel:+971505505369">
            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground h-12 px-6">
              <Phone className="w-5 h-5 mr-2" />
              Call Now
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default CTAButtons;
