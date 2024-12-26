import React from 'react';
import ProjectGallery from '../components/ProjectGallery';

const projects = [
  {
    name: 'E-Commerce Platform Website',
    description: 'A full-stack e-commerce platform with PERN stack.',
    technologies: ['React.js', 'Node.js', 'PostgreSQL', 'Redux'],
    link: 'https://github.com/TekTitans/MERAKI_Academy_Project_5',
  },
  {
    name: 'Football Jerseys E-Commerce Website',
    description: 'An e-commerce platform for football jerseys with MERN stack.',
    technologies: ['React.js', 'MongoDB', 'Node.js'],
    link: 'https://github.com/AlKhateebKhaled/MERAKI_Academy_Project_4',
  },
];

const Projects = () => {
  return (
    <div className="min-h-screen bg-gray-100 px-6 py-10">
      <h1 className="text-4xl font-bold text-center text-gray-800">My Projects</h1>
      <ProjectGallery projects={projects} />
    </div>
  );
};

export default Projects;
