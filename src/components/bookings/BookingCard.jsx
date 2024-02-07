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
        {/* <MDBCardHeader> PNR : {booking.pnr} Train Number : </MDBCardHeader> */}
        <MDBCardHeader>
          <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
            <span style={{ fontSize: '1.25rem' }}>PNR: {booking.pnr}</span>
            <span style={{ fontSize: '1.25rem' }}>Train Number: {booking.tno}</span> {/* Assuming you have the train number in booking.trainNumber */}
          </div>
        </MDBCardHeader>
        <MDBCardBody>
          <MDBRow>
            <MDBCol size="6">
              <MDBCardTitle>Seats : {booking.tickets}</MDBCardTitle>
              <MDBCardText>
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
                    <MDBCardTitle>Passengers : </MDBCardTitle>
                    ABCD
                    <br />
                    PQR
                    <br />
                    XYZ
                    <br />
                  </MDBCol>
                  <MDBCol size="6">
                    <MDBCardTitle>Booking Status : </MDBCardTitle>
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
