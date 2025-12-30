import Header from "@/components/Header";
import Footer from "@/components/Footer";
import LeadForm from "@/components/LeadForm";
import HeroCarousel from "@/components/HeroCarousel";

const Contact = () => {
    return (
        <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-1">
                {/* Hero Banner */}
                <div className="relative h-[400px] w-full bg-primary/10 flex items-center justify-center">
                    <div className="absolute inset-0 bg-black/50 z-10" />
                    <img
                        src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?q=80&w=2694&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt="Contact Us Banner"
                        className="absolute inset-0 w-full h-full object-cover"
                    />
                    <div className="relative z-20 text-center text-white px-4">
                        <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
                        <p className="text-xl md:text-2xl max-w-2xl mx-auto">
                            We'd love to hear from you. Get in touch with us for any inquiries or assistance.
                        </p>
                    </div>
                </div>

                {/* Contact Form Section */}
                <div className="py-16">
                    <div className="container mx-auto px-4">
                        <LeadForm variant="compact" />
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default Contact;
