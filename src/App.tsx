import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HashRouter, Routes, Route } from "react-router-dom";
import { CurrencyProvider } from "@/contexts/CurrencyContext";
import Index from "./pages/Index";
import DestinationDubai from "./pages/DestinationDubai";
import TourDetails from "./pages/TourDetails";

import Contact from "./pages/Contact";
import About from "./pages/About";
import Camping from "./pages/Camping";
import Umrah from "./pages/Umrah";
import Flights from "./pages/Flights";
import VisaServices from "./pages/VisaServices";
import Packages from "./pages/Packages";
import ThankYou from "./pages/ThankYou";
import Azerbaijan from "./pages/Azerbaijan";
import Armenia from "./pages/Armenia";
import Georgia from "./pages/Georgia";
import NotFound from "./pages/NotFound";
import ScrollToTop from "./components/ScrollToTop";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <CurrencyProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <HashRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
          <ScrollToTop />
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
            <Route path="/packages" element={<Packages />} />
            <Route path="/thank-you" element={<ThankYou />} />
            <Route path="/destination/azerbaijan" element={<Azerbaijan />} />
            <Route path="/destination/armenia" element={<Armenia />} />
            <Route path="/destination/georgia" element={<Georgia />} />

            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </HashRouter>
      </TooltipProvider>
    </CurrencyProvider>
  </QueryClientProvider>
);

export default App;
