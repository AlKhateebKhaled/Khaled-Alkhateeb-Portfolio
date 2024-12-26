import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-6 text-center">
      <p className="text-sm">
        © {new Date().getFullYear()} Khaled Al-Khateeb. All rights reserved.
      </p>
      <div className="flex justify-center mt-4 space-x-4">
        <a
          href="https://www.linkedin.com/in/khaledal-khateeb"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-400"
        >
          LinkedIn
        </a>
        <a
          href="https://github.com/AlKhateebKhaled"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-400"
        >
          GitHub
        </a>
        <a
          href="mailto:khaled.hkhateeb@gmail.com"
          className="hover:text-blue-400"
        >
          Email
        </a>
      </div>
    </footer>
  );
};

export default Footer;
