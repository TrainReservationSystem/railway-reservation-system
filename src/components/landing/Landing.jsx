import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Header from "../common/Header1";
import Footer from "../common/Footer";

const Landing = () => {
  const [startDate, setStartDate] = useState(new Date());

  return (
    <>
      <Header/>
      <hr />
      <div className="d-flex justify-content-center align-items-center">
        <div className="container text-center">
          <div className="row">
            <div className="col-md-6 offset-md-3">
              <div className="d-flex align-items-center mb-3">
                <label className="me-2">From:</label>
                <input type="text" className="form-control" />
              </div>
              <div className="d-flex align-items-center mb-3">
                <label className="me-2">To:</label>
                <input type="text" className="form-control" />
              </div>
              <div className="d-flex align-items-center mb-3">
                <label className="me-2">Date:</label>
                <DatePicker
                  selected={startDate}
                  onChange={(date) => setStartDate(date)}
                  className="form-control"
                />
              </div>
              <br />
              <button className="btn btn-outline-primary p-2">Search</button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Landing;
