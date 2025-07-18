import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Form, FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { Mail, Phone, Linkedin, Github, MapPin, Send, Loader2 } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import emailjs from "@emailjs/browser";
import { toast } from "sonner";
import { useState } from "react";

// Form validation schema
const formSchema = z.object({
  firstName: z.string().min(2, "First name must be at least 2 characters"),
  lastName: z.string().min(2, "Last name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  subject: z.string().min(5, "Subject must be at least 5 characters"),
  message: z.string().min(10, "Message must be at least 10 characters")
});

type FormData = z.infer<typeof formSchema>;

const ContactSection = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      subject: "",
      message: ""
    }
  });

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    
    try {
      const templateParams = {
        from_name: `${data.firstName} ${data.lastName}`,
        from_email: data.email,
        subject: data.subject,
        message: data.message,
        to_name: "Saad Jamil"
      };

      await emailjs.send(
        "service_fyuki6e",     // Service ID
        "template_vzqxrz3",    // Template ID
        templateParams,
        "YGDWQgwXghLsO8NXX"    // Public Key
      );

      toast.success("Message sent successfully! I'll get back to you soon.");
      form.reset();
    } catch (error) {
      console.error("EmailJS error:", error);
      toast.error("Failed to send message. Please try again or contact me directly.");
    } finally {
      setIsSubmitting(false);
    }
  };

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
    <section id="contact-section" className="py-20 bg-background">
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
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="firstName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>First Name</FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="Your first name"
                            className="bg-background border-border focus:border-primary transition-colors"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="lastName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Last Name</FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="Your last name"
                            className="bg-background border-border focus:border-primary transition-colors"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input 
                          type="email" 
                          placeholder="your.email@example.com"
                          className="bg-background border-border focus:border-primary transition-colors"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="subject"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Subject</FormLabel>
                      <FormControl>
                        <Input 
                          placeholder="What's this about?"
                          className="bg-background border-border focus:border-primary transition-colors"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Message</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="Tell me about your project..."
                          rows={5}
                          className="bg-background border-border focus:border-primary transition-colors resize-none"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <Button 
                  type="submit" 
                  size="lg"
                  disabled={isSubmitting}
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                  ) : (
                    <Send className="w-4 h-4 mr-2" />
                  )}
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </Form>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
