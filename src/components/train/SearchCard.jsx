// SearchCard.js
import React from 'react';
import ClassCard from './ClassCard';

const SearchCard = ({ data, duration }) => {
  const generateClassTypes = (data) => {
    const classTypes = [];

    if (data.acSeats > 0) {
      classTypes.push({ type: 'AC', availability: data.acSeats });
    }

    if (data.sleeperSeats > 0) {
      classTypes.push({ type: 'SL', availability: data.sleeperSeats });
    }

    if (data.generalSeats > 0) {
      classTypes.push({ type: 'General', availability: data.generalSeats });
    }

    return classTypes;
  };

  const classTypes = generateClassTypes(data);

  return (
    <div className="card border-primary mb-3">
      <div className="card-header">
        <div className="d-flex justify-content-between align-items-center">
          <div className="name">
            {data.trainName} ({data.trainNumber})
          </div>
          <div>Runs On: {data.runsOn}</div>
          <a href={data.scheduleLink} className="btn btn-sm btn-outline-primary">Train Schedule</a>
        </div>
      </div>
      <div className="card-body">
        <div className="row mb-3">
          <div className="col">{data.arrivalTime} | {data.source}</div>
          <div className="col text-center">-- {duration} --</div>
          <div className="col text-end">{data.departureTime} | {data.destination}</div>
        </div>
        <div className="d-flex flex-wrap">
          {classTypes.map((classType, index) => (
            <ClassCard
              key={index}
              classType={classType.type}
              availability={classType.availability}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SearchCard;
