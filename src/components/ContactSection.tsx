import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, Linkedin, Github, MapPin, Send } from "lucide-react";

const ContactSection = () => {
  const contactInfo = [
    {
      icon: <Phone className="w-5 h-5" />,
      label: "Phone",
      value: "0320-7703583",
      href: "tel:03207703583"
    },
    {
      icon: <Mail className="w-5 h-5" />,
      label: "Email",
      value: "saadjamil196@gmail.com",
      href: "mailto:saadjamil196@gmail.com"
    },
    {
      icon: <Linkedin className="w-5 h-5" />,
      label: "LinkedIn",
      value: "saad-j-usmani",
      href: "https://www.linkedin.com/in/saad-j-usmani-/"
    },
    {
      icon: <Github className="w-5 h-5" />,
      label: "GitHub",
      value: "SaadJamil19",
      href: "https://github.com/SaadJamil19"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Let's Work Together
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ready to discuss your project? Get in touch and let's create something amazing together.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6">Contact Information</h3>
              <div className="space-y-4">
                {contactInfo.map((item) => (
                  <Card key={item.label} className="p-4 bg-card-gradient shadow-custom-sm hover:shadow-custom-md transition-all duration-300">
                    <a 
                      href={item.href}
                      target={item.href.startsWith('http') ? '_blank' : undefined}
                      rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="flex items-center gap-4 group"
                    >
                      <div className="p-3 bg-primary/10 rounded-full group-hover:bg-primary/20 transition-colors">
                        {item.icon}
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">{item.label}</p>
                        <p className="text-lg font-medium text-foreground group-hover:text-primary transition-colors">
                          {item.value}
                        </p>
                      </div>
                    </a>
                  </Card>
                ))}
              </div>
            </div>

            {/* Location */}
            <Card className="p-6 bg-card-gradient shadow-custom-md">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-accent/10 rounded-full">
                  <MapPin className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-foreground mb-2">Location</h4>
                  <p className="text-muted-foreground">Karachi, Pakistan</p>
                  <p className="text-sm text-muted-foreground mt-1">
                    Available for remote work and local collaboration
                  </p>
                </div>
              </div>
            </Card>

            {/* Availability */}
            <Card className="p-6 bg-card-gradient shadow-custom-md border-primary/20">
              <h4 className="text-lg font-semibold text-foreground mb-3">Current Availability</h4>
              <div className="flex items-center gap-2 mb-2">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-foreground font-medium">Available for new projects</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Open to full-time opportunities, internships, and freelance projects
              </p>
            </Card>
          </div>

          {/* Contact Form */}
          <Card className="p-8 bg-card-gradient shadow-custom-lg">
            <h3 className="text-2xl font-bold text-foreground mb-6">Send a Message</h3>
            <form className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    First Name
                  </label>
                  <Input 
                    placeholder="Your first name"
                    className="bg-background border-border focus:border-primary transition-colors"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    Last Name
                  </label>
                  <Input 
                    placeholder="Your last name"
                    className="bg-background border-border focus:border-primary transition-colors"
                  />
                </div>
              </div>
              
              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">
                  Email
                </label>
                <Input 
                  type="email" 
                  placeholder="your.email@example.com"
                  className="bg-background border-border focus:border-primary transition-colors"
                />
              </div>
              
              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">
                  Subject
                </label>
                <Input 
                  placeholder="What's this about?"
                  className="bg-background border-border focus:border-primary transition-colors"
                />
              </div>
              
              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">
                  Message
                </label>
                <Textarea 
                  placeholder="Tell me about your project..."
                  rows={5}
                  className="bg-background border-border focus:border-primary transition-colors resize-none"
                />
              </div>
              
              <Button 
                type="submit" 
                size="lg"
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold"
              >
                <Send className="w-4 h-4 mr-2" />
                Send Message
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;