import heroImage from "@/assets/hero-solar.jpg";
import { ArrowRight, Zap, Shield, Leaf } from "lucide-react";

const HeroSection = () => {
  return (
    <section id="home" className="relative overflow-hidden">
      <div className="absolute inset-0">
        <img src={heroImage} alt="Solar panels at sunset" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-hero opacity-80" />
      </div>
      <div className="relative container mx-auto px-4 py-24 md:py-36">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 bg-secondary/20 backdrop-blur-sm border border-secondary/30 text-primary-foreground rounded-full px-4 py-1.5 text-sm font-medium mb-6 animate-fade-up">
            <Leaf className="w-4 h-4" />
            Clean Energy Solutions
          </div>
          <h2 className="font-heading text-4xl md:text-6xl font-bold text-primary-foreground leading-tight mb-6 animate-fade-up" style={{ animationDelay: "0.1s" }}>
            Powering India's <br />
            <span className="text-accent">Green Future</span>
          </h2>
          <p className="text-primary-foreground/80 text-lg md:text-xl mb-8 leading-relaxed max-w-lg animate-fade-up" style={{ animationDelay: "0.2s" }}>
            Premium solar panels, lithium batteries & complete solar solutions for residential, commercial and industrial needs.
          </p>
          <div className="flex flex-wrap gap-4 animate-fade-up" style={{ animationDelay: "0.3s" }}>
            <a href="#products" className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-7 py-3.5 rounded-lg font-semibold hover:opacity-90 transition-opacity">
              View Products <ArrowRight className="w-4 h-4" />
            </a>
            <a href="#contact" className="inline-flex items-center gap-2 border-2 border-primary-foreground/30 text-primary-foreground px-7 py-3.5 rounded-lg font-semibold hover:bg-primary-foreground/10 transition-colors">
              Contact Us
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-16 animate-fade-up" style={{ animationDelay: "0.4s" }}>
          {[
            { icon: Zap, title: "High Efficiency", desc: "Up to 22% panel efficiency" },
            { icon: Shield, title: "25 Year Warranty", desc: "Industry-leading guarantees" },
            { icon: Leaf, title: "Eco Friendly", desc: "Reduce carbon footprint" },
          ].map(({ icon: Icon, title, desc }) => (
            <div key={title} className="bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 rounded-xl p-5 text-primary-foreground">
              <Icon className="w-6 h-6 text-accent mb-3" />
              <h3 className="font-heading font-semibold text-sm mb-1">{title}</h3>
              <p className="text-primary-foreground/70 text-xs">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
