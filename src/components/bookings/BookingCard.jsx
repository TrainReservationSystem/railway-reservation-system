import React, { useState } from "react";
import axios from "axios";
import { MDBCard, MDBCardTitle, MDBCardText, MDBCardBody, MDBRow, MDBCol, MDBListGroup, MDBListGroupItem, MDBBtn } from "mdb-react-ui-kit";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const BookingCard = ({ booking, setBookings  }) => {
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

  // const cancelBooking = async (pnrNumber, ticketId) => {
  //   try {
  //     await axios.post(`http://localhost:8080/refund/${pnrNumber}/tickets/${ticketId}/cancel`);
  //     toast.success("Booking canceled successfully!");
  //     // Remove the canceled booking from the list
  //     updateBookings(booking.pnrNumber, ticketId);
  //   } catch (error) {
  //     console.error("Error canceling booking:", error);
  //     toast.error("Failed to cancel booking. Please try again later.");
  //   }
  // };
  const cancelBooking = async (pnrNumber, ticketId) => {
    try {
      await axios.post(`http://localhost:8080/refund/${pnrNumber}/tickets/${ticketId}/cancel`);
      toast.success("Booking canceled successfully!");

      // Update the bookings list by filtering out the canceled booking
      setBookings(prevBookings => prevBookings.map(prevBooking => ({
        ...prevBooking,
        tickets: prevBooking.tickets.filter(ticket => ticket.ticketId !== ticketId)
      })));
    } catch (error) {
      if (error.response) {
        console.error("Error canceling booking:", error);
        toast.error("Failed to cancel booking. Please try again later.");
      } else if (error.request) {
        console.error("No response received:", error.request);
        toast.error("No response received from the server. Please check your network connection.");
      } else {
        console.error("Error setting up the request:", error.message);
        toast.error("An unexpected error occurred. Please try again later.");
      }
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
            <MDBCardTitle>Passenger Details:</MDBCardTitle>
            <MDBListGroup>
              {booking.tickets.map((ticket, index) => (
                <MDBListGroupItem key={index} className="d-flex justify-content-between align-items-center">
                  <span className={`fw-bold text-${getTicketStatusColor(ticket.status)}`}>
                    Seat Number: {ticket.seatNumber}, Status: {ticket.status}
                  </span>
                  {ticket.status !== "CANCEL" && (
                    <button
                      color="danger"
                      className="btn btn-outline-danger ms-2"
                      onClick={() => cancelBooking(booking.pnrNumber, ticket.ticketId)}
                    >
                      Cancel Booking
                    </button>
                  )}
                </MDBListGroupItem>
              ))}
            </MDBListGroup>
          </MDBCol>
        </MDBRow>
      </MDBCardBody>
    </MDBCard>
  );
};

export default BookingCard;
