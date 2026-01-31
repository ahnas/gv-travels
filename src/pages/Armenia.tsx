import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { MapPin, Users, DollarSign, Calendar, Mountain, Church, Book, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const Armenia = () => {
    const navigate = useNavigate();

    const quickFacts = [
        { icon: MapPin, label: "Capital", value: "Yerevan" },
        { icon: Users, label: "Population", value: "2.9 Million" },
        { icon: DollarSign, label: "Currency", value: "AMD (Dram)" },
        { icon: Calendar, label: "Best Time", value: "May - Oct" },
    ];

    const attractions = [
        { name: "Mount Ararat Views", icon: Mountain },
        { name: "Geghard Monastery", icon: Church },
        { name: "Lake Sevan", icon: MapPin },
        { name: "Republic Square", icon: MapPin },
        { name: "Tatev Monastery", icon: Church },
        { name: "Garni Temple", icon: Church },
        { name: "Khor Virap Monastery", icon: Church },
        { name: "Dilijan National Park", icon: Mountain },
    ];

    const highlights = [
        {
            title: "First Christian Nation",
            description: "Explore the world's oldest churches and monasteries in the first country to adopt Christianity.",
            icon: Church,
        },
        {
            title: "Ancient Heritage",
            description: "Walk through 3,000+ years of history with UNESCO World Heritage Sites.",
            icon: Book,
        },
        {
            title: "Stunning Landscapes",
            description: "From alpine meadows to volcanic peaks, Armenia's nature will take your breath away.",
            icon: Mountain,
        },
    ];

    return (
        <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-1">
                {/* Hero Section */}
                <div className="relative h-[500px] md:h-[600px]">
                    <img
                        src="https://images.unsplash.com/photo-1600758208050-a22f17dc5bb9?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt="Armenia - Khor Virap with Mount Ararat"
                        className="h-full w-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />
                    <div className="absolute inset-0 flex items-center">
                        <div className="container mx-auto px-4">
                            <div className="max-w-3xl space-y-6 animate-in fade-in slide-in-from-left duration-700">
                                <div className="inline-flex items-center gap-2 bg-accent/20 backdrop-blur-sm px-4 py-2 rounded-full border border-accent/30">
                                    <Church className="w-5 h-5 text-accent" />
                                    <span className="text-white font-medium">First Christian Nation</span>
                                </div>
                                <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">
                                    Discover Armenia
                                </h1>
                                <p className="text-xl md:text-2xl text-white/90">
                                    Where ancient monasteries meet majestic mountains and timeless traditions
                                </p>
                                <Button
                                    size="lg"
                                    onClick={() => navigate('/contact')}
                                    className="bg-accent hover:bg-accent/90 text-accent-foreground text-lg px-8 py-6 h-auto shadow-xl"
                                >
                                    Plan Your Armenian Journey
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Quick Facts */}
                <section className="py-12 bg-gradient-to-br from-accent/5 to-primary/5 border-b border-border">
                    <div className="container mx-auto px-4">
                        <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
                            {quickFacts.map((fact, index) => {
                                const Icon = fact.icon;
                                return (
                                    <div key={index} className="flex items-center gap-3 p-4 bg-card rounded-xl shadow-sm hover:shadow-md transition-all">
                                        <div className="flex h-14 w-14 items-center justify-center rounded-lg bg-accent/10">
                                            <Icon className="h-7 w-7 text-accent" />
                                        </div>
                                        <div>
                                            <p className="text-sm text-muted-foreground">{fact.label}</p>
                                            <p className="font-bold text-foreground">{fact.value}</p>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </section>

                {/* About Section */}
                <section className="py-20 bg-background">
                    <div className="container mx-auto px-4">
                        <div className="grid gap-12 lg:grid-cols-2 items-center">
                            <div className="space-y-6">
                                <h2 className="text-4xl md:text-5xl font-bold text-foreground">
                                    Why Visit <span className="text-accent">Armenia?</span>
                                </h2>
                                <div className="space-y-4 text-muted-foreground text-lg leading-relaxed">
                                    <p>
                                        Armenia, one of the world's oldest civilizations, is a land where history comes alive at every turn. As the first nation to adopt Christianity as a state religion in 301 AD, Armenia boasts an incredible collection of ancient churches and monasteries perched dramatically on mountain cliffsides.
                                    </p>
                                    <p>
                                        The iconic Mount Ararat, though across the border, dominates the skyline and serves as Armenia's spiritual symbol. From the pink-stone architecture of Yerevan to the serene waters of Lake Sevan, from ancient Garni Temple to the cave monastery of Geghard, every corner tells a story.
                                    </p>
                                    <p>
                                        Experience warm Armenian hospitality, savor delicious local cuisine including khorovats and lavash, and discover a country where ancient traditions blend seamlessly with modern energy. Armenia welcomes travelers with open hearts and endless discoveries.
                                    </p>
                                </div>
                            </div>
                            <div className="relative">
                                <div className="absolute -inset-4 bg-gradient-to-br from-accent/20 to-primary/20 rounded-2xl transform rotate-3 blur-sm" />
                                <img
                                    src="https://images.unsplash.com/photo-1609137144813-7d9921338f24?w=800&q=80"
                                    alt="Armenian Monastery"
                                    className="relative rounded-2xl shadow-2xl w-full object-cover h-[400px]"
                                />
                            </div>
                        </div>
                    </div>
                </section>

                {/* Highlights */}
                <section className="py-20 bg-muted/30">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-12">
                            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                                Experience Highlights
                            </h2>
                            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                                Discover the treasures that make Armenia extraordinary
                            </p>
                        </div>
                        <div className="grid md:grid-cols-3 gap-8">
                            {highlights.map((highlight, index) => {
                                const Icon = highlight.icon;
                                return (
                                    <div
                                        key={index}
                                        className="bg-card p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all border border-border hover:border-accent/50 group"
                                    >
                                        <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-all">
                                            <Icon className="w-8 h-8 text-accent" />
                                        </div>
                                        <h3 className="text-2xl font-bold text-foreground mb-3">
                                            {highlight.title}
                                        </h3>
                                        <p className="text-muted-foreground text-lg leading-relaxed">
                                            {highlight.description}
                                        </p>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </section>

                {/* Top Attractions */}
                <section className="py-20 bg-background">
                    <div className="container mx-auto px-4">
                        <div className="max-w-4xl mx-auto">
                            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-12 text-center">
                                Must-Visit Attractions
                            </h2>
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                {attractions.map((attraction, index) => {
                                    const Icon = attraction.icon;
                                    return (
                                        <div
                                            key={index}
                                            className="flex flex-col items-center gap-3 rounded-xl border-2 border-border bg-card p-5 hover:border-accent hover:shadow-lg transition-all group"
                                        >
                                            <Icon className="h-8 w-8 text-accent group-hover:scale-110 transition-transform" />
                                            <span className="text-sm font-semibold text-foreground text-center">
                                                {attraction.name}
                                            </span>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="py-20 bg-gradient-to-br from-accent/10 to-primary/10">
                    <div className="container mx-auto px-4 text-center">
                        <div className="max-w-3xl mx-auto space-y-6">
                            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
                                Ready to Explore Armenia?
                            </h2>
                            <p className="text-xl text-muted-foreground">
                                Let us design your perfect Armenian adventure with monastery tours, cultural experiences, and breathtaking landscapes.
                            </p>
                            <Button
                                size="lg"
                                onClick={() => navigate('/contact')}
                                className="bg-accent hover:bg-accent/90 text-accent-foreground text-lg px-10 py-7 h-auto shadow-xl hover:shadow-2xl transition-all"
                            >
                                Get Your Custom Package
                            </Button>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
};

export default Armenia;
