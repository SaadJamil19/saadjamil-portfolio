import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Smartphone, Database, Settings, Blocks, Globe, Brain, Zap, Bot, Cpu } from "lucide-react";

const SkillsSection = () => {
  const skillCategories = [
    {
      title: "AI & Machine Learning",
      icon: <Brain className="w-6 h-6" />,
      skills: ["Neural Networks", "Deep Learning", "AI Integration", "Intelligent Systems"],
      color: "ai-cyan",
      featured: true
    },
    {
      title: "Mobile Development",
      icon: <Smartphone className="w-6 h-6" />,
      skills: ["React Native", "Flutter", "Dart", "Cross-Platform"],
      color: "primary"
    },
    {
      title: "Blockchain & Web3",
      icon: <Blocks className="w-6 h-6" />,
      skills: ["Ethereum", "Smart Contracts", "Solidity", "ERC-20", "DeFi"],
      color: "primary-glow"
    },
    {
      title: "Advanced Programming",
      icon: <Code className="w-6 h-6" />,
      skills: ["C", "C++", "Python", "System Programming", "Performance"],
      color: "secondary"
    },
    {
      title: "Web & Backend",
      icon: <Globe className="w-6 h-6" />,
      skills: ["ASP.NET", "JavaScript", "HTML/CSS", "API Development"],
      color: "accent"
    },
    {
      title: "Automation & DevOps",
      icon: <Bot className="w-6 h-6" />,
      skills: ["Automation Scripts", "Shell Scripting", "System Integration"],
      color: "muted"
    },
    {
      title: "Concurrency & Performance",
      icon: <Cpu className="w-6 h-6" />,
      skills: ["Multithreading", "pthreads", "Optimization", "Parallel Computing"],
      color: "destructive"
    },
    {
      title: "Modern Tools",
      icon: <Zap className="w-6 h-6" />,
      skills: ["Git", "Linux", "Exchange Server", "UI/UX Design", "Agile"],
      color: "ai-blue"
    }
  ];

  const getColorClasses = (color: string) => {
    const colorMap = {
      primary: "bg-primary/10 text-primary border-primary/20",
      accent: "bg-accent/10 text-accent border-accent/20",
      "primary-glow": "bg-primary-glow/10 text-primary-glow border-primary-glow/20",
      secondary: "bg-secondary text-secondary-foreground border-secondary/20",
      muted: "bg-muted text-muted-foreground border-muted-foreground/20",
      destructive: "bg-destructive/10 text-destructive border-destructive/20",
      "ai-cyan": "bg-gradient-to-br from-cyan-400/10 to-blue-500/10 text-cyan-400 border-cyan-400/30",
      "ai-blue": "bg-gradient-to-br from-blue-400/10 to-purple-500/10 text-blue-400 border-blue-400/30"
    };
    return colorMap[color as keyof typeof colorMap] || colorMap.primary;
  };

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Skills & Expertise
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>
        </div>
        
        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => (
            <Card 
              key={category.title} 
              className={`p-6 bg-card-gradient shadow-custom-md hover:shadow-custom-lg transition-all duration-300 hover:scale-105 relative overflow-hidden ${
                category.featured ? 'ring-2 ring-cyan-400/30 shadow-ai-glow animate-ai-pulse' : ''
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {category.featured && (
                <div className="absolute top-2 right-2">
                  <Badge className="bg-gradient-to-r from-cyan-400 to-blue-500 text-white text-xs">
                    AI Featured
                  </Badge>
                </div>
              )}
              
              <div className="flex items-center gap-3 mb-4">
                <div className={`p-3 rounded-full ${getColorClasses(category.color)} ${
                  category.featured ? 'animate-ai-pulse' : ''
                }`}>
                  {category.icon}
                </div>
                <h3 className="text-lg font-semibold text-foreground">
                  {category.title}
                </h3>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <Badge 
                    key={skill} 
                    variant="secondary"
                    className={`hover:bg-primary/10 hover:text-primary transition-colors duration-200 text-xs ${
                      category.featured ? 'bg-cyan-400/10 text-cyan-400 border-cyan-400/20' : ''
                    }`}
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
              
              {category.featured && (
                <div className="absolute inset-0 bg-neural-gradient opacity-20 pointer-events-none"></div>
              )}
            </Card>
          ))}
        </div>
        
        {/* AI-Enhanced Services Section */}
        <div className="mt-16 text-center">
          <div className="flex justify-center items-center gap-3 mb-8">
            <Brain className="w-8 h-8 text-cyan-400 animate-ai-pulse" />
            <h3 className="text-2xl font-bold text-foreground">AI-Powered Services</h3>
            <Zap className="w-6 h-6 text-blue-400 animate-float" />
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { 
                title: "Intelligent Mobile Apps", 
                icon: <Smartphone className="w-5 h-5" />,
                color: "from-cyan-400 to-blue-500"
              },
              { 
                title: "Smart Contract Development", 
                icon: <Blocks className="w-5 h-5" />,
                color: "from-blue-500 to-purple-600"
              },
              { 
                title: "AI System Integration", 
                icon: <Brain className="w-5 h-5" />,
                color: "from-purple-500 to-pink-500"
              },
              { 
                title: "Performance Optimization", 
                icon: <Zap className="w-5 h-5" />,
                color: "from-pink-500 to-red-500"
              }
            ].map((service, index) => (
              <Card 
                key={service.title}
                className="p-6 bg-card-gradient shadow-custom-sm hover:shadow-cyber transition-all duration-300 hover:scale-105 group relative overflow-hidden"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r ${service.color} text-white mb-4 group-hover:animate-ai-pulse`}>
                  {service.icon}
                </div>
                <p className="text-lg font-medium text-foreground group-hover:text-primary transition-colors">
                  {service.title}
                </p>
                <div className="absolute inset-0 bg-neural-gradient opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;