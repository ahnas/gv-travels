import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Phone, Mail, MapPin, Send } from "lucide-react";
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
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
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

    const SCRIPT_URL = "https://formsubmit.co/ajax/manuahnas@gmail.com";

    // Find country name based on selected code
    const selectedCountry = countryCodes.find(c => c.code === countryCode)?.country || "N/A";

    const payload = {
      name: formData.name,
      phone: `${countryCode} ${formData.phoneNo}`,
      service: formData.service,
      country: selectedCountry,
      message: formData.message || "No message provided",
      _subject: "New Lead Enquiry - GV Travels",
      _captcha: "false"
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
        navigate("/thank-you");
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
                  <a href="mailto:info@gvtravels.com" className="font-semibold text-foreground hover:text-accent">info@gvtravels.com</a>
                </div>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-sm font-medium text-accent mb-2">Your Name</label>
              <Input
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Enter your name"
                className="h-12 border-border"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-accent mb-2">Phone</label>
              <div className="flex gap-2">
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
                  placeholder="Your phone number"
                  className="h-12 flex-1 border-border"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-accent mb-2">Select Service</label>
              <Select onValueChange={(val) => setFormData(prev => ({ ...prev, service: val }))} required>
                <SelectTrigger className="h-12 border-border">
                  <SelectValue placeholder="Select a service" />
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

            <Button disabled={isSubmitting} type="submit" className="w-full h-14 bg-accent hover:bg-accent/90 text-accent-foreground text-lg font-semibold">
              <Send className="w-5 h-5 mr-2" />
              {isSubmitting ? "Sending..." : "Send Message"}
            </Button>
          </form>
        </div>
      </div>
    );

    if (isModal) return content;

    return (
      <section id={id} className="py-12 bg-gradient-to-br from-secondary/10 to-primary/5">
        <div className="container mx-auto px-4">
          {content}
        </div>
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
          <form onSubmit={handleSubmit} className="flex flex-col lg:flex-row gap-4 items-end">
            <div className="flex-1 w-full">
              <Input
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Your Name"
                className="h-12 border-border"
                required
              />
            </div>
            <div className="flex gap-2 flex-1 w-full">
              <Select value={countryCode} onValueChange={setCountryCode}>
                <SelectTrigger className="h-12 w-24 flex-shrink-0 border-border">
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
                placeholder="Phone Number"
                className="h-12 flex-1 border-border"
                required
              />
            </div>
            <div className="flex-1 w-full">
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
            <Button disabled={isSubmitting} type="submit" className="h-12 px-8 bg-accent hover:bg-accent/90 text-accent-foreground font-semibold w-full lg:w-auto">
              <Send className="w-4 h-4 mr-2" />
              {isSubmitting ? "Wait..." : "Get Quote"}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default LeadForm;