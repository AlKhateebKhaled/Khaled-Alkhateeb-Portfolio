import React, { useEffect } from "react";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);

  return (
    <footer className="flex-none transition-all duration-500 bg-gradient-to-r from-gray-100 via-gray-200 to-gray-300 dark:from-gray-900 dark:via-black dark:to-gray-800 text-gray-800 dark:text-gray-300 border-t border-gray-400 dark:border-gray-700 py-6 text-center">

      <p className="text-sm">
        © {new Date().getFullYear()} Khaled Al-Khateeb. All rights reserved.
      </p>
      <div className="flex justify-center mt-4 space-x-6">
        <a
          href="https://www.linkedin.com/in/khaledal-khateeb"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center space-x-2 hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
        >
          <FaLinkedin />
          <span>LinkedIn</span>
        </a>
        <a
          href="https://github.com/AlKhateebKhaled"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center space-x-2 hover:text-purple-500 dark:hover:text-purple-400 transition-colors"
        >
          <FaGithub />
          <span>GitHub</span>
        </a>
        <a
          href="mailto:khaled.hkhateeb@gmail.com"
          className="flex items-center space-x-2 hover:text-pink-500 dark:hover:text-pink-400 transition-colors"
        >
          <FaEnvelope />
          <span>Email</span>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
