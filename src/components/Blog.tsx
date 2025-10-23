"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import SplitText from "./SplitText";

const Blog = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const blogPosts = [
    {
      id: 1,
      title: "Building Scalable React Applications with TypeScript",
      excerpt: "Learn how to structure large React applications using TypeScript, proper component architecture, and modern development patterns.",
      content: "In this comprehensive guide, we'll explore the best practices for building scalable React applications with TypeScript...",
      date: "2024-01-15",
      readTime: "8 min read",
      category: "React",
      image: "/api/placeholder/400/250",
      tags: ["React", "TypeScript", "Architecture"]
    },
    {
      id: 2,
      title: "Mastering Framer Motion: Advanced Animation Techniques",
      excerpt: "Discover advanced animation patterns and techniques using Framer Motion to create stunning user interfaces.",
      content: "Framer Motion is a powerful animation library for React that allows you to create complex animations with ease...",
      date: "2024-01-10",
      readTime: "6 min read",
      category: "Animation",
      image: "/api/placeholder/400/250",
      tags: ["Framer Motion", "Animation", "UI/UX"]
    },
    {
      id: 3,
      title: "Next.js 14: New Features and Best Practices",
      excerpt: "Explore the latest features in Next.js 14 and learn how to implement them in your projects for better performance.",
      content: "Next.js 14 brings exciting new features including improved performance, better developer experience...",
      date: "2024-01-05",
      readTime: "10 min read",
      category: "Next.js",
      image: "/api/placeholder/400/250",
      tags: ["Next.js", "Performance", "Web Development"]
    },
    {
      id: 4,
      title: "State Management in Modern React Applications",
      excerpt: "Compare different state management solutions and learn when to use each approach in your React projects.",
      content: "State management is crucial for building maintainable React applications. Let's explore the different options...",
      date: "2024-01-01",
      readTime: "7 min read",
      category: "React",
      image: "/api/placeholder/400/250",
      tags: ["React", "State Management", "Redux"]
    }
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
    <section id="blog" className="py-20 px-4 bg-muted/30">
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
              text="Latest Articles"
              className="text-4xl md:text-5xl font-bold text-foreground mb-4"
              delay={200}
              duration={0.8}
              stagger={0.1}
            />
            <div className="w-24 h-1 bg-primary mx-auto mb-6" />
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Sharing knowledge and insights about modern web development, React, and frontend technologies.
            </p>
          </motion.div>

          {/* Blog Posts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {blogPosts.map((post, index) => (
              <motion.article
                key={post.id}
                variants={itemVariants}
                whileHover={{ y: -5, scale: 1.02 }}
                className="bg-card rounded-lg shadow-lg border border-border overflow-hidden group cursor-pointer"
              >
                {/* Post Image */}
                <div className="h-48 bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                  <div className="text-4xl font-bold text-primary opacity-50">
                    {post.category.charAt(0)}
                  </div>
                </div>

                {/* Post Content */}
                <div className="p-6">
                  {/* Category */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-3 py-1 bg-primary text-primary-foreground text-xs font-medium rounded-full">
                      {post.category}
                    </span>
                    <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                      <div className="flex items-center space-x-1">
                        <Calendar size={14} />
                        <span>{new Date(post.date).toLocaleDateString()}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock size={14} />
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-semibold text-card-foreground mb-3 group-hover:text-primary transition-colors duration-200">
                    {post.title}
                  </h3>

                  {/* Excerpt */}
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    {post.excerpt}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 bg-secondary text-secondary-foreground text-xs rounded"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Read More */}
                  <div className="flex items-center text-primary font-medium group-hover:translate-x-1 transition-transform duration-200">
                    <span>Read More</span>
                    <ArrowRight size={16} className="ml-1" />
                  </div>
                </div>
              </motion.article>
            ))}
          </div>

          {/* View All Posts Button */}
          <motion.div
            variants={itemVariants}
            className="text-center mt-12"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-primary text-primary-foreground px-8 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors duration-200"
            >
              View All Articles
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Blog;
