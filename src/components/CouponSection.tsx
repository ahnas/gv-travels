import { Badge, Ticket } from "lucide-react";
import { Button } from "@/components/ui/button";

const CouponSection = () => {
  return (
    <section className="py-12 bg-gradient-to-br from-primary/5 via-accent/5 to-secondary/5">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-primary via-primary-dark to-secondary p-8 md:p-12 shadow-2xl">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2" />
            
            <div className="relative grid md:grid-cols-2 gap-8 items-center">
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full">
                  <Ticket className="w-5 h-5 text-white" />
                  <span className="text-white font-semibold text-sm">Special Offer</span>
                </div>
                
                <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight">
                  Get Flat 5% OFF on All Bookings
                </h2>
                
                <p className="text-white/90 text-lg">
                  Book your dream vacation today and save on every package. Limited time offer!
                </p>
                
                <div className="flex flex-wrap gap-3 pt-2">
                  <div className="px-6 py-3 bg-white/20 backdrop-blur-md rounded-lg border-2 border-dashed border-white/40">
                    <p className="text-white/80 text-xs font-medium mb-1">Use Coupon Code</p>
                    <p className="text-white text-xl font-bold tracking-wider">SAVE5</p>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col gap-4">
                <div className="p-6 bg-white/10 backdrop-blur-md rounded-xl border border-white/20">
                  <Badge className="w-12 h-12 text-accent mb-3" />
                  <h3 className="text-white font-semibold text-lg mb-2">Premium Benefits</h3>
                  <ul className="space-y-2 text-white/90 text-sm">
                    <li>✓ Valid on all tour packages</li>
                    <li>✓ Instant discount at checkout</li>
                    <li>✓ No minimum booking required</li>
                  </ul>
                </div>
                
                <Button size="lg" className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-semibold h-14 text-lg shadow-xl">
                  Book Now & Save 5%
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CouponSection;
