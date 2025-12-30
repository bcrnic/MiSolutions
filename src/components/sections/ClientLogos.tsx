import { motion } from "framer-motion";

const clients = [
  { name: "Fashion Forward", initials: "FF" },
  { name: "Tech Retail Co", initials: "TR" },
  { name: "Home Essentials", initials: "HE" },
  { name: "Gourmet Foods", initials: "GF" },
  { name: "Electronics Hub", initials: "EH" },
  { name: "Style Studio", initials: "SS" },
  { name: "Market Pro", initials: "MP" },
  { name: "Retail Plus", initials: "R+" },
];

const ClientLogos = () => {
  return (
    <section className="py-16 bg-background overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center text-muted-foreground mb-10 font-medium"
        >
          Trusted by Leading Retailers Across Industries
        </motion.p>

        {/* Infinite Scroll Container */}
        <div className="relative overflow-hidden">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex animate-scroll"
          >
            {[...clients, ...clients].map((client, index) => (
              <motion.div
                key={`${client.name}-${index}`}
                whileHover={{ scale: 1.1, y: -5 }}
                className="flex-shrink-0 mx-8"
              >
                <div className="w-32 h-16 bg-muted rounded-xl flex items-center justify-center group hover:bg-primary transition-colors duration-300">
                  <span className="font-display font-bold text-xl text-muted-foreground group-hover:text-primary-foreground transition-colors">
                    {client.initials}
                  </span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      <style>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-scroll {
          animation: scroll 30s linear infinite;
        }
        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};

export default ClientLogos;