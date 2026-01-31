import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import LeadForm from "@/components/LeadForm";


const Contact = () => {
    const [searchParams] = useSearchParams();
    const serviceType = searchParams.get('service') || '';

    useEffect(() => {
        // Scroll to form on page load
        const formElement = document.getElementById('contact-form');
        if (formElement) {
            setTimeout(() => {
                formElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }, 100);
        }
    }, []);

    return (
        <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-1">
                {/* Hero Banner */}
                <div className="relative h-[50vh] min-h-[400px] w-full bg-primary/10 flex items-center justify-center">
                    <div className="absolute inset-0 bg-black/50 z-10" />
                    <img
                        src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?q=80&w=2694&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt="Contact Us Banner"
                        className="absolute inset-0 w-full h-full object-cover"
                    />
                    <div className="relative z-20 text-center text-white px-4 max-w-4xl mx-auto">
                        <h1 className="text-4xl md:text-6xl font-bold mb-6">Let's Talk Travel</h1>
                        <p className="text-xl md:text-2xl text-white/90">
                            Your journey starts with a conversation.
                        </p>
                    </div>
                </div>

                {/* Introduction Text */}
                <div className="py-12 bg-background">
                    <div className="container mx-auto px-4 text-center max-w-3xl space-y-6">
                        <p className="text-lg text-muted-foreground leading-relaxed">
                            Tell us what's in your mind. No complicated forms, no pressure. Just a simple conversation to understand your journey and plan it the right way.
                        </p>
                        <p className="text-xl font-semibold text-primary">
                            Reach out to us anytime (24/7).
                        </p>
                    </div>
                </div>

                {/* Contact Form Section */}
                <div id="contact-form" className="py-8 pb-16">
                    <div className="container mx-auto px-4">
                        <LeadForm variant="compact" serviceType={serviceType} />
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default Contact;
