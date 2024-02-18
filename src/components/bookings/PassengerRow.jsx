// PassengerRow.jsx
import React from 'react';

const PassengerRow = () => {
  return (
    <div className="row mb-3">
      <div className="col-md">
        <div className="form-floating">
          <input type="text" className="form-control" id="name-id" />
          <label htmlFor="name-id">Name</label>
        </div>
      </div>
      <div className="col-md-auto">
        <div className="form-floating">
          <select className="form-select" id="age-id">
            <option value="MALE">Male</option>
            <option value="FEMALE">Female</option>
            <option value="OTHER">Other</option>
          </select>
          <label htmlFor="age-id">Gender</label>
        </div>
      </div>

      <div className="col-md-auto">
        <div className="form-floating">
          <input type="number" max={120} className="form-control" id="age-id" />
          <label htmlFor="age-id">Age</label>
        </div>
      </div>
    </div>
  )
}

export default PassengerRow;
