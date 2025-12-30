import { motion } from "framer-motion";
import { Mail, Linkedin, Twitter } from "lucide-react";
import teamMember1 from "@/assets/team-member-1.svg";
import teamMember2 from "@/assets/team-member-2.svg";
import teamMember3 from "@/assets/team-member-3.svg";

const TeamSection = () => {
  const team = [
    {
      name: "Marens Radic",
      position: "CEO & Founder",
      description: "Digital strategist with 10+ years of experience in retail transformation and market intelligence.",
      image: teamMember1,
      social: {
        email: "marens.radic@gmail.com",
        linkedin: "#",
        twitter: "#"
      }
    },
    {
      name: "Ana Petrovic",
      position: "UX Design Lead",
      description: "Creating intuitive user experiences that drive engagement and conversion for digital products.",
      image: teamMember2,
      social: {
        email: "ana@misolutions.com",
        linkedin: "#",
        twitter: "#"
      }
    },
    {
      name: "Marko Johnson",
      position: "Tech Lead",
      description: "Full-stack developer specializing in scalable web applications and e-commerce solutions.",
      image: teamMember3,
      social: {
        email: "marko@misolutions.com",
        linkedin: "#",
        twitter: "#"
      }
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-accent font-semibold text-sm uppercase tracking-wider mb-4">
            Our Team
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-6">
            Meet the Experts Behind Your Success
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our diverse team brings together expertise in digital strategy, design, and technology 
            to deliver comprehensive solutions for your business.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="bg-card rounded-2xl p-6 border border-border hover:shadow-lg transition-all duration-300">
                {/* Team Member Image */}
                <div className="relative mb-6">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-64 object-cover rounded-xl"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                {/* Team Member Info */}
                <h3 className="text-xl font-display font-bold text-foreground mb-2">
                  {member.name}
                </h3>
                <p className="text-accent font-semibold mb-3">{member.position}</p>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  {member.description}
                </p>

                {/* Social Links */}
                <div className="flex gap-3">
                  <a
                    href={`mailto:${member.social.email}`}
                    className="w-10 h-10 rounded-full bg-muted hover:bg-accent hover:text-accent-foreground flex items-center justify-center transition-colors"
                  >
                    <Mail className="w-4 h-4" />
                  </a>
                  <a
                    href={member.social.linkedin}
                    className="w-10 h-10 rounded-full bg-muted hover:bg-accent hover:text-accent-foreground flex items-center justify-center transition-colors"
                  >
                    <Linkedin className="w-4 h-4" />
                  </a>
                  <a
                    href={member.social.twitter}
                    className="w-10 h-10 rounded-full bg-muted hover:bg-accent hover:text-accent-foreground flex items-center justify-center transition-colors"
                  >
                    <Twitter className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <p className="text-muted-foreground mb-6">
            Ready to work with our expert team?
          </p>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-8 py-4 rounded-lg font-semibold hover:bg-accent/90 transition-colors"
          >
            Schedule a Consultation
          </a>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
