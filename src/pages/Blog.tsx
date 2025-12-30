import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { ArrowRight, Clock, User, Tag } from "lucide-react";
import { useEffect, useRef, useState } from "react";

export const blogPosts = [
  {
    slug: "retail-trends-2024",
    title: "5 Retail Trends That Will Define 2024",
    excerpt: "From AI-powered personalization to sustainable shopping, discover the trends shaping the future of retail.",
    category: "Industry Trends",
    author: "Alexandra Mitchell",
    date: "Dec 15, 2024",
    readTime: "8 min read",
    featured: true,
    content: `
      The retail landscape is evolving faster than ever. Here are the five trends that will define the industry in 2024:

      ## 1. AI-Powered Personalization
      Artificial intelligence is revolutionizing how retailers understand and serve customers. From personalized product recommendations to dynamic pricing, AI is becoming the backbone of modern retail strategy.

      ## 2. Sustainable Shopping
      Consumers are increasingly demanding eco-friendly options. Retailers who prioritize sustainability in their supply chains and product offerings will gain a significant competitive advantage.

      ## 3. Omnichannel Excellence
      The line between online and offline continues to blur. Successful retailers are those who create seamless experiences across all touchpoints.

      ## 4. Social Commerce
      Social media platforms are becoming full-fledged shopping destinations. Brands that master social commerce will capture the next generation of consumers.

      ## 5. Experience-First Retail
      Physical stores are transforming into experience centers. The future of retail is about creating memorable moments, not just transactions.
    `,
  },
  {
    slug: "consumer-behavior-post-pandemic",
    title: "How Consumer Behavior Has Permanently Changed Post-Pandemic",
    excerpt: "New shopping habits formed during COVID-19 are here to stay. Learn how to adapt your strategy.",
    category: "Consumer Insights",
    author: "Marcus Rodriguez",
    date: "Dec 10, 2024",
    readTime: "6 min read",
    featured: true,
    content: `
      The pandemic fundamentally altered how consumers shop. While some changes were temporary, many have become permanent fixtures of the retail landscape.

      ## The Rise of Digital-First Consumers
      Even consumers who never shopped online before 2020 have now embraced e-commerce. This shift has created new expectations around convenience, delivery speed, and digital experiences.

      ## Value-Conscious Shopping
      Economic uncertainty has made consumers more price-sensitive and value-conscious. Retailers need to clearly communicate value propositions to win customer loyalty.

      ## Health and Safety Priorities
      Hygiene and safety concerns remain elevated. Contactless payments, curbside pickup, and clean store environments are now baseline expectations.
    `,
  },
  {
    slug: "data-driven-marketing",
    title: "The Complete Guide to Data-Driven Retail Marketing",
    excerpt: "How to leverage customer data to create hyper-targeted campaigns that convert.",
    category: "Marketing Strategy",
    author: "Emily Park",
    date: "Dec 5, 2024",
    readTime: "10 min read",
    featured: false,
    content: `
      Data is the new oil of retail marketing. Here's how to extract maximum value from your customer data.

      ## Understanding Your Data Sources
      From POS systems to website analytics, retailers have access to vast amounts of data. The key is integrating these sources to create a unified customer view.

      ## Segmentation Strategies
      Not all customers are created equal. Learn how to segment your audience for more effective targeting.

      ## Measuring What Matters
      Vanity metrics can be misleading. Focus on KPIs that directly tie to business outcomes.
    `,
  },
  {
    slug: "inventory-optimization",
    title: "Inventory Optimization: Balancing Stock and Demand",
    excerpt: "Strategies to reduce carrying costs while maintaining product availability.",
    category: "Operations",
    author: "James Chen",
    date: "Nov 28, 2024",
    readTime: "7 min read",
    featured: false,
    content: `
      Inventory optimization is one of the most impactful ways to improve retail profitability.

      ## The True Cost of Inventory
      Beyond the purchase price, inventory carries hidden costs: storage, insurance, obsolescence, and opportunity cost.

      ## Demand Forecasting Techniques
      Modern forecasting combines historical data, market trends, and machine learning for unprecedented accuracy.

      ## Just-in-Time vs. Safety Stock
      Finding the right balance between lean inventory and buffer stock is crucial for customer satisfaction.
    `,
  },
  {
    slug: "omnichannel-success",
    title: "Building a Winning Omnichannel Strategy",
    excerpt: "Create seamless customer experiences across all touchpoints.",
    category: "Strategy",
    author: "Sarah Williams",
    date: "Nov 20, 2024",
    readTime: "9 min read",
    featured: false,
    content: `
      Omnichannel retail is no longer optional—it's essential for survival.

      ## Understanding the Omnichannel Customer
      Today's consumers expect to move seamlessly between channels. A purchase might start on Instagram, continue on your website, and complete in-store.

      ## Technology Infrastructure
      The backbone of omnichannel success is a unified technology platform that connects inventory, customer data, and fulfillment.

      ## Measuring Omnichannel Performance
      Traditional channel-specific metrics don't capture the full picture. Learn how to measure true omnichannel performance.
    `,
  },
];

