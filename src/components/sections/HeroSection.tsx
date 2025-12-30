import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, ArrowUpRight, Star, Calendar } from "lucide-react";
import { motion } from "framer-motion";
import heroAbstract from "@/assets/hero-abstract.svg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen lg:min-h-[110vh] bg-background overflow-hidden">
      {/* Pink accent bar at top */}
      <motion.div 
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="absolute top-0 left-0 right-0 h-1 bg-primary origin-left" 
      />
      
      {/* Main content */}
      <div className="container mx-auto px-4 pt-32 pb-20 lg:pb-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Content */}
          <div className="relative z-10">
            {/* Main Headline */}
            <motion.h1 
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="font-display text-5xl md:text-6xl lg:text-7xl text-foreground mb-8 leading-[1.1]"
            >
              We Help You
              <br />
              to Grow Your
              <br />
              <span className="italic">Business</span>
            </motion.h1>

            {/* Appointment button */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
              className="flex items-center gap-4 mb-12"
            >
              <div className="flex items-center gap-2">
                <motion.div 
                  whileHover={{ scale: 1.1, rotate: 10 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-12 h-12 rounded-full bg-card border border-border flex items-center justify-center cursor-pointer"
                >
                  <ArrowUpRight className="w-5 h-5 text-foreground" />
                </motion.div>
                <motion.div 
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-12 h-12 rounded-full bg-primary flex items-center justify-center cursor-pointer"
                >
                  <Calendar className="w-5 h-5 text-primary-foreground" />
                </motion.div>
              </div>
              <div>
                <div className="font-semibold text-foreground">Appointment</div>
                <div className="text-sm text-muted-foreground">Book Now</div>
              </div>
            </motion.div>

            {/* Stats Card */}
            <motion.div 
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.4, ease: "easeOut" }}
              className="inline-block"
            >
              <motion.div 
                whileHover={{ y: -5, boxShadow: "0 20px 40px rgba(250, 146, 195, 0.3)" }}
                transition={{ duration: 0.3 }}
                className="bg-primary rounded-3xl p-6 min-w-[280px]"
              >
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <motion.div 
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.8 }}
                      className="text-4xl font-display font-bold text-primary-foreground"
                    >
                      45+
                    </motion.div>
                    <div className="text-primary-foreground/70 text-sm">Happy clients worldwide</div>
                  </div>
                  <motion.button 
                    whileHover={{ scale: 1.1, x: 3 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-12 h-12 rounded-full bg-primary-foreground/20 flex items-center justify-center hover:bg-primary-foreground/30 transition-colors"
                  >
                    <ArrowRight className="w-5 h-5 text-primary-foreground" />
                  </motion.button>
                </div>
                <div className="flex items-center gap-3">
                  <div className="flex -space-x-2">
                    {[1, 2, 3].map((i) => (
                      <motion.div 
                        key={i}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.9 + i * 0.1 }}
                        className="w-10 h-10 rounded-full bg-primary-foreground/30 border-2 border-primary flex items-center justify-center text-xs font-medium text-primary-foreground"
                      >
                        {String.fromCharCode(64 + i)}
                      </motion.div>
                    ))}
                  </div>
                  <div className="flex items-center gap-1">
                    <Star className="w-5 h-5 fill-primary-foreground text-primary-foreground" />
                    <span className="font-bold text-primary-foreground">5</span>
                    <span className="text-primary-foreground/70 text-sm">Stars</span>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>

          {/* Right side - Full width image */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, x: 50 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
            className="relative lg:min-h-[800px] xl:min-h-[900px]"
          >
            {/* Full size image container */}
            <div className="relative w-full h-full rounded-3xl overflow-hidden">
              {/* Hero Image - Full size */}
              <img 
                src={heroAbstract} 
                alt="Abstract business growth visualization" 
                className="w-full h-full object-cover"
              />
              
              {/* Overlay gradient for text readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/20 to-transparent" />

              {/* Floating elements */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.6 }}
                className="absolute top-8 right-8"
              >
                <div className="bg-primary/90 backdrop-blur-sm rounded-2xl p-4 border border-primary/50">
                  <div className="text-2xl font-bold text-primary-foreground">87%</div>
                  <div className="text-sm text-primary-foreground/80">Forecast Accuracy</div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 0.6 }}
                className="absolute bottom-8 left-8"
              >
                <div className="bg-card/90 backdrop-blur-sm rounded-2xl p-4 border border-border">
                  <div className="text-2xl font-bold text-foreground">24/7</div>
                  <div className="text-sm text-muted-foreground">Support Available</div>
                </div>
              </motion.div>

              {/* Rotating badge */}
              <div className="absolute top-1/2 left-8 transform -translate-y-1/2 z-10">
                <div className="relative w-20 h-20">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <motion.div 
                      animate={{ rotate: 360 }}
                      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                      className="w-full h-full rounded-full border-4 border-primary/30 border-t-primary"
                    />
                    <div className="absolute inset-2 rounded-full bg-primary flex items-center justify-center">
                      <ArrowUpRight className="w-6 h-6 text-primary-foreground" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Text overlay */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.4, duration: 0.8 }}
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center z-20 flex flex-col items-center justify-center"
              >
                <h3 className="text-2xl md:text-3xl font-display font-bold text-white mb-2 drop-shadow-lg">
                  Market Intelligence
                </h3>
                <p className="text-lg text-white/90 drop-shadow-md">
                  Data-Driven Growth Solutions
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Content Section - Below Hero */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="container mx-auto px-4 pb-20"
      >
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-6">
            Transform Your Business with Data-Driven Insights
          </h2>
          <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
            Since 2019, we’ve been helping businesses like yours unlock their full potential through 
            advanced market intelligence, consumer insights, and strategic growth planning. 
            Our proven methodologies have helped over 45 clients worldwide achieve remarkable results.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-lg font-semibold hover:bg-primary/90 transition-colors"
            >
              Get Started Today
              <ArrowRight className="w-5 h-5" />
            </a>
            <a
              href="/services"
              className="inline-flex items-center gap-2 bg-card text-foreground px-8 py-4 rounded-lg font-semibold border border-border hover:bg-accent hover:text-accent-foreground transition-colors"
            >
              Our Services
            </a>
          </div>
        </div>
      </motion.div>

      {/* Bottom decorative line */}
      <motion.div 
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-0 left-0 right-0 h-px bg-border origin-left" 
      />
    </section>
  );
};

export default HeroSection;