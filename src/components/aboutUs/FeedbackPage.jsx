import React, { useState, useEffect } from 'react';

const FeedbackComponent = () => {
  const [feedbackData, setFeedbackData] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  // Mock data to be used if API integration is not set up yet
  const mockFeedbackData = [
    { id: 1, userId: 1234, email: 'user1@example.com', feedback: 'Your app is lagging.' },
    { id: 2, userId: 1234, email: 'user1@example.com', feedback: 'The booking process was easy.' },
    { id: 3, userId: 5678, email: 'user2@example.com', feedback: 'The website is taking too much time to load.' },
    { id: 4, userId: 5678, email: 'user2@example.com', feedback: 'The UI was excellent.' },
    { id: 5, userId: 9012, email: 'user3@example.com', feedback: 'Wonderful experience.' },
  ];

  useEffect(() => {
    // Replace with your actual API call when needed
    const fetchFeedback = async () => {
      // const response = await fetch('/api/feedback');
      // const data = await response.json();
      // setFeedbackData(data);

      // Use the mock data if there's no API integration yet
      setFeedbackData(mockFeedbackData);
    };

    fetchFeedback();
  });

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const searchFeedback = async () => {
    // Implement your search logic if using an API
    // ...
  };

  const filteredFeedback = feedbackData.filter((feedback) =>
    feedback.userId.toString().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container mt-5">
      <h1>User Feedback</h1>
      <div className="row mb-4">
        <div className="col-9">
          <input
            type="text"
            className="form-control"
            placeholder="Enter User ID to Search"
            value={searchTerm}
            onChange={handleSearch}
          />
        </div>
        <div className="col-3">
          <button className="btn btn-primary w-100" onClick={searchFeedback}>
            Search by User ID
          </button>
        </div>
      </div>

      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Feedback ID</th>
            <th>UserID</th>
            <th>Email</th>
            <th>Feedback</th>
          </tr>
        </thead>
        <tbody>
          {filteredFeedback.length > 0 ? (
            filteredFeedback.map((feedback) => (
              <tr key={feedback.id}>
                <td>{feedback.id}</td>
                <td>{feedback.userId}</td>
                <td>{feedback.email}</td>
                <td>{feedback.feedback}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={4}>No feedback found matching your search.</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default FeedbackComponent;
