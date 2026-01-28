import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";


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
                            Journey-Based Travel Agency
                        </p>
                    </div>
                </section>

                {/* Introduction Section */}
                <section className="py-16 md:py-24">
                    <div className="container mx-auto px-4">
                        <div className="grid lg:grid-cols-2 gap-12 items-center">
                            <div className="space-y-6">
                                <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                                    High Five!
                                </h2>
                                <div className="space-y-4 text-muted-foreground text-lg leading-relaxed">
                                    <p>
                                        We’re a travel agency, and we’re here to make every trip you take truly unforgettable.
                                    </p>
                                    <p>
                                        We operate from the <span className="text-red-600 font-semibold">UAE and India</span>, and with our trusted travel partners we make worldwide travel possible at affordable rates. Our dedicated team of travel professionals plans every detail, creating smooth, personalized itineraries just for you.
                                    </p>
                                    <p>
                                        Holidays, flights, visas, hotels or activities— we take care of everything so you can just sit back and enjoy the journey.
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
                            <div className="space-y-8 text-center mb-8">
                                <h2 className="text-3xl md:text-5xl font-bold text-foreground">
                                    SAME SAME, BUT DIFFERENT.
                                </h2>

                                <div className="space-y-6 text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                                    <p>
                                        We are the same like other travel agencies, but different.
                                    </p>
                                    <p className="text-foreground font-medium">
                                        We are journey based, not just the destination.
                                    </p>
                                    <p>
                                        Most people travel, but not everyone travels for the same reason. Some travel for food, some travel for places, some to find themselves.
                                    </p>
                                    <p>
                                        Whatever the reason for travel, we plan your journey to make it unforgettable.
                                    </p>
                                </div>

                                <div className="pt-6">
                                    <h3 className="text-3xl md:text-4xl font-serif italic text-primary">
                                        “Happy Journey”
                                    </h3>
                                    <p className="text-lg text-muted-foreground mt-2">
                                        — our mission is as simple as that.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="py-16">
                    <div className="container mx-auto px-4 text-center">
                        <h2 className="text-2xl md:text-3xl font-bold mb-8">Ready for a journey?</h2>
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
