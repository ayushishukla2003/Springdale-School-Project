import React from 'react';

function Students() {
  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Life at Springdale</h2>
      <p>Extracurricular Activities: Music, Dance, Drama, Art, Sports, Robotics, Debate Club, Science Club</p>
      <p>Clubs and Societies: Literary Society, Environmental Club, Astronomy Club, Coding Club</p>
      <h3 className="text-xl font-bold mt-4">Achievements:</h3>
      <ul>
        <li>John Smith - National Level Math Olympiad Winner</li>
        <li>Sarah Lee - Gold Medalist in State Swimming Championship</li>
        <li>Tech Innovators Club - Winners of Inter-School Robotics Competition</li>
      </ul>
      <h3 className="text-xl font-bold mt-4">Student Council:</h3>
      <ul>
        <li>President: Amy Parker, Grade 12</li>
        <li>Vice President: Rajiv Mehta, Grade 11</li>
        <li>Secretary: Lisa Wong, Grade 10</li>
      </ul>
    </div>
  );
}

export default Students;
