import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import styles from './Landing.module.css';
import logo from '../../assets/trainLogo.png';

import { Link } from 'react-router-dom';

const Landing = () => {
  const [startDate, setStartDate] = useState(new Date());
  const imageStyles = {
    size:'90%',

  }

  return (
    <>
      <div className='mt-2 d-flex justify-content-center align-items-center w-100 text-center' style={{height:'70vh'}}>
      <div className='imgBlock container w-50 bg-transparent d-flex justify-content-center align-items-center'>
          <img style={imageStyles} src={logo} alt='train' />
        </div>
        <div className='container w-50 h-100 bg-transparent d-flex justify-content-center align-items-center'>
            <div className='row w-75'>
              <div className='col-md-12'>
                <h3 className='display-3 my-4'> 🔎 Search Train</h3>
                <div className='d-flex align-items-center mb-3'>
                  <label className={`me-2 ${styles.newClass}`}>From</label>
                  <input
                  type='text'
                  className='form-control'
                  placeholder='From Which Station ?'
                />
                </div>
                <div className='d-flex align-items-center mb-3'>
                  <label className={`me-2 ${styles.newClass}`}>
                  To
                </label>
                  <input
                  type='text'
                  className='form-control'
                  placeholder='To Which Station ?'
                />
                </div>
                <div className='d-flex align-items-center mb-3'>
                  <label className={`me-2 ${styles.newClass} `}>Date</label>
                  <DatePicker
                    selected={startDate}
                    onChange={(date) => setStartDate(date)}
                    className='form-control'
                  />
                </div>
                <br />
                  <Link
                to='/trainlist'
                className=' btn btn-outline-primary text-decoration-none'
              >
                Search
              </Link>
              </div>
          </div>
        </div>
              </div>
    </>
  );
};

export default Landing;
