import React, { useState } from "react";
import PassengerRow from "./PassengerRow";
import FareSummary from "./FareSummary";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { useLocation } from 'react-router-dom';
import { useAuth} from '../../contexts/AuthContext'

const PassengerDetails = () => {
  const [passengers, setPassengers] = useState([{ id: 1, name: '', gender: '', age: '' }]);
   // Hardcoded base fare
  const maxPassengers = 4;
  const location = useLocation();
  const { userId } = useAuth();
  const { data, selectedClass } = location.state || {};
  const baseFare = data.baseFare;
  console.log(data, selectedClass);
  var name1 = "";
    var gender1 = "";
    var age1 = "";
  const handlePassengerDetails = (data) =>{
    console.log(data.name)
    name1 = data.name ? data.name : "";
     gender1 = data.gender ? data.gender : "";
     age1 = data.age ? data.age : "";
  };
  const addPassenger = () => {
    if (passengers.length < maxPassengers) {
      var newPassenger = { id: passengers.length + 1, name: name1, gender: gender1, age: age1 };
      setPassengers([...passengers, newPassenger]);
    } else {
      toast.error("You cannot add more than 4 passengers");
    }
  };
  
  const bookingDetails = {
    "coachType": selectedClass.type,
    "userId": userId,
    "trainNumber": data.trainNumber,
    "tickets": [
      {
        "passenger": {
          "passengerName": passengers.name,
          "gender": passengers.gender,
          "passengerAge": passengers.age
        }
      }
    ],
    "fromStation": data.source ,
    "toStation": data.destination,
    "bookingDateTime": null,
    "dateOfJourney": data.dateOfJourney,
    "totalAmount": baseFare
  }
  console.log(bookingDetails)

  const handleBookTicket = () => {

  }

  // Check if any field is empty
  // const isAnyFieldEmpty = passengers.some(passenger => {
  //   return !passenger.name || !passenger.gender || !passenger.age;
  // });

  // const handlePassengerChange = (index, details) => {
  //   const updatedPassengers = [...passengers];
  //   updatedPassengers[index] = details;
  //   setPassengers(updatedPassengers);
  // };

  return (
    <div className="container mt-3">
      <div className="row">
        <div className="col-md-9">
          <div className="row">
            <div className="col">
              <h2>Passenger Details</h2>
            </div>
            <div className="col-auto">
              <button
                onClick={addPassenger}
                className="btn btn-info"
                // disabled={isAnyFieldEmpty}
              >
                Add Passenger
              </button>
            </div>
          </div>
          <div className="row">
            <div className="col">
              {passengers.map((passenger, index) => (
                <PassengerRow key={passenger.id} 
                // onChange={(details) => handlePassengerChange(index, details)} 
                passenger={handlePassengerDetails}/>
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
            <button className="btn btn-primary"
              onClick={handleBookTicket}
            >Book Ticket</button>
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
