import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, ArrowUpRight, Star, Calendar } from "lucide-react";
import { motion } from "framer-motion";
import heroAbstract from "@/assets/hero-abstract.png";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen bg-background overflow-hidden">
      {/* Pink accent bar at top */}
      <motion.div 
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="absolute top-0 left-0 right-0 h-1 bg-primary origin-left" 
      />
      
      {/* Main content */}
      <div className="container mx-auto px-4 pt-32 pb-16">
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

          {/* Right side - Image frame */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, x: 50 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
            className="relative"
          >
            {/* Dark card with rounded top */}
            <motion.div 
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.4 }}
              className="relative bg-secondary rounded-t-[200px] rounded-b-3xl overflow-hidden min-h-[500px] border-4 border-primary"
            >
              {/* Hero Image */}
              <img 
                src={heroAbstract} 
                alt="Abstract business growth visualization" 
                className="absolute inset-0 w-full h-full object-cover"
              />
              
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-secondary/90 via-secondary/40 to-transparent" />

              {/* Rotating badge */}
              <div className="absolute top-1/2 left-4 transform -translate-y-1/2 z-10">
                <div className="relative w-24 h-24">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <motion.div 
                      whileHover={{ scale: 1.2 }}
                      className="w-14 h-14 bg-card rounded-full flex items-center justify-center"
                    >
                      <svg className="w-6 h-6 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M12 2L2 7l10 5 10-5-10-5z" />
                        <path d="M2 17l10 5 10-5" />
                        <path d="M2 12l10 5 10-5" />
                      </svg>
                    </motion.div>
                  </div>
                  <motion.svg 
                    animate={{ rotate: 360 }}
                    transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                    className="w-24 h-24" 
                    viewBox="0 0 100 100"
                  >
                    <defs>
                      <path id="circle" d="M 50,50 m -37,0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" />
                    </defs>
                    <text className="text-[8px] fill-muted-foreground uppercase tracking-[0.3em]">
                      <textPath href="#circle">
                        • GET IN TOUCH • GET IN TOUCH 
                      </textPath>
                    </text>
                  </motion.svg>
                </div>
              </div>

              {/* Content inside the frame */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.6 }}
                className="absolute bottom-0 left-0 right-0 text-center p-8"
              >
                <h3 className="font-display text-2xl text-foreground mb-2">
                  Market
                  <br />
                  Intelligence
                  <br />
                  Solutions
                </h3>
                <p className="text-muted-foreground text-sm mt-4 max-w-[200px] mx-auto">
                  Since 2019, we've helped small and medium retailers grow!
                </p>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>

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