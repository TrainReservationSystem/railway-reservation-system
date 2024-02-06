import React from "react";
import {
  MDBCard,
  MDBCardTitle,
  MDBCardText,
  MDBCardBody,
  MDBCardHeader,
  MDBRow,
  MDBCol,
} from "mdb-react-ui-kit";

const BookingCard = ({ booking }) => {
  var status = {
    booked: "success",
    cancelled: "danger",
    waiting: "warning",
  };
  return (
    <>
      <MDBCard
        // background={status[booking.status]}
        background={"primary"}
        className="text-white mb-3 mt-5 h-25"
      >
        <MDBCardHeader>Booking ID : {booking.bid}</MDBCardHeader>
        <MDBCardBody>
          <MDBRow>
            <MDBCol size="6">
              <MDBCardTitle>Seats : {booking.tickets}</MDBCardTitle>
              <MDBCardText>
                PNR : {booking.pnr}
                <br />
                From : {booking.from}
                <br />
                To : {booking.to}
                <br />
                Date : {booking.date}
              </MDBCardText>
            </MDBCol>
            <MDBCol size="6">

              <MDBCardText>
                <MDBRow>
                  <MDBCol size="6">
                    <MDBCardTitle>Passengers : {booking.tickets}</MDBCardTitle>
                    ABCD
                    <br />
                    PQR
                    <br />
                    XYZ
                    <br />
                  </MDBCol>
                  <MDBCol size="6">
                    <MDBCardTitle>Booking Status</MDBCardTitle>
                    Confirm
                    <br />
                    Confirm
                    <br />
                    Confirm
                    <br />
                  </MDBCol>
                </MDBRow>
              </MDBCardText>
            </MDBCol>
          </MDBRow>

          <button className="btn btn-dark">Cancel Booking</button>
        </MDBCardBody>
      </MDBCard>
    </>
  );
};

export default BookingCard;
