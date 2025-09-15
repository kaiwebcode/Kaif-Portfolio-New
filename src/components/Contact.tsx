"use client";

import {
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  Send,
  Globe,
} from "lucide-react";
import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";
import { useState } from "react";
import { motion } from "framer-motion";
import axios from "axios";
import { toast } from "sonner";
// import toast, { Toaster } from "react-hot-toast";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState(""); 
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const serviceId = "service_h0c77kg";
    const templateId = "template_5u90xom";
    const publicKey = "vsuZ78AtVSUYAFLtA";

    const data = {
      service_id: serviceId,
      template_id: templateId,
      user_id: publicKey,
      template_params: {
        from_name: name,
        from_email: email,
        subject: subject,
        to_name: "Kaif Qureshi",
        message: message,
      },
    };

    try {
      await axios.post("https://api.emailjs.com/api/v1.0/email/send", data);
      toast.success("✅ Message sent successfully!");
      setName("");
      setEmail("");
      setSubject("");
      setMessage("");
    } catch (error) {
      console.error(error);
      toast.error("❌ Failed to send message. Try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-24 relative">
      {/* <Toaster position="top-right" className="bg-black" /> */}
      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
            Let&apos;s Connect
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to bring your ideas to life? Let&apos;s discuss how we can
            work together to create something amazing.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Left - Contact Info */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Card className="p-8 glass-card hover-lift">
              <h3 className="text-2xl font-semibold mb-6 text-primary">
                Get in Touch
              </h3>
              <div className="space-y-6">
                {[
                  {
                    icon: Mail,
                    label: "Email",
                    value: "kaifqureshi.pr@gmail.com",
                    link: "mailto:kaif.qureshi01@gmail.com",
                  },
                  // {
                  //   icon: Phone,
                  //   label: "Phone",
                  //   value: "+91 453998570",
                  //   link: "tel:+91453998570",
                  // },
                  {
                    icon: MapPin,
                    label: "Location",
                    value: "Mumbai, Maharashtra, India",
                  },
                  // {
                  //   icon: Globe,
                  //   label: "Portfolio",
                  //   value: "kaif-portfolio-vercel.app",
                  //   link: "https://kaif-portfolio-vercel.app",
                  // },
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center group">
                    <div className="p-3 rounded-full bg-primary/10 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300 mr-4">
                      <item.icon className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="font-medium">{item.label}</p>
                      {item.link ? (
                        <a
                          href={item.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-muted-foreground hover:text-primary transition-colors"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-muted-foreground">{item.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            <Card className="p-8 glass-card hover-lift">
              <h3 className="text-xl font-semibold mb-6">Follow Me</h3>
              <div className="flex gap-4">
                {[
                  {
                    icon: Github,
                    link: "https://github.com/kaifqureshi",
                    label: "GitHub",
                  },
                  {
                    icon: Linkedin,
                    link: "https://linkedin.com/in/kaifqureshi",
                    label: "LinkedIn",
                  },
                  {
                    icon: Mail,
                    link: "mailto:kaif.qureshi01@gmail.com",
                    label: "Email",
                  },
                ].map((item, idx) => (
                  <a
                    key={idx}
                    href={item.link}
                    className="p-4 rounded-full bg-card hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover-lift"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={item.label}
                  >
                    <item.icon className="h-6 w-6" />
                  </a>
                ))}
              </div>
            </Card>

            <Card className="p-6 glass-card">
              <div className="text-center">
                <Badge variant="secondary" className="mb-4 px-4 py-2">
                  🚀 Open to Opportunities
                </Badge>
                <p className="text-sm text-muted-foreground">
                  Currently seeking full-stack development roles and exciting
                  projects. Let&apos;s build something amazing together!
                </p>
              </div>
            </Card>
          </motion.div>

          {/* Right - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Card className="p-8 glass-card hover-lift">
              <h3 className="text-2xl font-semibold mb-6 text-primary">
                Send a Message
              </h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium mb-2"
                    >
                      Name
                    </label>
                    <Input
                      id="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium mb-2"
                    >
                      Email
                    </label>
                    <Input
                      id="email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium mb-2"
                  >
                    Subject
                  </label>
                  <Input
                    id="subject"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    required
                    placeholder="Project discussion, collaboration, etc."
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium mb-2"
                  >
                    Message
                  </label>
                  <Textarea
                    id="message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                    placeholder="Tell me about your project or ideas..."
                    className="min-h-[120px]"
                  />
                </div>

                <Button
                  type="submit"
                  disabled={loading}
                  className="w-full hover-glow group"
                  size="lg"
                >
                  <Send className="mr-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  {loading ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
