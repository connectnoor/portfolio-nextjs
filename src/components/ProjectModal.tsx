"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink, ChevronLeft, ChevronRight, Maximize2, Minimize2 } from "lucide-react";

interface Project {
  id: string;
  title: string;
  description: string;
  fullDescription: string;
  technologies: string[];
  images?: string[];
  websiteUrl?: string;
  githubUrl?: string;
}

interface ProjectModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

const ProjectModal = ({ project, isOpen, onClose }: ProjectModalProps) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  if (!project) return null;

  const nextImage = () => {
    if (project.images) {
      setCurrentImageIndex((prev) => (prev + 1) % project.images!.length);
    }
  };

  const prevImage = () => {
    if (project.images) {
      setCurrentImageIndex((prev) => (prev - 1 + project.images!.length) % project.images!.length);
    }
  };

  const openLightbox = (index: number) => {
    setCurrentImageIndex(index);
    setIsLightboxOpen(true);
  };

  const closeLightbox = () => {
    setIsLightboxOpen(false);
  };

  const modalVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.3,
        ease: "easeOut" as const,
      },
    },
    exit: {
      opacity: 0,
      scale: 0.8,
      transition: {
        duration: 0.2,
        ease: "easeIn" as const,
      },
    },
  };

  const backdropVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    exit: { opacity: 0 },
  };

  const lightboxVariants = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.3,
        ease: "easeOut" as const,
      },
    },
    exit: {
      opacity: 0,
      scale: 0.5,
      transition: {
        duration: 0.2,
        ease: "easeIn" as const,
      },
    },
  };

  return (
    <>
      {/* Main Modal */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            variants={backdropVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
            onClick={onClose}
          >
            <motion.div
              variants={modalVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="bg-card rounded-lg shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto border border-border"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="flex items-center justify-between p-6 border-b border-border">
                <h2 className="text-2xl font-bold text-card-foreground">
                  {project.title} Details
                </h2>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={onClose}
                  className="p-2 hover:bg-secondary rounded-full transition-colors duration-200"
                  aria-label="Close modal"
                >
                  <X size={24} className="text-card-foreground" />
                </motion.button>
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Image Gallery */}
                {project.images && project.images.length > 0 && (
                  <div className="mb-6">
                    <h3 className="text-lg font-semibold text-card-foreground mb-4">
                      Project Screenshots
                    </h3>
                    
                    {/* Main Image Display */}
                    <div className="relative mb-4">
                      <motion.div
                        key={currentImageIndex}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        transition={{ duration: 0.3 }}
                        className="relative group cursor-pointer"
                        onClick={() => openLightbox(currentImageIndex)}
                      >
                        <img
                          src={project.images[currentImageIndex]}
                          alt={`${project.title} screenshot ${currentImageIndex + 1}`}
                          className="w-full h-64 object-cover rounded-lg border border-border"
                        />
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-200 rounded-lg flex items-center justify-center">
                          <motion.div
                            initial={{ scale: 0, opacity: 0 }}
                            whileHover={{ scale: 1, opacity: 1 }}
                            className="bg-white/90 text-black p-2 rounded-full"
                          >
                            <Maximize2 size={20} />
                          </motion.div>
                        </div>
                      </motion.div>

                      {/* Navigation Arrows */}
                      {project.images.length > 1 && (
                        <>
                          <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            onClick={prevImage}
                            className="absolute left-2 top-1/2 transform -translate-y-1/2 p-2 bg-black/50 text-white rounded-full hover:bg-black/70 transition-colors duration-200"
                          >
                            <ChevronLeft size={20} />
                          </motion.button>
                          <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            onClick={nextImage}
                            className="absolute right-2 top-1/2 transform -translate-y-1/2 p-2 bg-black/50 text-white rounded-full hover:bg-black/70 transition-colors duration-200"
                          >
                            <ChevronRight size={20} />
                          </motion.button>
                        </>
                      )}

                      {/* Image Counter */}
                      {project.images.length > 1 && (
                        <div className="absolute bottom-2 right-2 bg-black/50 text-white px-2 py-1 rounded text-sm">
                          {currentImageIndex + 1} / {project.images.length}
                        </div>
                      )}
                    </div>

                    {/* Thumbnail Strip */}
                    {project.images.length > 1 && (
                      <div className="flex space-x-2 overflow-x-auto pb-2">
                        {project.images.map((image, index) => (
                          <motion.button
                            key={index}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => setCurrentImageIndex(index)}
                            className={`flex-shrink-0 w-16 h-16 rounded border-2 transition-all duration-200 ${
                              index === currentImageIndex
                                ? "border-primary"
                                : "border-border hover:border-primary/50"
                            }`}
                          >
                            <img
                              src={image}
                              alt={`Thumbnail ${index + 1}`}
                              className="w-full h-full object-cover rounded"
                            />
                          </motion.button>
                        ))}
                      </div>
                    )}
                  </div>
                )}

                {/* Project Description */}
                <p className="text-card-foreground leading-relaxed mb-6">
                  {project.fullDescription}
                </p>

                {/* Technologies */}
                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-card-foreground mb-3">
                    Technologies Used:
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <motion.span
                        key={tech}
                        whileHover={{ scale: 1.05 }}
                        className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </div>

                {/* Actions */}
                <div className="flex justify-end space-x-4">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={onClose}
                    className="px-6 py-2 bg-secondary text-secondary-foreground rounded-lg hover:bg-secondary/80 transition-colors duration-200"
                  >
                    Close
                  </motion.button>
                  {project.websiteUrl && (
                    <motion.a
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      href={project.websiteUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors duration-200 flex items-center space-x-2"
                    >
                      <span>Go to Website</span>
                      <ExternalLink size={16} />
                    </motion.a>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {isLightboxOpen && project.images && (
          <motion.div
            variants={backdropVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="fixed inset-0 z-60 flex items-center justify-center bg-black/95 backdrop-blur-sm"
            onClick={closeLightbox}
          >
            <motion.div
              variants={lightboxVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="relative max-w-7xl max-h-[90vh] w-full h-full flex items-center justify-center p-4"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={closeLightbox}
                className="absolute top-4 right-4 z-10 p-2 bg-black/50 text-white rounded-full hover:bg-black/70 transition-colors duration-200"
              >
                <X size={24} />
              </motion.button>

              {/* Minimize Button */}
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={closeLightbox}
                className="absolute top-4 right-16 z-10 p-2 bg-black/50 text-white rounded-full hover:bg-black/70 transition-colors duration-200"
              >
                <Minimize2 size={24} />
              </motion.button>

              {/* Main Image */}
              <motion.img
                key={currentImageIndex}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.3 }}
                src={project.images[currentImageIndex]}
                alt={`${project.title} fullscreen ${currentImageIndex + 1}`}
                className="max-w-full max-h-full object-contain rounded-lg"
              />

              {/* Navigation Arrows */}
              {project.images.length > 1 && (
                <>
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={prevImage}
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 p-3 bg-black/50 text-white rounded-full hover:bg-black/70 transition-colors duration-200"
                  >
                    <ChevronLeft size={24} />
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={nextImage}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 p-3 bg-black/50 text-white rounded-full hover:bg-black/70 transition-colors duration-200"
                  >
                    <ChevronRight size={24} />
                  </motion.button>
                </>
              )}

              {/* Image Counter */}
              {project.images.length > 1 && (
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/50 text-white px-4 py-2 rounded-full text-sm">
                  {currentImageIndex + 1} / {project.images.length}
                </div>
              )}

              {/* Thumbnail Strip */}
              {project.images.length > 1 && (
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                  {project.images.map((image, index) => (
                    <motion.button
                      key={index}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`w-12 h-12 rounded border-2 transition-all duration-200 ${
                        index === currentImageIndex
                          ? "border-white"
                          : "border-white/50 hover:border-white/80"
                      }`}
                    >
                      <img
                        src={image}
                        alt={`Thumbnail ${index + 1}`}
                        className="w-full h-full object-cover rounded"
                      />
                    </motion.button>
                  ))}
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ProjectModal;