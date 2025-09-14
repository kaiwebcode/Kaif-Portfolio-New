"use client";

import {
  Code,
  Database,
  Smartphone,
  Globe,
  Brain,
  Users,
  Languages,
} from "lucide-react";
import { Card } from "./ui/card";
import { Progress } from "./ui/progress";
import { Badge } from "./ui/badge";
import { motion } from "framer-motion";

const Skills = () => {
  const technicalSkills = [
    { name: "React & Next.js", level: 90, icon: <Code className="h-5 w-5" /> },
    {
      name: "Node.js & Express",
      level: 85,
      icon: <Globe className="h-5 w-5" />,
    },
    {
      name: "MongoDB & PostgreSQL",
      level: 80,
      icon: <Database className="h-5 w-5" />,
    },
    { name: "TypeScript", level: 85, icon: <Code className="h-5 w-5" /> },
    {
      name: "Python & Data Science",
      level: 20,
      icon: <Brain className="h-5 w-5" />,
    },
    {
      name: "Mobile Development",
      level: 40,
      icon: <Smartphone className="h-5 w-5" />,
    },
  ];

  const softSkills = [
    { name: "Project Management", icon: <Users className="h-5 w-5" /> },
    { name: "Teamwork", icon: <Users className="h-5 w-5" /> },
    { name: "Problem Solving", icon: <Brain className="h-5 w-5" /> },
    { name: "Public Relations", icon: <Users className="h-5 w-5" /> },
  ];

  const languages = [
    { name: "English", level: "Fluent" },
    { name: "Hindi", level: "Native" },
  ];

  return (
    <section id="skills" className="py-24 relative">
      <div className="container mx-auto px-6">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent">
            Skills & Expertise
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Full-stack development, scalable backend systems, and strong
            leadership with problem-solving mindset.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid lg:grid-cols-3 gap-10">
          {/* Technical Skills */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <Card className="p-8 shadow-xl hover:shadow-blue-500/40 transition-all duration-300 rounded-2xl">
              <div className="flex items-center mb-6">
                <Code className="h-6 w-6 text-primary mr-3" />
                <h3 className="text-2xl font-semibold">Technical Skills</h3>
              </div>

              <div className="space-y-6">
                {technicalSkills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    viewport={{ once: true }}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center">
                        <span className="text-primary mr-2">{skill.icon}</span>
                        <span className="font-medium">{skill.name}</span>
                      </div>
                      <span className="text-sm text-muted-foreground">
                        {skill.level}%
                      </span>
                    </div>
                    <Progress
                      value={skill.level}
                      className="h-2 bg-muted overflow-hidden"
                    />
                  </motion.div>
                ))}
              </div>

              {/* Tech Stack Badges */}
              <div className="mt-10">
                <h4 className="text-lg font-semibold mb-4 text-primary">
                  Technologies & Tools
                </h4>
                <div className="flex flex-wrap gap-2">
                  {[
                    "React",
                    "Next.js",
                    "Node.js",
                    "Express",
                    "MongoDB",
                    "PostgreSQL",
                    "Prisma",
                    "TypeScript",
                    "JavaScript",
                    "Python",
                    "Tailwind CSS",
                    "Socket.io",
                    "Convex",
                    "Liveblocks",
                    "Clerk",
                    "Stripe",
                    "Cloudinary",
                    "Vercel",
                    "GitHub",
                  ].map((tech, index) => (
                    <motion.div
                      key={tech}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.05, duration: 0.3 }}
                      viewport={{ once: true }}
                    >
                      <Badge className="px-3 py-1 rounded-full border hover:bg-blue-500 hover:text-white transition-all cursor-default shadow-sm">
                        {tech}
                      </Badge>
                    </motion.div>
                  ))}
                </div>
              </div>
            </Card>
          </motion.div>

          {/* Soft Skills & Languages */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Soft Skills */}
            <Card className="p-6 shadow-lg hover:shadow-blue-500/40 transition-all duration-300 rounded-2xl">
              <div className="flex items-center mb-6">
                <Users className="h-6 w-6 text-primary mr-3" />
                <h3 className="text-xl font-semibold">Soft Skills</h3>
              </div>
              <div className="space-y-4">
                {softSkills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    viewport={{ once: true }}
                    className="flex items-center"
                  >
                    <span className="text-primary mr-3">{skill.icon}</span>
                    <span className="font-medium">{skill.name}</span>
                  </motion.div>
                ))}
              </div>
            </Card>

            {/* Languages */}
            <Card className="p-6 shadow-lg hover:shadow-blue-500/40 transition-all duration-300 rounded-2xl">
              <div className="flex items-center mb-6">
                <Languages className="h-6 w-6 text-primary mr-3" />
                <h3 className="text-xl font-semibold">Languages</h3>
              </div>
              <div className="space-y-4">
                {languages.map((lang, index) => (
                  <motion.div
                    key={lang.name}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.4 }}
                    viewport={{ once: true }}
                    className="flex justify-between items-center"
                  >
                    <span className="font-medium">{lang.name}</span>
                    <Badge className="bg-muted text-foreground px-3">
                      {lang.level}
                    </Badge>
                  </motion.div>
                ))}
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
