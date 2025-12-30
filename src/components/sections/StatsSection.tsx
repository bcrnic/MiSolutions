import { useEffect, useState } from "react";
import { TrendingUp, DollarSign, Target, Clock } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const stats = [
  {
    icon: TrendingUp,
    value: 18,
    suffix: "%",
    label: "Average Sales Increase",
    description: "Growth our clients achieve",
  },
  {
    icon: DollarSign,
    value: 45,
    suffix: "+",
    label: "Completed Projects",
    description: "Successfully delivered research",
  },
  {
    icon: Target,
    value: 87,
    suffix: "%",
    label: "Forecast Accuracy",
    description: "Precision in our predictions",
  },
  {
    icon: Clock,
    value: 5,
    suffix: "+",
    label: "Years Experience",
    description: "Deep retail market expertise",
  },
];

const AnimatedCounter = ({ 
  value, 
  suffix, 
  isVisible 
}: { 
  value: number; 
  suffix: string; 
  isVisible: boolean;
}) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isVisible) return;

    const duration = 2000;
    const steps = 60;
    const increment = value / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(current);
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [isVisible, value]);

  const displayValue = Number.isInteger(value) ? Math.floor(count) : count.toFixed(1);

  return (
    <span className="text-4xl md:text-5xl font-display font-bold text-foreground">
      {displayValue}{suffix}
    </span>
  );
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.46, 0.45, 0.94] as const,
    },
  },
};

const StatsSection = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section ref={sectionRef} className="py-20 bg-background relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="h-full w-full" style={{ 
          backgroundImage: "linear-gradient(hsl(var(--border)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--border)) 1px, transparent 1px)",
          backgroundSize: "60px 60px"
        }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <motion.span 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-4"
          >
            Proven Results
          </motion.span>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">
            Numbers That Speak for Themselves
          </h2>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              variants={itemVariants}
              whileHover={{ y: -8 }}
              className="text-center"
            >
              <motion.div 
                whileHover={{ 
                  boxShadow: "0 0 30px rgba(250, 146, 195, 0.2)"
                }}
                className="bg-card border border-border rounded-2xl p-8 transition-all duration-300 h-full hover:border-primary"
              >
                <motion.div 
                  whileHover={{ scale: 1.1, rotate: 10 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4"
                >
                  <stat.icon className="w-7 h-7 text-primary" />
                </motion.div>
                <AnimatedCounter value={stat.value} suffix={stat.suffix} isVisible={isInView} />
                <h3 className="text-lg font-semibold text-foreground mt-3 mb-2">
                  {stat.label}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {stat.description}
                </p>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default StatsSection;