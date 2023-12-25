// TrainList.js
import React, { useState } from "react";
import Footer from "../common/Footer";
import Header from "../common/Header1";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import SearchCard from "./SearchCard";
import "bootstrap-icons/font/bootstrap-icons.css";

const TrainList = () => {
  const [startDate, setStartDate] = useState(new Date());

  //static search results
  const searchResults = [
    {
      trainName: "PUNE BHUJ EXP",
      trainNumber: 11092,
      runsOn: "M T W T F S S",
      scheduleLink: "http://",
      departureTime: "20:10",
      departureStation: "PUNE JN",
      arrivalTime: "05:31",
      arrivalStation: "VALSAD",
    },
    {
      trainName: "PUNE BHUJ EXP",
      trainNumber: 11092,
      runsOn: "M T W T F S S",
      scheduleLink: "http://",
      departureTime: "20:10",
      departureStation: "PUNE JN",
      arrivalTime: "05:31",
      arrivalStation: "VALSAD",
    },
  ];

  const classTypes = [
    { value: "sl", label: "All Classes" },
    { value: "sl", label: "Sleeper (SL)" },
    { value: "1a", label: "First Class (1A)" },
    { value: "cc", label: "Chair Car (CC)" },
    { value: "2a", label: "AC 2 tier (2A)" },
    { value: "3a", label: "AC 3 tier (3A)" },
  ];

  return (
    <>
      <div>
        <Header />
        <div
          className="container p-3"
          style={{ backgroundColor: "#D2E3C8", minHeight: "100vh" }}
        >
          {/* Filter Options */}
          <div className="container mt-4 d-flex align-items-center">
            <input
              type="text"
              placeholder="From Station"
              className="me-2 form-control"
              style={{ maxWidth: "275px" }}
            />
            <i className="bi bi-arrow-right"></i>
            <input
              type="text"
              placeholder="To Station"
              className="mx-2 form-control"
              style={{ maxWidth: "275px" }}
            />
            <label className="me-2">Date:</label>
            <DatePicker
              selected={startDate}
              onChange={(date) => setStartDate(date)}
              className="form-control me-2"
              dateFormat="dd/MM/yyyy"
            />
            <select
              name="All Class"
              className="me-2 ms-2 form-select"
              style={{ maxWidth: "200px" }}
            >
              {classTypes.map((option, index) => (
                <option key={index} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
            <button className="btn btn-outline-primary">Search</button>
          </div>

          {/* Search Results */}
          <div className="container mt-4">
            {searchResults.map((result, index) => (
              <SearchCard key={index} data={result} />
            ))}
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default TrainList;