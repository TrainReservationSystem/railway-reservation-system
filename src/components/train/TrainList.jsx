import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import SearchCard from './SearchCard';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { Link } from 'react-router-dom';

const TrainList = () => {
  const [hideSidebar, setHideSidebar] = useState(false);
  const [searchData, setSearchData] = useState({
    from: '',
    to: '',
    date: new Date(),
    classType: 'all',
  });

  // Function to update user data efficiently
  const updateSearchData = (fieldName, newValue) => {
    // Use the spread operator to create a shallow copy of the state object
    setSearchData((prevSearchData) => ({
      ...prevSearchData,
      [fieldName]: newValue,
    }));
  };

  //static search results
  const dummyTrainData = [
    {
      trainName: 'PUNE BHUJ EXP',
      trainNumber: 11092,
      runsOn: 'M T W T F S S',
      scheduleLink: 'http://',
      departureTime: '20:10',
      departureStation: 'PUNE JN',
      arrivalTime: '05:31',
      arrivalStation: 'VALSAD',
      duration: '9h 21m',
      classTypes: {
        Sleeper: 'AVL 50',
        'First Class': 'WL 30',
        'Chair Car': 'AVL 10',
        'AC 2 Tier': 'WL 5',
        'AC 3 Tier': 'AVL 15',
      },
    },
    {
      trainName: 'ABC EXPRESS',
      trainNumber: 12345,
      runsOn: 'M W F',
      scheduleLink: 'http://',
      departureTime: '08:30',
      departureStation: 'CITY A',
      arrivalTime: '15:45',
      arrivalStation: 'CITY B',
      duration: '7h 15m',
      classTypes: {
        Sleeper: 'AVL 60',
        'First Class': 'AVL 40',
        'Chair Car': 'WL 15',
        'AC 2 Tier': 'WL 10',
        'AC 3 Tier': 'WL 25',
      },
    },
    {
      trainName: 'XYZ LIMITED',
      trainNumber: 67890,
      runsOn: 'T T S',
      scheduleLink: 'http://',
      departureTime: '12:15',
      departureStation: 'CITY X',
      arrivalTime: '19:20',
      arrivalStation: 'CITY Y',
      duration: '7h 5m',
      classTypes: {
        Sleeper: 'AVL 40',
        'First Class': 'AVL 25',
        'Chair Car': 'WL 8',
        'AC 2 Tier': 'AVL 3',
        'AC 3 Tier': 'AVL 10',
      },
    },
    {
      trainName: 'SUNSET EXPRESS',
      trainNumber: 55555,
      runsOn: 'S',
      scheduleLink: 'http://',
      departureTime: '18:45',
      departureStation: 'EVENING CITY',
      arrivalTime: '22:30',
      arrivalStation: 'NIGHTVILLE',
      duration: '3h 45m',
      classTypes: {
        Sleeper: 'WL 30',
        'First Class': 'WL 20',
        'Chair Car': 'WL 8',
        'AC 2 Tier': 'WL 3',
        'AC 3 Tier': 'AVL 12',
      },
    },
    {
      trainName: 'MIDNIGHT SPECIAL',
      trainNumber: 99999,
      runsOn: 'M T W T F S S',
      scheduleLink: 'http://',
      departureTime: '23:59',
      departureStation: 'NIGHT JUNCTION',
      arrivalTime: '03:30',
      arrivalStation: 'DAWN CITY',
      duration: '3h 31m',
      classTypes: {
        Sleeper: 'AVL 25',
        'First Class': 'AVL 15',
        'Chair Car': 'WL 5',
        'AC 2 Tier': 'AVL 2',
        'AC 3 Tier': 'WL 8',
      },
    },
    {
      trainName: 'MORNING EXPRESS',
      trainNumber: 11111,
      runsOn: 'S',
      scheduleLink: 'http://',
      departureTime: '06:00',
      departureStation: 'DAWN CITY',
      arrivalTime: '09:30',
      arrivalStation: 'MORNINGVILLE',
      duration: '3h 30m',
      classTypes: {
        Sleeper: 'AVL 35',
        'First Class': 'AVL 22',
        'Chair Car': 'AVL 7',
        'AC 2 Tier': 'AVL 4',
        'AC 3 Tier': 'WL 14',
      },
    },
    {
      trainName: 'CITY SHUTTLE',
      trainNumber: 22222,
      runsOn: 'M W F',
      scheduleLink: 'http://',
      departureTime: '07:45',
      departureStation: 'URBAN JUNCTION',
      arrivalTime: '09:15',
      arrivalStation: 'METRO CITY',
      duration: '1h 30m',
      classTypes: {
        Sleeper: 'AVL 15',
        'First Class': 'WL 10',
        'Chair Car': 'WL 3',
        'AC 2 Tier': 'WL 1',
        'AC 3 Tier': 'AVL 5',
      },
    },
    {
      trainName: 'WEEKEND GETAWAY',
      trainNumber: 33333,
      runsOn: 'S S',
      scheduleLink: 'http://',
      departureTime: '11:00',
      departureStation: 'RELAXATION STATION',
      arrivalTime: '14:45',
      arrivalStation: 'LEISURE CITY',
      duration: '3h 45m',
      classTypes: {
        Sleeper: 'AVL 55',
        'First Class': 'AVL 35',
        'Chair Car': 'WL 12',
        'AC 2 Tier': 'WL 7',
        'AC 3 Tier': 'AVL 18',
      },
    },
    {
      trainName: 'FAST TRACK',
      trainNumber: 44444,
      runsOn: 'T F',
      scheduleLink: 'http://',
      departureTime: '15:20',
      departureStation: 'SPEED CITY',
      arrivalTime: '18:05',
      arrivalStation: 'RAPID JUNCTION',
      duration: '2h 45m',
      classTypes: {
        Sleeper: 'AVL 20',
        'First Class': 'AVL 12',
        'Chair Car': 'WL 4',
        'AC 2 Tier': 'WL 2',
        'AC 3 Tier': 'AVL 8',
      },
    },
    {
      trainName: 'GREEN LINE',
      trainNumber: 55555,
      runsOn: 'M W S',
      scheduleLink: 'http://',
      departureTime: '09:45',
      departureStation: 'ECO STATION',
      arrivalTime: '13:00',
      arrivalStation: 'BIODOME CITY',
      duration: '3h 15m',
      classTypes: {
        Sleeper: 'AVL 45',
        'First Class': 'WL 28',
        'Chair Car': 'AVL 9',
        'AC 2 Tier': 'AVL 5',
        'AC 3 Tier': 'AVL 15',
      },
    },
    {
      trainName: 'SILVER EXPRESS',
      trainNumber: 66666,
      runsOn: 'T T S S',
      scheduleLink: 'http://',
      departureTime: '16:30',
      departureStation: 'SILVER TERMINAL',
      arrivalTime: '20:15',
      arrivalStation: 'PLATINUM CITY',
      duration: '3h 45m',
      classTypes: {
        Sleeper: 'WL 33',
        'First Class': 'AVL 21',
        'Chair Car': 'WL 7',
        'AC 2 Tier': 'WL 3',
        'AC 3 Tier': 'AVL 12',
      },
    },
    {
      trainName: 'SUNDAY SPECIAL',
      trainNumber: 77777,
      runsOn: 'S',
      scheduleLink: 'http://',
      departureTime: '13:00',
      departureStation: 'WEEKEND JUNCTION',
      arrivalTime: '16:45',
      arrivalStation: 'LEISURE CITY',
      duration: '3h 45m',
      classTypes: {
        Sleeper: 'AVL 28',
        'First Class': 'AVL 18',
        'Chair Car': 'AVL 6',
        'AC 2 Tier': 'AVL 2',
        'AC 3 Tier': 'AVL 10',
      },
    },
    {
      trainName: 'PEAK HOUR EXPRESS',
      trainNumber: 88888,
      runsOn: 'M T W T F',
      scheduleLink: 'http://',
      departureTime: '17:30',
      departureStation: 'BUSY STATION',
      arrivalTime: '20:45',
      arrivalStation: 'QUIET TOWN',
      duration: '3h 15m',
      classTypes: {
        Sleeper: 'WL 18',
        'First Class': 'AVL 12',
        'Chair Car': 'WL 4',
        'AC 2 Tier': 'WL 2',
        'AC 3 Tier': 'WL 8',
      },
    },
    {
      trainName: 'NIGHT OWL',
      trainNumber: 99999,
      runsOn: 'S S',
      scheduleLink: 'http://',
      departureTime: '23:00',
      departureStation: 'NOCTURNAL JUNCTION',
      arrivalTime: '02:15',
      arrivalStation: 'DARK CITY',
      duration: '3h 15m',
      classTypes: {
        Sleeper: 'WL 22',
        'First Class': 'AVL 15',
        'Chair Car': 'WL 5',
        'AC 2 Tier': 'AVL 2',
        'AC 3 Tier': 'WL 10',
      },
    },
    {
      trainName: 'EVENING EXPRESS',
      trainNumber: 12121,
      runsOn: 'T S',
      scheduleLink: 'http://',
      departureTime: '16:00',
      departureStation: 'SUNSET CITY',
      arrivalTime: '20:30',
      arrivalStation: 'NIGHTFALL JUNCTION',
      duration: '4h 30m',
      classTypes: {
        Sleeper: 'AVL 40',
        'First Class': 'AVL 25',
        'Chair Car': 'WL 10',
        'AC 2 Tier': 'WL 5',
        'AC 3 Tier': 'WL 15',
      },
    },
    {
      trainName: 'COMMUTER SHUTTLE',
      trainNumber: 23232,
      runsOn: 'M T W T F',
      scheduleLink: 'http://',
      departureTime: '08:00',
      departureStation: 'SUBURBAN STATION',
      arrivalTime: '09:30',
      arrivalStation: 'DOWNTOWN CITY',
      duration: '1h 30m',
      classTypes: {
        Sleeper: 'WL 15',
        'First Class': 'AVL 10',
        'Chair Car': 'WL 3',
        'AC 2 Tier': 'AVL 1',
        'AC 3 Tier': 'AVL 5',
      },
    },
    {
      trainName: 'WEEKDAY WANDERER',
      trainNumber: 34343,
      runsOn: 'W T F',
      scheduleLink: 'http://',
      departureTime: '12:30',
      departureStation: 'EXPLORE TERMINAL',
      arrivalTime: '15:45',
      arrivalStation: 'DISCOVERY CITY',
      duration: '3h 15m',
      classTypes: {
        Sleeper: 'WL 25',
        'First Class': 'WL 18',
        'Chair Car': 'WL 6',
        'AC 2 Tier': 'AVL 3',
        'AC 3 Tier': 'WL 10',
      },
    },
  ];

  const classTypes = [
    { value: 'all', label: 'All Classes' },
    { value: 'sl', label: 'Sleeper (SL)' },
    { value: '1a', label: 'First Class (1A)' },
    { value: 'cc', label: 'Chair Car (CC)' },
    { value: '2a', label: 'AC 2 tier (2A)' },
    { value: '3a', label: 'AC 3 tier (3A)' },
  ];

  return (
    <>
      <div className='container-fluid d-flex justify-content-center align-items-start trainList'>
        {/* Filter Options */}
        <div
          className={`container mt-4 d-flex flex-column justify-content-space-between align-items-center 
          } trainListLeft`}
          style={{ width: hideSidebar ? '5%' : '25%',transition:'ease-in-out 0.5s' }}
        >
          <div
            className='border border-2 border-primary d-flex justify-content-center align-items-center '
            style={{
              height: hideSidebar ? '30px' : '70px',
              width: hideSidebar ? '30px' : '70px',
              borderRadius: '50%',
            }}
            onClick={() => setHideSidebar((hideSidebar) => !hideSidebar)}
          >
            <i
              className='bi bi-funnel text-primary'
              style={{ fontSize: hideSidebar ? '15px' : '50px' }}
            ></i>
          </div>
          {!hideSidebar && (
            <>
              <input
                type='text'
                placeholder='From Station'
                className='my-2 form-control'
                style={{ maxWidth: '275px' }}
                value={searchData.from}
                onChange={(e) => updateSearchData('from', e.target.value)}
              />
              <i className=' my-2 bi bi-arrow-down'></i>
              <input
                type='text'
                placeholder='To Station'
                className='my-2 form-control'
                style={{ maxWidth: '275px' }}
                value={searchData.to}
                onChange={(e) => updateSearchData('to', e.target.value)}
              />
              <div className='row my-3'>
                <div className='col-md-3'>
                  <label className='lh-1'>Date:</label>
                </div>
                <div className='col-md-9'>
                  <DatePicker
                    selected={searchData.date}
                    className='form-control'
                    dateFormat='dd/MM/yyyy'
                    style={{ maxWidth: '275px' }}
                    onSelect={(date) => updateSearchData('date', date)}
                    onChange={(date) => updateSearchData('date', date)}
                  />
                </div>
              </div>

              <select
                name='All Class'
                className='my-3 form-select'
                style={{ maxWidth: '275px' }}
                value={searchData.classType}
                onChange={(e) => updateSearchData('classType', e.target.value)}
              >
                {classTypes.map((opt, index) => (
                  <option key={index} value={opt.value}>
                    {opt.label}
                  </option>
                ))}
              </select>

              <Link
                to='/passengerdetails'
                className=' btn btn-outline-primary text-decoration-none'
              >
                <i className=' bi bi-search mx-2'></i>Search
              </Link>
            </>
          )}
          {hideSidebar && (
            <div className='text-center'>
              <span className='my-2'>From: <br />{searchData.from}</span>
              <hr />
              <i className=' my-2 bi bi-arrow-down'></i>
              <hr />
              <span className='my-2'>To: <br />{searchData.to}</span>
              <hr />
              <span className='my-2'>Date: <br />{`${searchData.date.getDate()}/${
                searchData.date.getMonth() + 1
              }/${searchData.date.getFullYear()}`}</span>
              <hr />
              <span className='my-2'>class: <br />{searchData.classType}</span>
            </div>
          )}
        </div>

        {/* Search Results */}
        <div
          className='container mt-4 trainList border-start border-dark'
          style={{
            overflowY: 'auto',
            height: '100%',
            width: hideSidebar ? '95%' : '75%',
          }}
        >
          {dummyTrainData.map((result, index) => (
            <SearchCard key={index} data={result} />
          ))}
        </div>
      </div>
    </>
  );
};

export default TrainList;