import React from "react";
import {
  MDBCard,
  MDBCardTitle,
  MDBCardText,
  MDBCardBody,
  MDBCardHeader,
  MDBBtn,
} from "mdb-react-ui-kit";

const BookingCard = ({ booking }) => {
  var bookingType = booking.status;
  var status = "";
  if (bookingType === "booked") {
    status = "success";
  } else if (bookingType === "cancelled") {
    status = "danger";
  } else if (bookingType === "waiting") {
    status = "warning";
  } else {
    status = "primary";
  }

  return (
    <>
      <MDBCard background={status} className="text-white mb-3 mt-5 h-25">
        <MDBCardHeader>Booking ID : {booking.bid}</MDBCardHeader>
        <MDBCardBody>
          <MDBCardTitle>status : {bookingType}</MDBCardTitle>
          <MDBCardText>
            PNR : {booking.pnr}
            <br />
            From : {booking.from}
            <br />
            To : {booking.to}
            <br />
            Date : {booking.date}
          </MDBCardText>
          <MDBBtn color="dark">Cancel Booking</MDBBtn>
        </MDBCardBody>
        <br />
      </MDBCard>
    </>
  );
};

export default BookingCard;
