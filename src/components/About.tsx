"use client";

import { Card } from "./ui/card";
import { Mail, MapPin, BookOpen, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.15 },
  }),
};

const About = () => {
  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Section Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-center mb-12"
        >
          About Me
        </motion.h2>

        {/* Main Layout */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Profile */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            custom={0}
            viewport={{ once: true }}
          >
            <Card className="p-8 text-center shadow-md rounded-xl space-y-6">
              {/* Avatar */}
              <div className="flex justify-center">
                <div className="h-24 w-24 rounded-full bg-gray-200 flex items-center justify-center text-gray-700 font-bold text-2xl">
                  KQ
                </div>
              </div>

              {/* Name */}
              <div>
                <h3 className="text-2xl font-semibold">Kaif Qureshi</h3>
                <p className="text-muted-foreground text-base">
                  Full-Stack Developer • Problem Solver
                </p>
              </div>

              <hr className="border-t border-muted-foreground/20 my-4" />

              {/* Location & Role */}
              <div className="space-y-3 text-muted-foreground text-sm">
                <p className="flex items-center justify-center gap-2">
                  <MapPin className="h-4 w-4 text-primary" /> Mumbai, India
                </p>
                <p className="flex items-center justify-center gap-2">
                  <BookOpen className="h-4 w-4 text-primary" /> Computer Science
                  Student
                </p>
              </div>

              {/* Contact Button */}
              <motion.a
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                href="mailto:kaifqureshi.pr@gmail.com"
                className="inline-flex items-center justify-center w-full px-5 py-3 bg-primary text-white rounded-lg font-medium transition shadow-sm"
              >
                <Mail className="h-4 w-4 mr-2" /> Get in Touch
              </motion.a>
            </Card>
          </motion.div>

          {/* Right About Content */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            custom={1}
            viewport={{ once: true }}
            className="space-y-10"
          >
            {/* Text */}
            <div className="space-y-6">
              <p className="text-muted-foreground leading-relaxed text-lg">
                I’m a Computer Science student passionate about crafting
                <strong> scalable web applications</strong> and solving
                <strong> real-world problems</strong> with technology. With
                hands-on experience in full-stack projects, I enjoy turning
                ideas into clean, efficient, and user-friendly solutions.
              </p>
              <p className="text-muted-foreground leading-relaxed text-lg">
                Beyond coding, I’m a <strong>continuous learner</strong>, always
                exploring new frameworks, tools, and technologies. My goal is to
                grow as a developer and contribute to impactful projects that
                make a difference.
              </p>
            </div>

            {/* Traits */}
            <div className="grid sm:grid-cols-2 gap-6">
              <motion.div
                whileHover={{ scale: 1.03 }}
                className="p-6 text-center rounded-lg border bg-background shadow-md hover:shadow-lg hover:shadow-blue-500 transition-all duration-300"
              >
                <Sparkles className="h-6 w-6 text-primary mx-auto mb-3" />
                <h3 className="font-semibold text-lg">Problem Solver</h3>
                <p className="text-muted-foreground text-sm mt-2">
                  Skilled at breaking down challenges into simple, effective
                  solutions.
                </p>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.03 }}
                className="p-6 text-center rounded-lg border bg-background shadow-md hover:shadow-lg hover:shadow-blue-500 transition-all duration-300"
              >
                <BookOpen className="h-6 w-6 text-primary mx-auto mb-3" />
                <h3 className="font-semibold text-lg">Continuous Learner</h3>
                <p className="text-muted-foreground text-sm mt-2">
                  Always exploring modern technologies and staying ahead of
                  trends.
                </p>
              </motion.div>
            </div>

            {/* Quote */}
            <blockquote className="text-center text-lg italic font-medium text-muted-foreground">
              "Code is not just about building apps, it’s about creating
              experiences that inspire and empower."
            </blockquote>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
