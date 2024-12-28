import React from "react";
import { motion } from "framer-motion";

const ProjectCard = ({ project }) => {
  return (
    <motion.div
      className="relative bg-gradient-to-tr from-white to-gray-100 dark:from-gray-700 dark:to-gray-800 rounded-xl p-1 shadow-2xl"
      whileHover={{ scale: 1.05 }}
    >
      {/* Card Content */}
      <div className="relative bg-gradient-to-tr from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 rounded-lg shadow-lg overflow-hidden h-full">
        {/* Project Details */}
        <div className="p-6">
          {/* Project Header */}
          <motion.div
            className="flex items-center space-x-4"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              whileHover={{ rotate: 360 }}
            >
              <img
                src={project.image}
                alt={`${project.name} logo`}
                className="w-20 h-20 rounded-full border-2 border-gray-200 dark:border-gray-600 shadow-md"
              />
            </motion.div>

            <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
              {project.name}
            </h2>
          </motion.div>

          {/* Description */}
          <motion.p
            className="text-lg font-medium text-gray-800 dark:text-gray-300 mt-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {project.description}
          </motion.p>

          {/* Technologies */}
          <motion.div
            className="mt-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <p className="text-lg font-semibold text-gray-700 dark:text-gray-300 uppercase">
              Technologies:
            </p>
            <div className="grid grid-cols-4 gap-4 mt-3">
              {project.technologies.map((tech, index) => (
                <motion.div
                  key={index}
                  className="flex flex-col items-center"
                  whileHover={{ scale: 1.2, rotate: 10 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <img
                    src={tech.icon}
                    alt={tech.name}
                    className="w-12 h-12"
                    title={tech.name}
                  />
                  <p className="text-sm font-semibold text-gray-700 dark:text-gray-400 mt-2">
                    {tech.name}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Buttons */}
          <motion.div
            className="mt-6 flex justify-center space-x-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <motion.div whileTap={{ scale: 0.95 }}>
              <a
                whileTap={{ scale: 0.95 }}
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-4 py-2 font-bold text-white bg-gradient-to-r from-green-500 to-teal-600 rounded-lg shadow-md hover:scale-105 transition-transform duration-300"
              >
                View Project
              </a>
            </motion.div>
            {/* GitHub Code Button */}

            <motion.div whileTap={{ scale: 0.95 }}>
              <a
                href={project.code}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-4 py-2 font-bold text-white bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg shadow-md hover:scale-105 transition-transform duration-300 cursor-pointer"
              >
                View Code
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
