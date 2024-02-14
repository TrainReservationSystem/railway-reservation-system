import React, { useState, useEffect, useContext } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import SearchCard from './SearchCard';
import 'bootstrap-icons/font/bootstrap-icons.css';
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import config from '../../config';
import { SearchDataProvider } from "../../contexts/SearchDataContext";

const TrainList = () => {
  const { searchData } = useContext(SearchDataProvider);
  const [hideSidebar, setHideSidebar] = useState(false);
  const [localSearchData, setLocalSearchData] = useState({
    from: '',
    to: '',
    date: new Date(),
    classType: 'all',
  });
  const [trainData, setTrainData] = useState([]);
  const [routes, setRoutes] = useState([]);

  useEffect(() => {
    const fetchRoutes = async () => {
      try {
        const response = await axios.get(`${config.server}/train/routes`);
        setRoutes(response.data);
      } catch (error) {
        console.error('Error fetching routes data:', error);
        toast.error('Error fetching routes data. Please try again later.');
      }
    };
    fetchRoutes();
  }, []);

  useEffect(() => {
    if (searchData) {
      setLocalSearchData(searchData);
    }
  }, [searchData]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${config.server}/trains/search`, {
          params: {
            source: localSearchData.from,
            destination: localSearchData.to,
            date: localSearchData.date.toISOString().split('T')[0],
          }
        });
        setTrainData(response.data);
      } catch (error) {
        console.error('Error fetching train data:', error);
        toast.error('Error fetching train data. Please try again later.');
      }
    };

    if (localSearchData.from && localSearchData.to && localSearchData.date) {
      fetchData(); // Fetch data when localSearchData changes
    }
  }, [localSearchData]); // Include localSearchData in the dependency array

  const updatelocalSearchData = (fieldName, newValue) => {
    setLocalSearchData(prevSearchData => ({
      ...prevSearchData,
      [fieldName]: newValue,
    }));
  };

  const calculateDuration = (departureTime, arrivalTime) => {
    const departure = new Date(`01/01/2022 ${departureTime}`);
    const arrival = new Date(`01/01/2022 ${arrivalTime}`);
    const duration = Math.abs(arrival - departure) / 1000;
    const hours = Math.floor(duration / 3600) % 24;
    const minutes = Math.floor(duration / 60) % 60;
    return `${hours}h ${minutes}m`;
  };

  const handleSearch = () => {

    const fetchData = async () => {
      try {
        const response = await axios.get(`${config.server}/trains/search`, {
          params: {
            source: localSearchData.from,
            destination: localSearchData.to,
            date: localSearchData.date.toISOString().split('T')[0],
          }
        });
        setTrainData(response.data);
      } catch (error) {
        console.error('Error fetching train data:', error);
        toast.error('Error fetching train data. Please try again later.');
      }
    };
    

    if (localSearchData.from && localSearchData.to && localSearchData.date) {
      fetchData(); // Fetch data when search button is clicked
    } else {
      toast.error('Please select source, destination, and date.');
    }
  };

  const filteredDestinations = routes.filter(route => route.source === localSearchData.from);

  return (
    <>
      <div className='container-fluid d-flex justify-content-center align-items-start trainList'>
        {/* Sidebar */}
        <div className={`container mt-4 d-flex flex-column justify-content-space-between align-items-center trainListLeft`} style={{ width: hideSidebar ? '5%' : '25%', transition: 'ease-in-out 0.5s' }}>
          <div
            className='border border-2 border-primary d-flex justify-content-center align-items-center '
            style={{
              height: hideSidebar ? '30px' : '70px',
              width: hideSidebar ? '30px' : '70px',
              borderRadius: '50%',
            }}
            onClick={() => setHideSidebar(hideSidebar => !hideSidebar)}
          >
            <i
              className='bi bi-funnel text-primary'
              style={{ fontSize: hideSidebar ? '15px' : '50px' }}
            ></i>
          </div>
          {!hideSidebar && (
            <>
              <select
                className='form-select my-2'
                value={localSearchData.from}
                onChange={e => updatelocalSearchData('from', e.target.value)}
              >
                <option value=''>Select Source</option>
                {routes.map((route, index) => (
                  <option key={index} value={route.source}>
                    {route.source}
                  </option>
                ))}
              </select>
              <select
                className='form-select my-2'
                value={localSearchData.to}
                onChange={e => updatelocalSearchData('to', e.target.value)}
              >
                <option value=''>Select Destination</option>
                {filteredDestinations.map((route, index) => (
                  <option key={index} value={route.destination}>
                    {route.destination}
                  </option>
                ))}
              </select>
              <div className='row my-3'>
                <div className='col-md-3'>
                  <label className='lh-1'>Date:</label>
                </div>
                <div className='col-md-9'>
                  <DatePicker
                    selected={localSearchData.date}
                    className='form-control'
                    dateFormat='dd/MM/yyyy'
                    onSelect={date => updatelocalSearchData('date', date)}
                    onChange={date => updatelocalSearchData('date', date)}
                  />
                </div>
              </div>

              <button
                className='btn btn-outline-primary'
                onClick={handleSearch}
              >
                <i className='bi bi-search mx-2'></i>Search
              </button>
            </>
          )}
          {hideSidebar && (
            <div className='text-center'>
              <span className='my-2'>From: <br />{localSearchData.from}</span>
              <hr />
              <i className=' my-2 bi bi-arrow-down'></i>
              <hr />
              <span className='my-2'>To: <br />{localSearchData.to}</span>
              <hr />
              <span className='my-2'>Date: <br />{`${localSearchData.date.getDate()}/${
                localSearchData.date.getMonth() + 1
              }/${localSearchData.date.getFullYear()}`}</span>
              <hr />
              <span className='my-2'>class: <br />{localSearchData.classType}</span>
            </div>
          )}
        </div>

        {/* Search Results */}
        <div className='container mt-4 trainList border-start border-dark' style={{ overflowY: 'auto', height: '100%', width: hideSidebar ? '95%' : '75%' }}>
          {trainData.map((result, index) => (
            <SearchCard key={index} data={result} duration={calculateDuration(result.departureTime, result.arrivalTime)} />
          ))}
        </div>
      </div>
    </>
  );
};

export default TrainList;
