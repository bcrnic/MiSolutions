import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { 
  BarChart3, 
  Users, 
  Target, 
  TrendingUp, 
  Megaphone, 
  ArrowRight,
  CheckCircle2,
  LineChart,
  ShoppingCart,
  PieChart
} from "lucide-react";
import { useEffect, useRef, useState } from "react";

const services = [
  {
    id: "market-analysis",
    icon: BarChart3,
    title: "Retail Market Analysis",
    subtitle: "Market Intelligence",
    description: "Comprehensive analysis of your retail market landscape, identifying growth opportunities and strategic positioning.",
    features: [
      "Market size assessment",
      "Segment analysis",
      "Regional insights",
      "Trend monitoring",
    ],
    stats: { value: "25+", label: "Markets Analyzed" },
    color: "from-primary to-secondary",
  },
  {
    id: "competitor",
    icon: Target,
    title: "Competitor Benchmarking",
    subtitle: "Competitive Intelligence",
    description: "Detailed analysis of competitor strategies, pricing, and market positioning.",
    features: [
      "Pricing analysis",
      "Assortment benchmarking",
      "Digital presence review",
      "SWOT analysis",
    ],
    stats: { value: "80+", label: "Competitors Tracked" },
    color: "from-accent to-muted",
  },
  {
    id: "consumer",
    icon: Users,
    title: "Consumer Behavior Studies",
    subtitle: "Customer Understanding",
    description: "Deep understanding of your customers through behavioral analysis and preference mapping.",
    features: [
      "Customer journey mapping",
      "Purchase behavior analysis",
      "Brand perception research",
      "Demographic profiling",
    ],
    stats: { value: "5k+", label: "Consumers Studied" },
    color: "from-secondary to-primary",
  },
  {
    id: "forecasting",
    icon: TrendingUp,
    title: "Sales Forecasting",
    subtitle: "Predictive Analytics",
    description: "Accurate sales predictions to help optimize inventory and marketing investments.",
    features: [
      "Demand forecasting",
      "Seasonal analysis",
      "Inventory optimization",
      "Revenue projections",
    ],
    stats: { value: "87%", label: "Forecast Accuracy" },
    color: "from-primary to-accent",
  },
  {
    id: "digital",
    icon: Megaphone,
    title: "Digital Marketing",
    subtitle: "Online Growth",
    description: "Data-driven digital marketing strategies that maximize ROI.",
    features: [
      "Multi-channel strategy",
      "Performance marketing",
      "SEO optimization",
      "Social media management",
    ],
    stats: { value: "2.1x", label: "Average ROAS" },
    color: "from-accent to-primary",
  },
];

const ServiceCard = ({ service, index }: { service: typeof services[0]; index: number }) => {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={cardRef}
      id={service.id}
      className={`scroll-mt-24 transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? "lg:flex-row-reverse" : ""}`}>
        {/* Content */}
        <div className={index % 2 === 1 ? "lg:order-2" : ""}>
          <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r ${service.color} mb-6`}>
            <service.icon className="w-4 h-4 text-primary-foreground" />
            <span className="text-sm font-semibold text-primary-foreground">{service.subtitle}</span>
          </div>

          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
            {service.title}
          </h2>

          <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
            {service.description}
          </p>

          <div className="grid sm:grid-cols-2 gap-3 mb-8">
            {service.features.map((feature) => (
              <div key={feature} className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-accent shrink-0" />
                <span className="text-sm text-foreground">{feature}</span>
              </div>
            ))}
          </div>

          <Button variant="accent" size="lg" asChild>
            <Link to="/contact">
              Get Started
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </Button>
        </div>

        {/* Visual */}
        <div className={index % 2 === 1 ? "lg:order-1" : ""}>
          <div className="relative">
            <div className={`absolute inset-0 bg-gradient-to-br ${service.color} rounded-3xl blur-2xl opacity-20`} />
            <div className="relative bg-card rounded-3xl shadow-xl p-8 border border-border">
              {/* Stats Card */}
              <div className="text-center mb-8">
                <div className="text-5xl font-display font-bold text-primary mb-2">
                  {service.stats.value}
                </div>
                <div className="text-muted-foreground">{service.stats.label}</div>
              </div>

              {/* Decorative Elements */}
              <div className="grid grid-cols-3 gap-4">
                {[LineChart, ShoppingCart, PieChart].map((Icon, i) => (
                  <div key={i} className="bg-muted rounded-xl p-4 flex items-center justify-center">
                    <Icon className="w-8 h-8 text-muted-foreground" />
                  </div>
                ))}
              </div>

              {/* Chart Placeholder */}
              <div className="mt-6 h-32 bg-muted rounded-xl flex items-end justify-around p-4">
                {[40, 65, 45, 80, 55, 90, 70].map((height, i) => (
                  <div
                    key={i}
                    className={`w-6 rounded-t bg-gradient-to-t ${service.color}`}
                    style={{ height: `${height}%` }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Services = () => {
  return (
    <>
      <Helmet>
        <title>Our Services - MiSolutions | Market Research & Retail Analytics</title>
        <meta 
          name="description" 
          content="Comprehensive retail market research services including market analysis, competitor benchmarking, consumer behavior studies, sales forecasting, and digital marketing." 
        />
        <meta name="keywords" content="retail market analysis, competitor benchmarking, consumer behavior, sales forecasting, retail digital marketing" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Navbar />
        
        {/* Hero */}
        <section className="pt-32 pb-20 bg-hero relative overflow-hidden">
          <div className="absolute inset-0 bg-hero-pattern opacity-20" />
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <span className="inline-block text-accent font-semibold text-sm uppercase tracking-wider mb-4">
                Our Services
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground mb-6">
                Data-Driven Solutions for Retail Excellence
              </h1>
              <p className="text-xl text-muted-foreground">
                From market analysis to marketing strategy, we provide comprehensive 
                solutions that drive measurable retail growth.
              </p>
            </div>
          </div>
        </section>

        {/* Services List */}
        <section className="py-20 md:py-28">
          <div className="container mx-auto px-4">
            <div className="space-y-24 md:space-y-32">
              {services.map((service, index) => (
                <ServiceCard key={service.id} service={service} index={index} />
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-muted/50">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-6">
                Not Sure Where to Start?
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Get a free consultation with our retail experts. We'll analyze your 
                current situation and recommend the best approach for your goals.
              </p>
              <Button variant="accent" size="xl" asChild>
                <Link to="/contact">
                  Schedule Free Consultation
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default Services;
