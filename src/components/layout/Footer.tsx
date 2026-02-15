import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import logo from "@/assets/misolutions-icon.svg";

const Footer = () => {
  return (
    <footer className="bg-secondary text-foreground">
      {/* CTA Section */}
      <div className="border-b border-border">
        <div className="container mx-auto px-4 py-16">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="text-center lg:text-left">
              <h3 className="text-2xl md:text-3xl font-display font-bold mb-2">
                Ready to Transform Your Retail Strategy?
              </h3>
              <p className="text-muted-foreground text-lg">
                Get your free market audit and discover growth opportunities.
              </p>
            </div>
            <Button variant="default" size="lg" asChild>
              <Link to="/contact">
                Get Your Free Audit
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-3 mb-6">
              <img
                src={logo}
                alt="MiSolutions logo"
                className="w-10 h-10"
              />
              <span className="font-display text-2xl">MiSolutions</span>
            </Link>

            <p className="text-muted-foreground mb-6 leading-relaxed">
              Precision market intelligence for retail success. We analyze data to deliver actionable insights that drive growth.
            </p>
            <div className="flex gap-3">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-muted flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-muted flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-muted flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-6">Services</h4>
            <ul className="space-y-3">
              {[
                "Market Analysis",
                "Competitor Benchmarking",
                "Consumer Studies",
                "Sales Forecasting",
                "Digital Marketing",
              ].map((service) => (
                <li key={service}>
                  <Link
                    to="/services"
                    className="text-muted-foreground hover:text-foreground hover:underline underline-offset-4 transition-colors"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold text-lg mb-6">Company</h4>
            <ul className="space-y-3">
              {[
                { name: "Case Studies", path: "/case-studies" },
                { name: "Blog", path: "/blog" },
                { name: "Contact", path: "/contact" },
              ].map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.path}
                    className="text-muted-foreground hover:text-foreground hover:underline underline-offset-4 transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Newsletter */}
          <div>
            <h4 className="font-semibold text-lg mb-6">Get in Touch</h4>
            <ul className="space-y-4 mb-8">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-foreground/80 mt-0.5 shrink-0" />
                <span className="text-muted-foreground">
                  Milana Mikrut<br />
                  Trg Kamenskog 6
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-foreground/80 shrink-0" />
                <a href="tel:+381642130463" className="text-muted-foreground hover:text-foreground hover:underline underline-offset-4 transition-colors">
                  +381 64 213 0463
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-foreground/80 shrink-0" />
                <a href="mailto:marens.radic@gmail.com" className="text-muted-foreground hover:text-foreground hover:underline underline-offset-4 transition-colors">
                  marens.radic@gmail.com
                </a>
              </li>
            </ul>

            <h5 className="font-semibold mb-3">Subscribe to Insights</h5>
            <div className="flex gap-2">
              <Input
                type="email"
                placeholder="Your email"
                className="bg-muted border-border"
              />
              <Button variant="default" size="icon">
                <ArrowRight className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-border">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
            <p>© 2024 MiSolutions. All rights reserved.</p>
            <div className="flex gap-6">
              <Link to="/privacy" className="hover:text-foreground hover:underline underline-offset-4 transition-colors">Privacy Policy</Link>
              <Link to="/terms" className="hover:text-foreground hover:underline underline-offset-4 transition-colors">Terms of Service</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;