import React from "react";

const AddTrain = () => {
  return (
    <div className="container mt-5 p-4 border border-dark border-2 bg-secondary-subtle">
      <h1 className="text-center mb-4 ">Add Train</h1>
      <hr />
      <div className="row justify-content-center align-items-center">
        <div className="col-md-5 order-md-2 border border-dark border-2 ">
          <div className="mb-3">
            <h3 className="text-center">No. of Seats</h3>
            <hr />
            <div className="d-flex flex-column align-items-start">
              <div className="mb-3">
                <label htmlFor="firstClass" className="form-label me-2">
                  First Class
                </label>
                <input
                  type="text"
                  className="form-control w-50 d-inline-block"
                  id="firstClass"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="sleeper" className="form-label me-2">
                  Sleeper
                </label>
                <input
                  type="text"
                  className="form-control w-50 d-inline-block"
                  id="sleeper"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="ac2" className="form-label me-2">
                  Second AC
                </label>
                <input
                  type="text"
                  className="form-control w-50 d-inline-block"
                  id="ac2"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="ac3" className="form-label me-2">
                  3 AC
                </label>
                <input
                  type="text"
                  className="form-control w-50 d-inline-block"
                  id="ac3"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="chairCar" className="form-label me-2">
                  Chair Car
                </label>
                <input
                  type="text"
                  className="form-control w-50 d-inline-block"
                  id="chairCar"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="col-md-6 order-md-1 me-2 ">
          <form>
            <div className="mb-3">
              <label htmlFor="trainNo" className="form-label">
                Train No.
              </label>
              <input type="text" className="form-control" id="trainNo" />
            </div>
            <div className="mb-3">
              <label htmlFor="trainName" className="form-label">
                Train Name
              </label>
              <input type="text" className="form-control" id="trainName" />
            </div>
            <div className="mb-3">
              <label htmlFor="source" className="form-label">
                Source
              </label>
              <input type="text" className="form-control" id="source" />
            </div>
            <div className="mb-3">
              <label htmlFor="destination" className="form-label">
                Destination
              </label>
              <input type="text" className="form-control" id="destination" />
            </div>
            <div className="mb-3">
              <label htmlFor="departureTime" className="form-label">
                Departure Time
              </label>
              <input type="text" className="form-control" id="departureTime" />
            </div>
            <div className="mb-3">
              <label htmlFor="arrivalTime" className="form-label">
                Arrival Time
              </label>
              <input type="text" className="form-control" id="arrivalTime" />
            </div>
            <div className="mb-3">
              <label htmlFor="baseFare" className="form-label">
                Base Fare
              </label>
              <input type="text" className="form-control" id="baseFare" />
            </div>

            <button type="submit" className="btn btn-primary">
              Add
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddTrain;
