import React from 'react';

const FareSummary = () => {
  return (
    <>
      <div className="card">
        <div className="card-body">
          <h5 className="card-title text-center mb-2" style={{ backgroundColor: 'yellow' }}>Fare Summary</h5>
          <div className="row">
            <div className="row">
              <div className="d-flex justify-content-between">
                <h6 >Ticket Fare</h6>
                <p className="ticketFare">₹620</p>
              </div>
            </div>
            <hr />
            <div className="row">
              <div className="d-flex justify-content-between">
                <h6 className='fw-bold fs-5'>Total Fare</h6>
                <p className="totalFare">620</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FareSummary;
