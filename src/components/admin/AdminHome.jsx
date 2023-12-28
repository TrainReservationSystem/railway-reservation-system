import React, { useState } from "react";
import { Link } from "react-router-dom";

const AdminHome = () => {
  const [showTrainManagement, setShowTrainManagement] = useState(false);

  const handleTrainManagementClick = () => {
    setShowTrainManagement(true);
  };

  return (
    <>
      <div className="container mt-5 d-flex">
        <div className="p-3">
          <button
            type="button"
            className="btn btn-outline-primary btn-lg mb-5 mx-5"
            onClick={handleTrainManagementClick}
          >
            Train management
          </button>
          <br />
          <Link to="/usermanagement">
            <button
              type="button"
              className="btn btn-outline-primary btn-lg mb-5 mx-5"
            >
              User management
            </button>
          </Link>
          <br />
          <Link to="/paymentmanagement">
            <button
              type="button"
              className="btn btn-outline-primary btn-lg mx-5"
            >
              Payment management
            </button>
          </Link>
        </div>

        {showTrainManagement && (
          <div className="p-3 ml-auto">
            <Link to="/addtrain">
              <button
                type="button"
                className="btn btn-outline-primary btn-lg mb-5 ms-5"
              >
                Add train
              </button>
            </Link>
            <br />
            <Link to="/trainstatus">
              <button
                type="button"
                className="btn btn-outline-warning btn-lg mb-5 ms-5"
              >
                Train status
              </button>
            </Link>
            <br />
            <Link to="/canceltrain" >
              <button
                type="button"
                className="btn btn-outline-danger btn-lg ms-5"
              >
                Cancel train
              </button>
            </Link>
          </div>
        )}
      </div>
    </>
  );
};

export default AdminHome;
