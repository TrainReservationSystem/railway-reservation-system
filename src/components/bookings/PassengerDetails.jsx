// PassengerDetails.jsx
import React, { useState } from 'react';
import PassengerRow from './PassengerRow';
import FareSummary from './FareSummary';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useLocation } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import axios from 'axios';
import config from '../../config';

const PassengerDetails = () => {

  const navigate = useNavigate();
  const [passengers, setPassengers] = useState([{ id: 1, name: '', gender: '', age: '' }]);
  const maxPassengers = 4;
  const location = useLocation();
  const { userId } = useAuth();
  const { data, selectedClass } = location.state || {};
  const baseFare = 200;

  const handlePassengerDetails = (index, details) => {
    const updatedPassengers = [...passengers];
    updatedPassengers[index] = details;
    setPassengers(updatedPassengers);
  };

  const addPassenger = () => {
    if (passengers.length < maxPassengers) {
      const newPassenger = { id: passengers.length + 1, name: '', gender: '', age: '' };
      setPassengers([...passengers, newPassenger]);
    } else {
      toast.error('You cannot add more than 4 passengers');
    }
  };

  const [bookingDetails, setBookingDetails] = useState({
    coachType: "AC",
    userId: 2,
    trainNumber: 1001,
    tickets: [{
      passenger: {
        passengerName: "Meena",
        gender: "FEMALE",
        passengerAge: 27
      }
    }],
    fromStation: "Delhi",
    toStation: "Mumbai",
    bookingDateTime: new Date(),
    dateOfJourney: "2024-11-11",
    totalAmount: 405
  });

  // const bookingDetails = {
  //   coachType: selectedClass.type,
  //   userId: userId,
  //   trainNumber: data.trainNumber,
    // tickets: passengers.map((passenger) => ({
    //   passengerName: passenger.name,
    //   gender: passenger.gender,
    //   passengerAge: passenger.age,
    // })),
  //   fromStation: data.source,
  //   toStation: data.destination,
  //   bookingDateTime: new Date(),
  //   dateOfJourney: data.dateOfJourney,
  //   totalAmount: baseFare * passengers.length
  // };

  console.log(bookingDetails);

  const handleBookTicket = () => {

    // const updatedBookingDetails = {
    //   ...bookingDetails,
    //   tickets: passengers.map((passenger) => ({
    //     passengerName: passenger.name,
    //     gender: passenger.gender,
    //     passengerAge: passenger.age,
    //   })),
    //   totalAmount: baseFare * passengers.length,
    // };
    // console.log(bookingDetails);
    // setBookingDetails((currentDetails) => ({
    //   ...currentDetails, // Spread existing bookingDetails to keep other fields
    //   tickets: passengers.map((passenger) => ({
    //     passengerName: passenger.name,
    //     gender: passenger.gender,
    //     passengerAge: passenger.age,
    //   })),
    //   totalAmount: baseFare * passengers.length,
    // }));
    console.log(bookingDetails);
    // Logic for booking ticket
    axios.post(`${config.server}/bookings/addnewbooking`, bookingDetails )
      .then((response) => {
        // toast(response.data);
        navigate("/booksuccess");
      }).catch((error) => {
        console.log(error)
        toast.error("Something went Wrong");
        navigate("/passengerdetails");
      })

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
              <button onClick={addPassenger} className="btn btn-info">
                Add Passenger
              </button>
            </div>
          </div>
          <div className="row">
            <div className="col">
              {passengers.map((passenger, index) => (
                <PassengerRow
                  key={passenger.id}
                  onPassengerDetailsChange={(details) => handlePassengerDetails(index, details)}
                />
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
            <button className="btn btn-primary" onClick={handleBookTicket}>
              Book Ticket
            </button>
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
