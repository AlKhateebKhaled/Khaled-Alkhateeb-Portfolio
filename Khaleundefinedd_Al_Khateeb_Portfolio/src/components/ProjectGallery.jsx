import React from 'react';

const ProjectGallery = ({ projects }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {projects.map((project, index) => (
        <div
          key={index}
          className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition"
        >
          <div className="p-4">
            <h2 className="text-lg font-bold text-gray-800">{project.name}</h2>
            <p className="text-sm text-gray-600 mt-2">{project.description}</p>
            <ul className="mt-4 text-sm text-gray-700">
              {project.technologies.map((tech, idx) => (
                <li key={idx}>• {tech}</li>
              ))}
            </ul>
            <a
              href={project.link}
              className="mt-4 inline-block bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Project
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProjectGallery;
