import React from "react";
import "../user/UserProfile.css";
import { Link } from "react-router-dom";

const UserProfile = () => {
  return (
    <>
      <section className="section about-section gray-bg" id="about">
        <div className="container">
          <Link to="/edituserprofile">
            <button className="btn btn-warning float-end">Edit Profile</button>
          </Link>
          <button className="btn btn-warning float-end">Delete Profile</button>
          {/* Shift the above button to appropriate place please */}
          <div className="row align-items-center flex-row-reverse">
            <div className="col-lg-8">
              <div className="about-text go-to">
                <h3 className="dark-color">About Me</h3>
                <div className="row about-list">
                  <div className="col-md-6">
                    <div className="media">
                      <label>First Name</label>
                      <p>Meet</p>
                    </div>

                    <div className="media">
                      <label>Last Name</label>
                      <p>Vasani</p>
                    </div>

                    <div className="media">
                      <label>Birth Date</label>
                      <p>23/07/2001</p>
                    </div>
                    <div className="media">
                      <label>Address</label>
                      <p> 2, Suprab Apt, Uthalsar Naka, Thane West, Mumbai </p>
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="media">
                      <label>E-mail</label>
                      <p>meetvasani@gmail.com</p>
                    </div>

                    <div className="media">
                      <label>Gender</label>
                      <p>Male</p>
                    </div>
                    <div className="media">
                      <label>Phone</label>
                      <p>8208853321</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="about-avatar">
                <img
                  src="https://bootdey.com/img/Content/avatar/avatar7.png"
                  title=""
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default UserProfile;
