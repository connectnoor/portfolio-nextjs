"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface SplitTextProps {
  text: string;
  className?: string;
  delay?: number;
  duration?: number;
  stagger?: number;
  ease?: string;
  splitType?: "chars" | "words";
}

const SplitText = ({ 
  text, 
  className = "", 
  delay = 0,
  duration = 0.8,
  stagger = 0.05,
  ease = "easeOut",
  splitType = "chars"
}: SplitTextProps) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);

  const splitText = splitType === "chars" ? text.split("") : text.split(" ");

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: stagger,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      rotateX: -90,
    },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        duration,
        ease,
      },
    },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate={isVisible ? "visible" : "hidden"}
      className={`inline-block ${className}`}
    >
      {splitText.map((char, index) => (
        <motion.span
          key={index}
          variants={{ visible: itemVariants }}
          className="inline-block"
          style={{ 
            transformOrigin: "bottom",
            backfaceVisibility: "hidden",
          }}
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </motion.div>
  );
};

export default SplitText;
