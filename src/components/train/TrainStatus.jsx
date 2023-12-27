import React, { useState } from "react";
import TrainCard from "./TrainCard";

const TrainStatus = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [trains, setTrains] = useState([
    {
      tno: 12912,
      tname: "Pune Bhuj Express",
      status: "inactive",
    },
    {
      tno: 12943,
      tname: "Satara Express",
      status: "active",
    },
    {
      tno: 22922,
      tname: "Pune Karad Express",
      status: "active",
    },
    {
      tno: 12942,
      tname: "Gujarat Express",
      status: "active",
    },
    {
      tno: 42922,
      tname: "Karnavati Express",
      status: "active",
    },
  ]);

  const [filteredTrains, setFilteredTrains] = useState([]);

  const handleSearch = () => {
    const filtered = trains.filter(
      (train) =>
        train.tno.toString().includes(searchTerm) ||
        train.tname.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredTrains(filtered);
  };

  const handleToggleStatus = (trainNumber) => {
    setTrains((prevTrains) =>
      prevTrains.map((train) => {
        if (train.tno === trainNumber) {
          return {
            ...train,
            status: train.status === "active" ? "inactive" : "active",
          };
        }
        return train;
      })
    );
  };

  return (
    <div className="container-fluid mt-5 d-flex align-items-center justify-content-center">
      <div className="container">
        <h1>Set Train Status</h1>
        <div className="row mb-4">
          <div className="col-9">
            <input
              type="text"
              className="form-control"
              placeholder="Enter Train Number or Name"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div className="col-3">
            <button className="btn btn-primary w-100" onClick={handleSearch}>
              🔎 Search
            </button>
          </div>
        </div>

        <div className="border border-dark p-3">
          <div className="row fw-bold mb-2">
            <div className="col">Train Number</div>
            <div className="col">Train Name</div>
            <div className="col">Status</div>
            <div className="col">Actions</div>
          </div>

          {filteredTrains.length > 0
            ? filteredTrains.map((train) => (
                <TrainCard
                  key={train.tno}
                  train={train}
                  onToggleStatus={handleToggleStatus}
                />
              ))
            : trains.map((train) => (
                <TrainCard
                  key={train.tno}
                  train={train}
                  onToggleStatus={handleToggleStatus}
                />
              ))}
        </div>
      </div>
    </div>
  );
};

export default TrainStatus;
