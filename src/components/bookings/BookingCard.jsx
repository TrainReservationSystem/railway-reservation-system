import React from "react";
import { MDBCard, MDBCardTitle, MDBCardText, MDBCardBody, MDBRow, MDBCol } from "mdb-react-ui-kit";

const BookingCard = ({ booking }) => {
  const getPassengerStatusColor = (status) => {
    switch (status) {
      case "Confirm":
        return "success";
      case "Waiting":
        return "warning";
      case "Cancel":
        return "danger";
      default:
        return "dark";
    }
  };

  return (
    <MDBCard className="text-dark mb-3 mt-5 w-100">
      <MDBCardBody className="bg-primary text-white">
        PNR: {booking.pnr}
      </MDBCardBody>
      <MDBCardBody>
        <MDBRow>
          <MDBCol>
            <MDBCardTitle>Seats: {booking.tickets}</MDBCardTitle>
            <MDBCardText>
              From: {booking.from}<br />
              To: {booking.to}<br />
              Date: {booking.date}
            </MDBCardText>
          </MDBCol>
          <MDBCol>
            <MDBCardText>
              <MDBRow>
                <MDBCol>
                  <MDBCardTitle>Passengers:</MDBCardTitle>
                  <ul className="list-unstyled">
                    {booking.passengers ? (
                      booking.passengers.map((passenger, index) => (
                        <li key={index}>
                          <span className={`fw-bold text-${getPassengerStatusColor(passenger.status)}`}>
                            {passenger.name}
                          </span>
                         
                        </li>
                      ))
                    ) : (
                      <li>No passenger information available</li>
                    )}
                  </ul>
                </MDBCol>
                <MDBCol>
                  <MDBCardTitle>Booking Status:</MDBCardTitle>
                  <ul className="list-unstyled">
                    {booking.passengers ? (
                      booking.passengers.map((passenger, index) => (
                        <li key={index} className={`text-${getPassengerStatusColor(passenger.status)}`}>
                          {passenger.status}
                        </li>
                      ))
                    ) : (
                      <li>No booking status available</li>
                    )}
                  </ul>
                </MDBCol>
              </MDBRow>
            </MDBCardText>
          </MDBCol>
        </MDBRow>
        <button className="btn btn-danger">Cancel Booking</button>
      </MDBCardBody>
    </MDBCard>
  );
};

export default BookingCard;
