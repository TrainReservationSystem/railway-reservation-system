import React, { useState } from 'react';
import Header from '../common/Header1';
import Footer from '../common/Footer';
import PassengerRow from './PassengerRow';
import FareSummary from './FareSummary';
import ContactDetails from './ContactDetails';

const PassengerDetails = () => {
  const [passengers, setPassengers] = useState([{ id: 1 }]);

  const addPassenger = () => {
    const newPassenger = { id: passengers.length + 1 };
    setPassengers([...passengers, newPassenger]);
  };

  return (
    <>
      <div>
        <Header />

        <div className="container">
          <div className="row">
            <div className="col-md-9" style={{ maxWidth : '100%'}}>
              {/* Left side - Passenger Details */}
              <div style={{ maxWidth: '100%', margin: 'auto' }}>
                {passengers.map((passenger) => (
                  <PassengerRow key={passenger.id} id={passenger.id} />
                ))}
                <button onClick={addPassenger} className="btn btn-success m-3">Add Another Passenger</button>
              </div>
            </div>

            <div className="col-md-3">
              {/* Right side - Fare Summary */}
              <FareSummary />
            </div>
          </div>
        <ContactDetails/>

        <button className="btn btn-primary m-3 fs-4">Make Payment</button>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default PassengerDetails;
