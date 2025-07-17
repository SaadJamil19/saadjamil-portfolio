import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Smartphone, Mail, Blocks, BarChart3, Package, CreditCard } from "lucide-react";

const ProjectsSection = () => {
  const projects = [
    {
      title: "PIA Mobile Application",
      description: "Cross-platform mobile app built with React Native featuring comprehensive UI/UX improvements for Pakistan International Airlines.",
      details: [
        "Implemented responsive design for iOS and Android platforms",
        "Enhanced user experience with modern UI components",
        "Integrated real-time flight information and booking system",
        "Optimized performance for smooth navigation"
      ],
      icon: <Smartphone className="w-6 h-6" />,
      technologies: ["React Native", "UI/UX Design", "Cross-platform"],
      category: "Mobile Development",
      color: "primary"
    },
    {
      title: "Email Automation System",
      description: "Python-based solution for auto-fetching, storing, and organizing emails with attachments from Exchange Server 2010.",
      details: [
        "Automated email fetching from Exchange Server 2010",
        "Intelligent email categorization and attachment handling",
        "Built intuitive UI for email management and responses",
        "Implemented auto-response functionality"
      ],
      icon: <Mail className="w-6 h-6" />,
      technologies: ["Python", "Exchange Server", "UI Development", "Automation"],
      category: "System Programming",
      color: "accent"
    },
    {
      title: "DeFi Bank on Blockchain",
      description: "Decentralized finance application built with smart contracts using Solidity and ERC-20 token standards.",
      details: [
        "Developed secure smart contracts on Ethereum blockchain",
        "Implemented ERC-20 token functionality",
        "Created decentralized lending and borrowing features",
        "Integrated Web3 wallet connectivity"
      ],
      icon: <Blocks className="w-6 h-6" />,
      technologies: ["Solidity", "Ethereum", "Smart Contracts", "ERC-20"],
      category: "Blockchain",
      color: "primary-glow"
    },
    {
      title: "Sorting Algorithm Performance Comparison",
      description: "Multithreaded C application comparing performance of various sorting algorithms using pthreads and semaphores.",
      details: [
        "Implemented multiple sorting algorithms (Quick, Merge, Heap)",
        "Used pthreads for concurrent processing",
        "Applied semaphores for thread synchronization",
        "Generated detailed performance analysis reports"
      ],
      icon: <BarChart3 className="w-6 h-6" />,
      technologies: ["C", "pthreads", "semaphores", "Performance Analysis"],
      category: "System Programming",
      color: "secondary"
    },
    {
      title: "Super Market Billing System",
      description: "Object-oriented C++ application with modular CLI interface for managing supermarket billing operations.",
      details: [
        "Designed modular architecture using OOP principles",
        "Implemented inventory management system",
        "Created comprehensive billing and receipt generation",
        "Added customer management and discount features"
      ],
      icon: <Package className="w-6 h-6" />,
      technologies: ["C++", "OOP", "CLI", "Modular Design"],
      category: "Desktop Application",
      color: "muted"
    },
    {
      title: "ATM Banking System",
      description: "Secure C-based ATM simulation system with comprehensive banking operations and security features.",
      details: [
        "Implemented secure PIN authentication system",
        "Created balance inquiry and transaction history",
        "Added cash withdrawal and deposit functionality",
        "Built transaction logging and security measures"
      ],
      icon: <CreditCard className="w-6 h-6" />,
      technologies: ["C", "Security", "Banking Operations", "System Design"],
      category: "System Programming",
      color: "destructive"
    }
  ];

  const getColorClasses = (color: string) => {
    const colorMap = {
      primary: "bg-primary/10 text-primary border-primary/20",
      accent: "bg-accent/10 text-accent border-accent/20",
      "primary-glow": "bg-primary-glow/10 text-primary-glow border-primary-glow/20",
      secondary: "bg-secondary text-secondary-foreground border-secondary/20",
      muted: "bg-muted text-muted-foreground border-muted-foreground/20",
      destructive: "bg-destructive/10 text-destructive border-destructive/20"
    };
    return colorMap[color as keyof typeof colorMap] || colorMap.primary;
  };

  return (
    <section id="projects-section" className="py-20 bg-section-gradient">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Featured Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Showcasing real-world applications and technical solutions I've built
          </p>
        </div>
        
        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={project.title}
              className="p-6 bg-card-gradient shadow-custom-md hover:shadow-custom-lg transition-all duration-300 hover:scale-105 group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start justify-between mb-4">
                <div className={`p-3 rounded-full ${getColorClasses(project.color)}`}>
                  {project.icon}
                </div>
                <Badge variant="outline" className="text-xs">
                  {project.category}
                </Badge>
              </div>
              
              <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                {project.title}
              </h3>
              
              <p className="text-muted-foreground mb-4 leading-relaxed">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech) => (
                  <Badge 
                    key={tech} 
                    variant="secondary"
                    className="text-xs"
                  >
                    {tech}
                  </Badge>
                ))}
              </div>
              
              {/* Project Details */}
              <div className="mb-4">
                <h4 className="text-sm font-semibold text-foreground mb-2">Key Features:</h4>
                <ul className="space-y-1">
                  {project.details.map((detail, detailIndex) => (
                    <li key={detailIndex} className="text-sm text-muted-foreground flex items-start">
                      <span className="w-1 h-1 bg-primary rounded-full mt-2 mr-2 flex-shrink-0"></span>
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="flex gap-2">
                <Button 
                  size="sm" 
                  variant="ghost"
                  className="px-3"
                >
                  <Github className="w-4 h-4" />
                </Button>
              </div>
            </Card>
          ))}
        </div>
        
        {/* Additional Project Info */}
        <div className="mt-16 text-center">
          <Card className="p-8 bg-card-gradient shadow-custom-md max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Additional Notable Work
            </h3>
            <div className="grid md:grid-cols-2 gap-6 text-left">
              <div>
                <h4 className="text-lg font-semibold text-foreground mb-2">
                  Sabaq Foundation Media Page Clone
                </h4>
                <p className="text-muted-foreground">
                  Responsive frontend implementation using HTML/CSS with modern design principles and mobile-first approach.
                </p>
                <div className="flex gap-2 mt-2">
                  <Badge variant="secondary">HTML</Badge>
                  <Badge variant="secondary">CSS</Badge>
                  <Badge variant="secondary">Responsive Design</Badge>
                </div>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-foreground mb-2">
                  Performance Optimization Projects
                </h4>
                <p className="text-muted-foreground">
                  Various system-level optimizations focusing on memory management, algorithm efficiency, and concurrent processing.
                </p>
                <div className="flex gap-2 mt-2">
                  <Badge variant="secondary">Performance</Badge>
                  <Badge variant="secondary">Optimization</Badge>
                  <Badge variant="secondary">Concurrency</Badge>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
