import React from 'react';

const AddTrain = () => {
  return (
    <div className='container mt-5 rounded shadow bg-secondary-subtle'>
      <h1 className='text-center display-3 mb-4 border-bottom border-secondary'>Add Train</h1>
      <div className='row justify-content-center align-items-start'>
        <div className='col-md-5 order-md-2 border-dark border-start'>
          <div className='mb-3'>
            <h3 className='text-center border-bottom border-secondary w-100'>No. of Seats</h3>
            <div className='d-flex flex-column align-items-start'>
              <ClassTag htmlFor='firstClass' tag='First Class' />
              <ClassTag htmlFor='sleeper' tag='Sleeper' />
              <ClassTag htmlFor='ac2' tag='Second AC' />
              <ClassTag htmlFor='ac3' tag='3 AC' />
              <ClassTag htmlFor='chairCar' tag='Chair Car' />
            </div>
          </div>
        </div>

        <div className='col-md-6 order-md-1 me-2'>
          <form>
            <DetailsTag htmlFor="trainNo" tag="Train No."/>
            <DetailsTag htmlFor="trainName" tag="Train Name"/>
            <DetailsTag htmlFor="source" tag="Source"/>
            <DetailsTag htmlFor="destination" tag="Destination"/>
            <DetailsTag htmlFor="departureTime" tag="Departure Time"/>
            <DetailsTag htmlFor="arrivalTime" tag="Arrival Time"/>
            <DetailsTag htmlFor="baseFare" tag="Base Fare"/>            
            <button type='submit' className='btn btn-primary w-100 text-center'>
              Add
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddTrain;

const ClassTag = ({ htmlFor, tag }) => {
  return (
    <div className='mb-3 d-flex justify-content-space-between align-items-center w-100'>
      <label htmlFor={htmlFor} className='form-label me-2 w-25'>
        {tag}
      </label>
      <input
        type='text'
        className='form-control w-75 d-inline-block'
        id={htmlFor}
      />
    </div>
  );
};

const DetailsTag = ({ htmlFor, tag }) => {
  return (
    <div className='mb-3 d-flex'>
      <label htmlFor={htmlFor} className='form-label w-25'>
        {tag}
      </label>
      <input type='text' className='form-control w-75' id={htmlFor} />
    </div>
  );
};