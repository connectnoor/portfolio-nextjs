"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  const socialLinks = [
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Github, href: "#", label: "GitHub" },
    { icon: Mail, href: "mailto:contacto@nooramin", label: "Email" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut" as const,
      },
    },
  };

  return (
    <motion.footer
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="bg-card border-t border-border py-12 px-4"
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {/* Logo */}
          <motion.div variants={itemVariants} className="text-center md:text-left">
            <h3 className="text-2xl font-bold text-card-foreground mb-2">
              Noor Amin
            </h3>
            <p className="text-muted-foreground">
              Frontend Engineer
            </p>
          </motion.div>

          {/* Social Links */}
          <motion.div variants={itemVariants} className="flex justify-center space-x-6">
            {socialLinks.map((social) => {
              const Icon = social.icon;
              return (
                <motion.a
                  key={social.label}
                  href={social.href}
                  whileHover={{ scale: 1.2, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  className="p-3 bg-secondary rounded-full text-secondary-foreground hover:bg-primary hover:text-primary-foreground transition-colors duration-200"
                  aria-label={social.label}
                >
                  <Icon size={20} />
                </motion.a>
              );
            })}
          </motion.div>

          {/* Copyright */}
          <motion.div variants={itemVariants} className="text-center md:text-right">
            <p className="text-muted-foreground text-sm">
              © 2023 - 2025 by Noor Amin
            </p>
            {/* <p className="text-muted-foreground text-sm mt-1">
              * Noor Amin
            </p> */}
          </motion.div>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
