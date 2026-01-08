import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { FileCheck, Globe, ShieldCheck } from "lucide-react";
import { useNavigate } from "react-router-dom";

const VisaServices = () => {
    const navigate = useNavigate();

    // Combined list of countries for the grid
    const allVisaCountries = [
        // From VisaPromoSection
        { name: "Slovenia", code: "si", region: "Europe", type: "Sticker Visa" },
        { name: "Netherlands", code: "nl", region: "Europe", type: "Sticker Visa" },
        { name: "Sweden", code: "se", region: "Europe", type: "Sticker Visa" },
        { name: "Norway", code: "no", region: "Europe", type: "Sticker Visa" },
        { name: "Switzerland", code: "ch", region: "Europe", type: "Sticker Visa" },
        { name: "Germany", code: "de", region: "Europe", type: "Sticker Visa" },
        // From CountryCarousel
        { name: "UAE", code: "ae", region: "Middle East", type: "E-Visa" },
        { name: "Azerbaijan", code: "az", region: "Asia", type: "E-Visa" },
        { name: "Georgia", code: "ge", region: "Europe/Asia", type: "E-Visa" },
        { name: "Armenia", code: "am", region: "Asia", type: "E-Visa" },
        { name: "Thailand", code: "th", region: "Asia", type: "Sticker/E-Visa" },
        { name: "Oman", code: "om", region: "Middle East", type: "E-Visa" },
        { name: "Turkey", code: "tr", region: "Europe/Asia", type: "E-Visa" },
        { name: "India", code: "in", region: "Asia", type: "E-Visa" },
        { name: "Singapore", code: "sg", region: "Asia", type: "E-Visa" },
        { name: "Maldives", code: "mv", region: "Asia", type: "On Arrival" },
        { name: "Malaysia", code: "my", region: "Asia", type: "E-Visa" },
        { name: "Indonesia", code: "id", region: "Asia", type: "E-Visa" },
        // Additional popular ones
        { name: "United Kingdom", code: "gb", region: "Europe", type: "Sticker Visa" },
        { name: "USA", code: "us", region: "North America", type: "Sticker Visa" },
        { name: "Saudi Arabia", code: "sa", region: "Middle East", type: "E-Visa" },
        { name: "France", code: "fr", region: "Europe", type: "Sticker Visa" },
        { name: "Italy", code: "it", region: "Europe", type: "Sticker Visa" },
        { name: "Spain", code: "es", region: "Europe", type: "Sticker Visa" },
    ];

    return (
        <div className="min-h-screen flex flex-col bg-background">
            <Header />

            <main className="flex-1">
                {/* Hero Section */}
                <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
                    <div className="absolute inset-0">
                        <img
                            src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1600&q=80"
                            alt="Passport and Visa"
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-black/60" />
                    </div>
                    <div className="relative z-10 text-center text-white p-4 max-w-4xl mx-auto">
                        <div className="flex items-center justify-center gap-2 mb-4">
                            <FileCheck className="w-8 h-8 text-secondary" />
                            <span className="text-secondary font-bold tracking-wider uppercase">Global Access</span>
                        </div>
                        <h1 className="text-4xl md:text-6xl font-bold mb-6">Visa Services</h1>
                        <p className="text-xl md:text-2xl text-white/90">
                            Your gateway to the world, simplified.
                        </p>
                    </div>
                </section>

                {/* Introduction Paragraph */}
                <section className="py-16 bg-background">
                    <div className="container mx-auto px-4">
                        <div className="max-w-4xl mx-auto text-center space-y-8">
                            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                                Seamless Visa Processing for Every Destination
                            </h2>
                            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                                <p>
                                    Navigating visa requirements can be complex, but it doesn't have to be complications. At <span className="text-primary font-semibold">GV Travel & Tourism</span>, we specialize in simplifying the visa application process for travelers worldwide.
                                </p>
                                <p>
                                    Whether you're planning a holiday, a business trip, or visiting family, our expert team ensures your documentation is accurate and submitted on time. We stay up-to-date with the latest immigration regulations to provide you with reliable advice and support, minimizing the risk of delays or rejections.
                                </p>
                                <p>
                                    From E-Visas to Sticker Visas, we handle the details so you can focus on planning your trip. Let us be your trusted partner in unlocking global travel opportunities.
                                </p>
                            </div>

                            <div className="grid md:grid-cols-3 gap-6 pt-8">
                                <div className="flex flex-col items-center gap-3 p-4 rounded-lg bg-secondary/5 border border-secondary/10">
                                    <ShieldCheck className="w-8 h-8 text-secondary" />
                                    <h3 className="font-semibold text-foreground">Trusted Experts</h3>
                                    <p className="text-sm text-muted-foreground">High success rate with guided assistance.</p>
                                </div>
                                <div className="flex flex-col items-center gap-3 p-4 rounded-lg bg-primary/5 border border-primary/10">
                                    <Globe className="w-8 h-8 text-primary" />
                                    <h3 className="font-semibold text-foreground">Worldwide Coverage</h3>
                                    <p className="text-sm text-muted-foreground">Support for major global destinations.</p>
                                </div>
                                <div className="flex flex-col items-center gap-3 p-4 rounded-lg bg-accent/5 border border-accent/10">
                                    <FileCheck className="w-8 h-8 text-accent" />
                                    <h3 className="font-semibold text-foreground">Document Check</h3>
                                    <p className="text-sm text-muted-foreground">Thorough review to prevent errors.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* All Countries Grid */}
                <section className="py-16 bg-muted/30">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl font-bold text-foreground mb-4">Destinations We Serve</h2>
                            <p className="text-muted-foreground max-w-2xl mx-auto">
                                We assist with visa applications for these countries and many more.
                            </p>
                        </div>

                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
                            {allVisaCountries.sort((a, b) => a.name.localeCompare(b.name)).map((country, index) => (
                                <div
                                    key={index}
                                    className="bg-card rounded-xl p-4 shadow-sm border border-border/50 hover:shadow-md transition-all flex flex-col items-center text-center gap-3 group"
                                >
                                    <img
                                        src={`https://flagcdn.com/w80/${country.code}.png`}
                                        alt={`${country.name} flag`}
                                        className="w-16 h-10 object-cover rounded shadow-sm group-hover:scale-105 transition-transform"
                                    />
                                    <div>
                                        <h3 className="font-semibold text-foreground text-sm md:text-base">{country.name}</h3>
                                        <span className="text-xs text-muted-foreground block mt-1 bg-muted px-2 py-0.5 rounded-full w-fit mx-auto">
                                            {country.type}
                                        </span>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="mt-12 text-center bg-primary/5 p-8 rounded-2xl max-w-3xl mx-auto">
                            <p className="text-lg font-medium mb-6">
                                Don't see your destination? We likely serve it too!
                            </p>
                            <Button
                                size="lg"
                                onClick={() => navigate('/contact')}
                                className="bg-primary hover:bg-primary/90 text-primary-foreground min-w-[200px]"
                            >
                                Contact Us to Enquire
                            </Button>
                        </div>
                    </div>
                </section>

            </main>

            <Footer />
        </div>
    );
};

export default VisaServices;
