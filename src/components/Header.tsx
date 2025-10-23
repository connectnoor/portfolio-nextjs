"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { motion } from "framer-motion";
import { Sun, Moon, Monitor, Menu } from "lucide-react";
import MobileMenu from "./MobileMenu";

const Header = () => {
  const [mounted, setMounted] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const themeOptions = [
    { value: "light", label: "Light", icon: Sun },
    { value: "dark", label: "Dark", icon: Moon },
    { value: "system", label: "System", icon: Monitor },
  ];

  if (!mounted) {
    return null;
  }

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border"
      >
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="text-xl font-bold text-primary cursor-pointer"
              onClick={() => scrollToSection("hero")}
            >
              logo
            </motion.div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-6">
              {["Experience", "Skills", "Tech Stack", "Projects", "Blog", "Testimonials", "About Me", "Contact"].map((item) => (
                <motion.button
                  key={item}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => scrollToSection(item.toLowerCase().replace(" ", "-"))}
                  className="text-foreground hover:text-primary transition-colors duration-200 text-sm font-medium"
                >
                  {item}
                </motion.button>
              ))}
            </nav>

            {/* Right Side - Theme Switcher & Mobile Menu */}
            <div className="flex items-center space-x-4">
              {/* Theme Switcher */}
              <div className="hidden sm:flex items-center space-x-2">
                <span className="text-sm text-muted-foreground">Elige el tema</span>
                <div className="flex items-center space-x-1 bg-muted rounded-lg p-1">
                  {themeOptions.map((option) => {
                    const Icon = option.icon;
                    return (
                      <motion.button
                        key={option.value}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={() => setTheme(option.value)}
                        className={`p-2 rounded-md transition-colors duration-200 ${
                          theme === option.value
                            ? "bg-primary text-primary-foreground"
                            : "text-muted-foreground hover:text-foreground"
                        }`}
                        title={option.label}
                      >
                        <Icon size={16} />
                      </motion.button>
                    );
                  })}
                </div>
              </div>

              {/* Mobile Menu Button */}
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setIsMobileMenuOpen(true)}
                className="md:hidden p-2 hover:bg-secondary rounded-lg transition-colors duration-200"
              >
                <Menu size={24} className="text-foreground" />
              </motion.button>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        scrollToSection={scrollToSection}
      />
    </>
  );
};

export default Header;
