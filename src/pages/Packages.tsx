import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PackageCard from "@/components/PackageCard";
import { packages } from "@/data/packages";
import { Button } from "@/components/ui/button";
import BookingModal from "@/components/BookingModal";

const Packages = () => {
    return (
        <div className="min-h-screen flex flex-col bg-background">
            <Header />
            <main className="flex-1">
                {/* Hero Section */}
                <section className="relative h-[40vh] min-h-[400px] flex items-center justify-center overflow-hidden">
                    <div className="absolute inset-0">
                        <img
                            src="https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=1600&q=80"
                            alt="Travel Destinations"
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-black/50" />
                    </div>
                    <div className="relative z-10 text-center text-white p-4">
                        <h1 className="text-4xl md:text-6xl font-bold mb-4">PACKAGES</h1>
                        <p className="text-xl max-w-2xl mx-auto opacity-90">
                            Explore our group departures to the world's most exciting destinations
                        </p>
                    </div>
                </section>

                <div className="py-16 bg-muted/30">
                    <div className="container mx-auto px-4">
                        {/* Filter/Intro Text */}
                        <div className="mb-12 text-center max-w-3xl mx-auto">
                            <h2 className="text-3xl font-bold text-red-600 mb-4">Upcoming Group Departures</h2>
                            <p className="text-muted-foreground text-lg">
                                Join like-minded travelers on our carefully curated group tours.
                                Everything from flights to accommodation is taken care of.
                            </p>
                        </div>

                        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                            {packages.map((pkg) => (
                                <PackageCard
                                    key={pkg.id}
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
                            ))}
                        </div>

                        <div className="mt-16 text-center">
                            <div className="bg-card max-w-3xl mx-auto p-8 rounded-2xl shadow-lg border border-border">
                                <h2 className="text-2xl font-bold mb-4">Can't Find What You're Looking For?</h2>
                                <p className="text-muted-foreground mb-6">
                                    We also offer customized tour packages tailored to your specific preferences and dates.
                                </p>
                                <BookingModal>
                                    <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                                        Request Custom Quote
                                    </Button>
                                </BookingModal>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default Packages;
