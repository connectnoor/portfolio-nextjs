"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface AnimatedBackgroundProps {
  className?: string;
}

const AnimatedBackground = ({ className = "" }: AnimatedBackgroundProps) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      {/* Floating Squares */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={`square-${i}`}
          className="absolute w-16 h-16 border border-primary/20 rounded-lg"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            x: [0, 100, -50, 0],
            y: [0, -100, 50, 0],
            rotate: [0, 180, 360],
            scale: [1, 1.2, 0.8, 1],
          }}
          transition={{
            duration: 20 + i * 2,
            repeat: Infinity,
            ease: "linear",
            delay: i * 2,
          }}
        />
      ))}

      {/* Floating Circles */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={`circle-${i}`}
          className="absolute w-12 h-12 bg-primary/10 rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            x: [0, -80, 60, 0],
            y: [0, 80, -60, 0],
            scale: [1, 1.5, 0.5, 1],
          }}
          transition={{
            duration: 15 + i * 3,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 1.5,
          }}
        />
      ))}

      {/* Floating Triangles */}
      {[...Array(4)].map((_, i) => (
        <motion.div
          key={`triangle-${i}`}
          className="absolute w-0 h-0 border-l-[20px] border-r-[20px] border-b-[35px] border-l-transparent border-r-transparent border-b-primary/15"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            x: [0, 120, -80, 0],
            y: [0, -60, 100, 0],
            rotate: [0, 120, 240, 360],
          }}
          transition={{
            duration: 18 + i * 2,
            repeat: Infinity,
            ease: "linear",
            delay: i * 2.5,
          }}
        />
      ))}

      {/* Mouse-following gradient */}
      <motion.div
        className="absolute w-96 h-96 bg-gradient-to-r from-primary/5 to-secondary/5 rounded-full blur-3xl"
        animate={{
          x: mousePosition.x - 192,
          y: mousePosition.y - 192,
        }}
        transition={{
          type: "spring",
          stiffness: 50,
          damping: 15,
        }}
      />

      {/* Animated Grid */}
      <div className="absolute inset-0 opacity-10">
        <div className="grid grid-cols-12 grid-rows-12 h-full w-full">
          {[...Array(144)].map((_, i) => (
            <motion.div
              key={`grid-${i}`}
              className="border border-primary/10"
              animate={{
                opacity: [0.1, 0.3, 0.1],
              }}
              transition={{
                duration: 2 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>
      </div>

      {/* Floating Particles */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={`particle-${i}`}
          className="absolute w-2 h-2 bg-primary/30 rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -100, 0],
            opacity: [0, 1, 0],
            scale: [0, 1, 0],
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 3,
          }}
        />
      ))}

      {/* Animated Lines */}
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={`line-${i}`}
          className="absolute h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            width: `${200 + Math.random() * 300}px`,
          }}
          animate={{
            x: [0, 200, -200, 0],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 8 + i * 2,
            repeat: Infinity,
            delay: i * 3,
          }}
        />
      ))}

      {/* Floating Hexagons */}
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={`hexagon-${i}`}
          className="absolute w-8 h-8 bg-primary/5"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            clipPath: "polygon(30% 0%, 70% 0%, 100% 50%, 70% 100%, 30% 100%, 0% 50%)",
          }}
          animate={{
            x: [0, 150, -100, 0],
            y: [0, -80, 120, 0],
            rotate: [0, 60, 120, 180, 240, 300, 360],
            scale: [1, 1.3, 0.7, 1],
          }}
          transition={{
            duration: 25 + i * 3,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 4,
          }}
        />
      ))}

      {/* Floating Stars */}
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={`star-${i}`}
          className="absolute w-6 h-6 text-primary/20"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            x: [0, 80, -60, 0],
            y: [0, -120, 80, 0],
            rotate: [0, 72, 144, 216, 288, 360],
            scale: [1, 1.4, 0.6, 1],
          }}
          transition={{
            duration: 22 + i * 2,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 2.5,
          }}
        >
          <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
          </svg>
        </motion.div>
      ))}
    </div>
  );
};

export default AnimatedBackground;
