import React from 'react';
import ProjectCard from '../components/ProjectCard.';

const Projects = () => {
  const projects = [
    {
      name: 'E-Commerce Platform Website',
      description: 'A full-stack e-commerce platform built with the PERN stack.',
      technologies: ['React.js', 'Node.js', 'PostgreSQL', 'Redux'],
      link: 'https://github.com/TekTitans/MERAKI_Academy_Project_5',
    },
    {
      name: 'Football Jerseys E-Commerce Website',
      description: 'An e-commerce platform for football jerseys with the MERN stack.',
      technologies: ['React.js', 'MongoDB', 'Node.js'],
      link: 'https://github.com/AlKhateebKhaled/MERAKI_Academy_Project_4',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 px-6 py-10">
      <h1 className="text-4xl font-bold text-center text-gray-800">My Projects</h1>
      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
