import React from 'react'

const TrainStatus = () => {
    const trains =[
        {
            tno:12912,
            tname:"Pune "
        }
        
    ];
  return (
    <>
        <div className="container m-5 ">
            <div className="container">
                Train Number :
                <input type="text" className='ms-4 me-4'/>
                <button className='btn btn-outline-primary p-2' >🔎 Search</button>
            </div>

            <div className="container border bordered mt-5">
                <div className="row">
                    <div className="col">
                        Train Number
                    </div>
                    <div className="col">
                        Train name
                    </div>
                    <div className="col">
                        Status
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default TrainStatus