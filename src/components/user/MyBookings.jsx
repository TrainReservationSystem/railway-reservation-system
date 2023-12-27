import React from "react";

import BookingCard from "../bookings/BookingCard";

export default function App() {
  const bookings = [
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

  return (
    <div className="container" style={{ width: "1000px" }}>
      {bookings.map((booking, index) => (
        <BookingCard key={index} booking={booking} />
      ))}
    </div>
  );
}
