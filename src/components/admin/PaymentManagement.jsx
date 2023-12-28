import React from "react";
import { useState } from "react";
import { MDBCheckbox } from "mdb-react-ui-kit";

const PaymentManagement = () => {
  const [checked, setChecked] = useState(false);
  const [trains, setTrains] = useState([
    {
      tno: 12912,
      tname: "Pune Bhuj Express",
      pnr: 12772673,
      bid: "15af66",
      reason: "WL",
    },
    {
      tno: 12912,
      tname: "Pune Bhuj Express",
      pnr: 12772673,
      bid: "15af66",
      reason: "WL",
    },
  ]);
  return (
    <>
      {/* const [searchTerm, setSearchTerm] = useState("");


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
  }; */}
      {/* return ( */}
      <div className="container-fluid mt-5 d-flex align-items-center justify-content-center">
        <div className="container">
          <h1>Initiate Refunds</h1>
          <div className="row mb-4">
            <div className="col-9">
              <input
                type="text"
                className="form-control"
                placeholder="Enter Train Number or Name"
                // value={searchTerm}
                // onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div className="col-3">
              <button className="btn btn-primary w-100">🔎 Search</button>
            </div>
          </div>

          <div className="border border-dark p-3">
            <div className="row fw-bold mb-2">
              <div className="col">Train Number</div>
              <div className="col">Train Name</div>
              <div className="col">PNR</div>
              <div className="col">Status</div>
              <div className="col">Reason</div>
              <div className="col">
                <MDBCheckbox
                  id="controlledCheckbox"
                  //   label="Controlled checkbox"
                  checked={checked}
                  onChange={() => setChecked(!checked)}
                />
              </div>
            </div>

            {/* {filteredTrains.length > 0
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
                ))} */}
          </div>
        </div>
      </div>
      <br />
      <center>
        <button className="btn btn-success">Initiate refund</button>
      </center>
      {/* ); */}
    </>
  );
};

export default PaymentManagement;
