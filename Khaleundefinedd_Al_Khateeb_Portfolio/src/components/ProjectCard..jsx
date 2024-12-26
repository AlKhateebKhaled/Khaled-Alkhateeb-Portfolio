import React from 'react';

const ProjectCard = ({ project }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition">
      <h2 className="text-2xl font-bold text-gray-800">{project.name}</h2>
      <p className="mt-2 text-gray-600">{project.description}</p>
      <div className="mt-4">
        <p className="text-sm font-semibold text-gray-700">Technologies:</p>
        <ul className="list-disc ml-4 text-sm text-gray-600">
          {project.technologies.map((tech, index) => (
            <li key={index}>{tech}</li>
          ))}
        </ul>
      </div>
      <a
        href={project.link}
        className="mt-4 inline-block bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
      >
        View Project
      </a>
    </div>
  );
};

export default ProjectCard;
