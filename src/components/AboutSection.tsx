import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Briefcase } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about-section" className="py-20 bg-section-gradient">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            About Me
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Passionate about creating efficient, user-centric software solutions
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Bio */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-foreground">My Story</h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              I'm a motivated and versatile software developer with hands-on experience in mobile app development, 
              system-level programming, and blockchain technologies. I have a proven ability to design and implement 
              real-world solutions, including cross-platform applications, smart contracts, and automation tools for legacy systems.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              With a strong foundation in computer science fundamentals, I take a practical approach to solving technical problems. 
              I'm passionate about building efficient, user-centric software with a focus on clean design, automation, and performance optimization.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              I excel at working in agile teams and managing end-to-end project lifecycles, always striving to deliver 
              high-quality solutions that meet both user needs and business objectives.
            </p>
          </div>
          
          {/* Education & Experience Cards */}
          <div className="space-y-6">
            {/* Education */}
            <Card className="p-6 bg-card-gradient shadow-custom-md hover:shadow-custom-lg transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-full">
                  <GraduationCap className="w-6 h-6 text-primary" />
                </div>
                <div className="flex-1">
                  <h4 className="text-xl font-semibold text-foreground mb-2">Education</h4>
                  <h5 className="text-lg font-medium text-primary mb-1">
                    BS in Computer Science
                  </h5>
                  <p className="text-muted-foreground mb-2">
                    FAST-National University of Computer and Emerging Sciences, Karachi
                  </p>
                  <div className="flex items-center gap-2">
                    <Badge variant="secondary">4th Semester Completed</Badge>
                    <span className="text-sm text-muted-foreground">Aug 2023 – Present</span>
                  </div>
                </div>
              </div>
            </Card>
            
            {/* Current Position */}
            <Card className="p-6 bg-card-gradient shadow-custom-md hover:shadow-custom-lg transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-accent/10 rounded-full">
                  <Briefcase className="w-6 h-6 text-accent" />
                </div>
                <div className="flex-1">
                  <h4 className="text-xl font-semibold text-foreground mb-2">Current Role</h4>
                  <h5 className="text-lg font-medium text-accent mb-1">
                    IT Intern
                  </h5>
                  <p className="text-muted-foreground mb-2">
                    Pakistan International Airlines (PIA), Karachi
                  </p>
                  <div className="flex items-center gap-2">
                    <Badge variant="outline">Active</Badge>
                    <span className="text-sm text-muted-foreground">June 2025 – Present</span>
                  </div>
                </div>
              </div>
            </Card>
            
            {/* Leadership Experience */}
            <Card className="p-6 bg-card-gradient shadow-custom-md hover:shadow-custom-lg transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary-glow/10 rounded-full">
                  <Briefcase className="w-6 h-6 text-primary-glow" />
                </div>
                <div className="flex-1">
                  <h4 className="text-xl font-semibold text-foreground mb-2">Leadership</h4>
                  <div className="space-y-2">
                    <div>
                      <h5 className="text-base font-medium text-foreground">Co-Head Seminar</h5>
                      <p className="text-sm text-muted-foreground">Developers' Day 2025, ACM NUCES KHI</p>
                    </div>
                    <div>
                      <h5 className="text-base font-medium text-foreground">Executive Guest Relations</h5>
                      <p className="text-sm text-muted-foreground">ACM NUCES KHI</p>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
