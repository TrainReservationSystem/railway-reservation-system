import React, { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import styles from "./Landing.module.css";
import logo from "../../assets/trainLogo.png";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import config from "../../config";

import { Link } from "react-router-dom";

const Landing = () => {
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [date, setDate] = useState(new Date());
  const navigate = useNavigate();

  const [routes, setRoutes] = useState([]);

  useEffect(() => {
    const fetchRoutes = async () => {
      try {
        const response = await axios.get(`${config.server}/train/routes`);
        setRoutes(response.data);
      } catch (error) {
        console.error("Error fetching routes data:", error);
        toast.error("Error fetching routes data. Please try again later.");
      }
    };
    fetchRoutes();
  }, []);

  // const handleSearch = () => {
  //   console.log(date,"hi ");
  //   if (from.trim() && to.trim() && date) {
  //     setSearchData({
  //       from,
  //       to,
  //       date: date.toISOString().split('T')[0],
  //     });
  //     navigate('/trainlist');
  //   } else {
  //     toast.error('Please fill in all the fields.');
  //   }
  // };

  return (
    <>
      <div
        className="mt-2 d-flex justify-content-center align-items-center w-100 text-center"
        style={{ height: "70vh" }}
      >
        <div className="imgBlock container w-50 bg-transparent d-flex justify-content-center align-items-center">
          <img style={{ size: "90%" }} src={logo} alt="train" />
        </div>
        <div className="container w-50 h-100 bg-transparent d-flex justify-content-center align-items-center">
          <div className="row w-75">
            <div className="col-md-12">
              <h3 className="display-3 my-4"> 🔎 Search Train</h3>
              <div className="d-flex align-items-center mb-3">
                <label className={`me-2 ${styles.newClass}`}>From</label>
                <select
                  className="form-select"
                  value={from}
                  onChange={(e) => setFrom(e.target.value)}
                >
                  <option value="">Select Source</option>
                  {routes.map((route, index) => (
                    <option key={index} value={route.source}>
                      {route.source}
                    </option>
                  ))}
                </select>
              </div>
              <div className="d-flex align-items-center mb-3">
                <label className={`me-2 ${styles.newClass}`}>To</label>
                <select
                  className="form-select"
                  value={to}
                  onChange={(e) => setTo(e.target.value)}
                >
                  <option value="">Select Destination</option>
                  {routes
                    .filter((route) => route.source === from)
                    .map((route, index) => (
                      <option key={index} value={route.destination}>
                        {route.destination}
                      </option>
                    ))}
                </select>
              </div>
              <div className="d-flex align-items-center mb-3">
                <label className={`me-2 ${styles.newClass} `}>Date</label>
                <DatePicker
                  selected={date}
                  dateFormat="dd/MM/yyyy"
                  onChange={(date) => setDate(date)}
                  className="form-control"
                  placeholder="To Which Station ?"
                />
              </div>

              <br />
              <Link to="/trainlist">

              <button
                className="btn btn-outline-primary"
                // onClick={handleSearch}
              >
                Search
              </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Landing;
