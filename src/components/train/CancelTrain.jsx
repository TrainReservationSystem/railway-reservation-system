import React, { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import config from '../../config';

const CancelTrain = () => {
  const [cancelDate, setCancelDate] = useState("");
  const [trains, setTrains] = useState([]);

  useEffect(() => {
    // Fetch train data from the backend API
    axios
      .get(`${config.server}/trains/view`, {
        params: { source: "Chennai", destination: "Mumbai", date: "2024-02-19" }
      })
      .then((response) => {
        setTrains(response.data);
      })
      .catch((error) => {
        console.error("Error fetching train data:", error);
      });
  }, [cancelDate]); // Update the effect to fetch data when cancelDate changes

  const handleCancelTrain = (trainNumber) => {
    // Make a request to cancel the train with the specified trainNumber and cancelDate
    axios.put(`${config.server}/trains/${trainNumber}/cancel`, null, {
      params: { cancelDate },
    })
    .then((response) => {
      if (response.data.success) {
        // Log success message
        console.log(response.data.message);
        // Update the status of the cancelled train locally
        setTrains((prevTrains) =>
          prevTrains.map((train) =>
            train.trainNumber === trainNumber
              ? { ...train, cancelStatus: true }
              : train
          )
        );
        toast.success(`Train ${trainNumber} successfully cancelled.`);
      } else {
        toast.error(response.data.message);
      }
    })
    .catch((error) => {
      console.error("Error cancelling train:", error); // Log error message
      toast.error("An error occurred while cancelling the train.");
    });
  };
  

  return (
    <div className="container-fluid mt-5">
      <h1>Cancel Train</h1>
      <div className="row mb-4">
        <div className="col-9">
          <input
            type="date"
            className="form-control"
            placeholder="Select Date to Cancel"
            value={cancelDate}
            onChange={(e) => setCancelDate(e.target.value)}
          />
        </div>
      </div>

      <div className="border border-dark p-3">
        <table className="table">
          <thead>
            <tr>
              <th>Train Number</th>
              <th>Train Name</th>
              <th>Active Status</th>
              <th>Cancel Status</th>
              <th>Runs On</th>
              <th>Cancel Train</th>
            </tr>
          </thead>
          <tbody>
            {trains.map((train) => (
              <tr key={train.trainNumber}>
                <td>{train.trainNumber}</td>
                <td>{train.trainName}</td>
                <td>{train.activeStatus ? "Active" : "Inactive"}</td>
                <td>{train.cancelStatus ? "Cancelled" : "Not Cancelled"}</td>
                <td>{train.runsOn}</td>
                <td>
                  <button
                    className="btn btn-danger"
                    onClick={() => handleCancelTrain(train.trainNumber)}
                    // disabled={train.cancelStatus || !cancelDate}
                  >
                    Cancel
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CancelTrain;
