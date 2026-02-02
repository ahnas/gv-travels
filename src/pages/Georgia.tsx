import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { MapPin, Users, DollarSign, Calendar, Mountain, Wine, Church, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { packages } from "@/data/packages";
import PackageCard from "@/components/PackageCard";

const Georgia = () => {
    const navigate = useNavigate();

    const quickFacts = [
        { icon: MapPin, label: "Capital", value: "Tbilisi" },
        { icon: Users, label: "Population", value: "3.7 Million" },
        { icon: DollarSign, label: "Currency", value: "GEL (Lari)" },
        { icon: Calendar, label: "Best Time", value: "May - Oct" },
    ];

    const attractions = [
        { name: "Old Tbilisi", icon: Church },
        { name: "Kazbegi Mountains", icon: Mountain },
        { name: "Batumi Boulevard", icon: MapPin },
        { name: "Uplistsikhe Cave Town", icon: Mountain },
        { name: "Narikala Fortress", icon: Church },
        { name: "Kakheti Wine Region", icon: Wine },
        { name: "Gergeti Trinity Church", icon: Church },
        { name: "Vardzia Cave Monastery", icon: Mountain },
    ];

    const highlights = [
        {
            title: "Ancient Wine Culture",
            description: "Discover 8,000 years of winemaking tradition in the birthplace of wine.",
            icon: Wine,
        },
        {
            title: "Majestic Mountains",
            description: "Trek through the stunning Caucasus Mountains with breathtaking vistas.",
            icon: Mountain,
        },
        {
            title: "Warm Hospitality",
            description: "Experience legendary Georgian hospitality and delicious traditional cuisine.",
            icon: Heart,
        },
    ];

    return (
        <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-1">
                {/* Hero Section */}
                <div className="relative h-[500px] md:h-[600px]">
                    <img
                        src="https://images.unsplash.com/photo-1561731172-9d906d7b13bf?q=80&w=1674&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt="Georgia - Gergeti Trinity Church"
                        className="h-full w-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />
                    <div className="absolute inset-0 flex items-center">
                        <div className="container mx-auto px-4">
                            <div className="max-w-3xl space-y-6 animate-in fade-in slide-in-from-left duration-700">
                                <div className="inline-flex items-center gap-2 bg-secondary/20 backdrop-blur-sm px-4 py-2 rounded-full border border-secondary/30">
                                    <Wine className="w-5 h-5 text-secondary" />
                                    <span className="text-white font-medium">Cradle of Wine</span>
                                </div>
                                <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">
                                    Discover Georgia
                                </h1>
                                <p className="text-xl md:text-2xl text-white/90">
                                    Where ancient monasteries meet snow-capped mountains and legendary hospitality
                                </p>
                                <Button
                                    size="lg"
                                    onClick={() => navigate('/contact')}
                                    className="bg-secondary hover:bg-secondary/90 text-secondary-foreground text-lg px-8 py-6 h-auto shadow-xl"
                                >
                                    Plan Your Georgian Adventure
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Quick Facts */}
                <section className="py-12 bg-gradient-to-br from-secondary/5 to-primary/5 border-b border-border">
                    <div className="container mx-auto px-4">
                        <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
                            {quickFacts.map((fact, index) => {
                                const Icon = fact.icon;
                                return (
                                    <div key={index} className="flex items-center gap-3 p-4 bg-card rounded-xl shadow-sm hover:shadow-md transition-all">
                                        <div className="flex h-14 w-14 items-center justify-center rounded-lg bg-secondary/10">
                                            <Icon className="h-7 w-7 text-secondary" />
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
                            <div className="relative order-2 lg:order-1">
                                <div className="absolute -inset-4 bg-gradient-to-br from-secondary/20 to-primary/20 rounded-2xl transform -rotate-3 blur-sm" />
                                <img
                                    src="https://images.unsplash.com/photo-1733087710900-7d65e44d6550?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                    alt="Tbilisi Old Town"
                                    className="relative rounded-2xl shadow-2xl w-full object-cover h-[400px]"
                                />
                            </div>
                            <div className="space-y-6 order-1 lg:order-2">
                                <h2 className="text-4xl md:text-5xl font-bold text-foreground">
                                    Why Visit <span className="text-secondary">Georgia?</span>
                                </h2>
                                <div className="space-y-4 text-muted-foreground text-lg leading-relaxed">
                                    <p>
                                        Georgia is a hidden gem nestled in the Caucasus Mountains, offering an incredible blend of ancient history, stunning landscapes, and world-renowned cuisine. This country is where Europe meets Asia in the most beautiful way.
                                    </p>
                                    <p>
                                        As the birthplace of wine with 8,000 years of winemaking tradition, Georgia invites you to explore lush vineyards in Kakheti, sample unique amber wines, and experience traditional "supra" feasts with endless toasts and hospitality.
                                    </p>
                                    <p>
                                        From the charming cobblestone streets of Old Tbilisi to the dramatic peaks of Kazbegi, from Black Sea beaches in Batumi to ancient cave cities, Georgia captivates every traveler with its diverse beauty and warm-hearted people.
                                    </p>
                                </div>
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
                                What makes Georgia an unforgettable destination
                            </p>
                        </div>
                        <div className="grid md:grid-cols-3 gap-8">
                            {highlights.map((highlight, index) => {
                                const Icon = highlight.icon;
                                return (
                                    <div
                                        key={index}
                                        className="bg-card p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all border border-border hover:border-secondary/50 group"
                                    >
                                        <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-secondary/20 transition-all">
                                            <Icon className="w-8 h-8 text-secondary" />
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
                                            className="flex flex-col items-center gap-3 rounded-xl border-2 border-border bg-card p-5 hover:border-secondary hover:shadow-lg transition-all group"
                                        >
                                            <Icon className="h-8 w-8 text-secondary group-hover:scale-110 transition-transform" />
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

                {/* Packages Section */}
                <section className="py-20 bg-muted/30">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-12">
                            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                                Available Packages
                            </h2>
                            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                                Choose from our expertly curated Georgia travel packages
                            </p>
                        </div>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
                            {packages
                                .filter(pkg => pkg.country === "Georgia")
                                .map((pkg) => (
                                    <div key={pkg.id} className="flex justify-center">
                                        <PackageCard
                                            title={pkg.title}
                                            image={pkg.image}
                                            location={pkg.country}
                                            days={pkg.days}
                                            nights={pkg.nights}
                                            price={pkg.price}
                                            rating={pkg.rating}
                                            reviews={pkg.reviews}
                                            groupSize={pkg.group}
                                            departureDate={pkg.departureDate}
                                            tag={pkg.tag}
                                            inclusions={pkg.inclusions}
                                        />
                                    </div>
                                ))}
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="py-20 bg-gradient-to-br from-secondary/10 to-primary/10">
                    <div className="container mx-auto px-4 text-center">
                        <div className="max-w-3xl mx-auto space-y-6">
                            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
                                Ready to Explore Georgia?
                            </h2>
                            <p className="text-xl text-muted-foreground">
                                Let us create your perfect Georgian experience with wine tours, mountain treks, and cultural immersions.
                            </p>
                            <Button
                                size="lg"
                                onClick={() => navigate('/contact')}
                                className="bg-secondary hover:bg-secondary/90 text-secondary-foreground text-lg px-10 py-7 h-auto shadow-xl hover:shadow-2xl transition-all"
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

export default Georgia;
