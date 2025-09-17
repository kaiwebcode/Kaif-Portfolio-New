import { Github, Linkedin, Mail, Heart, Code } from "lucide-react";
import useScrollAnimation from "../hooks/useScrollAnimation";
// import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { ref, isVisible } = useScrollAnimation();

  return (
    <footer
      ref={ref}
      className="relative py-10 mt-6 bg-gradient-to-t from-background via-background/95 to-background/80 backdrop-blur-sm border-t border-border/50 overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-mesh opacity-30" />
      <div className="absolute top-0 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-pulse-glow" />
      <div
        className="absolute bottom-0 right-1/4 w-80 h-80 bg-secondary/10 rounded-full blur-3xl animate-pulse-glow"
        style={{ animationDelay: "1s" }}
      />

      <div className="container mx-auto px-6 relative z-10">
        <div
          className={`transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {/* Main Content */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
            {/* Brand Section */}
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <Code className="h-6 w-6 text-primary animate-pulse" />
                <h3 className="text-xl font-bold text-primary opacity-70">
                  Kaif Qureshi
                </h3>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Passionate fresher developer crafting digital experiences with
                modern technologies. Always learning, always growing.
              </p>
              {/* <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <Coffee className="h-4 w-4" />
                <span>Powered by coffee & curiosity</span>
              </div> */}
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-foreground">
                Quick Links
              </h4>
              <div className="space-y-3">
                {["About", "Skills", "Projects", "Contact"].map(
                  (link, index) => (
                    <a
                      key={link}
                      href={`#${link.toLowerCase()}`}
                      className="block text-muted-foreground hover:text-primary transition-all duration-300 hover:translate-x-2 text-sm"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      {link}
                    </a>
                  )
                )}
              </div>
            </div>

            {/* Connect Section */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-foreground">
                Let's Connect
              </h4>
              <div className="flex space-x-4">
                <a
                  href="https://github.com/kaiwebcode"
                  className="group p-3 rounded-xl bg-card/50 hover:bg-primary/10 border border-border/50 hover:border-primary/30 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-primary/20"
                  aria-label="GitHub"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="h-5 w-5 group-hover:text-primary transition-colors" />
                </a>
                <a
                  href="https://www.linkedin.com/in/kaif-qureshi-06b5782a7"
                  className="group p-3 rounded-xl bg-card/50 hover:bg-blue-500/10 border border-border/50 hover:border-blue-500/30 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-blue-500/20"
                  aria-label="LinkedIn"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin className="h-5 w-5 group-hover:text-blue-500 transition-colors" />
                </a>
                <a
                  href="mailto:kaifqureshi.pr@gmail.com"
                  className="group p-3 rounded-xl bg-card/50 hover:bg-green-500/10 border border-border/50 hover:border-green-500/30 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-green-500/20"
                  aria-label="Email"
                >
                  <Mail className="h-5 w-5 group-hover:text-green-500 transition-colors" />
                </a>
              </div>
              <p className="text-xs text-muted-foreground mt-4">
                Open to opportunities and collaborations
              </p>
            </div>
          </div>

          {/* Divider */}
          <div className="w-full h-px bg-gradient-to-r from-transparent via-border to-transparent mb-8" />

          {/* Bottom Section */}
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div className="flex items-center space-x-2 text-sm text-muted-foreground">
              <span>Made with</span>
              <Heart className="h-4 w-4 text-red-500 animate-pulse" />
              <span>and</span>
              <Code className="h-4 w-4 text-primary" />
              <span>by Kaif Qureshi</span>
            </div>

            <div className="text-sm text-muted-foreground">
              © {currentYear} All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
