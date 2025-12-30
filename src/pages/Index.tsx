import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/sections/HeroSection";
import ClientLogos from "@/components/sections/ClientLogos";
import ServicePillars from "@/components/sections/ServicePillars";
import StatsSection from "@/components/sections/StatsSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import { Helmet } from "react-helmet-async";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>MiSolutions - Precision Market Intelligence for Retail Growth</title>
        <meta 
          name="description" 
          content="Unlock retail growth with data-driven market research, consumer insights, and marketing strategies. We analyze millions of data points to deliver actionable intelligence that drives sales." 
        />
        <meta name="keywords" content="retail market research, consumer insights, retail analytics, market intelligence, sales forecasting, retail marketing" />
        <link rel="canonical" href="https://misolutions.com" />
      </Helmet>
      
      <div className="min-h-screen bg-background">
        <Navbar />
        <main>
          <HeroSection />
          <ClientLogos />
          <ServicePillars />
          <StatsSection />
          <TestimonialsSection />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
