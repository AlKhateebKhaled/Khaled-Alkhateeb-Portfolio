import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <nav className="bg-gray-800 text-white py-4 px-6 flex justify-between items-center">
      <h1 className="text-2xl font-bold">Khaled's Portfolio</h1>
      <ul className="flex space-x-6">
        <li><Link to="/" className="hover:underline">Home</Link></li>
        <li><Link to="/about" className="hover:underline">About</Link></li>
        <li><Link to="/projects" className="hover:underline">Projects</Link></li>
        <li><Link to="/contact" className="hover:underline">Contact</Link></li>
      </ul>
    </nav>
  );
};

export default Header;
