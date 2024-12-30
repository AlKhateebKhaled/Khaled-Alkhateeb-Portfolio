import React from "react";
import SkillCard from "../components/SkillCard";
import { motion } from "framer-motion";
import Timeline from "../components/Timeline";

const skills = [
  {
    name: "JavaScript (ES6+)",
    description: "Programming language for web development.",
    icon: "https://img.icons8.com/color/48/000000/javascript.png",
  },
  {
    name: "HTML5",
    description: "Markup language for structuring web content.",
    icon: "https://img.icons8.com/color/48/000000/html-5.png",
  },
  {
    name: "CSS3",
    description: "Stylesheet language for designing web pages.",
    icon: "https://img.icons8.com/color/48/000000/css3.png",
  },
  {
    name: "Node.js",
    description: "Backend runtime for JavaScript.",
    icon: "https://img.icons8.com/color/48/000000/nodejs.png",
  },
  {
    name: "Express.js",
    description: "Backend web application framework for Node.js.",
    icon: "https://img.icons8.com/color/48/000000/express.png",
  },
  {
    name: "MongoDB",
    description: "NoSQL database.",
    icon: "https://img.icons8.com/color/48/000000/mongodb.png",
  },
  {
    name: "PostgreSQL",
    description: "Relational database.",
    icon: "https://img.icons8.com/color/48/000000/postgreesql.png",
  },
  {
    name: "React.js",
    description: "Frontend framework for building UI.",
    icon: "https://img.icons8.com/color/48/000000/react-native.png",
  },
  {
    name: "Redux",
    description: "State management library.",
    icon: "https://img.icons8.com/color/48/000000/redux.png",
  },
  {
    name: "Tailwind CSS",
    description: "Utility-first CSS framework.",
    icon: "https://img.icons8.com/color/48/000000/css3.png",
  },
  {
    name: "Bootstrap",
    description: "CSS framework for responsive web design.",
    icon: "https://img.icons8.com/color/48/000000/bootstrap.png",
  },
  {
    name: "Material-UI",
    description: "React component library for modern design.",
    icon: "https://img.icons8.com/color/48/000000/material-ui.png",
  },
];

const About = () => {
  return (
    <div className="relative min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white px-6 py-16 overflow-hidden">


      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500 rounded-full blur-3xl opacity-30 -z-10"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-purple-500 rounded-full blur-3xl opacity-20 -z-10"></div>

      <motion.div
        className="max-w-4xl mx-auto text-center"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-5xl font-extrabold">About Me</h1>
        <p className="mt-6 text-lg text-gray-600 dark:text-gray-300">
          I’m a Full Stack Developer passionate about building dynamic web
          applications using the MERN and PERN stacks. I’m excited to
          collaborate with diverse teams, contribute to meaningful projects, and
          continue growing as a developer.
        </p>
      </motion.div>

      <div className="my-8 border-t-2 border-gray-300"></div>
      <h3 className="text-4xl font-semibold text-center mb-1">Skills</h3>
      <motion.div
        className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        {skills.map((skill, index) => (
          <SkillCard key={index} skill={skill} />
        ))}
      </motion.div>

   
      <Timeline />

    </div>
  );
};

export default About;
