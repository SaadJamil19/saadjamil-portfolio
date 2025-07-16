import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Smartphone, Database, Settings, Blocks, Globe } from "lucide-react";

const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Mobile Development",
      icon: <Smartphone className="w-6 h-6" />,
      skills: ["React Native", "Flutter", "Dart"],
      color: "primary"
    },
    {
      title: "Web & Backend",
      icon: <Globe className="w-6 h-6" />,
      skills: ["ASP.NET", "JavaScript", "HTML", "CSS", "API Integration"],
      color: "accent"
    },
    {
      title: "Blockchain",
      icon: <Blocks className="w-6 h-6" />,
      skills: ["Ethereum", "Smart Contracts", "Solidity", "ERC-20"],
      color: "primary-glow"
    },
    {
      title: "System Programming",
      icon: <Code className="w-6 h-6" />,
      skills: ["C", "C++", "Python", "Shell Scripting", "Bash"],
      color: "secondary"
    },
    {
      title: "Concurrency",
      icon: <Settings className="w-6 h-6" />,
      skills: ["pthreads", "semaphores"],
      color: "muted"
    },
    {
      title: "Tools & Technologies",
      icon: <Database className="w-6 h-6" />,
      skills: ["Git", "Linux", "Exchange Server", "UI/UX Design"],
      color: "accent"
    }
  ];

  const getColorClasses = (color: string) => {
    const colorMap = {
      primary: "bg-primary/10 text-primary border-primary/20",
      accent: "bg-accent/10 text-accent border-accent/20",
      "primary-glow": "bg-primary-glow/10 text-primary-glow border-primary-glow/20",
      secondary: "bg-secondary text-secondary-foreground border-secondary/20",
      muted: "bg-muted text-muted-foreground border-muted-foreground/20"
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
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <Card 
              key={category.title} 
              className="p-6 bg-card-gradient shadow-custom-md hover:shadow-custom-lg transition-all duration-300 hover:scale-105"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className={`p-3 rounded-full ${getColorClasses(category.color)}`}>
                  {category.icon}
                </div>
                <h3 className="text-xl font-semibold text-foreground">
                  {category.title}
                </h3>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <Badge 
                    key={skill} 
                    variant="secondary"
                    className="hover:bg-primary/10 hover:text-primary transition-colors duration-200"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </Card>
          ))}
        </div>
        
        {/* Additional Services */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-foreground mb-8">Services I Offer</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              "Mobile App Development",
              "API Development & Integration", 
              "Blockchain Smart Contracts",
              "System Performance Optimization"
            ].map((service, index) => (
              <Card 
                key={service}
                className="p-4 bg-card-gradient shadow-custom-sm hover:shadow-custom-md transition-all duration-300"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <p className="text-lg font-medium text-foreground">{service}</p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;