import React, { useState } from 'react';

const PassengerRow = ({ onChange }) => {
  const [name, setName] = useState('');
  const [gender, setGender] = useState('');
  const [age, setAge] = useState('');

  const handleChange = () => {
    onChange({ name, gender, age });
  };

  return (
    <div className="row mb-3">
      <div className="col-md">
        <div className="form-floating">
          <input type="text" className="form-control" id="name-id" value={name} onChange={(e) => setName(e.target.value)} onBlur={handleChange} />
          <label htmlFor="name-id">Name</label>
        </div>
      </div>
      <div className="col-md-auto">
        <div className="form-floating">
          <select className="form-select" id="gender-id" value={gender} onChange={(e) => setGender(e.target.value)} onBlur={handleChange}>
            <option value="">Select</option>
            <option value="MALE">Male</option>
            <option value="FEMALE">Female</option>
            <option value="OTHER">Other</option>
          </select>
          <label htmlFor="gender-id">Gender</label>
        </div>
      </div>

      <div className="col-md-auto">
        <div className="form-floating">
          <input type="number" max={120} className="form-control" id="age-id" value={age} onChange={(e) => setAge(e.target.value)} onBlur={handleChange} />
          <label htmlFor="age-id">Age</label>
        </div>
      </div>
    </div>
  )
}

export default PassengerRow;
