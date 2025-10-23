"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import {
  SiTailwindcss,
  SiExpress,
  SiCplusplus,
  SiTypescript,
  SiVite,
  SiShadcnui,
  SiReact,
  SiNodedotjs,
  SiMongodb,
  SiJavascript,
  SiNextdotjs,
  SiGithub,
  SiReactrouter,
  SiRedux,
  SiReactquery,
} from "react-icons/si";
import { FaTerminal, FaDatabase, FaLink, FaServer, FaStar, FaHtml5, FaCss3Alt, FaGitAlt } from "react-icons/fa";
import { MdLayers } from "react-icons/md";
import { BiCodeBlock } from "react-icons/bi";
import { FiSettings } from "react-icons/fi";

const LogoLoop = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const techStack = [
    { name: "HTML5", icon: FaHtml5, color: "text-orange-500", bg: "bg-orange-500/10", border: "border-orange-500/20", glow: "hover:shadow-orange-500/25" },
    { name: "CSS3", icon: FaCss3Alt, color: "text-blue-500", bg: "bg-blue-500/10", border: "border-blue-500/20", glow: "hover:shadow-blue-500/25" },
    { name: "JavaScript", icon: SiJavascript, color: "text-yellow-500", bg: "bg-yellow-500/10", border: "border-yellow-500/20", glow: "hover:shadow-yellow-500/25" },
    { name: "TypeScript", icon: SiTypescript, color: "text-blue-600", bg: "bg-blue-600/10", border: "border-blue-600/20", glow: "hover:shadow-blue-600/25" },
    { name: "React", icon: SiReact, color: "text-cyan-400", bg: "bg-cyan-400/10", border: "border-cyan-400/20", glow: "hover:shadow-cyan-400/25" },
    { name: "Next.js", icon: SiNextdotjs, color: "text-gray-800 dark:text-white", bg: "bg-gray-800/10 dark:bg-white/10", border: "border-gray-800/20 dark:border-white/20", glow: "hover:shadow-gray-500/25 dark:hover:shadow-white/25" },
    { name: "Tailwind", icon: SiTailwindcss, color: "text-cyan-500", bg: "bg-cyan-500/10", border: "border-cyan-500/20", glow: "hover:shadow-cyan-500/25" },
    { name: "Material UI", icon: MdLayers, color: "text-blue-600", bg: "bg-blue-600/10", border: "border-blue-600/20", glow: "hover:shadow-blue-600/25" },
    { name: "Shadcn", icon: SiShadcnui, color: "text-slate-600", bg: "bg-slate-600/10", border: "border-slate-600/20", glow: "hover:shadow-slate-600/25" },
    { name: "Vite", icon: SiVite, color: "text-purple-600", bg: "bg-purple-600/10", border: "border-purple-600/20", glow: "hover:shadow-purple-600/25" },
    { name: "TanStack", icon: SiReactquery , color: "text-red-500", bg: "bg-red-500/10", border: "border-red-500/20", glow: "hover:shadow-red-500/25" },
    { name: "Node.js", icon: SiNodedotjs, color: "text-green-600", bg: "bg-green-600/10", border: "border-green-600/20", glow: "hover:shadow-green-600/25" },
    { name: "Express", icon: SiExpress, color: "text-gray-600", bg: "bg-gray-600/10", border: "border-gray-600/20", glow: "hover:shadow-gray-600/25" },
    { name: "MongoDB", icon: SiMongodb, color: "text-green-700", bg: "bg-green-700/10", border: "border-green-700/20", glow: "hover:shadow-green-700/25" },
    { name: "MERN", icon: FaDatabase, color: "text-green-600", bg: "bg-green-600/10", border: "border-green-600/20", glow: "hover:shadow-green-600/25" },
    { name: "GitHub", icon: SiGithub, color: "text-gray-800", bg: "bg-gray-800/10", border: "border-gray-800/20", glow: "hover:shadow-gray-800/25" },
    { name: "Git", icon: FaGitAlt, color: "text-orange-600", bg: "bg-orange-600/10", border: "border-orange-600/20", glow: "hover:shadow-orange-600/25" },
    { name: "Redux", icon: SiRedux, color: "text-violet-600", bg: "bg-violet-600/10", border: "border-violet-600/20", glow: "hover:shadow-violet-600/25" },
    { name: "React Router", icon: SiReactrouter, color: "text-pink-500", bg: "bg-pink-500/10", border: "border-pink-500/20", glow: "hover:shadow-pink-500/25" },
    { name: "Webhook", icon: FaLink, color: "text-purple-500", bg: "bg-purple-500/10", border: "border-purple-500/20", glow: "hover:shadow-purple-500/25" },
    { name: "C++", icon: SiCplusplus, color: "text-blue-700", bg: "bg-blue-700/10", border: "border-blue-700/20", glow: "hover:shadow-blue-700/25" },
    { name: "Deployment", icon: FaTerminal, color: "text-green-400", bg: "bg-green-400/10", border: "border-green-400/20", glow: "hover:shadow-green-400/25" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { scale: 0, opacity: 0, rotate: -180 },
    visible: {
      scale: 1,
      opacity: 1,
      rotate: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut" as const,
      },
    },
  };

  const loopVariants = {
    animate: {
      rotate: 360,
      transition: {
        duration: 30,
        ease: "linear",
        repeat: Infinity,
      },
    },
  };

  const reverseLoopVariants = {
    animate: {
      rotate: -360,
      transition: {
        duration: 25,
        ease: "linear",
        repeat: Infinity,
      },
    },
  };

  return (
    <section id="tech-stack" className="py-20 px-4 bg-gradient-to-br from-muted/30 to-background relative overflow-hidden">
      {/* Background Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-primary/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.2, 0.8, 0.2],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="max-w-6xl mx-auto relative">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Section Title */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Tech Stack
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-6" />
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Technologies and tools I work with to build amazing digital experiences
            </p>
          </motion.div>

          {/* Logo Loop Container */}
          <div className="relative flex items-center justify-center">
            {/* Outer Ring */}
            <motion.div
              className="w-96 h-96 relative"
              variants={{ animate: loopVariants }}
              animate="animate"
            >
              {/* Center Circle with Glow Effect */}
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : { scale: 0 }}
                  transition={{ delay: 0.5, duration: 0.8 }}
                  className="relative"
                >
                  <div className="w-24 h-24 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center shadow-2xl">
                    <FiSettings size={32} className="text-primary-foreground" />
                  </div>
                  {/* Glow effect */}
                  <div className="absolute inset-0 w-24 h-24 bg-gradient-to-br from-primary to-secondary rounded-full blur-lg opacity-30 animate-pulse" />
                </motion.div>
              </div>

              {/* Tech Stack Logos - Outer Ring */}
              {techStack.map((tech, index) => {
                const Icon = tech.icon;
                const angle = (360 / techStack.length) * index;
                const radius = 180;
                const x = Math.cos((angle * Math.PI) / 180) * radius;
                const y = Math.sin((angle * Math.PI) / 180) * radius;

                return (
                  <motion.div
                    key={tech.name}
                    className="absolute w-16 h-16 flex items-center justify-center"
                    style={{
                      left: `calc(50% + ${x}px - 32px)`,
                      top: `calc(50% + ${y}px - 32px)`,
                    }}
                    initial={{ scale: 0, opacity: 0 }}
                    animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
                    transition={{
                      delay: 0.8 + index * 0.05,
                      duration: 0.6,
                      ease: "easeOut",
                    }}
                    whileHover={{ 
                      scale: 1.3, 
                      rotate: 360,
                      transition: { duration: 0.3 }
                    }}
                  >
                    <div className={`w-16 h-16 rounded-full ${tech.bg} flex items-center justify-center border-2 ${tech.border} hover:border-primary transition-all duration-300 group cursor-pointer relative overflow-hidden`}>
                      <Icon 
                        size={24} 
                        className={`${tech.color} group-hover:scale-110 transition-transform duration-300 relative z-10`} 
                      />
                      {/* Hover glow effect */}
                      <div className={`absolute inset-0 rounded-full ${tech.bg} blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                    </div>
                    
                    {/* Tooltip */}
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.8 }}
                      whileHover={{ opacity: 1, y: 0, scale: 1 }}
                      className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-card text-card-foreground px-3 py-1 rounded-lg text-sm font-medium whitespace-nowrap shadow-lg border border-border z-20"
                    >
                      {tech.name}
                      <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-card" />
                    </motion.div>
                  </motion.div>
                );
              })}
            </motion.div>

            {/* Inner Rotating Ring */}
            <motion.div
              className="absolute inset-0 w-96 h-96"
              variants={{ animate: reverseLoopVariants }}
              animate="animate"
            >
              {techStack.slice(0, 8).map((tech, index) => {
                const Icon = tech.icon;
                const angle = (360 / 8) * index;
                const radius = 120;
                const x = Math.cos((angle * Math.PI) / 180) * radius;
                const y = Math.sin((angle * Math.PI) / 180) * radius;

                return (
                  <motion.div
                    key={`inner-${tech.name}`}
                    className="absolute w-12 h-12 flex items-center justify-center"
                    style={{
                      left: `calc(50% + ${x}px - 24px)`,
                      top: `calc(50% + ${y}px - 24px)`,
                    }}
                    initial={{ scale: 0, opacity: 0 }}
                    animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
                    transition={{
                      delay: 1.2 + index * 0.03,
                      duration: 0.5,
                      ease: "easeOut",
                    }}
                    whileHover={{ 
                      scale: 1.4, 
                      rotate: -360,
                      transition: { duration: 0.3 }
                    }}
                  >
                    <div className={`w-12 h-12 rounded-full ${tech.bg} flex items-center justify-center border ${tech.border} hover:border-primary transition-all duration-300 group cursor-pointer relative overflow-hidden`}>
                      <Icon 
                        size={18} 
                        className={`${tech.color} group-hover:scale-110 transition-transform duration-300 relative z-10`} 
                      />
                      {/* Hover glow effect */}
                      <div className={`absolute inset-0 rounded-full ${tech.bg} blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>

            {/* Floating Icons */}
            <div className="absolute inset-0 pointer-events-none">
              {[...Array(6)].map((_, i) => (
                <motion.div
                  key={`floating-${i}`}
                  className="absolute"
                  style={{
                    left: `${20 + (i * 15)}%`,
                    top: `${30 + (i * 10)}%`,
                  }}
                  animate={{
                    y: [0, -20, 0],
                    rotate: [0, 180, 360],
                    opacity: [0.3, 0.8, 0.3],
                  }}
                  transition={{
                    duration: 4 + i,
                    repeat: Infinity,
                    delay: i * 0.5,
                  }}
                >
                  <FaStar size={16} className="text-primary/40" />
                </motion.div>
              ))}
            </div>
          </div>

          {/* Tech Stack Grid */}
          <motion.div
            variants={itemVariants}
            className="mt-16 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4"
          >
            {techStack.map((tech, index) => {
              const Icon = tech.icon;
              return (
                <motion.div
                  key={`grid-${tech.name}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ delay: 1.5 + index * 0.05 }}
                  whileHover={{ 
                    scale: 1.05, 
                    y: -5,
                    transition: { duration: 0.2 }
                  }}
                  className={`
                    ${tech.bg} ${tech.color} ${tech.border} ${tech.glow}
                    p-4 rounded-lg border-2
                    transition-all duration-300 ease-out
                    hover:shadow-lg hover:shadow-current/25
                    hover:border-current/40 hover:bg-current/5
                    group cursor-pointer relative overflow-hidden
                  `}
                >
                  <div className="flex flex-col items-center space-y-2 relative z-10">
                    <Icon size={32} className={`${tech.color} group-hover:scale-110 transition-transform duration-300`} />
                    <span className="text-sm font-medium text-foreground text-center">
                      {tech.name}
                    </span>
                  </div>
                  
                  {/* Glow effect background */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-current/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Shimmer effect */}
                  <div className="absolute inset-0 -top-1 -left-1 -right-1 -bottom-1 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 group-hover:animate-pulse transition-opacity duration-300" />
                </motion.div>
              );
            })}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default LogoLoop;