import React from 'react';

function Admissions() {
  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Admissions</h2>
      <p><h1 className='font-bold'>Process:</h1>Admission forms are available for download. Submit the completed form along with required documents at the school office.</p>
      <p><h1 className='font-bold'>Criteria:</h1>Admission is based on merit and availability of seats. Entrance tests may be conducted for certain grades.</p>
      <h3 className="text-xl font-bold mt-4">Important Dates:</h3>
      <ul>
        <li>Admission Form Availability: March 1st</li>
        <li>Last Date for Submission: March 31st</li>
        <li>Entrance Test: April 15th</li>
        <li>Announcement of Results: April 30th</li>
      </ul>
    </div>
  );
}

export default Admissions;
