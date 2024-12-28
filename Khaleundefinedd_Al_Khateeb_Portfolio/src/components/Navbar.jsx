import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FiSun, FiMoon } from "react-icons/fi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      setIsDarkMode(true);
      document.documentElement.classList.add("dark");
    } else {
      setIsDarkMode(false);
      document.documentElement.classList.remove("dark");
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = !isDarkMode ? "dark" : "light";
    setIsDarkMode(!isDarkMode);
    localStorage.setItem("theme", newTheme);

    if (newTheme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  return (
<nav
  className={`sticky top-0 z-50 transition-all duration-300 shadow-lg ${
    isDarkMode
      ? "bg-gray-900 text-white border-b border-gray-700"
      : "bg-gradient-to-r from-white via-gray-100 to-gray-200 text-gray-800 border-b border-gray-300"
  }`}
>

      <div className="container mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-3xl font-extrabold tracking-wider">
            <Link to="/" className="hover:text-blue-500 transition">
              Khaled's Portfolio
            </Link>
          </h1>
        </motion.div>

        {/* Links for Desktop */}
        <div className="hidden md:flex space-x-8">
          {["Home", "About", "Projects", "Contact"].map((link) => (
            <Link
              key={link}
              to={`/${link.toLowerCase()}`}
              className={`font-semibold text-lg ${
                isDarkMode
                  ? "hover:text-blue-400"
                  : "hover:text-blue-600 text-gray-800"
              } transition`}
            >
              {link}
            </Link>
          ))}
        </div>

        {/* Theme Toggle Button */}
        <div
          onClick={toggleTheme}
          className="relative flex items-center justify-between w-20 h-10 bg-gray-700 dark:bg-gray-600 rounded-full cursor-pointer ml-4 shadow-lg"
        >
          <div
            className={`absolute w-full h-full rounded-full bg-gradient-to-r ${
              isDarkMode
                ? "from-yellow-500 to-yellow-700"
                : "from-blue-500 to-blue-700"
            } transition-all duration-500`}
          ></div>

          <div
            className={`absolute left-0 w-10 h-10 rounded-full bg-white shadow-lg transform transition-transform duration-500 flex items-center justify-center ${
              isDarkMode ? "translate-x-10" : "translate-x-0"
            }`}
          >
            {isDarkMode ? (
              <FiMoon className="text-yellow-600 text-2xl" />
            ) : (
              <FiSun className="text-blue-600 text-2xl" />
            )}
          </div>
        </div>

        {/* Hamburger Menu for Mobile */}
        <button
          className="md:hidden focus:outline-none ml-4"
          onClick={toggleMenu}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={
                isOpen
                  ? "M6 18L18 6M6 6l12 12"
                  : "M4 6h16M4 12h16m-7 6h7"
              }
            />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          transition={{ duration: 0.3 }}
          className={`md:hidden ${
            isDarkMode
              ? "bg-gray-800 text-white"
              : "bg-gray-100 text-gray-800"
          }`}
        >
          <ul className="space-y-6 text-center py-6">
            {["Home", "About", "Projects", "Contact"].map((link) => (
              <li key={link}>
                <Link
                  to={`/${link.toLowerCase()}`}
                  className="block font-semibold text-lg hover:text-blue-500 transition"
                  onClick={() => setIsOpen(false)}
                >
                  {link}
                </Link>
              </li>
            ))}
          </ul>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;
