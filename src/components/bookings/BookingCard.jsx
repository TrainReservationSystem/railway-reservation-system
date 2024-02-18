import React from "react";
import { MDBCard, MDBCardTitle, MDBCardText, MDBCardBody, MDBRow, MDBCol } from "mdb-react-ui-kit";

const BookingCard = ({ booking }) => {
  const getTicketStatusColor = (status) => {
    switch (status) {
      case "CONFIRM":
        return "success";
      case "WAITING":
        return "warning";
      case "CANCEL":
        return "danger";
      default:
        return "dark";
    }
  };

  return (
    <MDBCard className="text-dark mb-3 mt-5 w-100">
      <MDBCardBody className="bg-primary text-white">
        PNR: {booking.pnrNumber}
      </MDBCardBody>
      <MDBCardBody>
        <MDBRow>
          <MDBCol>
            <MDBCardTitle>Seats: {booking.tickets.length}</MDBCardTitle>
            <MDBCardText>
              From: {booking.fromStation}<br />
              To: {booking.toStation}<br />
              Date: {booking.dateOfJourney}
            </MDBCardText>
          </MDBCol>
          <MDBCol>
            <MDBCardText>
              <MDBRow>
                <MDBCol>
                  <MDBCardTitle>Passengers:</MDBCardTitle>
                  <ul className="list-unstyled">
                    {booking.tickets.length > 0 ? (
                      booking.tickets.map((ticket, index) => (
                        <li key={index}>
                          <span className={`fw-bold text-${getTicketStatusColor(ticket.status)}`}>
                            {ticket.seatNumber}
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
                    {booking.tickets.length > 0 ? (
                      booking.tickets.map((ticket, index) => (
                        <li key={index} className={`text-${getTicketStatusColor(ticket.status)}`}>
                          {ticket.status}
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
