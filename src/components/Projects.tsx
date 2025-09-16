"use client";

import {
  Github,
  ExternalLink,
  Calendar,
  ArrowUpRight,
} from "lucide-react";
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
      title: "Ero.io Full-stack Web App",
      description:
        "A real-time collaborative whiteboard application with multi-user cursor rendering, drawing tools, snapping features, and smart alignment guides.",
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
      liveUrl: "https://ero-io-kai.vercel.app",
      githubUrl: "https://github.com/kaiwebcode/Ero.io",
    },
    {
      title: "Kai-Ecommerce-Shoes",
      description:
        "A scalable e-commerce platform featuring secure authentication, payment processing, and optimized performance.",
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
      liveUrl: "https://kai-ecommerce-shoees.vercel.app",
      githubUrl: "https://github.com/kaiwebcode/Kai-Ecommerce-Shoees",
    },
    {
      title: "Kai E-learning LMS (Learning Management System) ",
      description:
        "A Learning Management System with role-based dashboards, interactive course tracking, and secure video streaming.",
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
      liveUrl: "https://kai-e-learning-management.vercel.app",
      githubUrl: "https://github.com/kaiwebcode/Kai-E-learning-Management",
    },
    {
      title: "Kai-Social-Media web App",
      description:
        "A full-featured social media platform with Instagram-like functionality, real-time chat, and advanced media management.",
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
      liveUrl: "https://kai-social-app.onrender.com",
      githubUrl: "https://github.com/kaiwebcode/Kai-Social-Web",
    },
  ];

  // Animation variants for scroll reveal
  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, delay: i * 0.15 },
    }),
  };

  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      {/* Background gradient blur effect */}
      <div className="absolute -top-20 left-0 w-72 h-72 bg-blue-500/20 blur-[100px] rounded-full" />
      <div className="absolute -bottom-20 right-0 w-72 h-72 bg-purple-500/20 blur-[100px] rounded-full" />

      <div className="container mx-auto px-6">
        {/* Section Title */}
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
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
          >
            A showcase of my full-stack projects, built with cutting-edge
            technologies and crafted for performance, design, and user
            experience.
          </motion.p>
        </div>

        {/* Project Cards */}
        <div className="grid lg:grid-cols-2 gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={index}
            >
              <Card className="group glass-card hover-lift overflow-hidden bg-card/60 backdrop-blur-lg border border-white/10 shadow-xl transition-all duration-500 hover:shadow-lg hover:shadow-blue-500">
                {/* Project Image */}
                <div className="relative overflow-hidden">
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-20 z-10`}
                  />
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-52 object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute top-4 left-4 z-20">
                    <Badge
                      variant="outline"
                      className="bg-background/80 backdrop-blur-sm border-white/20"
                    >
                      {project.type}
                    </Badge>
                  </div>
                  <div className="absolute top-4 right-4 z-20 flex items-center text-xs text-white bg-black/50 backdrop-blur-sm px-2 py-1 rounded-full">
                    <Calendar className="h-3 w-3 mr-1" />
                    {project.year}
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <ArrowUpRight className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </div>

                  <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                    {project.description}
                  </p>

                  <div className="mb-4">
                    <h4 className="font-semibold mb-2 text-primary text-sm">
                      Key Features
                    </h4>
                    <ul className="grid grid-cols-2 gap-1">
                      {project.features.map((feature, idx) => (
                        <li
                          key={idx}
                          className="flex items-center text-xs text-muted-foreground"
                        >
                          <div className="w-1 h-1 bg-primary rounded-full mr-2" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-4 flex flex-wrap gap-1">
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

                  {/* Action Buttons */}
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

        {/* View More */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <Button
            variant="outline"
            size="lg"
            className="hover-lift group"
            onClick={() => window.open("https://github.com/kaiwebcode", "_blank")}
          >
            <Github className="mr-2 h-5 w-5 group-hover:rotate-12 transition-transform" />
            View All Projects on GitHub
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
