import React, { useState } from "react";
import BookingCard from "./BookingCard";
import "bootstrap/dist/css/bootstrap.min.css";
import dummyApiData from "./dummyApiData";

const MyBookings = () => {
  // const initialBookings = [
  //   {
  //     bid: "1Af56C",
  //     pnr: 4536382926,
  //     status: "booked",
  //     tickets: 3,
  //     to: "Pune",
  //     from: "Valsad",
  //     date: "2023-02-01",
  //   },
  //   {
  //     bid: "3Df87T",
  //     pnr: 4536382926,
  //     status: "cancelled",
  //     tickets: 1,
  //     to: "Mumbai",
  //     from: "Delhi",
  //     date: "2023-07-05",
  //   },
  //   {
  //     bid: "8K56FE",
  //     pnr: 4536382926,
  //     status: "waiting",
  //     tickets: 2,
  //     to: "Hyderabad",
  //     from: "Chennai",
  //     date: "2023-04-23",
  //   },
  //   {
  //     bid: "9K27AC",
  //     pnr: 4536382926,
  //     status: "cancelled",
  //     tickets: 2,
  //     to: "Bangalore",
  //     from: "Kolkata",
  //     date: "2022-12-15",
  //   },
  //   {
  //     bid: "4L38FD",
  //     pnr: 4536382926,
  //     status: "booked",
  //     tickets: 1,
  //     to: "Goa",
  //     from: "Mumbai",
  //     date: "2024-01-10",
  //   },
  //   // Additional dummy data
  //   {
  //     bid: "5E82MJ",
  //     pnr: 4536382926,
  //     status: "booked",
  //     tickets: 2,
  //     to: "Jaipur",
  //     from: "Ahmedabad",
  //     date: "2023-10-20",
  //   },
  //   {
  //     bid: "7N39PM",
  //     pnr: 4536382926,
  //     status: "cancelled",
  //     tickets: 1,
  //     to: "Lucknow",
  //     from: "Varanasi",
  //     date: "2022-11-08",
  //   },
  // ];

  // const [bookings, setBookings] = useState(initialBookings);
  // const [filteredBookings, setFilteredBookings] = useState(initialBookings);

  const [bookings, setBookings] = useState(dummyApiData); 
  const [filteredBookings, setFilteredBookings] = useState(dummyApiData);


  const handleAllBookings = () => {
    const sortedBookings = [...bookings].sort((a, b) => new Date(a.date) - new Date(b.date));
    setFilteredBookings(sortedBookings);
  };

  const handlePreviousBookings = () => {
    const previousBookings = bookings.filter((booking) => booking.status === "cancelled");
    const sortedPreviousBookings = [...previousBookings].sort((a, b) => new Date(a.date) - new Date(b.date));
    setFilteredBookings(sortedPreviousBookings);
  };

  const handleUpcomingBookings = () => {
    const upcomingBookings = bookings.filter((booking) => booking.status === "waiting" || booking.status === "booked");
    const sortedUpcomingBookings = [...upcomingBookings].sort((a, b) => new Date(a.date) - new Date(b.date));
    setFilteredBookings(sortedUpcomingBookings);
  };

  return (
    <div className="container mt-5">
      <div className="mb-3">
        <button className="btn btn-primary me-2" onClick={handleAllBookings}>
          All Bookings
        </button>
        <button className="btn btn-danger me-2" onClick={handlePreviousBookings}>
          Previous Bookings
        </button>
        <button className="btn btn-success" onClick={handleUpcomingBookings}>
          Upcoming Bookings
        </button>
      </div>
      {filteredBookings.map((booking, index) => (
        <div className="row mb-3" key={index}>
          <div className="col">
            <BookingCard booking={booking} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default MyBookings;
