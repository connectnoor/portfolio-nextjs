"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import SplitText from "./SplitText";

const Testimonials = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Senior Product Manager",
      company: "TechCorp",
      content: "Noor's attention to detail and ability to translate complex requirements into beautiful, functional interfaces is exceptional. His work on our dashboard redesign significantly improved user engagement.",
      avatar: "SJ",
      rating: 5
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Lead Developer",
      company: "StartupXYZ",
      content: "Working with Noor has been a pleasure. His React expertise and modern development practices helped us ship features faster while maintaining code quality. Highly recommended!",
      avatar: "MC",
      rating: 5
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      role: "UX Designer",
      company: "DesignStudio",
      content: "Noor's understanding of user experience combined with his technical skills creates amazing results. He's always open to feedback and collaborative in his approach.",
      avatar: "ER",
      rating: 5
    },
    {
      id: 4,
      name: "David Kim",
      role: "CTO",
      company: "InnovateLab",
      content: "Noor delivered our MVP ahead of schedule with clean, scalable code. His ability to work with both frontend and backend teams makes him an invaluable team member.",
      avatar: "DK",
      rating: 5
    }
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

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
    <section id="testimonials" className="py-20 px-4 bg-muted/30">
      <div className="max-w-4xl mx-auto">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Section Title */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <SplitText
              text="What People Say"
              className="text-4xl md:text-5xl font-bold text-foreground mb-4"
              delay={200}
              duration={0.8}
              stagger={0.1}
            />
            <div className="w-24 h-1 bg-primary mx-auto" />
          </motion.div>

          {/* Testimonial Carousel */}
          <motion.div variants={itemVariants} className="relative">
            <motion.div
              key={currentTestimonial}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              className="bg-card rounded-lg p-8 shadow-lg border border-border text-center"
            >
              {/* Quote Icon */}
              <div className="flex justify-center mb-6">
                <Quote size={48} className="text-primary opacity-50" />
              </div>

              {/* Testimonial Content */}
              <p className="text-lg text-card-foreground leading-relaxed mb-8 italic">
                "{testimonials[currentTestimonial].content}"
              </p>

              {/* Rating */}
              <div className="flex justify-center mb-6">
                {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                  <motion.span
                    key={i}
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.5 + i * 0.1 }}
                    className="text-yellow-400 text-xl"
                  >
                    ★
                  </motion.span>
                ))}
              </div>

              {/* Author Info */}
              <div className="flex items-center justify-center space-x-4">
                <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-semibold">
                  {testimonials[currentTestimonial].avatar}
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-card-foreground">
                    {testimonials[currentTestimonial].name}
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    {testimonials[currentTestimonial].role} at {testimonials[currentTestimonial].company}
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Navigation Buttons */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={prevTestimonial}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 p-2 bg-primary text-primary-foreground rounded-full hover:bg-primary/90 transition-colors duration-200"
            >
              <ChevronLeft size={20} />
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={nextTestimonial}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 p-2 bg-primary text-primary-foreground rounded-full hover:bg-primary/90 transition-colors duration-200"
            >
              <ChevronRight size={20} />
            </motion.button>

            {/* Dots Indicator */}
            <div className="flex justify-center mt-8 space-x-2">
              {testimonials.map((_, index) => (
                <motion.button
                  key={index}
                  whileHover={{ scale: 1.2 }}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                    index === currentTestimonial ? "bg-primary" : "bg-muted"
                  }`}
                />
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
