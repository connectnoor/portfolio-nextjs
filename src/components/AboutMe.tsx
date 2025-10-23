"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const AboutMe = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

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

  const skills = [
    "React",
    "Redux",
    "Next.js",
    "React Query",
    "Vue.js",
    "State Management",
  ];

  return (
    <section id="about-me" className="py-20 px-4">
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
              About Me
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto" />
          </motion.div>

          {/* Content */}
          <div className="grid grid-cols-1 lg:grid-cols-1 gap-12 items-center">
            {/* Profile Image Placeholder */}
            {/* <motion.div
              variants={itemVariants}
              className="flex justify-center lg:justify-end"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="w-64 h-64 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center text-6xl font-bold text-primary-foreground shadow-2xl"
              >
                NA
              </motion.div>
            </motion.div> */}

            {/* Text Content */}
            <motion.div variants={itemVariants} className="space-y-6">
              <p className="text-lg text-foreground text-center leading-relaxed">
                I'm a dedicated developer with experience in{" "}
                <span className="font-semibold text-primary">
                  React, Redux, Next.js, and React Query
                </span>
                , for optimized web solutions. Having successfully transitioned from intern to full-time at Markcoders,
              </p>

              <p className="text-lg text-foreground text-center leading-relaxed">
                <span className="font-semibold text-center text-primary">
                  I also have exposure to Vue.js and state management.
                </span>{" "}
                I'm passionate about continuous growth and collaboration, always eager to learn and improve alongside a team.
              </p>

              {/* Skills */}
              {/* <div>
                <h3 className="text-xl font-semibold text-foreground mb-4">
                  Key Skills:
                </h3>
                <div className="flex flex-wrap gap-3">
                  {skills.map((skill, index) => (
                    <motion.span
                      key={skill}
                      initial={{ scale: 0, opacity: 0 }}
                      animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
                      transition={{ delay: 0.8 + index * 0.1 }}
                      whileHover={{ scale: 1.1, y: -2 }}
                      className="bg-secondary text-secondary-foreground px-4 py-2 rounded-lg font-medium"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </div> */}

              {/* Call to Action */}
              <motion.div
                variants={itemVariants}
                className="pt-6"
              >
                {/* <motion.a
                  href="mailto:contacto@nooramin"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-block bg-primary text-primary-foreground px-8 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors duration-200"
                >
                  Get In Touch
                </motion.a> */}
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutMe;
