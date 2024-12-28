import React from 'react';
import ProjectCard from '../components/ProjectCard';

const projects = [
  {
    name: 'E-Commerce Platform Website',
    description: 'A full-stack e-commerce platform built with the PERN stack.',
    technologies: [
      { name: "JavaScript", icon: "https://img.icons8.com/color/48/000000/javascript.png" },
      { name: "Node.js", icon: "https://img.icons8.com/color/48/000000/nodejs.png" },
      { name: "Express.js", icon: "https://img.icons8.com/color/48/000000/express.png" },
      { name: "PostgreSQL", icon: "https://img.icons8.com/color/48/000000/postgreesql.png" },
      { name: "React.js", icon: "https://img.icons8.com/color/48/000000/react-native.png" },
      { name: "Redux", icon: "https://img.icons8.com/color/48/000000/redux.png" },
      { name: "CSS3", icon: "https://img.icons8.com/color/48/000000/css3.png" },
      { name: "Bootstrap", icon: "https://img.icons8.com/color/48/000000/bootstrap.png" },
    ],
    link: '',
    code: 'https://github.com/TekTitans/MERAKI_Academy_Project_5',
    image: 'https://res.cloudinary.com/drhborpt0/image/upload/v1735353834/DALL_E_2024-12-28_05.43.35_-_A_highly_professional_and_elegant_logo_design_for_an_e-commerce_platform_named_SmartCart._The_design_features_a_sleek_and_modern_shopping_cart_icon_yjwelx.webp',
  },
  {
    name: 'Football Jerseys E-Commerce Website',
    description: 'An e-commerce platform for football jerseys using the MERN stack.',
    technologies: [
      { name: "JavaScript", icon: "https://img.icons8.com/color/48/000000/javascript.png" },
      { name: "Node.js", icon: "https://img.icons8.com/color/48/000000/nodejs.png" },
      { name: "Express.js", icon: "https://img.icons8.com/color/48/000000/express.png" },
      { name: "MongoDB", icon: "https://img.icons8.com/color/48/000000/mongodb.png" },
      { name: "React.js", icon: "https://img.icons8.com/color/48/000000/react-native.png" },
      { name: "Redux", icon: "https://img.icons8.com/color/48/000000/redux.png" },
      { name: "CSS3", icon: "https://img.icons8.com/color/48/000000/css3.png" },
      { name: "Bootstrap", icon: "https://img.icons8.com/color/48/000000/bootstrap.png" },
    ],
    link: 'https://forzajerseys.netlify.app/',
    code: 'https://github.com/AlKhateebKhaled/MERAKI_Academy_Project_4',
    image: 'https://res.cloudinary.com/drhborpt0/image/upload/v1735352368/Logo_c0cb5u.png',
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
