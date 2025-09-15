import { Github, ExternalLink, Calendar, ArrowUpRight } from "lucide-react";
import erosProjectImg from "../../public/assets/Ero.io.png";
import shoeKaiProjectImg from "../../public/assets/Kai-shoe-ecom.png";
import kaiElearningProjectImg from "../../public/assets/Kai-Elearning.png";
import kaiSocialProjectImg from "../../public/assets/Screenshot 2025-09-12 221223.png";
import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { motion } from "framer-motion";

const Projects = () => {
  const projects = [
    {
      title: "Envio Full-stack Web App",
      description:
        "A real-time collaborative whiteboard application with multi-user cursor rendering, drawing tools, snapping features, and smart alignment guides. Built for seamless team collaboration.",
      technologies: ["Next.js", "Convex", "Liveblocks", "Clerk", "Tailwind"],
      year: "2024-2025",
      type: "Real-time Collaboration",
      image: erosProjectImg,
      features: [
        "Multi-user cursor rendering",
        "Advanced drawing tools",
        "Smart alignment guides",
        "Responsive UI design",
      ],
      gradient: "from-blue-500 to-purple-600",
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      title: "Kaif Ecommerce Shoes",
      description:
        "A scalable e-commerce platform featuring secure authentication, payment processing, and optimized performance. Deployed on Vercel for fast, reliable user experience.",
      technologies: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "Stripe"],
      year: "2025",
      type: "E-commerce Platform",
      image: shoeKaiProjectImg,
      features: [
        "Kinde authentication",
        "Stripe payment integration",
        "Uploadthing Redis optimization",
        "Fast Vercel deployment",
      ],
      gradient: "from-green-500 to-blue-600",
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      title: "Kaif E-learning LMS",
      description:
        "A comprehensive Learning Management System with role-based dashboards, interactive course tracking, and secure video streaming for seamless online learning.",
      technologies: ["React", "Next.js", "Prisma", "PostgreSQL", "VdoCipher"],
      year: "2025",
      type: "Learning Management",
      image: kaiElearningProjectImg,
      features: [
        "Role-based dashboards",
        "Interactive course tracking",
        "Secure video streaming",
        "Real-time chat/notifications",
      ],
      gradient: "from-purple-500 to-pink-600",
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      title: "Kaif Social Media App",
      description:
        "A full-featured social media platform with Instagram-like functionality, real-time chat, and advanced media management through Cloudinary integration.",
      technologies: ["React", "Socket.io", "Cloudinary", "Custom Auth"],
      year: "2024",
      type: "Social Platform",
      image: kaiSocialProjectImg,
      features: [
        "Post creation & management",
        "Real-time chat system",
        "Friend interactions",
        "Media optimization",
      ],
      gradient: "from-pink-500 to-red-600",
      liveUrl: "#",
      githubUrl: "#",
    },
  ];

  return (
    <section id="projects" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent"
          >
            Featured Projects
          </motion.h2>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="h-1 w-24 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full mb-6"
          />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A showcase of my full-stack development projects, demonstrating
            expertise in modern web technologies and user-centric design.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              viewport={{ once: true }}
            >
              <Card
                key={project.title}
                className="group glass-card hover-lift overflow-hidden animate-scale-in bg-card/50 backdrop-blur-sm border-white/10"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Project Image */}
                <div className="relative overflow-hidden">
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-20 z-10`}
                  ></div>
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4 z-20">
                    <Badge
                      variant="outline"
                      className="bg-background/80 backdrop-blur-sm border-white/20"
                    >
                      {project.type}
                    </Badge>
                  </div>
                  <div className="absolute top-4 right-4 z-20">
                    <div className="flex items-center text-xs text-white bg-black/50 backdrop-blur-sm px-2 py-1 rounded-full">
                      <Calendar className="h-3 w-3 mr-1" />
                      {project.year}
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                        {project.title}
                      </h3>
                    </div>
                    <ArrowUpRight className="h-5 w-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" />
                  </div>

                  <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                    {project.description}
                  </p>

                  <div className="mb-4">
                    <h4 className="font-semibold mb-2 text-primary text-sm">
                      Key Features:
                    </h4>
                    <div className="grid grid-cols-2 gap-1">
                      {project.features.map((feature, idx) => (
                        <div
                          key={idx}
                          className="flex items-center text-xs text-muted-foreground"
                        >
                          <div className="w-1 h-1 bg-primary rounded-full mr-2 flex-shrink-0"></div>
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mb-4">
                    <div className="flex flex-wrap gap-1">
                      {project.technologies.map((tech) => (
                        <Badge
                          key={tech}
                          variant="secondary"
                          className="text-xs px-2 py-1"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <Button
                      size="sm"
                      className="flex-1 hover-glow text-xs"
                      onClick={() => window.open(project.githubUrl, "_blank")}
                    >
                      <Github className="h-3 w-3 mr-1" />
                      Code
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex-1 hover-lift text-xs"
                      onClick={() => window.open(project.liveUrl, "_blank")}
                    >
                      <ExternalLink className="h-3 w-3 mr-1" />
                      Live Demo
                    </Button>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" size="lg" className="hover-lift">
            <Github className="mr-2 h-5 w-5" />
            View All Projects on GitHub
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
