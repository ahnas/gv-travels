import { lazy, Suspense } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HashRouter, Routes, Route } from "react-router-dom";
import { CurrencyProvider } from "@/contexts/CurrencyContext";
import ScrollToTop from "./components/ScrollToTop";
import FloatingButtons from "./components/FloatingButtons";

// Lazy load all pages for better code splitting
const Index = lazy(() => import("./pages/Index"));
const DestinationDubai = lazy(() => import("./pages/DestinationDubai"));
const TourDetails = lazy(() => import("./pages/TourDetails"));
const Contact = lazy(() => import("./pages/Contact"));
const About = lazy(() => import("./pages/About"));
const Camping = lazy(() => import("./pages/Camping"));
const Umrah = lazy(() => import("./pages/Umrah"));
const Flights = lazy(() => import("./pages/Flights"));
const VisaServices = lazy(() => import("./pages/VisaServices"));
const Packages = lazy(() => import("./pages/Packages"));
const ThankYou = lazy(() => import("./pages/ThankYou"));
const Azerbaijan = lazy(() => import("./pages/Azerbaijan"));
const Armenia = lazy(() => import("./pages/Armenia"));
const Georgia = lazy(() => import("./pages/Georgia"));
const NotFound = lazy(() => import("./pages/NotFound"));

const queryClient = new QueryClient();

// Loading fallback component
const LoadingFallback = () => (
  <div className="min-h-screen flex items-center justify-center bg-background">
    <div className="text-center">
      <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
      <p className="mt-4 text-muted-foreground">Loading...</p>
    </div>
  </div>
);

const App = () => (
  <QueryClientProvider client={queryClient}>
    <CurrencyProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <HashRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
          <ScrollToTop />
          <FloatingButtons />
          <Suspense fallback={<LoadingFallback />}>
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
          </Suspense>
        </HashRouter>
      </TooltipProvider>
    </CurrencyProvider>
  </QueryClientProvider>
);

export default App;
