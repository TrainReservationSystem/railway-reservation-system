import React from 'react';

const ClassCard = ({ classType, availability }) => {
  if (!classType || !availability) {
    return null; // Return null if classType or availability is not available
  }

  const isAvailable = parseInt(availability) > 0; // Check if availability is positive
  const availabilityDisplay = Math.abs(availability); // Display absolute value
  const status = parseInt(availability) > 0 ? 'AVL' : 'WL'; // Determine status

  return (
    <div
      className={`container rounded  my-3 ${
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
