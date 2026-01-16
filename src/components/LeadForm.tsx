import { useState } from "react";
import { Phone, Mail, Send, Check, MessageCircle, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Dialog,
  DialogContent,
} from "@/components/ui/dialog";
import gvLogo from "@/assets/gv-logo.png";

interface LeadFormProps {
  variant?: "full" | "compact";
  id?: string;
  isModal?: boolean;
}

const countryCodes = [
  { code: "+971", country: "UAE", flag: "🇦🇪" },
  { code: "+91", country: "India", flag: "🇮🇳" },
  { code: "+1", country: "USA", flag: "🇺🇸" },
  { code: "+44", country: "UK", flag: "🇬🇧" },
  { code: "+966", country: "Saudi Arabia", flag: "🇸🇦" },
  { code: "+974", country: "Qatar", flag: "🇶🇦" },
  { code: "+973", country: "Bahrain", flag: "🇧🇭" },
  { code: "+968", country: "Oman", flag: "🇴🇲" },
  { code: "+965", country: "Kuwait", flag: "🇰🇼" },
  { code: "+92", country: "Pakistan", flag: "🇵🇰" },
  { code: "+880", country: "Bangladesh", flag: "🇧🇩" },
  { code: "+94", country: "Sri Lanka", flag: "🇱🇰" },
  { code: "+63", country: "Philippines", flag: "🇵🇭" },
  { code: "+20", country: "Egypt", flag: "🇪🇬" },
  { code: "+27", country: "South Africa", flag: "🇿🇦" },
];

