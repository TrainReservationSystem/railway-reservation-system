import React from 'react';

const ClassCard = ({ classType, availability }) => {
  if (!classType || availability === null || isNaN(availability)) {
    return null; // Return null if classType or availability is not available or not a number
  }

  const isAvailable = availability >= 0; // Check if availability is non-negative
  const availabilityDisplay = isAvailable ? availability : Math.abs(availability) + ''; // Display absolute value with 'WL' if availability is negative
  const status = isAvailable ? 'AVL' : 'WL'; // Determine status

  return (
    <div
      className={`container rounded my-3 ${
        isAvailable ? 'alert alert-success' : 'alert alert-danger'
      }`}
      style={{ width: '18%' }}
    >
      <div className="class-type">{classType}</div>
      <div className="availability">{status} {availabilityDisplay}</div>
    </div>
  );
};

export default ClassCard;
