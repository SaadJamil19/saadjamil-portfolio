import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Phone } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-hero-gradient overflow-hidden">
      {/* Background Pattern Overlay */}
      <div className="absolute inset-0 bg-hero-overlay"></div>
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-72 h-72 bg-primary-glow rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-accent rounded-full blur-3xl"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center text-white">
        {/* Brand/Logo */}
        <div className="mb-8 animate-fade-in">
          <h3 className="text-xl font-semibold opacity-90">Saad Jamil</h3>
        </div>
        
        {/* Main Headline */}
        <div className="mb-8 animate-fade-in animation-delay-200">
          <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
            Software Developer &
            <br />
            <span className="bg-text-gradient bg-clip-text text-transparent">
              Tech Innovator
            </span>
          </h1>
          <p className="text-xl md:text-2xl opacity-90 max-w-3xl mx-auto leading-relaxed">
            Building mobile apps, blockchain solutions, and system-level software
            with a passion for clean design and performance optimization
          </p>
        </div>
        
        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-fade-in animation-delay-400">
          <Button 
            size="lg" 
            className="bg-primary-glow hover:bg-primary-glow/90 text-white px-8 py-4 text-lg font-semibold rounded-full shadow-glow hover:scale-105 transition-all duration-300"
          >
            View My Work
          </Button>
          <Button 
            variant="outline" 
            size="lg"
            className="border-white/30 text-white hover:bg-white/10 px-8 py-4 text-lg font-semibold rounded-full backdrop-blur-sm transition-all duration-300"
          >
            Download Resume
          </Button>
        </div>
        
        {/* Contact Links */}
        <div className="flex justify-center gap-6 animate-fade-in animation-delay-600">
          <a 
            href="mailto:saadjamil196@gmail.com" 
            className="p-3 rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all duration-300 hover:scale-110"
          >
            <Mail className="w-6 h-6" />
          </a>
          <a 
            href="tel:03207703583" 
            className="p-3 rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all duration-300 hover:scale-110"
          >
            <Phone className="w-6 h-6" />
          </a>
          <a 
            href="https://linkedin.com/in/saad-j-usmani" 
            target="_blank" 
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all duration-300 hover:scale-110"
          >
            <Linkedin className="w-6 h-6" />
          </a>
          <a 
            href="https://github.com/SaadJamil19" 
            target="_blank" 
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all duration-300 hover:scale-110"
          >
            <Github className="w-6 h-6" />
          </a>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/70 rounded-full mt-2"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;