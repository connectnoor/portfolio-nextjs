"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";
import SplitText from "./SplitText";
import AnimatedBackground from "./AnimatedBackground";

const Hero = () => {
  const techStack = [
   
    { name: "JAVASCRIPT", color: "text-yellow-500", bg: "bg-yellow-500/10", border: "border-yellow-500/20", glow: "hover:shadow-yellow-500/25" },
    { name: "REACT JS", color: "text-cyan-500", bg: "bg-cyan-500/10", border: "border-cyan-500/20", glow: "hover:shadow-cyan-500/25" },
    { name: "NEXT JS", color: "text-gray-800 dark:text-white", bg: "bg-gray-800/10 dark:bg-white/10", border: "border-gray-800/20 dark:border-white/20", glow: "hover:shadow-gray-500/25 dark:hover:shadow-white/25" },
    { name: "VUE JS", color: "text-green-500", bg: "bg-green-500/10", border: "border-green-500/20", glow: "hover:shadow-green-500/25" },
    { name: "MONGO DB", color: "text-red-500", bg: "bg-red-500/10", border: "border-green-500/20", glow: "hover:shadow-green-500/25" },

    { name: "EXPRESS JS", color: "text-brown-500", bg: "bg-brown-500/10", border: "border-green-500/20", glow: "hover:shadow-green-500/25" },

    { name: "NODE JS", color: "text-yellow-500", bg: "bg-yellow-500/10", border: "border-green-500/20", glow: "hover:shadow-green-500/25" },

  ];
  
  const socialLinks = [
    { icon: Linkedin, href: "https://www.linkedin.com/in/noor-amin-a056552a1", label: "LinkedIn" },
    { icon: Github, href: "https://github.com/connectnoor", label: "GitHub" },
    { icon: Mail, href: "mailto:contacto@nooramin", label: "Email" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
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

  const techVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.3,
        ease: "easeOut" as const,
      },
    },
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center px-4 pt-20 relative overflow-hidden">
      {/* Animated Background */}
      <AnimatedBackground />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-4xl mx-auto text-center relative z-10"
      >
        {/* Greeting */}
        <motion.div variants={itemVariants} className="mb-8">
          <div className="text-6xl md:text-8xl font-bold text-foreground mb-4">
            <SplitText
              text="Hey,"
              className="block"
              delay={200}
              duration={0.8}
              stagger={0.1}
            />
            <div className="mt-4">
              <SplitText
                text="I'm "
                className="inline"
                delay={800}
                duration={0.6}
                stagger={0.05}
              />
              <SplitText
                text="Noor Amin"
                className="inline text-primary"
                delay={1000}
                duration={0.8}
                stagger={0.08}
              />
            </div>
          </div>
          
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ duration: 1, delay: 1.5 }}
            className="h-1 bg-primary mx-auto mb-6"
          />
          
          <motion.div
            variants={itemVariants}
            className="inline-block bg-green-500 text-white px-4 py-2 rounded-full text-sm font-medium mb-8"
          >
            <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/noor-amin-a056552a1">
            Available to Work</a>
          </motion.div>
        </motion.div>

        {/* Title */}
        <motion.div variants={itemVariants} className="mb-8">
          <SplitText
            text="Frontend - Backend Developer."
            className="text-3xl md:text-4xl font-semibold text-foreground mb-4"
            delay={1200}
            duration={0.8}
            stagger={0.1}
          />
        </motion.div>

        {/* Tech Stack */}
        <motion.div variants={itemVariants} className="mb-12">
          <div className="flex flex-wrap justify-center gap-3">
            {techStack.map((tech, index) => (
              <motion.span
                key={tech.name}
                variants={techVariants}
                whileHover={{ 
                  scale: 1.1, 
                  y: -2,
                  transition: { duration: 0.2 }
                }}
                className={`
                  ${tech.bg} ${tech.color} ${tech.border} ${tech.glow}
                  px-4 py-2 rounded-lg text-sm font-medium border-2
                  transition-all duration-300 ease-out
                  hover:shadow-lg hover:shadow-current/25
                  hover:border-current/40 hover:bg-current/5
                  relative overflow-hidden group
                `}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Glow effect background */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-current/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Content */}
                <span className="relative z-10">{tech.name}</span>
                
                {/* Shimmer effect */}
                <div className="absolute inset-0 -top-1 -left-1 -right-1 -bottom-1 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 group-hover:animate-pulse transition-opacity duration-300" />
              </motion.span>
            ))}
          </div>
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
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon size={24} />
              </motion.a>
            );
          })}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
