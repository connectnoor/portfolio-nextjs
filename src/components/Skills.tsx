"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import SplitText from "./SplitText";

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const skillCategories = [
    {
      title: "Frontend Development",
      skills: [
        { name: "React", level: 83, color: "bg-blue-500" },
        { name: "Next.js", level: 80, color: "bg-gray-300" },
        { name: "Vue.js", level: 80, color: "bg-green-500" },
        { name: "JavaScript", level: 80, color: "bg-yellow-500" },
        { name: "TypeScript", level: 78 , color: "bg-blue-600" },
        { name: "Express.js", level: 60, color: "bg-orange-500" },
      ]
    },
    {
      title: "State Management & Tools",
      skills: [
        { name: "Redux Toolkit", level: 90, color: "bg-purple-500" },
        { name: "React Query", level: 85, color: "bg-pink-500" },
        { name: "Shadcn", level: 80, color: "bg-green-600" },
        { name: "Framer Motion", level: 65, color: "bg-indigo-500" },
        { name: "Tailwind CSS", level: 92, color: "bg-cyan-500" },
        { name: "Material UI", level: 85, color: "bg-blue-400" },
      ]
    },
    {
      title: "Development & Design",
      skills: [
        { name: "Git/GitHub", level: 90, color: "bg-gray-600" },
        { name: "Deployment", level: 80, color: "bg-purple-600" },
        { name: "Agile/Scrum", level: 95, color: "bg-orange-600" },
        { name: "API Integration", level: 100, color: "bg-green-500" },
        { name: "Responsive Design", level: 90, color: "bg-pink-600" },
        { name: "Performance Optimization", level: 84, color: "bg-yellow-600" },
      ]
    }
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
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut" as const,
      },
    },
  };

  return (
    <section id="skills" className="py-20 px-4 bg-gradient-to-br from-background to-muted/20">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Section Title */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <SplitText
              text="Skills & Expertise"
              className="text-4xl md:text-5xl font-bold text-foreground mb-4"
              delay={200}
              duration={0.8}
              stagger={0.1}
            />
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto" />
          </motion.div>

          {/* Skills Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.title}
                variants={itemVariants}
                className="bg-card rounded-lg p-6 shadow-lg border border-border"
              >
                <h3 className="text-xl font-semibold text-card-foreground mb-6 text-center">
                  {category.title}
                </h3>
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                      transition={{ 
                        delay: 0.5 + (categoryIndex * 0.2) + (skillIndex * 0.1),
                        duration: 0.5 
                      }}
                      className="space-y-2"
                    >
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium text-card-foreground">
                          {skill.name}
                        </span>
                        <span className="text-xs text-muted-foreground">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="w-full bg-secondary rounded-full h-2">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
                          transition={{ 
                            delay: 0.7 + (categoryIndex * 0.2) + (skillIndex * 0.1),
                            duration: 1,
                            ease: "easeOut"
                          }}
                          className={`h-2 rounded-full ${skill.color}`}
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
