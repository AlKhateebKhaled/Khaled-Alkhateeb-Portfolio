import React from "react";
import ProjectCard from "../components/ProjectCard";

const projects = [
  {
    name: "SmartCart",
    description: "SmartCart is a full-stack e-commerce platform allows users to register as customers, sellers, or admins, giving them personalized access to browse products, make purchases, and manage inventories. The platform incorporates role-based functionality for secure access control and includes dedicated dashboards for admins and sellers. SmartCart is designed for seamless interactions across all user roles",
    technologies: [
      {
        name: "JavaScript",
        icon: "https://img.icons8.com/color/48/000000/javascript.png",
      },
      {
        name: "Node.js",
        icon: "https://img.icons8.com/color/48/000000/nodejs.png",
      },
      {
        name: "Express.js",
        icon: "https://img.icons8.com/color/48/000000/express.png",
      },
      {
        name: "PostgreSQL",
        icon: "https://img.icons8.com/color/48/000000/postgreesql.png",
      },
      {
        name: "React.js",
        icon: "https://img.icons8.com/color/48/000000/react-native.png",
      },
      {
        name: "Redux",
        icon: "https://img.icons8.com/color/48/000000/redux.png",
      },
      { name: "CSS3", icon: "https://img.icons8.com/color/48/000000/css3.png" },
      {
        name: "Bootstrap",
        icon: "https://img.icons8.com/color/48/000000/bootstrap.png",
      },
    ],
    link: "",
    code: "https://github.com/TekTitans/MERAKI_Academy_Project_5",
    image:
      "https://res.cloudinary.com/drhborpt0/image/upload/v1735353834/DALL_E_2024-12-28_05.43.35_-_A_highly_professional_and_elegant_logo_design_for_an_e-commerce_platform_named_SmartCart._The_design_features_a_sleek_and_modern_shopping_cart_icon_yjwelx.webp",
  },
  {
    name: "FORZA",
    description:
      "FORZA is a full-stack e-commerce website designed for football jersey enthusiasts. Users can easily explore a variety of jerseys, add items to their cart, and complete purchases seamlessly. Registered users can take advantage of additional features, including rating products, adding items to their watchlist, and managing their cart for future purchases. FORZA aims to provide a smooth and engaging shopping experience for football fans.",
    technologies: [
      {
        name: "JavaScript",
        icon: "https://img.icons8.com/color/48/000000/javascript.png",
      },
      {
        name: "Node.js",
        icon: "https://img.icons8.com/color/48/000000/nodejs.png",
      },
      {
        name: "Express.js",
        icon: "https://img.icons8.com/color/48/000000/express.png",
      },
      {
        name: "MongoDB",
        icon: "https://img.icons8.com/color/48/000000/mongodb.png",
      },
      {
        name: "React.js",
        icon: "https://img.icons8.com/color/48/000000/react-native.png",
      },
      {
        name: "Redux",
        icon: "https://img.icons8.com/color/48/000000/redux.png",
      },
      { name: "CSS3", icon: "https://img.icons8.com/color/48/000000/css3.png" },
      {
        name: "Bootstrap",
        icon: "https://img.icons8.com/color/48/000000/bootstrap.png",
      },
    ],
    link: "https://forzajerseys.netlify.app/",
    code: "https://github.com/AlKhateebKhaled/MERAKI_Academy_Project_4",
    image:
      "https://res.cloudinary.com/drhborpt0/image/upload/v1735352368/Logo_c0cb5u.png",
  },
  {
    name: "KMDB",
    description:
      "Movies App, dynamic single-page application to Browse, Search, Filter, Rate and interact with movies.",
    technologies: [
      {
        name: "JavaScript",
        icon: "https://img.icons8.com/color/48/000000/javascript.png",
      },
      {
        name: "HTML5",
        icon: "https://img.icons8.com/color/48/000000/html-5.png",
      },
      { name: "CSS3", icon: "https://img.icons8.com/color/48/000000/css3.png" },
      {
        name: "jQuery",
        icon: "https://img.icons8.com/ios/50/000000/jquery.png",
      },
    ],
    link: "https://effervescent-meerkat-695475.netlify.app/",
    code: "https://github.com/AlKhateebKhaled/MERAKI_Academy_Project_2.git",
    image:
      "https://res.cloudinary.com/drhborpt0/image/upload/v1735484920/KMDB_gpeig1.webp",
  },
  {
    name: "Hangman Game",
    description:
      "Hangman Game is a fun and interactive word-guessing game where players try to reveal the hidden word by selecting letters. It features multiple difficulty levels, a helpful hint system, and a progress tracker to enhance gameplay.",
    technologies: [
      {
        name: "JavaScript",
        icon: "https://img.icons8.com/color/48/000000/javascript.png",
      },
      {
        name: "HTML5",
        icon: "https://img.icons8.com/color/48/000000/html-5.png",
      },
      { name: "CSS3", icon: "https://img.icons8.com/color/48/000000/css3.png" },
    ],
    link: "https://alkhateebkhaled.github.io/MERAKI_Academy_Project_1/",
    code: "https://github.com/AlKhateebKhaled/MERAKI_Academy_Project_1.git",
    image:
      "https://res.cloudinary.com/drhborpt0/image/upload/v1735521255/Hangman_nj55kb.webp",
  },
];

const Projects = () => {
  return (
    <div className="bg-gradient-to-tr from-gray-200 to-gray-300 dark:from-gray-800 dark:to-gray-900 px-6 py-10 min-h-screen">
      <h1 className="text-4xl font-extrabold text-center text-gray-800 dark:text-gray-100 mb-10">
        My Projects
      </h1>
      <div className="grid gap-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
