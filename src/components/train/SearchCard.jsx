// SearchCard.js
import React from 'react';
import ClassCard from './ClassCard';

// static search data
const SearchCard = ({ data }) => {
  return (
    <>
      <div className='container border border-primary rounded px-2 my-3'>
        <div className='d-flex justify-content-between align-items-center'>
          <div className='name'>
            {data.trainName} ({data.trainNumber})
          </div>
          <div className='middle'>Runs On: {data.runsOn}</div>
          <a className='end' href={data.scheduleLink}>
            Train Schedule
          </a>
        </div>

        {/* Time */}
        <div className='row mt-1'>
          <div className='col-4'>
            {data.departureTime} | {data.departureStation}
          </div>
          <div className='col-4 text-center'> -- {data.duration} --</div>
          <div className='col-4 text-end'>
            {data.arrivalTime} | {data.arrivalStation}
          </div>
        </div>

        {/* ClassCard */}
        <div className='d-flex flex-wrap '>
          {Object.entries(data.classTypes).map(
            ([type, availability], index) => (
              <ClassCard
                key={index}
                classType={type}
                availability={availability}
              />
            )
          )}
        </div>
      </div>
    </>
  );
};

export default SearchCard;