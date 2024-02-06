import React from "react";
import {
  MDBCard,
  MDBCardTitle,
  MDBCardText,
  MDBCardBody,
  MDBCardHeader,
} from "mdb-react-ui-kit";

const BookingCard = ({ booking }) => {
  // var status = {
  //   booked: "success",
  //   cancelled: "danger",
  //   waiting: "warning",
  // };
  return (
    <>
      <MDBCard
        background={status[booking.status]}
        className="text-white mb-3 mt-5 h-25"
      >
        <MDBCardHeader>Booking ID : {booking.bid}</MDBCardHeader>
        <MDBCardBody>
          <MDBCardTitle>status : {booking.status}</MDBCardTitle>
          <MDBCardText>
            PNR : {booking.pnr}
            <br />
            From : {booking.from}
            <br />
            To : {booking.to}
            <br />
            Date : {booking.date}
          </MDBCardText>
          <button className="btn btn-dark">Cancel Booking</button>
        </MDBCardBody>
      </MDBCard>
    </>
  );
};

export default BookingCard;
