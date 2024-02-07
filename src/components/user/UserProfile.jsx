import React from "react";
import "../user/UserProfile.css";
import { Link } from "react-router-dom";

const dummyUserData = {
  firstName: "Meet",
  lastName: "Vasani",
  birthDate: "23/07/2001",
  address: "2, Suprab Apt, Uthalsar Naka, Thane West, Mumbai",
  email: "meetvasani@gmail.com",
  gender: "Male",
  phone: "8208853321",
  avatarUrl: "https://bootdey.com/img/Content/avatar/avatar7.png",
};

const UserProfile = () => {
  return (
    <>
      <section className="section about-section gray-bg" id="about">
        <div className="container">
          <button className="btn btn-danger float-end">Delete Profile</button>
          <Link to="/edituserprofile" state={{ userData: dummyUserData }}>
            <button className="btn btn-warning float-end me-2">Edit Profile</button>
          </Link>
          <div className="row align-items-center flex-row-reverse">
            <div className="col-lg-8">
              <div className="about-text go-to">
                <h3 className="dark-color">About Me</h3>
                <div className="row about-list">
                  <div className="col-md-6">
                    <div className="media">
                      <label>First Name</label>
                      <p>{dummyUserData.firstName}</p>
                    </div>

                    <div className="media">
                      <label>Last Name</label>
                      <p>{dummyUserData.lastName}</p>
                    </div>

                    <div className="media">
                      <label>Birth Date</label>
                      <p>{dummyUserData.birthDate}</p>
                    </div>
                    <div className="media">
                      <label>Address</label>
                      <p>{dummyUserData.address}</p>
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="media">
                      <label>E-mail</label>
                      <p>{dummyUserData.email}</p>
                    </div>

                    <div className="media">
                      <label>Gender</label>
                      <p>{dummyUserData.gender}</p>
                    </div>
                    <div className="media">
                      <label>Phone</label>
                      <p>{dummyUserData.phone}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="about-avatar">
                <img src={dummyUserData.avatarUrl} title="" alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default UserProfile;
