"use client";

import { useState } from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink } from "lucide-react";
import { projects, Project } from "@/lib/projects-data";
import ProjectModal from "./ProjectModal";

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const openModal = (project: Project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

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
    hidden: { y: 50, opacity: 0 },
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
    <section id="projects" className="py-20 px-4 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Section Title */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Projects
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto" />
          </motion.div>

          {/* Projects Grid */}
          <motion.div
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                variants={itemVariants}
                whileHover={{ y: -5, scale: 1.02 }}
                className="bg-card rounded-lg shadow-lg border border-border overflow-hidden group cursor-pointer"
                onClick={() => openModal(project)}
              >
                {/* Project Image Preview */}
                <div className="relative h-48 overflow-hidden">
                  {project.images && project.images.length > 0 ? (
                    <>
                      <motion.img
                        src={project.images[0]}
                        alt={`${project.title} preview`}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        whileHover={{ scale: 1.05 }}
                      />
                      {/* Image Overlay */}
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                        <motion.div
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileHover={{ opacity: 1, scale: 1 }}
                          className="bg-white/90 text-black p-3 rounded-full"
                        >
                          <ExternalLink size={20} />
                        </motion.div>
                      </div>
                      {/* Image Counter Badge */}
                      {project.images.length > 1 && (
                        <div className="absolute top-3 right-3 bg-black/70 text-white px-2 py-1 rounded-full text-xs font-medium">
                          +{project.images.length - 1} more
                        </div>
                      )}
                    </>
                  ) : (
                    /* Fallback for projects without images */
                    <div className="w-full h-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center group-hover:from-primary/30 group-hover:to-secondary/30 transition-colors duration-300">
                      <div className="text-center">
                        <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-2 group-hover:bg-primary/30 transition-colors duration-300">
                          <ExternalLink size={24} className="text-primary" />
                        </div>
                        <p className="text-sm text-muted-foreground font-medium">View Project</p>
                      </div>
                    </div>
                  )}
                </div>

                {/* Project Header */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-semibold text-card-foreground group-hover:text-primary transition-colors duration-200">
                      {project.title}
                    </h3>
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      className="opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                    >
                      <ExternalLink size={20} className="text-primary" />
                    </motion.div>
                  </div>

                  {/* Description */}
                  <p className="text-card-foreground text-sm leading-relaxed mb-4">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="bg-secondary text-secondary-foreground px-2 py-1 rounded text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Footer */}
                <div className="px-6 pb-6">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="text-primary hover:text-primary/80 font-medium text-sm transition-colors duration-200"
                  >
                    See more
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Modal */}
      <ProjectModal
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={closeModal}
      />
    </section>
  );
};

export default Projects;