const LeadForm = ({ variant = "full", id, isModal }: LeadFormProps) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [countryCode, setCountryCode] = useState("+971");

  // Form State
  const [formData, setFormData] = useState({
    name: "",
    phoneNo: "", // temporary holder for the number part
    service: "",
    message: ""
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const SCRIPT_URL = "https://formsubmit.co/ajax/packages@gv-travels.com";
    // const SCRIPT_URL = "https://formsubmit.co/ajax/manuahnas@gmail.com";

    // Find country name based on selected code
    const selectedCountry = countryCodes.find(c => c.code === countryCode)?.country || "N/A";

    // Map service values to readable labels
    const serviceLabels: Record<string, string> = {
      tour: "Tour Package",
      flight: "Flight Booking",
      umrah: "Umrah Travel",
      visa: "Visa Service",
      other: "Other"
    };
    const serviceLabel = serviceLabels[formData.service] || formData.service;

    const payload = {
      "Full Name": formData.name,
      "Contact Number": `${countryCode} ${formData.phoneNo}`,
      "Service Type": serviceLabel,
      "Country": selectedCountry,
      "Message Details": formData.message || "No message provided",
      _subject: "New Lead Enquiry - GV Travels",
      _captcha: "false",
      _template: "table",
      _remove_branding: "true"
    };

    try {
      const response = await fetch(SCRIPT_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        setIsSuccess(true);
        setFormData({ name: "", phoneNo: "", service: "", message: "" }); // Reset form
      } else {
        throw new Error("Submission failed");
      }
    } catch (error) {
      console.error("Error!", error);
      alert("Submission failed. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleWhatsAppClick = () => {
    window.open("https://wa.me/971505505369?text=Hi%2C%20I%20just%20submitted%20a%20lead%20form%20and%20would%20like%20to%20know%20more%20about%20your%20travel%20packages.", "_blank");
  };

  const SuccessContent = () => (
    <div className="text-center py-8 px-4 flex flex-col items-center justify-center animate-in fade-in zoom-in-95 duration-300">
      <div className="w-full max-w-sm mx-auto space-y-8">
        {/* Animated Icon */}
        <div className="relative">
          <div className="absolute inset-0 bg-green-100 rounded-full blur-xl opacity-50 animate-pulse" />
          <div className="relative w-24 h-24 bg-gradient-to-br from-green-100 to-green-50 rounded-full flex items-center justify-center mx-auto shadow-inner border border-green-200">
            <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center shadow-lg shadow-green-200">
              <Check className="w-8 h-8 text-white stroke-[3]" />
            </div>
          </div>
        </div>

        <div className="space-y-3">
          <h3 className="text-3xl font-bold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
            Thank You!
          </h3>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Your inquiry has been received. <br />
            <span className="text-foreground font-medium">We're excited to plan your journey!</span>
          </p>
        </div>

        <div className="space-y-4 pt-4">
          <Button
            onClick={handleWhatsAppClick}
            className="w-full h-14 bg-[#25D366] hover:bg-[#128C7E] text-white text-lg font-bold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5"
          >
            <MessageCircle className="w-6 h-6 mr-2" />
            Chat on WhatsApp Now
          </Button>
          <p className="text-xs text-muted-foreground">
            Fastest way to get a reply
          </p>
        </div>
      </div>
    </div>
  );

  // If already in a modal and success, show success content IN PLACE
  if (isModal && isSuccess) {
    return <SuccessContent />;
  }

  // Common Form Content
  const formContent = (
    <>
      {isSubmitting && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
          <div className="bg-card p-6 rounded-2xl shadow-xl flex flex-col items-center gap-4 border border-border">
            <Loader2 className="w-10 h-10 text-primary animate-spin" />
            <p className="text-lg font-medium text-foreground">Sending message...</p>
          </div>
        </div>
      )}
      <form onSubmit={handleSubmit} className={`space-y-5 ${variant === 'full' ? 'flex flex-col lg:flex-row gap-4 items-end space-y-0' : ''}`}>
        {/* Name Field */}
        <div className={variant === 'full' ? 'flex-1 w-full' : ''}>
          {variant === 'compact' && <label className="block text-sm font-medium text-accent mb-2">Your Name</label>}
          <Input
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            placeholder={variant === 'full' ? "Your Name" : "Enter your name"}
            className="h-12 border-border"
            required
          />
        </div>

        {/* Phone Field */}
        <div className={variant === 'full' ? 'flex gap-2 flex-1 w-full' : ''}>
          {variant === 'compact' && <label className="block text-sm font-medium text-accent mb-2">Phone</label>}
          <div className={`flex gap-2 ${variant === 'full' ? 'w-full' : ''}`}>
            <Select value={countryCode} onValueChange={setCountryCode}>
              <SelectTrigger className="h-12 w-28 flex-shrink-0 border-border">
                <SelectValue />
              </SelectTrigger>
              <SelectContent className="bg-card border border-border">
                {countryCodes.map((c) => (
                  <SelectItem key={c.code} value={c.code}>
                    {c.flag} {c.code}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Input
              name="phoneNo"
              type="tel"
              value={formData.phoneNo}
              onChange={handleInputChange}
              placeholder={variant === 'full' ? "Phone Number" : "Your phone number"}
              className="h-12 flex-1 border-border"
              required
            />
          </div>
        </div>

        {/* Service Selection */}
        <div className={variant === 'full' ? 'flex-1 w-full' : ''}>
          {variant === 'compact' && <label className="block text-sm font-medium text-accent mb-2">Select Service</label>}
          <Select onValueChange={(val) => setFormData(prev => ({ ...prev, service: val }))} required>
            <SelectTrigger className="h-12 border-border">
              <SelectValue placeholder="Select Service" />
            </SelectTrigger>
            <SelectContent className="bg-card border border-border">
              <SelectItem value="tour">Tour Package</SelectItem>
              <SelectItem value="flight">Flight Booking</SelectItem>
              <SelectItem value="umrah">Umrah Travel</SelectItem>
              <SelectItem value="visa">Visa Service</SelectItem>
              <SelectItem value="other">Other</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Message Field - Only for Compact variant */}
        {variant === 'compact' && (
          <div>
            <label className="block text-sm font-medium text-accent mb-2">Message</label>
            <Textarea
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              placeholder="Tell us about your travel plans..."
              className="min-h-[100px] resize-none border-border"
            />
          </div>
        )}

        {/* Submit Button */}
        <Button
          disabled={isSubmitting}
          type="submit"
          className={`h-12 bg-accent hover:bg-accent/90 text-accent-foreground font-semibold ${variant === 'full' ? 'px-8 w-full lg:w-auto' : 'w-full h-14 text-lg'}`}
        >
          <Send className={`w-4 h-4 mr-2 ${variant === 'compact' ? 'w-5 h-5' : ''}`} />
          {variant === 'full' ? "Get Quote" : "Send Message"}
        </Button>
      </form>
    </>
  );

  if (variant === "compact") {
    const content = (
      <div className={`${isModal ? "" : "bg-card rounded-2xl shadow-xl border border-border"} p-8 max-w-5xl mx-auto`}>
        <div className="grid lg:grid-cols-2 gap-8">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-foreground">Get In Touch</h3>
            <p className="text-muted-foreground">Contact us for your dream vacation package. We're here to help you plan your perfect trip.</p>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center">
                  <Phone className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Phone</p>
                  <a href="tel:+97150505369" className="font-semibold text-foreground hover:text-accent">+971 50 505 369</a>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center">
                  <Mail className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Email</p>
                  <a href="mailto:packages@gv-travels.com" className="font-semibold text-foreground hover:text-accent">packages@gv-travels.com</a>
                </div>
              </div>
            </div>
          </div>
          {formContent}
        </div>
      </div>
    );

    if (isModal) return content;

    return (
      <section id={id} className="py-12 bg-gradient-to-br from-secondary/10 to-primary/5">
        <div className="container mx-auto px-4">
          {content}
        </div>
        {/* Modal for non-modal usage success state */}
        <Dialog open={isSuccess} onOpenChange={setIsSuccess}>
          <DialogContent className="sm:max-w-md">
            <SuccessContent />
          </DialogContent>
        </Dialog>
      </section>
    );
  }

  // Full Variant
  return (
    <section id={id} className="py-12 bg-secondary/5">
      <div className="container mx-auto px-4">
        <div className="bg-card rounded-2xl shadow-xl p-8 max-w-5xl mx-auto border border-border">
          <h3 className="text-2xl font-bold text-center mb-6 text-foreground">
            Get Your Free Quote Now
          </h3>
          {formContent}
        </div>
      </div>
      {/* Modal for non-modal usage success state */}
      <Dialog open={isSuccess} onOpenChange={setIsSuccess}>
        <DialogContent className="sm:max-w-md">
          <SuccessContent />
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default LeadForm;