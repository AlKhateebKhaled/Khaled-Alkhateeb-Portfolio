import React from 'react';

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-center">
      <h1 className="text-5xl font-bold text-gray-800">Hi, I'm Khaled Al-Khateeb</h1>
      <p className="mt-4 text-lg text-gray-600">
        Full Stack Developer | MERN & PERN Stack | Crafting Dynamic Web Solutions
      </p>
      <a
        href="/projects"
        className="mt-6 bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600 transition"
      >
        View My Work
      </a>
    </div>
  );
};

export default Home;
