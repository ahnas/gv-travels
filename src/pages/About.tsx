import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft, MapPin, Globe, Heart, CheckCircle2 } from "lucide-react";
import { useNavigate } from "react-router-dom";
import aboutImage from "@/assets/hero-desert.jpg"; // Reusing an existing image or generic one

const About = () => {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen flex flex-col bg-background">
            <Header />

            <main className="flex-1">
                {/* Hero Section */}
                <section className="relative h-[40vh] min-h-[400px] flex items-center justify-center overflow-hidden">
                    <div className="absolute inset-0">
                        <img
                            src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=1600&q=80"
                            alt="Travel Adventure"
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-black/50" />
                    </div>
                    <div className="relative z-10 text-center text-white p-4">
                        <h1 className="text-4xl md:text-6xl font-bold mb-4">About Us</h1>
                        <p className="text-xl max-w-2xl mx-auto opacity-90">
                            Making every trip truly unforgettable
                        </p>
                    </div>
                </section>

                {/* Introduction Section */}
                <section className="py-16 md:py-24">
                    <div className="container mx-auto px-4">
                        <div className="grid lg:grid-cols-2 gap-12 items-center">
                            <div className="space-y-6">
                                <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                                    Your Global Travel Partner
                                </h2>
                                <div className="space-y-4 text-muted-foreground text-lg leading-relaxed">
                                    <p>
                                        We’re a travel agency, and we’re here to make every trip you take truly unforgettable.
                                    </p>
                                    <p>
                                        We operate from the <span className="text-foreground font-semibold">UAE and India</span>, and with our trusted travel partners we make worldwide travel possible at affordable rates. Our dedicated team of travel professionals plans every detail, creating smooth, personalized itineraries just for you.
                                    </p>
                                    <p>
                                        Whether it’s holidays, flights, or visas, we take care of everything so you can just sit back and enjoy the journey.
                                    </p>
                                </div>
                            </div>
                            <div className="relative">
                                <div className="absolute -inset-4 bg-primary/10 rounded-xl transform rotate-3" />
                                <img
                                    src="https://images.unsplash.com/photo-1527631746610-bca00a040d60?w=800&q=80"
                                    alt="Travel Planning"
                                    className="relative rounded-xl shadow-xl w-full object-cover h-[400px]"
                                />
                            </div>
                        </div>
                    </div>
                </section>

                {/* Philosophy Section */}
                <section className="py-16 bg-muted/30">
                    <div className="container mx-auto px-4">
                        <div className="max-w-4xl mx-auto text-center space-y-12">
                            <div className="space-y-4">
                                <span className="text-primary font-bold tracking-wider text-sm uppercase">Our Philosophy</span>
                                <h2 className="text-3xl md:text-5xl font-bold text-foreground">
                                    SAME SAME, BUT DIFFERENT.
                                </h2>
                                <p className="text-xl text-muted-foreground">
                                    We are the same like other travel agencies, but different.
                                </p>
                            </div>

                            <div className="grid md:grid-cols-3 gap-8 text-left">
                                <div className="bg-background p-6 rounded-xl shadow-sm border border-border/50 hover:shadow-md transition-shadow">
                                    <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center mb-4">
                                        <MapPin className="w-6 h-6 text-secondary" />
                                    </div>
                                    <h3 className="text-lg font-bold mb-2">Journey Based</h3>
                                    <p className="text-muted-foreground">
                                        We focus on the journey itself, not just the destination. Every step matters.
                                    </p>
                                </div>
                                <div className="bg-background p-6 rounded-xl shadow-sm border border-border/50 hover:shadow-md transition-shadow">
                                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                                        <Globe className="w-6 h-6 text-primary" />
                                    </div>
                                    <h3 className="text-lg font-bold mb-2">Unique Purposes</h3>
                                    <p className="text-muted-foreground">
                                        Some travel for food, some for places, some to find themselves. We cater to all.
                                    </p>
                                </div>
                                <div className="bg-background p-6 rounded-xl shadow-sm border border-border/50 hover:shadow-md transition-shadow">
                                    <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mb-4">
                                        <Heart className="w-6 h-6 text-accent" />
                                    </div>
                                    <h3 className="text-lg font-bold mb-2">Unforgettable</h3>
                                    <p className="text-muted-foreground">
                                        Whatever the reason, our mission is simple: "Happy Journey".
                                    </p>
                                </div>
                            </div>

                            <div className="bg-primary/5 p-8 rounded-2xl border border-primary/10">
                                <p className="text-lg md:text-xl font-medium text-foreground italic">
                                    “Most people travel, but not everyone travels for the same reason. Whatever the reason for travel, we plan your journey to make it unforgettable.”
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="py-16">
                    <div className="container mx-auto px-4 text-center">
                        <h2 className="text-2xl md:text-3xl font-bold mb-8">Ready to start your journey?</h2>
                        <Button
                            size="lg"
                            onClick={() => navigate('/contact')}
                            className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-8 py-6 h-auto"
                        >
                            Contact Us Today
                        </Button>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
};

export default About;
