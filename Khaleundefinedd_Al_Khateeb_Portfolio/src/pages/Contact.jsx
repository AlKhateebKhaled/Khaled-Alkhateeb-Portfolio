import React from 'react';

const Contact = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 px-6">
      <h1 className="text-4xl font-bold text-gray-800">Contact Me</h1>
      <p className="mt-4 text-lg text-gray-600">Feel free to reach out via email or connect on LinkedIn!</p>
      <div className="mt-6 space-y-4">
        <p>Email: <a href="mailto:khaled.hkhateeb@gmail.com" className="text-blue-500">khaled.hkhateeb@gmail.com</a></p>
        <p>Phone: +962 772874494</p>
        <p>LinkedIn: <a href="https://www.linkedin.com/in/khaledal-khateeb" className="text-blue-500">linkedin.com/in/khaledal-khateeb</a></p>
      </div>
    </div>
  );
};

export default Contact;
