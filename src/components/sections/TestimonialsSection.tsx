import { useEffect, useRef, useState } from "react";
import { Quote, Star, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const testimonials = [
  {
    quote: "MiSolutions helped us better understand our customers. Sales increased by 12% in the first year of collaboration.",
    author: "Ana Petrovic",
    role: "Owner",
    company: "Fashion House Ana",
    rating: 5,
    image: "AP",
  },
  {
    quote: "The consumer analysis was eye-opening. We changed our approach and immediately saw results.",
    author: "Mark Johnson",
    role: "Director",
    company: "HomeStyle Co.",
    rating: 5,
    image: "MJ",
  },
  {
    quote: "Their forecasting accuracy is impressive. We reduced inventory costs by 15%.",
    author: "Emily Watson",
    role: "Operations Manager",
    company: "Tech Shop",
    rating: 5,
    image: "EW",
  },
];

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section ref={sectionRef} className="py-20 md:py-28 bg-muted/50 relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-20 left-10 w-20 h-20 border border-accent/20 rounded-full" />
      <div className="absolute bottom-20 right-10 w-32 h-32 border border-primary/10 rounded-full" />

      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div 
          className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <span className="inline-block text-accent font-semibold text-sm uppercase tracking-wider mb-4">
            Client Success Stories
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-6">
            What Our Clients Say
          </h2>
          <p className="text-lg text-muted-foreground">
            Don't just take our word for it—hear from retail leaders who've transformed 
            their businesses with our insights.
          </p>
        </div>

        {/* Testimonial Carousel */}
        <div 
          className={`max-w-4xl mx-auto transition-all duration-700 delay-200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="bg-card rounded-3xl shadow-xl p-8 md:p-12 relative">
            {/* Quote Icon */}
            <Quote className="absolute top-8 right-8 w-12 h-12 text-accent/20" />

            <div className="flex flex-col md:flex-row items-center gap-8">
              {/* Author Avatar */}
              <div className="flex-shrink-0">
                <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                  <span className="text-2xl font-display font-bold text-primary-foreground">
                    {testimonials[currentIndex].image}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="flex-grow text-center md:text-left">
                {/* Stars */}
                <div className="flex justify-center md:justify-start gap-1 mb-4">
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                  ))}
                </div>

                {/* Quote */}
                <blockquote className="text-lg md:text-xl text-foreground mb-6 leading-relaxed">
                  "{testimonials[currentIndex].quote}"
                </blockquote>

                {/* Author Info */}
                <div>
                  <div className="font-display font-bold text-foreground">
                    {testimonials[currentIndex].author}
                  </div>
                  <div className="text-muted-foreground">
                    {testimonials[currentIndex].role}, {testimonials[currentIndex].company}
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-center gap-4 mt-8">
              <Button 
                variant="outline" 
                size="icon" 
                onClick={prevTestimonial}
                className="rounded-full"
              >
                <ChevronLeft className="w-5 h-5" />
              </Button>

              <div className="flex gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      index === currentIndex 
                        ? "bg-accent w-6" 
                        : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                    }`}
                  />
                ))}
              </div>

              <Button 
                variant="outline" 
                size="icon" 
                onClick={nextTestimonial}
                className="rounded-full"
              >
                <ChevronRight className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
