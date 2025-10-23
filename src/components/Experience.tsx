"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

const experiences = [
  {
    id: 1,
    title: "Software Developer Trainee",
    company: "Markcoders",
    period: "April 2024 - June 2024",
    description:
      "During my internship at Markcoders, I practiced and enhanced my JavaScript and React.js skills by working on real-world projects. I contributed to building production-ready user and admin dashboards for client applications, focusing on component reusability, API integration, and UI performance. This experience helped me understand professional development workflows, including agile practices, version control with Git, and effective teamwork.",
  },
  {
    id: 2,
    title: "Associate Software Developer",
    company: "Markcoders",
    period: "July 2024 - Present",
    description:
      "As an Associate Software Developer at Markcoders, I specialize in building responsive and secure web applications for mobile app dashboards using React.js and Next.js & Vue.js. My expertise includes developing authenticated user interfaces, implementing RESTful APIs, and ensuring smooth, secure browsing experiences. I also collaborate closely with backend teams to integrate APIs, contribute to shared codebases, and deliver seamless end-to-end solutions. Continuously evolving my skills, I stay updated with the latest front-end technologies and best practices to drive innovation in every project.",
  },
];


  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { x: -50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut" as const,
      },
    },
  };

  return (
    <section id="experience" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Section Title */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Work experience
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto" />
          </motion.div>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border" />
            
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.id}
                variants={itemVariants}
                className="relative flex items-start mb-12"
              >
                {/* Timeline Dot */}
                <motion.div
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : { scale: 0 }}
                  transition={{ delay: 0.5 + index * 0.3 }}
                  className="absolute left-6 w-4 h-4 bg-primary rounded-full border-4 border-background z-10"
                />
                
                {/* Content */}
                <motion.div
                  whileHover={{ x: 10 }}
                  className="ml-16 bg-card p-6 rounded-lg shadow-lg border border-border"
                >
                  <div className="flex items-center mb-4">
                    <span className="text-2xl font-bold text-primary mr-4">
                      {exp.id}.
                    </span>
                    <div>
                      <h3 className="text-xl font-semibold text-card-foreground">
                        {exp.title}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {exp.period}
                      </p>
                    </div>
                  </div>
                  
                  <p className="text-card-foreground leading-relaxed">
                    {exp.description}
                  </p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
