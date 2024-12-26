import React from 'react';

const About = () => {
  return (
    <div className="min-h-screen bg-gray-100 px-6 py-10 text-center">
      <h1 className="text-4xl font-bold text-gray-800">About Me</h1>
      <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
        I’m a Full Stack Developer passionate about building dynamic web applications using the MERN and PERN stacks.
        I discovered my love for coding during an intensive bootcamp at Meraki Academy, where I learned to design and develop Full Stack applications from scratch.
        Before transitioning to software development, I spent six years as a Mechanical Engineer, building my skills in systems analysis, project management, and teamwork.
        I’m excited to collaborate with diverse teams, contribute to meaningful projects, and continue growing as a developer.
      </p>
      <div className="mt-8">
        <h2 className="text-2xl font-bold text-gray-800">Skills</h2>
        <div className="mt-4 grid grid-cols-2 md:grid-cols-3 gap-6">
          {[
            { name: "React.js", icon: "https://img.icons8.com/color/48/000000/react-native.png" },
            { name: "Node.js", icon: "https://img.icons8.com/color/48/000000/nodejs.png" },
            { name: "MongoDB", icon: "https://img.icons8.com/color/48/000000/mongodb.png" },
            { name: "PostgreSQL", icon: "https://img.icons8.com/color/48/000000/postgreesql.png" },
            { name: "Redux", icon: "https://img.icons8.com/color/48/000000/redux.png" },
            { name: "Tailwind CSS", icon: "https://img.icons8.com/color/48/000000/css3.png" },
          ].map((skill, index) => (
            <div key={index} className="flex flex-col items-center">
              <img src={skill.icon} alt={skill.name} />
              <p className="mt-2 text-sm text-gray-800">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
