import React from "react";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-tr from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900 px-6 py-10">
      <motion.h1
        className="text-5xl font-extrabold text-gray-800 dark:text-gray-100"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Contact Me
      </motion.h1>
      <motion.p
        className="mt-4 text-lg text-gray-600 dark:text-gray-300"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        Feel free to reach out via email, phone, or connect with me on LinkedIn and GitHub!
      </motion.p>
      <motion.div
        className="mt-10 space-y-6 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.9, delay: 0.5 }}
      >
        {/* Email */}
        <motion.div
          whileHover={{ scale: 1.1 }}
          className="text-lg font-semibold text-gray-700 dark:text-gray-300"
        >
          Email:{" "}
          <a
            href="mailto:khaled.hkhateeb@gmail.com"
            className="text-blue-500 hover:underline"
          >
            khaled.hkhateeb@gmail.com
          </a>
        </motion.div>

        {/* Phone */}
        <motion.div
  whileHover={{ scale: 1.1 }}
  className="text-lg font-semibold text-gray-700 dark:text-gray-300"
>
  Phone:{" "}
  <a
    href="tel:+962772874494"
    className="text-blue-500 hover:underline"
  >
    +962 772874494
  </a>
</motion.div>

        {/* LinkedIn */}
        <motion.div
          whileHover={{ scale: 1.1 }}
          className="text-lg font-semibold text-gray-700 dark:text-gray-300"
        >
          LinkedIn:{" "}
          <a
            href="https://www.linkedin.com/in/khaledal-khateeb"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline"
          >
            linkedin.com/in/khaledal-khateeb
          </a>
        </motion.div>

        {/* GitHub */}
        <motion.div
          whileHover={{ scale: 1.1 }}
          className="text-lg font-semibold text-gray-700 dark:text-gray-300"
        >
          GitHub:{" "}
          <a
            href="https://github.com/AlKhateebKhaled"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline"
          >
            github.com/AlKhateebKhaled
          </a>
        </motion.div>
      </motion.div>

     
    </div>
  );
};

export default Contact;
