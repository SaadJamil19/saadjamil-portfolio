
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Phone, Brain, Zap, Code2, ChevronDown, Smartphone } from "lucide-react";

const HeroSection = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-hero-gradient overflow-hidden">
      {/* Background Pattern Overlay */}
      <div className="absolute inset-0 bg-hero-overlay"></div>
      
      {/* Flowing Gradient Lines */}
      <div className="absolute inset-0 opacity-30">
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1200 800" preserveAspectRatio="none">
          <defs>
            <linearGradient id="flowGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="rgb(59, 130, 246)" stopOpacity="0.8" />
              <stop offset="50%" stopColor="rgb(147, 51, 234)" stopOpacity="0.6" />
              <stop offset="100%" stopColor="rgb(236, 72, 153)" stopOpacity="0.4" />
            </linearGradient>
            <linearGradient id="flowGradient2" x1="100%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="rgb(6, 182, 212)" stopOpacity="0.6" />
              <stop offset="50%" stopColor="rgb(168, 85, 247)" stopOpacity="0.4" />
              <stop offset="100%" stopColor="rgb(59, 130, 246)" stopOpacity="0.2" />
            </linearGradient>
          </defs>
          <path 
            d="M0,400 Q300,200 600,300 T1200,400 L1200,0 L0,0 Z" 
            fill="url(#flowGradient1)" 
            className="animate-neural-flow"
          />
          <path 
            d="M0,600 Q400,400 800,500 T1200,600 L1200,800 L0,800 Z" 
            fill="url(#flowGradient2)" 
            className="animate-float"
          />
        </svg>
      </div>
      
      {/* AI-Enhanced Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-20 w-72 h-72 bg-primary-glow rounded-full blur-3xl animate-ai-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-accent rounded-full blur-3xl animate-float"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full blur-3xl animate-neural-flow opacity-40"></div>
      </div>
      
      {/* Floating AI Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-cyan-400 rounded-full opacity-60 animate-particle-float"
            style={{
              left: `${15 + i * 12}%`,
              top: `${25 + i * 8}%`,
              animationDelay: `${i * 0.6}s`
            }}
          />
        ))}
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center text-white">
        {/* Top Navigation Hint */}
        <div className="absolute top-8 right-8 hidden md:flex gap-8 text-sm opacity-80">
          <button 
            onClick={() => scrollToSection('about-section')}
            className="hover:text-cyan-400 transition-colors cursor-pointer"
          >
            About
          </button>
          <button 
            onClick={() => scrollToSection('projects-section')}
            className="hover:text-cyan-400 transition-colors cursor-pointer"
          >
            Work
          </button>
          <button 
            onClick={() => scrollToSection('contact-section')}
            className="hover:text-cyan-400 transition-colors cursor-pointer"
          >
            Contact
          </button>
        </div>
        
        {/* Brand/Logo */}
        <div className="mb-12 animate-fade-in">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center">
              <span className="text-xl font-bold">S</span>
            </div>
            <h3 className="text-xl font-semibold opacity-90">Saad Jamil</h3>
          </div>
          <div className="flex justify-center items-center gap-3 mb-6">
            <Brain className="w-6 h-6 text-cyan-400 animate-ai-pulse" />
            <span className="text-sm font-medium text-cyan-300 uppercase tracking-wider">AI-Enhanced Development</span>
            <Zap className="w-5 h-5 text-blue-400 animate-float" />
          </div>
        </div>
        
        {/* Main Headline */}
        <div className="mb-12 animate-fade-in animation-delay-200">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-8">
            <span className="block text-white/90 mb-2">Hi, I'm</span>
            <span className="block bg-ai-gradient bg-clip-text text-transparent mb-4">
              Saad Jamil
            </span>
          </h1>
          
          <div className="max-w-4xl mx-auto space-y-4">
            <p className="text-xl md:text-2xl font-medium text-white/90">
              Engineering seamless digital experiences—from mobile apps to automation and blockchain
            </p>
            <p className="text-lg md:text-xl opacity-80 max-w-2xl mx-auto leading-relaxed">
              Blending clean design with robust backend logic to solve real-world problems.
            </p>
          </div>
          
          {/* Updated Skills Highlight */}
          <div className="flex flex-wrap justify-center items-center gap-6 mt-10 opacity-80">
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
              <Smartphone className="w-4 h-4 text-cyan-400" />
              <span className="text-sm">App Development</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
              <Brain className="w-4 h-4 text-blue-400" />
              <span className="text-sm">AI Integration</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
              <Zap className="w-4 h-4 text-purple-400" />
              <span className="text-sm">Blockchain</span>
            </div>
          </div>
        </div>
        
        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16 animate-fade-in animation-delay-400">
          <Button 
            size="lg" 
            onClick={() => scrollToSection('projects-section')}
            className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-4 text-lg font-semibold rounded-full shadow-ai-glow hover:scale-105 transition-all duration-300 animate-ai-pulse"
          >
            <Brain className="w-5 h-5 mr-2" />
            Explore My Projects
          </Button>
          <Button 
            variant="outline" 
            size="lg"
            onClick={() => scrollToSection('projects-section')}
            className="border-2 border-cyan-400/50 text-cyan-400 hover:bg-cyan-400/10 hover:border-cyan-400 hover:text-cyan-300 px-8 py-4 text-lg font-semibold rounded-full backdrop-blur-sm transition-all duration-300"
          >
            <Code2 className="w-5 h-5 mr-2" />
            View Portfolio
          </Button>
        </div>
        
        {/* Contact Links */}
        <div className="flex justify-center gap-4 animate-fade-in animation-delay-600 mb-16">
          <a 
            href="mailto:saadjamil196@gmail.com" 
            className="p-4 rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all duration-300 hover:scale-110 group"
          >
            <Mail className="w-5 h-5 group-hover:text-cyan-400 transition-colors" />
          </a>
          <a 
            href="tel:03207703583" 
            className="p-4 rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all duration-300 hover:scale-110 group"
          >
            <Phone className="w-5 h-5 group-hover:text-cyan-400 transition-colors" />
          </a>
          <a 
            href="https://www.linkedin.com/in/saad-j-usmani-/"
            target="_blank" 
            rel="noopener noreferrer"
            className="p-4 rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all duration-300 hover:scale-110 group"
          >
            <Linkedin className="w-5 h-5 group-hover:text-cyan-400 transition-colors" />
          </a>
          <a 
            href="https://github.com/SaadJamil19" 
            target="_blank" 
            rel="noopener noreferrer"
            className="p-4 rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all duration-300 hover:scale-110 group"
          >
            <Github className="w-5 h-5 group-hover:text-cyan-400 transition-colors" />
          </a>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="flex flex-col items-center gap-2 text-white/60">
            <span className="text-xs uppercase tracking-wider">Scroll</span>
            <ChevronDown className="w-5 h-5" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
