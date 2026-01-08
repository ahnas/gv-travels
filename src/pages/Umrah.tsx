import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Moon, Heart, Shield, Plane, Building, HandHeart } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Umrah = () => {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen flex flex-col bg-background">
            <Header />

            <main className="flex-1">
                {/* Hero Section */}
                <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
                    <div className="absolute inset-0">
                        <img
                            src="https://images.unsplash.com/photo-1591604466107-ec97de577aff?w=1600&q=80"
                            alt="Makkah Kabba"
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-black/60" />
                    </div>
                    <div className="relative z-10 text-center text-white p-4 max-w-4xl mx-auto">
                        <div className="flex items-center justify-center gap-2 mb-4">
                            <Moon className="w-8 h-8 text-primary" />
                            <span className="text-primary font-bold tracking-wider uppercase">Spiritual Journey</span>
                        </div>
                        <h1 className="text-4xl md:text-6xl font-bold mb-6">Umrah Packages</h1>
                        <p className="text-xl md:text-2xl text-white/90">
                            Peaceful. Stress-free. Meaningful.
                        </p>
                    </div>
                </section>

                {/* Introduction Section */}
                <section className="py-16 md:py-24">
                    <div className="container mx-auto px-4">
                        <div className="max-w-4xl mx-auto space-y-12">
                            <div className="text-center space-y-6">
                                <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                                    Focus on your prayers. <br />
                                    <span className="text-primary">We'll handle the rest.</span>
                                </h2>
                                <div className="space-y-4 text-muted-foreground text-lg leading-relaxed max-w-3xl mx-auto">
                                    <p>
                                        Our Umrah packages are planned to make your journey peaceful and stress-free. From visas and flights to hotels and local transport, we handle everything for you.
                                    </p>
                                    <p>
                                        All you need to do is focus on your prayers while we take care of the rest, ensuring a smooth and comfortable Umrah experience from start to finish.
                                    </p>
                                </div>
                            </div>

                            {/* Services Grid */}
                            <div className="grid md:grid-cols-3 gap-6">
                                <div className="bg-card p-6 rounded-xl border border-border/50 text-center space-y-4 hover:shadow-lg transition-all">
                                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                                        <Plane className="w-6 h-6 text-primary" />
                                    </div>
                                    <h3 className="text-lg font-bold">Flights & Visa</h3>
                                    <p className="text-sm text-muted-foreground">
                                        Complete travel documentation and flight arrangements handled by experts.
                                    </p>
                                </div>
                                <div className="bg-card p-6 rounded-xl border border-border/50 text-center space-y-4 hover:shadow-lg transition-all">
                                    <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center mx-auto">
                                        <Building className="w-6 h-6 text-secondary" />
                                    </div>
                                    <h3 className="text-lg font-bold">Hotels & Transport</h3>
                                    <p className="text-sm text-muted-foreground">
                                        Comfortable accommodation near Haram and reliable local transportation.
                                    </p>
                                </div>
                                <div className="bg-card p-6 rounded-xl border border-border/50 text-center space-y-4 hover:shadow-lg transition-all">
                                    <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mx-auto">
                                        <HandHeart className="w-6 h-6 text-accent" />
                                    </div>
                                    <h3 className="text-lg font-bold">Full Support</h3>
                                    <p className="text-sm text-muted-foreground">
                                        Guidance at every step, ensuring a well-organized spiritual journey.
                                    </p>
                                </div>
                            </div>

                            {/* Second Content Block */}
                            <div className="bg-muted/30 p-8 md:p-12 rounded-2xl space-y-6 text-center">
                                <div className="w-16 h-16 bg-background rounded-full flex items-center justify-center mx-auto shadow-sm">
                                    <Shield className="w-8 h-8 text-secondary" />
                                </div>
                                <h3 className="text-2xl font-bold">Expert Guidance for Every Pilgrim</h3>
                                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                                    We also guide you at every step, whether it’s your first Umrah or you’ve been before. With clear information, dependable support, and carefully chosen arrangements, we’re here to make sure your Umrah journey feels calm, well-organised, and truly meaningful.
                                </p>

                                <div className="pt-6">
                                    <Button
                                        size="lg"
                                        onClick={() => navigate('/contact')}
                                        className="bg-primary hover:bg-primary/90 text-primary-foreground min-w-[200px]"
                                    >
                                        Enquire Now
                                    </Button>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
};

export default Umrah;
