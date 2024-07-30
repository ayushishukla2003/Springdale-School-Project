

import React from 'react';
import { BiBold } from 'react-icons/bi';

function Academics() {
  return (
    <div className="container mx-auto mt-8 px-4">
      <h2 className="text-4xl font-bold text-blue-700 text-center mb-8">Academics</h2>
      <div className="bg-white shadow-lg rounded-lg p-6 mb-8">
        <h3 className="text-3xl font-bold text-blue-700 mb-4">Curriculum</h3>
        <p className="text-lg text-gray-700 mb-4"><h1 className='font-bold'>Primary (Grades 1-5):</h1>Primary (Grades 1-5): English, Mathematics, Science, Social Studies, Art, Physical Education</p>
        <p className="text-lg text-gray-700 mb-4"><h1 className='font-bold'>Secondary (Grades 6-10):</h1> English, Mathematics, Science (Physics, Chemistry, Biology), Social Studies, Computer Science, Physical Education, Art</p>
        <p className="text-lg text-gray-700 mb-4"><h1 className='font-bold'>Senior Secondary (Grades 11-12):</h1></p>
        <ul className="list-disc list-inside text-lg text-gray-700 mb-4">
          <li className="mb-2">Science Stream: Physics, Chemistry, Biology, Mathematics, Computer Science, English</li>
          <li className="mb-2">Commerce Stream: Accountancy, Business Studies, Economics, Mathematics, English</li>
        </ul>
      </div>
      <div className="bg-white shadow-lg rounded-lg p-6 mb-8">
        <h3 className="text-3xl font-bold text-blue-700 mb-4">Teaching Methodologies</h3>
        <p className="text-lg text-gray-700 mb-4">We use a blend of traditional and modern teaching techniques to cater to different learning styles.</p>
      </div>
      <div className="bg-white shadow-lg rounded-lg p-6 mb-8">
        <h3 className="text-3xl font-bold text-blue-700 mb-4">Educational Resources</h3>
        <p className="text-lg text-gray-700 mb-4">Digital classrooms, interactive learning modules, and access to online educational platforms.</p>
      </div>
    </div>
  );
}

export default Academics;

