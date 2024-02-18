// PassengerDetails.jsx
import React, { useState } from "react";
import PassengerRow from "./PassengerRow";
import FareSummary from "./FareSummary";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

const PassengerDetails = () => {
  const [passengers, setPassengers] = useState([{ id: 1 }]);
  const baseFare = 100; // Hardcoded base fare
  const maxPassengers = 4;

  const addPassenger = () => {
    if (passengers.length < maxPassengers) {
      const newPassenger = { id: passengers.length + 1 };
      setPassengers([...passengers, newPassenger]);
    } else {
      toast.error("You cannot add more than 4 passengers");
    }
  };

  return (
    <div className="container mt-3">
      <div className="row">
        <div className="col-md-9">
          <div className="row">
            <div className="col">
              <h2>Passenger Details</h2>
            </div>
            <div className="col-auto">
              {passengers.length < maxPassengers && (
                <button onClick={addPassenger} className="btn btn-info">
                  Add Passenger
                </button>
              )}
            </div>
          </div>
          <div className="row">
            <div className="col">
              {passengers.map((passenger) => (
                <PassengerRow key={passenger.id} />
              ))}
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <FareSummary baseFare={baseFare} passengersCount={passengers.length} />
        </div>
      </div>
      <div className="row mt-3">
        <div className="col">
          <Link to="/booksuccess">
            <button className="btn btn-primary">Book Ticket</button>
          </Link>
        </div>
        <div className="col">
          <button className="btn btn-success">Make Payment</button>
        </div>
      </div>
    </div>
  );
};

export default PassengerDetails;
