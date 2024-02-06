import React, { useState } from "react";
import BookingCard from "../bookings/BookingCard";

export default function App() {
  const initialBookings = [
    {
      bid: "1Af56C",
      pnr: 4536382926,
      status: "booked",
      to: "pune",
      from: "valsad",
      date: "1/2/23",
    },
    {
      bid: "3Df87T",
      pnr: 4536382926,
      status: "cancelled",
      to: "mumbai",
      from: "delhi",
      date: "5/7/23",
    },
    {
      bid: "8K56FE",
      pnr: 4536382926,
      status: "waiting",
      to: "hyderabad",
      from: "chennai",
      date: "23/4/23",
    },
  ];

  const [bookings, setBookings] = useState(initialBookings);
  const [filteredBookings, setFilteredBookings] = useState(initialBookings);

  const handleAllBookings = () => {
    setFilteredBookings(bookings);
  };

  const handlePreviousBookings = () => {
    const previousBookings = bookings.filter(
      (booking) => booking.status === "cancelled"
    );
    setFilteredBookings(previousBookings);
  };

  const handleUpcomingBookings = () => {
    const upcomingBookings = bookings.filter(
      (booking) => booking.status === "waiting" || booking.status === "booked"
    );
    setFilteredBookings(upcomingBookings);
  };

  return (
    <div className="container" style={{ width: "1000px" }}>
      <div>
        <button onClick={handleAllBookings}>All Bookings</button>
        <button onClick={handlePreviousBookings}>Previous Bookings</button>
        <button onClick={handleUpcomingBookings}>Upcoming Bookings</button>
      </div>
      <div>
        {filteredBookings.map((booking, index) => (
          <BookingCard key={index} booking={booking} />
        ))}
      </div>
    </div>
  );
}
