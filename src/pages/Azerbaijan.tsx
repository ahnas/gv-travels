import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { MapPin, Users, DollarSign, Calendar, Mountain, Flame, Building2, Camera } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const Azerbaijan = () => {
    const navigate = useNavigate();

    const quickFacts = [
        { icon: MapPin, label: "Capital", value: "Baku" },
        { icon: Users, label: "Population", value: "10.1 Million" },
        { icon: DollarSign, label: "Currency", value: "AZN (Manat)" },
        { icon: Calendar, label: "Best Time", value: "Apr - Jun & Sep - Nov" },
    ];

    const attractions = [
        { name: "Flame Towers", icon: Flame },
        { name: "Old City (Icherisheher)", icon: Building2 },
        { name: "Gobustan National Park", icon: Mountain },
        { name: "Maiden Tower", icon: Building2 },
        { name: "Heydar Aliyev Center", icon: Building2 },
        { name: "Mud Volcanoes", icon: Mountain },
        { name: "Sheki Khan's Palace", icon: Camera },
        { name: "Caspian Sea Boulevard", icon: MapPin },
    ];

    const highlights = [
        {
            title: "Land of Fire",
            description: "Discover natural gas fires that have been burning for centuries, earning Azerbaijan its nickname.",
            icon: Flame,
        },
        {
            title: "Ancient & Modern",
            description: "Experience the perfect blend of medieval architecture and futuristic skyscrapers.",
            icon: Building2,
        },
        {
            title: "Natural Wonders",
            description: "Explore unique landscapes from mud volcanoes to the Caspian Sea coastline.",
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
                        src="https://images.unsplash.com/photo-1674857977971-131936c7b5ea?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt="Azerbaijan - Flame Towers Baku"
                        className="h-full w-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />
                    <div className="absolute inset-0 flex items-center">
                        <div className="container mx-auto px-4">
                            <div className="max-w-3xl space-y-6 animate-in fade-in slide-in-from-left duration-700">
                                <div className="inline-flex items-center gap-2 bg-primary/20 backdrop-blur-sm px-4 py-2 rounded-full border border-primary/30">
                                    <Flame className="w-5 h-5 text-primary" />
                                    <span className="text-white font-medium">Land of Fire</span>
                                </div>
                                <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">
                                    Discover Azerbaijan
                                </h1>
                                <p className="text-xl md:text-2xl text-white/90">
                                    Where ancient history meets modern luxury on the shores of the Caspian Sea
                                </p>
                                <Button
                                    size="lg"
                                    onClick={() => navigate('/contact')}
                                    className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-8 py-6 h-auto shadow-xl"
                                >
                                    Plan Your Azerbaijan Journey
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Quick Facts */}
                <section className="py-12 bg-gradient-to-br from-primary/5 to-secondary/5 border-b border-border">
                    <div className="container mx-auto px-4">
                        <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
                            {quickFacts.map((fact, index) => {
                                const Icon = fact.icon;
                                return (
                                    <div key={index} className="flex items-center gap-3 p-4 bg-card rounded-xl shadow-sm hover:shadow-md transition-all">
                                        <div className="flex h-14 w-14 items-center justify-center rounded-lg bg-primary/10">
                                            <Icon className="h-7 w-7 text-primary" />
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
                                    Why Visit <span className="text-primary">Azerbaijan?</span>
                                </h2>
                                <div className="space-y-4 text-muted-foreground text-lg leading-relaxed">
                                    <p>
                                        Azerbaijan, the "Land of Fire," is a captivating blend of ancient traditions and modern innovation. Located at the crossroads of Eastern Europe and Western Asia, this Caucasus gem offers a unique cultural experience unlike any other.
                                    </p>
                                    <p>
                                        From Baku's futuristic skyline dominated by the iconic Flame Towers to the medieval charm of Sheki's cobblestone streets, Azerbaijan promises unforgettable experiences. Explore ancient fire temples, natural mud volcanoes, and pristine Caspian Sea beaches.
                                    </p>
                                    <p>
                                        With rich hospitality, delicious cuisine featuring plov and kebabs, and visa-free entry for many nationalities, Azerbaijan welcomes you with open arms.
                                    </p>
                                </div>
                            </div>
                            <div className="relative">
                                <div className="absolute -inset-4 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl transform rotate-3 blur-sm" />
                                <img
                                    src="https://images.unsplash.com/photo-1591604466107-ec97de577aff?w=800&q=80"
                                    alt="Baku Old City"
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
                                Discover what makes Azerbaijan a must-visit destination
                            </p>
                        </div>
                        <div className="grid md:grid-cols-3 gap-8">
                            {highlights.map((highlight, index) => {
                                const Icon = highlight.icon;
                                return (
                                    <div
                                        key={index}
                                        className="bg-card p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all border border-border hover:border-primary/50 group"
                                    >
                                        <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-all">
                                            <Icon className="w-8 h-8 text-primary" />
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
                                            className="flex flex-col items-center gap-3 rounded-xl border-2 border-border bg-card p-5 hover:border-primary hover:shadow-lg transition-all group"
                                        >
                                            <Icon className="h-8 w-8 text-primary group-hover:scale-110 transition-transform" />
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
                <section className="py-20 bg-gradient-to-br from-primary/10 to-secondary/10">
                    <div className="container mx-auto px-4 text-center">
                        <div className="max-w-3xl mx-auto space-y-6">
                            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
                                Ready to Explore Azerbaijan?
                            </h2>
                            <p className="text-xl text-muted-foreground">
                                Let us craft your perfect Azerbaijan adventure with customized itineraries, visa assistance, and expert guidance.
                            </p>
                            <Button
                                size="lg"
                                onClick={() => navigate('/contact')}
                                className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-10 py-7 h-auto shadow-xl hover:shadow-2xl transition-all"
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

export default Azerbaijan;
