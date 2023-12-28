import React from "react";
import "../user/UserProfile.css";
import { Link } from "react-router-dom";

const UserProfile = () => {
  return (
    <>
      <section class="section about-section gray-bg" id="about">
        <div class="container">
          <Link to="/edituserprofile">
            <button className="btn btn-warning float-end">
              Edit Profile
            </button>
          </Link>
          {/* Shift the above button to appropriate place please */}
          <div class="row align-items-center flex-row-reverse">
            <div class="col-lg-8">
              <div class="about-text go-to">
                <h3 class="dark-color">About Me</h3>
                <div class="row about-list">
                  <div class="col-md-6">
                    <div class="media">
                      <label>First Name</label>
                      <p>Joe</p>
                    </div>

                    <div class="media">
                      <label>Last Name</label>
                      <p>Root</p>
                    </div>
                    
                    <div class="media">
                      <label>Birth Date</label>
                      <p>01/01/1995</p>
                    </div>
                    <div class="media">
                      <label>Address</label>
                      <p> 2, Suprab Apt, Uthalsar Naka, Thane West, Mumbai </p>
                    </div>
                    
                  </div>

                  
                  <div class="col-md-6">
                    <div class="media">
                      <label>E-mail</label>
                      <p>joeroot@gmail.com</p>
                    </div>

                    <div class="media">
                      <label>Gender</label>
                      <p>Male</p>
                    </div>
                    <div class="media">
                      <label>Phone</label>
                      <p>8208853321</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-4">
              <div class="about-avatar">
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
