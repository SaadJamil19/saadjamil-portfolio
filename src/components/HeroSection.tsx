import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Phone, Brain, Zap, Code2 } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-hero-gradient overflow-hidden">
      {/* Background Pattern Overlay */}
      <div className="absolute inset-0 bg-hero-overlay"></div>
      
      {/* AI-Enhanced Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-72 h-72 bg-primary-glow rounded-full blur-3xl animate-ai-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-accent rounded-full blur-3xl animate-float"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full blur-3xl animate-neural-flow opacity-20"></div>
      </div>
      
      {/* Floating AI Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-cyan-400 rounded-full opacity-60 animate-particle-float"
            style={{
              left: `${20 + i * 15}%`,
              top: `${30 + i * 10}%`,
              animationDelay: `${i * 0.8}s`
            }}
          />
        ))}
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center text-white">
        {/* Brand/Logo */}
        <div className="mb-8 animate-fade-in">
          <h3 className="text-xl font-semibold opacity-90">Saad Jamil</h3>
        </div>
        
        {/* Main Headline */}
        <div className="mb-8 animate-fade-in animation-delay-200">
          <div className="flex justify-center items-center gap-3 mb-6">
            <Brain className="w-8 h-8 text-cyan-400 animate-ai-pulse" />
            <span className="text-lg font-medium text-cyan-300">AI-Enhanced Development</span>
            <Zap className="w-6 h-6 text-blue-400 animate-float" />
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
            Next-Gen Software
            <br />
            <span className="bg-ai-gradient bg-clip-text text-transparent">
              Developer & AI Innovator
            </span>
          </h1>
          <p className="text-xl md:text-2xl opacity-90 max-w-3xl mx-auto leading-relaxed">
            Crafting intelligent mobile apps, blockchain solutions, and AI-powered systems
            with cutting-edge technology and modern design principles
          </p>
          
          {/* AI Skills Highlight */}
          <div className="flex justify-center items-center gap-6 mt-8 opacity-80">
            <div className="flex items-center gap-2">
              <Code2 className="w-5 h-5 text-cyan-400" />
              <span className="text-sm">Smart Contracts</span>
            </div>
            <div className="w-1 h-1 bg-white/50 rounded-full"></div>
            <div className="flex items-center gap-2">
              <Brain className="w-5 h-5 text-blue-400" />
              <span className="text-sm">AI Integration</span>
            </div>
            <div className="w-1 h-1 bg-white/50 rounded-full"></div>
            <div className="flex items-center gap-2">
              <Zap className="w-5 h-5 text-purple-400" />
              <span className="text-sm">Performance</span>
            </div>
          </div>
        </div>
        
        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-fade-in animation-delay-400">
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-4 text-lg font-semibold rounded-full shadow-ai-glow hover:scale-105 transition-all duration-300 animate-ai-pulse"
          >
            <Brain className="w-5 h-5 mr-2" />
            Explore AI Projects
          </Button>
          <Button 
            variant="outline" 
            size="lg"
            className="border-cyan-400/30 text-white hover:bg-cyan-400/10 hover:border-cyan-400/50 px-8 py-4 text-lg font-semibold rounded-full backdrop-blur-sm transition-all duration-300"
          >
            <Code2 className="w-5 h-5 mr-2" />
            View Portfolio
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
            href="https://www.linkedin.com/in/saad-j-usmani-/"
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