import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <div className="relative flex items-center justify-center h-screen bg-gradient-to-br from-blue-900 via-black to-gray-900">
      <motion.h1
        className="text-6xl md:text-8xl font-extrabold text-white"
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Hi, I'm Khaled
      </motion.h1>
      <motion.p
        className="text-lg md:text-2xl text-gray-300 mt-4"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        Full Stack Developer | Creative Innovator
      </motion.p>
    </div>
  );
};

export default Hero;
