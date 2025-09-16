"use client";

import { useState, useEffect } from "react";
import { Menu, X, Download, Github, Linkedin } from "lucide-react";
import { Button } from "./ui/button";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // Detect active section
      const sections = ["home", "about", "skills", "projects", "contact"];
      const current = sections.find((section) => {
        const element =
          section === "home" ? document.body : document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });

      if (current) setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "About", href: "#about", id: "about" },
    { name: "Skills", href: "#skills", id: "skills" },
    { name: "Projects", href: "#projects", id: "projects" },
    { name: "Contact", href: "#contact", id: "contact" },
  ];

  const handleNavClick = (href: string, id: string) => {
    setIsOpen(false);
    setActiveSection(id);

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
    window.open("/(Kaif.q) Resume.pdf", "_blank");
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out ${
          scrolled
            ? "bg-background/90 backdrop-blur-xl border-b border-white/10 shadow-lg"
            : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-4 lg:px-6">
          <div className="flex items-center justify-between h-16 lg:h-16">
            {/* Logo */}
            <button
              onClick={() => handleNavClick("#", "home")}
              className="relative group"
            >
              <div className="text-2xl md:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-primary via-purple-500 to-pink-500 bg-clip-text text-transparent hover:scale-110 transition-all duration-300 ease-out">
                KAIF.Q
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-purple-500/20 to-pink-500/20 rounded-lg blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
            </button>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-2 xl:space-x-4">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => handleNavClick(item.href, item.id)}
                  className={`relative px-3 xl:px-4 py-2 rounded-lg text-sm xl:text-base font-medium transition-all duration-300 ease-out group ${
                    activeSection === item.id
                      ? "text-primary bg-primary/10"
                      : "text-muted-foreground hover:text-primary hover:bg-white/5"
                  }`}
                >
                  {item.name}
                  <span
                    className={`absolute bottom-0 left-1/2 h-0.5 bg-gradient-to-r from-primary to-purple-500 transition-all duration-300 ease-out transform -translate-x-1/2 ${
                      activeSection === item.id ? "w-8" : "w-0 group-hover:w-6"
                    }`}
                  ></span>
                </button>
              ))}
            </div>

            {/* Desktop Actions */}
            <div className="hidden lg:flex items-center space-x-3">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => window.open("https://github.com", "_blank")}
                className="hover:bg-white/10 hover:scale-110 transition-all duration-300"
              >
                <Github className="h-5 w-5" />
              </Button>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => window.open("https://linkedin.com", "_blank")}
                className="hover:bg-white/10 hover:scale-110 transition-all duration-300"
              >
                <Linkedin className="h-5 w-5" />
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={handleDownloadCV}
                className="hover:bg-white/10 hover:scale-105 transition-all duration-300 border-white/20"
              >
                <Download className="h-4 w-4 mr-2" />
                CV
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden relative p-2 rounded-lg hover:bg-white/10 transition-all duration-300 group"
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <X className="h-6 w-6 transition-transform duration-300 rotate-0" />
              ) : (
                <Menu className="h-6 w-6 transition-transform duration-300 rotate-0" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`lg:hidden transition-all duration-500 ease-in-out overflow-hidden ${
            isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="bg-background/95 backdrop-blur-xl border-t border-white/10">
            <div className="container mx-auto px-4">
              <div className="py-6 space-y-4">
                {navItems.map((item, index) => (
                  <button
                    key={item.name}
                    onClick={() => handleNavClick(item.href, item.id)}
                    className={`block w-full text-left px-4 py-3 rounded-lg text-lg font-medium transition-all duration-300 ease-out ${
                      activeSection === item.id
                        ? "text-primary bg-primary/10 translate-x-2"
                        : "text-muted-foreground hover:text-primary hover:bg-white/5 hover:translate-x-2"
                    }`}
                    style={{ animationDelay: `${index * 80}ms` }}
                  >
                    {item.name}
                  </button>
                ))}

                {/* Mobile Actions */}
                <div className="pt-4 space-y-3">
                  <div className="flex items-center justify-center space-x-4">
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() =>
                        window.open("https://github.com", "_blank")
                      }
                      className="hover:bg-white/10"
                    >
                      <Github className="h-5 w-5" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() =>
                        window.open("https://linkedin.com", "_blank")
                      }
                      className="hover:bg-white/10"
                    >
                      <Linkedin className="h-5 w-5" />
                    </Button>
                  </div>

                  {/* <Button
                    variant="outline"
                    onClick={handleDownloadCV}
                    className="w-full hover:bg-white/10 border-white/20"
                  >
                    <Download className="h-4 w-4 mr-2" />
                    Download CV
                  </Button>

                  <Button
                    onClick={() => handleNavClick("#contact", "contact")}
                    className="w-full bg-gradient-to-r from-primary to-purple-600 hover:from-primary/90 hover:to-purple-600/90"
                  >
                    Hire Me
                  </Button> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile menu overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
};

export default Navigation;
