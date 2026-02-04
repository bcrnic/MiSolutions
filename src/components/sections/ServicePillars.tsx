import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, BarChart3, Users, Target } from "lucide-react";
import { motion } from "framer-motion";

const services = [
  {
    icon: BarChart3,
    title: "Market Research",
    description: "Deep-dive analysis of your retail market, identifying trends, opportunities, and competitive positioning to inform strategic decisions.",
    features: ["Market sizing & segmentation", "Trend analysis & forecasting", "Competitive landscape mapping"],
    color: "from-primary to-pink-dark",
    delay: 0,
  },
  {
    icon: Users,
    title: "Consumer Insights",
    description: "Understand your customers at a granular level through behavioral analysis, purchase patterns, and preference mapping.",
    features: ["Customer journey mapping", "Behavioral segmentation", "Purchase pattern analysis"],
    color: "from-accent to-primary",
    delay: 0.1,
  },
  {
    icon: Target,
    title: "Marketing Strategy",
    description: "Data-driven marketing strategies that maximize ROI, optimize channel mix, and drive measurable revenue growth.",
    features: ["Channel optimization", "Campaign performance", "ROI measurement"],
    color: "from-secondary to-muted",
    delay: 0.2,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.46, 0.45, 0.94] as const,
    },
  },
};

const ServicePillars = () => {
  return (
    <section className="py-20 md:py-28 bg-background relative overflow-hidden">
      {/* Background Decoration */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 0.05, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="absolute top-0 right-0 w-96 h-96 bg-primary rounded-full blur-3xl" 
      />
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 0.05, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.2 }}
        className="absolute bottom-0 left-0 w-96 h-96 bg-accent rounded-full blur-3xl" 
      />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <motion.span 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-4"
          >
            Our Expertise
          </motion.span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-6">
            Three Pillars of Retail Success
          </h2>
          <p className="text-lg text-muted-foreground">
            Our integrated approach combines market intelligence, consumer understanding, 
            and strategic execution to deliver measurable results.
          </p>
        </motion.div>

        {/* Service Cards */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid md:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className="group relative"
            >
              <motion.div 
                whileHover={{ boxShadow: "0 20px 40px hsl(var(--primary) / 0.15)" }}
                className="bg-card rounded-2xl p-8 shadow-card border border-border h-full flex flex-col transition-all duration-300"
              >
                {/* Icon */}
                <motion.div 
                  whileHover={{ scale: 1.15, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-6`}
                >
                  <service.icon className="w-7 h-7 text-primary-foreground" />
                </motion.div>

                {/* Content */}
                <h3 className="text-xl font-display font-bold text-foreground mb-4">
                  {service.title}
                </h3>
                <p className="text-muted-foreground mb-6 flex-grow">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, i) => (
                    <motion.li 
                      key={feature} 
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 + i * 0.1 }}
                      className="flex items-center gap-2 text-sm text-foreground"
                    >
                      <motion.div 
                        whileHover={{ scale: 1.5 }}
                        className="w-1.5 h-1.5 rounded-full bg-primary" 
                      />
                      {feature}
                    </motion.li>
                  ))}
                </ul>

                {/* CTA */}
                <Link 
                  to="/services"
                  className="inline-flex items-center text-primary font-semibold text-sm group/link"
                >
                  Learn More
                  <motion.span
                    initial={{ x: 0 }}
                    whileHover={{ x: 5 }}
                  >
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </motion.span>
                </Link>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="text-center mt-16"
        >
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button variant="default" size="lg" asChild>
              <Link to="/services">
                Explore All Services
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicePillars;