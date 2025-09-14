"use client";

import {
  Github,
  Linkedin,
  Mail,
  ChevronDown,
  Download,
} from "lucide-react";

import { Button } from "./ui/button";
import { motion } from "framer-motion";

const Hero = () => {
  const handleNavClick = (href: string) => {
    if (href === "#") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  };

  const handleDownloadCV = () => {
    // Ensure file is inside /public
    window.open("/Resume(kaif.q).pdf", "_blank");
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-hero opacity-30"></div>
      <div className="absolute top-20 left-10 w-52 h-52 md:w-72 md:h-72 bg-primary/25 rounded-full blur-3xl animate-float"></div>
      <div
        className="absolute bottom-20 right-10 w-72 h-72 md:w-96 md:h-96 bg-accent/20 rounded-full blur-3xl animate-float"
        style={{ animationDelay: "2s" }}
      ></div>

      {/* Floating Orbs */}
      <div
        className="absolute top-1/3 left-1/4 w-40 h-40 md:w-56 md:h-56 bg-primary/20 rounded-full blur-2xl animate-float"
        style={{ animationDelay: "4s" }}
      ></div>
      <div
        className="absolute top-1/4 right-1/4 w-28 h-28 md:w-40 md:h-40 bg-accent/30 rounded-full blur-xl animate-float"
        style={{ animationDelay: "6s" }}
      ></div>

      <div className="top-10 container mx-auto px-6 relative z-10">
        <div className="text-center max-w-5xl mx-auto">
          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-6xl sm:text-6xl md:text-8xl lg:text-9xl xl:text-8xl font-bold mb-6 leading-tight"
          >
            <span className="text-gradient block">KAIF</span>
            <span className="text-foreground block">QURESHI</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.8 }}
            className="text-lg sm:text-xl md:text-2xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed"
          >
            Full-Stack Developer passionate about building{" "}
            <span className="text-primary font-semibold">
              scalable modern web apps
            </span>{" "}
            and expanding into{" "}
            <span className="text-primary font-semibold">Data Science</span>.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            <Button
              size="lg"
              className="hover-lift hover-glow group"
              onClick={() => handleNavClick("#contact")}
            >
              <Mail className="mr-2 h-5 w-5 group-hover:rotate-12 transition-transform" />
              Contact Me
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="hover-lift"
              onClick={handleDownloadCV}
            >
              <Download className="mr-2 h-5 w-5" />
              Download CV
            </Button>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5, duration: 0.8 }}
            className="flex justify-center gap-5"
          >
            <a
              href="https://github.com/kaiwebcode"
              className="p-3 rounded-full bg-card hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover-lift"
              aria-label="GitHub"
            >
              <Github className="h-6 w-6" />
            </a>
            <a
              href="https://www.linkedin.com/in/kaif-qureshi-06b5782a7"
              className="p-3 rounded-full bg-card hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover-lift"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-6 w-6" />
            </a>
            <a
              href="mailto:kaifqureshi.pr@gmail.com"
              className="p-3 rounded-full bg-card hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover-lift"
              aria-label="Email"
            >
              <Mail className="h-6 w-6" />
            </a>
          </motion.div>

          {/* Scroll Down */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.8, duration: 0.8 }}
            className="animate-bounce mt-10"
          >
            <div className="flex flex-col items-center gap-2">
              <span className="text-sm text-muted-foreground font-medium">
                Scroll to explore
              </span>
              <ChevronDown className="h-8 w-8 mx-auto text-primary hover-glow" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
