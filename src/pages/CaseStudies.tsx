import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { ArrowRight, TrendingUp, Users, DollarSign, Target, ArrowUpRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar } from "recharts";

const caseStudies = [
  {
    id: "fashion-house",
    title: "Fashion House Ana",
    industry: "Fashion Retail",
    challenge: "Declining foot traffic and online competition.",
    solution: "Consumer research and omnichannel marketing strategy.",
    results: [
      { metric: "Sales Increase", value: "12%", icon: TrendingUp },
      { metric: "Customer Retention", value: "18%", icon: Users },
      { metric: "Marketing ROI", value: "1.8x", icon: DollarSign },
    ],
    quote: "MiSolutions gave us concrete steps for improvement, not just data.",
    author: "Ana Petrovic, Owner",
    chartData: [
      { month: "Jan", before: 100, after: 100 },
      { month: "Feb", before: 98, after: 103 },
      { month: "Mar", before: 96, after: 106 },
      { month: "Apr", before: 94, after: 108 },
      { month: "May", before: 93, after: 110 },
      { month: "Jun", before: 92, after: 112 },
    ],
    color: "from-primary to-secondary",
  },
  {
    id: "tech-shop",
    title: "Tech Shop",
    industry: "Consumer Electronics",
    challenge: "Excess inventory and poor demand forecasting.",
    solution: "Sales forecasting system and inventory optimization.",
    results: [
      { metric: "Inventory Costs", value: "-15%", icon: DollarSign },
      { metric: "Stockout Reduction", value: "25%", icon: Target },
      { metric: "Margin Improvement", value: "5%", icon: TrendingUp },
    ],
    quote: "Their forecasting accuracy is impressive.",
    author: "Emily Watson, Manager",
    chartData: [
      { month: "Jan", before: 85, after: 85 },
      { month: "Feb", before: 84, after: 87 },
      { month: "Mar", before: 82, after: 89 },
      { month: "Apr", before: 81, after: 91 },
      { month: "May", before: 80, after: 93 },
      { month: "Jun", before: 79, after: 95 },
    ],
    color: "from-accent to-orange-dark",
  },
  {
    id: "homestyle",
    title: "HomeStyle Co.",
    industry: "Home Goods",
    challenge: "High acquisition cost and low repeat purchase rate.",
    solution: "Loyalty program based on behavioral segmentation.",
    results: [
      { metric: "CAC Reduction", value: "-20%", icon: DollarSign },
      { metric: "Repeat Purchases", value: "+25%", icon: Users },
      { metric: "LTV Increase", value: "1.4x", icon: TrendingUp },
    ],
    quote: "Understanding our customers changed everything.",
    author: "Mark Johnson, Director",
    chartData: [
      { month: "Jan", before: 30, after: 30 },
      { month: "Feb", before: 31, after: 34 },
      { month: "Mar", before: 32, after: 37 },
      { month: "Apr", before: 33, after: 40 },
      { month: "May", before: 34, after: 42 },
      { month: "Jun", before: 35, after: 45 },
    ],
    color: "from-accent to-primary",
  },
];

const CaseStudyCard = ({ study, index }: { study: typeof caseStudies[0]; index: number }) => {
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
      className={`transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      <div className="bg-card rounded-3xl shadow-xl overflow-hidden border border-border">
        {/* Header */}
        <div className={`bg-gradient-to-r ${study.color} p-8 text-primary-foreground`}>
          <span className="inline-block bg-primary-foreground/20 backdrop-blur-sm rounded-full px-4 py-1 text-sm font-medium mb-4">
            {study.industry}
          </span>
          <h3 className="text-2xl md:text-3xl font-display font-bold mb-2">{study.title}</h3>
        </div>

        <div className="p-8">
          {/* Challenge & Solution */}
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div>
              <h4 className="font-semibold text-foreground mb-2">The Challenge</h4>
              <p className="text-muted-foreground text-sm">{study.challenge}</p>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-2">Our Solution</h4>
              <p className="text-muted-foreground text-sm">{study.solution}</p>
            </div>
          </div>

          {/* Results */}
          <div className="grid grid-cols-3 gap-4 mb-8">
            {study.results.map((result) => (
              <div key={result.metric} className="text-center p-4 bg-muted rounded-xl">
                <result.icon className="w-6 h-6 text-accent mx-auto mb-2" />
                <div className="text-2xl font-display font-bold text-foreground">{result.value}</div>
                <div className="text-xs text-muted-foreground">{result.metric}</div>
              </div>
            ))}
          </div>

          {/* Chart */}
          <div className="bg-muted/50 rounded-xl p-4 mb-8">
            <div className="flex items-center justify-between mb-4">
              <span className="text-sm font-medium text-foreground">Before vs After</span>
              <div className="flex gap-4 text-xs">
                <span className="flex items-center gap-1">
                  <div className="w-3 h-3 rounded-full bg-muted-foreground/30" />
                  Before
                </span>
                <span className="flex items-center gap-1">
                  <div className="w-3 h-3 rounded-full bg-accent" />
                  After
                </span>
              </div>
            </div>
            <ResponsiveContainer width="100%" height={150}>
              <AreaChart data={study.chartData}>
                <defs>
                  <linearGradient id={`gradient-${study.id}`} x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="hsl(var(--accent))" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="hsl(var(--accent))" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                <XAxis dataKey="month" tick={{ fontSize: 10 }} stroke="hsl(var(--muted-foreground))" />
                <YAxis tick={{ fontSize: 10 }} stroke="hsl(var(--muted-foreground))" />
                <Area 
                  type="monotone" 
                  dataKey="before" 
                  stroke="hsl(var(--muted-foreground))" 
                  strokeWidth={2}
                  fill="transparent"
                  strokeDasharray="5 5"
                />
                <Area 
                  type="monotone" 
                  dataKey="after" 
                  stroke="hsl(var(--accent))" 
                  strokeWidth={2}
                  fill={`url(#gradient-${study.id})`}
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>

          {/* Quote */}
          <blockquote className="border-l-4 border-accent pl-4 italic text-muted-foreground mb-4">
            "{study.quote}"
          </blockquote>
          <p className="text-sm font-medium text-foreground">{study.author}</p>
        </div>
      </div>
    </div>
  );
};

const CaseStudies = () => {
  return (
    <>
      <Helmet>
        <title>Case Studies - MiSolutions | Retail Success Stories</title>
        <meta 
          name="description" 
          content="Discover how MiSolutions has helped retailers achieve remarkable growth. Read our success stories with real metrics and measurable results." 
        />
        <meta name="keywords" content="retail case studies, market research success, retail growth stories, consumer insights results" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Navbar />
        
        {/* Hero */}
        <section className="pt-32 pb-20 bg-hero relative overflow-hidden">
          <div className="absolute inset-0 bg-hero-pattern opacity-20" />
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <span className="inline-block text-accent font-semibold text-sm uppercase tracking-wider mb-4">
                Case Studies
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground mb-6">
                Real Results for Real Retailers
              </h1>
              <p className="text-xl text-muted-foreground">
                See how we've helped retailers across industries achieve 
                measurable growth through data-driven strategies.
              </p>
            </div>
          </div>
        </section>

        {/* Case Studies Grid */}
        <section className="py-20 md:py-28">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-8">
              {caseStudies.map((study, index) => (
                <CaseStudyCard key={study.id} study={study} index={index} />
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-muted/50">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-6">
                Ready to Write Your Success Story?
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Join the ranks of retailers who've transformed their business 
                with MiSolutions.
              </p>
              <Button variant="accent" size="xl" asChild>
                <Link to="/contact">
                  Start Your Journey
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

export default CaseStudies;
