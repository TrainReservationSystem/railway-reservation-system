// FeedbackList.js
import React, { useState, useEffect } from "react";
import "./FeedbackList.css";

const FeedbackList = () => {
  const [feedbackList, setFeedbackList] = useState([]);

  useEffect(() => {
    const fetchFeedback = async () => {
      try {
        const response = await fetch("./feedback.json");
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        setFeedbackList(data);
      } catch (error) {
        console.error("Error fetching feedback:", error.message);
      }
    };

    fetchFeedback();
  }, []);

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">All Feedback</h2>
      <ol className="list-group">
        {feedbackList.map((feedback) => (
          <li key={feedback.id} className="list-group-item">
            {feedback.comment}
          </li>
        ))}
      </ol>
    </div>
  );
};

export default FeedbackList;
