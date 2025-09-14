
import { 
  Mail, 
  Phone, 
  MapPin, 
  Github, 
  Linkedin, 
  Send,
  Globe
} from "lucide-react";
import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";

const Contact = () => {
  return (
    <section id="contact" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
            Let's Connect
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to bring your ideas to life? Let's discuss how we can work together 
            to create something amazing.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-8">
            <Card className="p-8 glass-card hover-lift">
              <h3 className="text-2xl font-semibold mb-6 text-primary">
                Get in Touch
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-center group">
                  <div className="p-3 rounded-full bg-primary/10 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300 mr-4">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-medium">Email</p>
                    <a 
                      href="mailto:kaif.qureshi01@gmail.com" 
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      kaif.qureshi01@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center group">
                  <div className="p-3 rounded-full bg-primary/10 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300 mr-4">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-medium">Phone</p>
                    <a 
                      href="tel:+91453998570" 
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      +91 453998570
                    </a>
                  </div>
                </div>

                <div className="flex items-center group">
                  <div className="p-3 rounded-full bg-primary/10 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300 mr-4">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-medium">Location</p>
                    <p className="text-muted-foreground">Mumbai, Maharashtra, India</p>
                  </div>
                </div>

                <div className="flex items-center group">
                  <div className="p-3 rounded-full bg-primary/10 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300 mr-4">
                    <Globe className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-medium">Portfolio</p>
                    <a 
                      href="https://kaif-portfolio-vercel.app" 
                      className="text-muted-foreground hover:text-primary transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      kaif-portfolio-vercel.app
                    </a>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="p-8 glass-card hover-lift">
              <h3 className="text-xl font-semibold mb-6">
                Follow Me
              </h3>
              
              <div className="flex gap-4">
                <a
                  href="https://github.com/kaifqureshi"
                  className="p-4 rounded-full bg-card hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover-lift"
                  aria-label="GitHub Profile"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="h-6 w-6" />
                </a>
                <a
                  href="https://linkedin.com/in/kaifqureshi"
                  className="p-4 rounded-full bg-card hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover-lift"
                  aria-label="LinkedIn Profile"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin className="h-6 w-6" />
                </a>
                <a
                  href="mailto:kaif.qureshi01@gmail.com"
                  className="p-4 rounded-full bg-card hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover-lift"
                  aria-label="Email Contact"
                >
                  <Mail className="h-6 w-6" />
                </a>
              </div>
            </Card>

            <Card className="p-6 glass-card">
              <div className="text-center">
                <Badge variant="secondary" className="mb-4 px-4 py-2">
                  🚀 Open to Opportunities
                </Badge>
                <p className="text-sm text-muted-foreground">
                  Currently seeking full-stack development roles and exciting projects. 
                  Let's build something amazing together!
                </p>
              </div>
            </Card>
          </div>

          {/* Contact Form */}
          <Card className="p-8 glass-card hover-lift">
            <h3 className="text-2xl font-semibold mb-6 text-primary">
              Send a Message
            </h3>
            
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Name
                  </label>
                  <Input 
                    id="name"
                    placeholder="Your name"
                    className="transition-all duration-300 focus:shadow-primary"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email
                  </label>
                  <Input 
                    id="email"
                    type="email"
                    placeholder="your.email@example.com"
                    className="transition-all duration-300 focus:shadow-primary"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium mb-2">
                  Subject
                </label>
                <Input 
                  id="subject"
                  placeholder="Project discussion, collaboration, etc."
                  className="transition-all duration-300 focus:shadow-primary"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message
                </label>
                <Textarea 
                  id="message"
                  placeholder="Tell me about your project or ideas..."
                  className="min-h-[120px] transition-all duration-300 focus:shadow-primary"
                />
              </div>
              
              <Button className="w-full hover-glow group" size="lg">
                <Send className="mr-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                Send Message
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;