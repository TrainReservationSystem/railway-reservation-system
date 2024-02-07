import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import styles from "./FeedbackPage.css";

const FeedbackPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    rating: 0,
    comments: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setFormData({
      name: "",
      email: "",
      rating: 0,
      comments: "",
    });
  };

  return (
    <div className="container mt-5">
      <h2 style={{ textAlign: "center", marginBottom: "20px" }}>
        Feedback Form
      </h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="form-control"
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="form-control"
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Rating:</label>
          <input
            type="number"
            name="rating"
            min="0"
            max="5"
            value={formData.rating}
            onChange={handleChange}
            className="form-control"
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Comments:</label>
          <textarea
            name="comments"
            value={formData.comments}
            onChange={handleChange}
            className="form-control"
          ></textarea>
        </div>
        <button type="submit" className="btn btn-primary">
          Submit Feedback
        </button>
      </form>
    </div>
  );
};

export default FeedbackPage;
