import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { MessageCircle, Tent, Users, Sparkles, MapPin } from "lucide-react";
import heroDesert from "@/assets/hero-desert.jpg"; // Reusing an existing image

const Camping = () => {
    return (
        <div className="min-h-screen flex flex-col bg-background">
            <Header />

            <main className="flex-1">
                {/* Hero Section */}
                <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
                    <div className="absolute inset-0">
                        <img
                            src="https://images.unsplash.com/photo-1478131143081-80f7f84ca84d?w=1600&q=80"
                            alt="Camping under stars"
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-black/60" />
                    </div>
                    <div className="relative z-10 text-center text-white p-4 max-w-4xl mx-auto">
                        <div className="flex items-center justify-center gap-2 mb-4">
                            <Tent className="w-8 h-8 text-secondary" />
                            <span className="text-secondary font-bold tracking-wider uppercase">Hangout</span>
                        </div>
                        <h1 className="text-4xl md:text-6xl font-bold mb-6">UAE Camping Programme</h1>
                        <p className="text-xl md:text-2xl text-white/90">
                            Where strangers become friends under the stars
                        </p>
                    </div>
                </section>

                {/* Main Content */}
                <section className="py-16 md:py-24">
                    <div className="container mx-auto px-4">
                        <div className="max-w-4xl mx-auto">
                            <div className="bg-card border border-border rounded-2xl p-8 md:p-12 shadow-sm space-y-12">

                                {/* Intro */}
                                <div className="text-center space-y-6">
                                    <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                                        Camping with strangers?
                                    </h2>
                                    <p className="text-xl text-muted-foreground leading-relaxed">
                                        If that doesn't sound strange, <span className="font-bold text-primary">HANGOUT</span> is made for you.
                                    </p>
                                </div>

                                {/* Consolidated Text */}
                                <div className="text-center bg-secondary/5 rounded-xl p-8 max-w-3xl mx-auto">
                                    <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                                        Here, strangers get together, talk, and laugh out loud. It's about building genuine connections effortlessly. You can also expect your favourite entertainers, mentalists, and a few surprises along the way. The camping takes place across the UAE. The location, programme, and people may change, but the spirit won't.
                                    </p>
                                </div>

                                {/* WhatsApp CTA */}
                                <div className="bg-green-50 rounded-xl p-8 text-center space-y-6 border border-green-100">
                                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                                        <MessageCircle className="w-8 h-8 text-green-600" />
                                    </div>
                                    <div className="space-y-2">
                                        <h3 className="text-2xl font-bold text-green-900">Join the Community</h3>
                                        <p className="text-green-800 text-lg">
                                            For latest updates and programs, join our WhatsApp community.
                                        </p>
                                    </div>
                                    <Button
                                        size="lg"
                                        className="bg-green-600 hover:bg-green-700 text-white min-w-[200px]"
                                        onClick={() => window.open('https://wa.me/971505505369', '_blank')}
                                    >
                                        Join WhatsApp
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

export default Camping;
