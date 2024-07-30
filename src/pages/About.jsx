
import React from 'react';

function About() {
  return (
    <div className="container mx-auto mt-8 px-4">
      <h2 className="text-4xl font-bold text-blue-700 text-center mb-8">About Us</h2>
      <div className="bg-white shadow-lg rounded-lg p-6 mb-8">
        <p className="text-lg text-gray-700 mb-4">Founded in 1985, Springdale Public School has been dedicated to providing quality education and holistic development to students.</p>
        <p className="text-lg text-gray-700 mb-4"><span className="font-bold">Our Vision:</span> To create a learning environment that fosters academic excellence, critical thinking, and ethical values.</p>
        <p className="text-lg text-gray-700 mb-4"><span className="font-bold">Our Mission:</span> To empower students with the knowledge, skills, and values needed to thrive in a dynamic world.</p>
        <p className="text-lg text-gray-700 mb-4"><span className="font-bold">Principal's Message:</span> "At Springdale, we believe in nurturing the potential of every student and guiding them towards a successful future."</p>
      </div>
      <h3 className="text-3xl font-bold text-blue-700 mb-4">Infrastructure and Facilities</h3>
      <ul className="list-disc list-inside text-lg text-gray-700 mb-8">
        <li className="mb-2">State-of-the-art science and computer labs</li>
        <li className="mb-2">Spacious and well-equipped classrooms</li>
        <li className="mb-2">Library with a vast collection of books and digital resources</li>
        <li className="mb-2">Sports facilities including a playground, gymnasium, and swimming pool</li>
      </ul>
    </div>
  );
}

export default About;
