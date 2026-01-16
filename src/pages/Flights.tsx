import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Plane, CalendarCheck, Clock, Wallet } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Flights = () => {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen flex flex-col bg-background">
            <Header />

            <main className="flex-1">
                {/* Hero Section */}
                <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
                    <div className="absolute inset-0">
                        <img
                            src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=1600&q=80"
                            alt="Airplane Wing View"
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-black/40" />
                    </div>
                    <div className="relative z-10 text-center text-white p-4 max-w-4xl mx-auto">
                        <div className="flex items-center justify-center gap-2 mb-4">
                            <Plane className="w-8 h-8 text-secondary" />
                            <span className="text-secondary font-bold tracking-wider uppercase">Global Travel</span>
                        </div>
                        <h1 className="text-4xl md:text-6xl font-bold mb-6">Flights</h1>
                        <p className="text-xl md:text-2xl text-white/90">
                            Favourite airline | Favourite seat | Fantastic fares
                        </p>
                    </div>
                </section>

                {/* Introduction Section */}
                <section className="py-16 md:py-24">
                    <div className="container mx-auto px-4">
                        <div className="max-w-4xl mx-auto space-y-12">
                            <div className="text-center space-y-6">
                                <h3 className="text-xl md:text-2xl font-semibold text-primary">
                                    Searching for better deals? It’s not a big deal anymore!
                                </h3>
                                <div className="space-y-4 text-muted-foreground text-lg leading-relaxed max-w-3xl mx-auto">
                                    <p>
                                        No matter the reason for your trip—holiday, work, or Umrah—you can book your favourite airline, preferred seats at better fares.
                                    </p>
                                    <p>
                                        From easy bookings to convenient timings and a smooth boarding experience, along with hassle-free changes, we handle all the details so you can travel stress-free and focus on your journey.
                                    </p>
                                    <p className="font-bold text-foreground pt-4">
                                        Where do you want to board next?
                                    </p>
                                </div>
                            </div>

                            {/* Features Grid */}
                            <div className="grid md:grid-cols-3 gap-6">
                                <div className="bg-card p-6 rounded-xl border border-border/50 text-center space-y-4 hover:shadow-lg transition-all">
                                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                                        <Wallet className="w-6 h-6 text-primary" />
                                    </div>
                                    <h3 className="text-lg font-bold">Best Fares</h3>
                                    <p className="text-sm text-muted-foreground">
                                        Competitive prices and exclusive deals for all global destinations.
                                    </p>
                                </div>
                                <div className="bg-card p-6 rounded-xl border border-border/50 text-center space-y-4 hover:shadow-lg transition-all">
                                    <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center mx-auto">
                                        <Clock className="w-6 h-6 text-secondary" />
                                    </div>
                                    <h3 className="text-lg font-bold">Convenient Timings</h3>
                                    <p className="text-sm text-muted-foreground">
                                        Flight schedules that work for you, not against you.
                                    </p>
                                </div>
                                <div className="bg-card p-6 rounded-xl border border-border/50 text-center space-y-4 hover:shadow-lg transition-all">
                                    <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mx-auto">
                                        <CalendarCheck className="w-6 h-6 text-accent" />
                                    </div>
                                    <h3 className="text-lg font-bold">Hassle-Free Changes</h3>
                                    <p className="text-sm text-muted-foreground">
                                        Flexible booking options and easy modification support.
                                    </p>
                                </div>
                            </div>

                            {/* CTA Block */}
                            <div className="bg-primary/5 p-8 md:p-12 rounded-2xl border border-primary/10 text-center space-y-6">
                                <h3 className="text-2xl font-bold">Ready for takeoff?</h3>
                                <p className="text-lg text-muted-foreground">
                                    Contact us now to get your customized flight quote.
                                </p>
                                <Button
                                    size="lg"
                                    onClick={() => navigate('/contact')}
                                    className="bg-primary hover:bg-primary/90 text-primary-foreground min-w-[200px]"
                                >
                                    Get Quote
                                </Button>
                            </div>

                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
};

export default Flights;
