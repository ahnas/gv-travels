import { Link } from "react-router-dom";
import { Facebook, Twitter, Instagram, Youtube, Phone, Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import gvLogo from "@/assets/gv-logo.png";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-5">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <img src={gvLogo} alt="GV Travel & Tourism" className="h-12 object-contain" />
            </div>
            <p className="text-sm text-muted-foreground mb-4">
              Your trusted travel partner in the UAE. We offer premium tour packages, activities, and experiences across the Emirates and beyond.
            </p>
            <div className="flex gap-3 mb-6">
              <a href="#" className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-colors">
                <Facebook className="h-4 w-4" />
              </a>
              <a href="#" className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-colors">
                <Twitter className="h-4 w-4" />
              </a>
              <a href="#" className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-colors">
                <Instagram className="h-4 w-4" />
              </a>
              <a href="#" className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-colors">
                <Youtube className="h-4 w-4" />
              </a>
            </div>
            {/* Google Review Badge */}
            <div className="flex items-center gap-3 bg-muted/50 rounded-lg px-4 py-3 w-fit">
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
                <span className="text-foreground font-semibold text-sm">4.8/5</span>
              </div>
              <span className="text-muted-foreground text-xs">350+ Reviews</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wide text-foreground">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/about" className="text-muted-foreground hover:text-primary transition-colors">About Us</Link>
              </li>
              <li>
                <Link to="/tours" className="text-muted-foreground hover:text-primary transition-colors">All Tours</Link>
              </li>
              <li>
                <Link to="/packages" className="text-muted-foreground hover:text-primary transition-colors">Packages</Link>
              </li>
              <li>
                <Link to="/deals" className="text-muted-foreground hover:text-primary transition-colors">Special Deals</Link>
              </li>
              <li>
                <Link to="/blog" className="text-muted-foreground hover:text-primary transition-colors">Travel Blog</Link>
              </li>
              <li>
                <Link to="/contact" className="text-muted-foreground hover:text-primary transition-colors">Contact Us</Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wide text-foreground">Support</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">Help Center</a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">Booking Policy</a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">Cancellation</a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">Terms of Service</a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">Privacy Policy</a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">FAQs</a>
              </li>
            </ul>
          </div>

          {/* Contact & Newsletter */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wide text-foreground">Contact</h3>
            <ul className="space-y-3 text-sm mb-6">
              <li className="flex items-start gap-2">
                <Phone className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-muted-foreground">+971 50 550 5369</span>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-muted-foreground">packages@gv-travels.com</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-muted-foreground">Dubai, United Arab Emirates</span>
              </li>
            </ul>

            <div>
              <h4 className="mb-2 text-sm font-semibold text-foreground">Newsletter</h4>
              <p className="text-xs text-muted-foreground mb-3">Get travel deals & updates</p>
              <div className="flex gap-2">
                <Input
                  type="email"
                  placeholder="Your email"
                  className="h-9 text-sm"
                />
                <Button size="sm" className="bg-accent hover:bg-accent/90 whitespace-nowrap">
                  Subscribe
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 border-t border-border pt-8">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="text-sm text-muted-foreground">
              © 2024 GV Travel & Tourism. All rights reserved.
            </p>
            <div className="flex gap-4 text-sm">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">Privacy</a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">Terms</a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">Sitemap</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;