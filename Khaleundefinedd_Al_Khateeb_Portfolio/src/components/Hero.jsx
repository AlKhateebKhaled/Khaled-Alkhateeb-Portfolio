import React, { useEffect } from "react";
import { motion } from "framer-motion";

const Hero = () => {
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);

  return (
    <div className="relative flex items-center justify-center h-full transition-all duration-500 bg-gradient-to-br from-gray-100 via-gray-200 to-gray-400 dark:from-blue-900 dark:via-black dark:to-gray-900 ">
      <motion.h1
        className="text-6xl md:text-8xl font-extrabold dark:text-white text-gray-800 transition-colors duration-500"
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Hi, I'm Khaled
      </motion.h1>

      <motion.p
        className="text-lg md:text-2xl dark:text-gray-300 text-gray-600 mt-4 transition-colors duration-500"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        Full Stack Developer | Creative Innovator
      </motion.p>
      <div
        className="absolute inset-0 bg-gradient-to-r from-blue-300 via-purple-300 to-pink-300 dark:from-blue-700 dark:via-purple-800 dark:to-pink-700 opacity-30 blur-3xl z-0 not-dark:block hidden"
      ></div>

    </div>
  );
};

export default Hero;
