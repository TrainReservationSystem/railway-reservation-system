// CancelTrainPage.js

import React, { useState } from "react";
import TrainCard2 from "./TrainCard2";

const CancelTrain = () => {
  const [cancelDate, setCancelDate] = useState("");
  const [cancelledTrains, setCancelledTrains] = useState([
    {
      tno: 12912,
      tname: "Pune Bhuj Express",
      source: "Pune",
      dest: "Bhuj",
      date: "2023-12-21",
      status: "running",
    },
    {
      tno: 22912,
      tname: "Valsad Express",
      source: "Valsad",
      dest: "Mumbai Central",
      date: "2023-05-07",
      status: "running", 
    },
    {
      tno: 12894,
      tname: " Karnavati Express",
      source: "Ahmedabad",
      dest: "Mumbai Central",
      date: "2023-12-11",
      status: "cancelled", 
    },
    {
      tno: 12942,
      tname: "Hyderabad Express",
      source: "Hyderabad",
      dest: "Ernakullum",
      date: "2023-08-09",
      status: "running", 
    },
    {
      tno: 24924,
      tname: "Kochi Express",
      source: "Kochi",
      dest: "Punjab",
      date: "2023-11-21",
      status: "cancelled", 
    },
  ]);

  const handleCancelTrain = (trainNumber) => {
    setCancelledTrains((prevTrains) =>
      prevTrains.map((train) => {
        if (train.tno === trainNumber) {
          return {
            ...train,
            status: "cancelled",
            cancelledOn: cancelDate,
          };
        }
        return train;
      })
    );
  };

  return (
    <div className="container-fluid mt-5 d-flex align-items-center justify-content-center">
      <div className="container">
        <h1>Cancel Train</h1>
        <div className="row mb-4">
          <div className="col-9">
            <input
              type="date"
              className="form-control"
              placeholder="Select Date to Cancel"
              value={cancelDate}
              onChange={(e) => setCancelDate(e.target.value)}
            />
          </div>
        </div>

        <div className="border border-dark p-3">
          <div className="row fw-bold mb-2">
            <div className="col">Train Number</div>
            <div className="col">Train Name</div>
            <div className="col">Source</div>
            <div className="col">Destination</div>
            <div className="col">Date</div>
            <div className="col">Status</div>
            <div className="col">Cancel Train</div>
          </div>

          {cancelledTrains.map((train) => (
            <TrainCard2
              key={train.tno}
              train={train}
              onCancelTrain={handleCancelTrain}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CancelTrain;
