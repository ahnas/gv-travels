import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HashRouter, Routes, Route } from "react-router-dom";
import { CurrencyProvider } from "@/contexts/CurrencyContext";
import Index from "./pages/Index";
import DestinationDubai from "./pages/DestinationDubai";
import TourDetails from "./pages/TourDetails";
import ThankYou from "./pages/ThankYou";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Camping from "./pages/Camping";
import Umrah from "./pages/Umrah";
import Flights from "./pages/Flights";
import VisaServices from "./pages/VisaServices";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <CurrencyProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <HashRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/destination/dubai" element={<DestinationDubai />} />
            <Route path="/tour/:id" element={<TourDetails />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
            <Route path="/camping" element={<Camping />} />
            <Route path="/umrah" element={<Umrah />} />
            <Route path="/flights" element={<Flights />} />
            <Route path="/visa-services" element={<VisaServices />} />
            <Route path="/thank-you" element={<ThankYou />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </HashRouter>
      </TooltipProvider>
    </CurrencyProvider>
  </QueryClientProvider>
);

export default App;
