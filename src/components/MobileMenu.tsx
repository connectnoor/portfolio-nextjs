"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  scrollToSection: (sectionId: string) => void;
}

const MobileMenu = ({ isOpen, onClose, scrollToSection }: MobileMenuProps) => {
  const menuItems = ["Experience", "Skills", "Tech Stack", "Projects", "Blog", "Testimonials", "About Me", "Contact"];

  const handleItemClick = (item: string) => {
    scrollToSection(item.toLowerCase().replace(" ", "-"));
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm md:hidden"
          onClick={onClose}
        >
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="absolute right-0 top-0 h-full w-80 bg-card border-l border-border"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-6">
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-xl font-bold text-card-foreground">Menu</h2>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={onClose}
                  className="p-2 hover:bg-secondary rounded-lg transition-colors duration-200"
                >
                  <X size={24} className="text-card-foreground" />
                </motion.button>
              </div>

              <nav className="space-y-4">
                {menuItems.map((item, index) => (
                  <motion.button
                    key={item}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => handleItemClick(item)}
                    className="w-full text-left p-4 hover:bg-secondary rounded-lg transition-colors duration-200 text-card-foreground font-medium"
                  >
                    {item}
                  </motion.button>
                ))}
              </nav>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MobileMenu;
