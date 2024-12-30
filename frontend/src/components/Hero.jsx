import React, { useEffect } from "react";
import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";
import Particles from "react-tsparticles";
import Timeline from "./Timeline";


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
    <div className="relative flex items-center justify-center h-full bg-gradient-to-br from-gray-100 via-gray-200 to-gray-400 dark:from-blue-900 dark:via-black dark:to-gray-900">
      <Particles
        className="absolute inset-0 z-0"
        options={{
          particles: {
            number: { value: 50 },
            size: { value: 3 },
            move: { speed: 2 },
            color: { value: "#ffffff" },
            line_linked: { enable: true, distance: 150 },
          },
        }}
      />
      <div className="relative z-10 text-center">
        <motion.h1
          className="text-[clamp(2rem,5vw,4rem)] font-extrabold dark:text-white text-gray-800"
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Hi, I'm Khaled
        </motion.h1>
        <motion.p
          className="text-lg md:text-2xl dark:text-gray-300 text-gray-600 mt-4"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          <Typewriter
            options={{
              strings: [
                "Full Stack Developer",
                "Creative Innovator",
                "Problem Solver",
              ],
              autoStart: true,
              loop: true,
              delay: 50,
            }}
          />
        </motion.p>
      </div>

    </div>
  );
};

export default Hero;