const Blog = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const featuredPosts = blogPosts.filter((post) => post.featured);
  const regularPosts = blogPosts.filter((post) => !post.featured);

  return (
    <>
      <Helmet>
        <title>Blog - MiSolutions | Retail Insights & Industry Trends</title>
        <meta 
          name="description" 
          content="Expert insights on retail trends, consumer behavior, marketing strategies, and industry best practices from the MiSolutions team." 
        />
        <meta name="keywords" content="retail blog, market research insights, consumer behavior trends, retail marketing tips" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Navbar />
        
        {/* Hero */}
        <section className="pt-32 pb-20 bg-hero relative overflow-hidden">
          <div className="absolute inset-0 bg-hero-pattern opacity-20" />
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <span className="inline-block text-accent font-semibold text-sm uppercase tracking-wider mb-4">
                Our Blog
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground mb-6">
                Retail Insights & Intelligence
              </h1>
              <p className="text-xl text-muted-foreground">
                Expert analysis, industry trends, and actionable strategies 
                from our team of retail analysts.
              </p>
            </div>
          </div>
        </section>

        {/* Featured Posts */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-display font-bold text-foreground mb-8">Featured Articles</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {featuredPosts.map((post, index) => (
                <Link 
                  key={post.slug} 
                  to={`/blog/${post.slug}`}
                  className="group"
                >
                  <article className="bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-xl transition-all duration-300 border border-border h-full">
                    {/* Image Placeholder */}
                    <div className="aspect-video bg-gradient-to-br from-primary to-secondary relative overflow-hidden">
                      <div className="absolute inset-0 bg-hero-pattern opacity-30" />
                      <div className="absolute bottom-4 left-4">
                        <span className="inline-block bg-accent text-accent-foreground text-xs font-semibold px-3 py-1 rounded-full">
                          {post.category}
                        </span>
                      </div>
                    </div>
                    
                    <div className="p-6">
                      <h3 className="text-xl font-display font-bold text-foreground mb-3 group-hover:text-accent transition-colors">
                        {post.title}
                      </h3>
                      <p className="text-muted-foreground mb-4 line-clamp-2">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <User className="w-4 h-4" />
                          {post.author}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          {post.readTime}
                        </span>
                      </div>
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* All Posts */}
        <section ref={sectionRef} className="py-20 bg-muted/50">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-display font-bold text-foreground mb-8">All Articles</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post, index) => (
                <Link 
                  key={post.slug} 
                  to={`/blog/${post.slug}`}
                  className={`group transition-all duration-700 ${
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                  }`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <article className="bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-xl transition-all duration-300 border border-border h-full flex flex-col">
                    {/* Image Placeholder */}
                    <div className="aspect-video bg-gradient-to-br from-primary/80 to-secondary/80 relative">
                      <div className="absolute inset-0 bg-hero-pattern opacity-20" />
                    </div>
                    
                    <div className="p-6 flex-grow flex flex-col">
                      <div className="flex items-center gap-2 mb-3">
                        <Tag className="w-4 h-4 text-accent" />
                        <span className="text-xs font-medium text-accent">{post.category}</span>
                      </div>
                      <h3 className="text-lg font-display font-bold text-foreground mb-2 group-hover:text-accent transition-colors line-clamp-2">
                        {post.title}
                      </h3>
                      <p className="text-sm text-muted-foreground mb-4 line-clamp-2 flex-grow">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center justify-between text-xs text-muted-foreground">
                        <span>{post.date}</span>
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter CTA */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-6">
                Get Retail Insights Delivered
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Subscribe to our newsletter for weekly insights on retail trends, 
                consumer behavior, and growth strategies.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-grow px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-accent"
                />
                <Button variant="accent">
                  Subscribe
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default Blog;
