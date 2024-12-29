import React from "react";
import { motion } from "framer-motion";

const SkillCard = ({ skill }) => {
  return (
    <motion.div
      className="relative group p-6 rounded-xl shadow-lg transition-transform bg-gradient-to-tr from-gray-200 to-gray-300 dark:from-gray-800 dark:to-gray-900 overflow-hidden hover:scale-105 transform"
      whileHover={{
        scale: 1.1,
        rotate: 2,
      }}
    >
      <div className="absolute inset-0 z-0 bg-gradient-to-r from-blue-300 via-purple-300 to-pink-300 dark:from-blue-500 dark:via-purple-500 dark:to-pink-500 opacity-20 blur-xl group-hover:blur-3xl transition-all"></div>

      <motion.div
        className="relative z-10 w-16 h-16 mx-auto rounded-full bg-gradient-to-br from-blue-300 to-purple-300 dark:from-blue-500 dark:to-purple-500 p-1"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        whileHover={{ rotate: 360 }}
      >
        <div className="flex items-center justify-center w-full h-full bg-gray-100 dark:bg-gray-900 rounded-full">
          <img
            src={skill.icon}
            alt={skill.name}
            className="w-10 h-10 object-contain"
          />
        </div>
      </motion.div>

      <motion.h3
        className="relative z-10 mt-6 text-xl font-bold text-center text-gray-800 dark:text-white"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        {skill.name}
      </motion.h3>

      <motion.p
        className="relative z-10 mt-3 text-sm text-center text-gray-500 dark:text-gray-400 group-hover:text-gray-600 dark:group-hover:text-gray-300 transition-colors"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
      >
        {skill.description}
      </motion.p>

      <div className="absolute inset-0 rounded-xl border-2 border-transparent group-hover:border-blue-300 dark:group-hover:border-blue-500 transition-all"></div>
    </motion.div>
  );
};

export default SkillCard;
