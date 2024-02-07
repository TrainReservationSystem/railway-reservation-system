import React, { useState } from "react";
import "./EditProfile.css";
import { Link } from "react-router-dom";

const EditProfile = () => {
  // State for form fields and profile image
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    birthdate: "",
    gender: "",
    mobileNumber: "",
    email: "",
    username: "",
    country: "",
    state: "",
    zip: "",
  });
  const [profileImage, setProfileImage] = useState(null);

  // Function to handle form field changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Function to handle profile image upload
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setProfileImage(file);
  };

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Add logic to handle form submission (e.g., sending data to server)
    console.log("Form submitted:", formData);
    console.log("Profile image:", profileImage);
    // Clear form fields and profile image after submission
    setFormData({
      firstName: "",
      lastName: "",
      birthdate: "",
      gender: "",
      mobileNumber: "",
      email: "",
      username: "",
      country: "",
      state: "",
      zip: "",
    });
    setProfileImage(null);
  };

  return (
    <>
      <div className="container">
        <div className="main-body">
          <div className="row gutters-sm">
            <div className="col-md-4 mb-3">
              <div className="card">
                <div className="card-body">
                  <div className="d-flex flex-column align-items-center text-center">
                    <img
                      src={profileImage ? URL.createObjectURL(profileImage) : "https://bootdey.com/img/Content/avatar/avatar7.png"}
                      alt="Admin"
                      className="rounded-circle"
                      width="150"
                    />
                    <div className="mt-3">
                      <input type="file" onChange={handleImageChange} />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-8">
              <h4 className="mb-3 mt-3">Edit Profile</h4>
              <form onSubmit={handleSubmit}>

              <div className="row g-3">
                  <div className="col-sm-6">
                    <label htmlFor="firstName" className="form-label">First name</label>
                    <input type="text" className="form-control" id="firstName" placeholder="" required />
                    <div className="invalid-feedback">
                      Valid first name is required.
                    </div>
                  </div>

                  <div className="col-sm-6">
                    <label htmlFor="lastName" className="form-label">Last name</label>
                    <input type="text" className="form-control" id="lastName" placeholder="" required />
                    <div className="invalid-feedback">
                      Valid last name is required.
                    </div>
                  </div>

                  <div className="col-md-4">
                    <label htmlFor="birthdate" className="form-label">Birthdate</label>
                    <input type="date" className="form-control" id="birthdate" name="birthdate" placeholder="" required />
                    <div className="invalid-feedback">
                      Valid Birthdate is required.
                    </div>
                  </div>

                  <div className="col-md-3 ">
                    <label htmlFor="gender" className="form-label">Gender</label>
                    <select className="form-select" id="gender" required>
                      <option value="">Choose...</option>
                      <option>Female</option>
                      <option>Male</option>
                      <option>Other</option>
                    </select>
                    <div className="invalid-feedback">
                      Please select your gender.
                    </div>
                  </div>

                  <div className="col-md-5">
                    <label htmlFor="mobileNumber" className="form-label">Mobile No.</label>
                    <input type="number" className="form-control" id="mobileNumber" pattern="[0-9]{10}" placeholder="" required />
                    <div className="invalid-feedback">
                      Mobile number is required.
                    </div>
                  </div>

                  <div className="col-12">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input type="email" className="form-control" id="email" placeholder="you@example.com" required />
                    <div className="invalid-feedback">
                      Please enter a valid email address htmlFor shipping updates.
                    </div>
                  </div>

                  <div className="col-12">
                    <label htmlFor="username" className="form-label">Username</label>
                    <div className="input-group has-validation">
                      <span className="input-group-text">@</span>
                      <input type="text" className="form-control" id="username" placeholder="Username" required />
                      <div className="invalid-feedback">
                        Your username is required.
                      </div>
                    </div>
                  </div>

                  <div className="col-md-5">
                    <label htmlFor="country" className="form-label">Country</label>
                    <select className="form-select" id="country" required>
                      <option value="">Choose...</option>
                      <option>United States</option>
                    </select>
                    <div className="invalid-feedback">
                      Please select a valid country.
                    </div>
                  </div>

                  <div className="col-md-4">
                    <label htmlFor="state" className="form-label">State</label>
                    <select className="form-select" id="state" required>
                      <option value="">Choose...</option>
                      <option>California</option>
                    </select>
                    <div className="invalid-feedback">
                      Please provide a valid state.
                    </div>
                  </div>

                  <div className="col-md-3">
                    <label htmlFor="zip" className="form-label">Zip</label>
                    <input type="text" className="form-control" id="zip" placeholder="" required />
                    <div className="invalid-feedback">
                      Zip code required.
                    </div>
                  </div>
                </div>
                <hr className="my-4"></hr>
                <button className="w-40 btn btn-primary btn-lg" type="submit">Save</button>
                <Link to="/userprof">
                  <button className="w-40 btn btn-danger btn-lg m-3">Cancel</button>
                </Link>
                <button className="w-40 btn btn-success btn-lg" type="reset">Clear</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EditProfile;
