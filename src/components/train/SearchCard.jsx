// SearchCard.js
import React from "react";
import ClassCard from "./ClassCard";

// static search data
const SearchCard = ({ data }) => {
  const classTypes = [
    { type: "Sleeper", availability: "WL 100" },
    { type: "First Class", availability: "AVL 72" },
    { type: "Chair Car", availability: "AVL 23" },
    { type: "AC 2 Tier", availability: "AVL 2" },
    { type: "AC 3 Tier", availability: "WL 20" },
  ];

  return (
    <>
      <div className="container border border-primary rounded p-3 my-3">
        <div className="d-flex justify-content-between align-items-center">
          <div className="name">
            {data.trainName} ({data.trainNumber})
          </div>
          <div className="middle">Runs On: {data.runsOn}</div>
          <a className="end" href={data.scheduleLink}>
            Train Schedule
          </a>
        </div>

        {/* Time */}
        <div className="row mt-3">
          <div className="col-4">
            {data.departureTime} | {data.departureStation}
          </div>
          <div className="col-4 text-center"> -- {data.arrivalTime} --</div>
          <div className="col-4 text-end">{data.arrivalStation}</div>
        </div>

        {/* ClassCard */}
        <div className="d-flex mt-3">
          {classTypes.map((classType, index) => (
            <ClassCard
              key={index}
              classType={classType.type}
              availability={classType.availability}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default SearchCard;
