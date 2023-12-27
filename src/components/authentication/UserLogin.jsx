  import React, { useState } from "react";
  import styles from "./UserLogin.module.css";
  import { useNavigate } from "react-router-dom";
  import { MDBContainer, MDBCol, MDBRow, MDBInput } from "mdb-react-ui-kit";
  import { Link } from "react-router-dom";

  function UserLogin() {
    const navigate = useNavigate();
    const [isLoggedIn,setLoggedIn] = useState(true);
    const handleSignIn = () => {
      setLoggedIn(true);
      navigate("/trainlist");
    };

    return (
      <MDBContainer className="p-1 mt-5">
        <MDBRow>
          <MDBCol col="6" md="6">
            <img
              src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
              className="img-fluid"
              alt="Phone"
            />
          </MDBCol>

          <MDBCol col="4" md="6">
            <p className="h1 fw-bold">Welcome, Back</p>
            <h5 className="fw-normal my-4 pb-3" style={{ letterSpacing: "1px" }}>
              Sign into your account
            </h5>
            <MDBInput
              wrapperClass="mb-4"
              label="Email address"
              id="formControld"
              type="email"
              size="lg"
            />
            <MDBInput
              wrapperClass="mb-4"
              label="Password"
              id="formControl"
              type="password"
              size="lg"
            />

            <div className="d-flex justify-content-between  mb-4">
              <Link to="/signup" className={styles.signupLink}>
                Don't have an account? Sign Up
              </Link>
              <a href="!#">Forgot password?</a>
            </div>

            <button
              onClick={handleSignIn}
              className="btn btn-lg btn-primary w-100"
            >
              Sign in
            </button>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    );
  }

  export default UserLogin;
