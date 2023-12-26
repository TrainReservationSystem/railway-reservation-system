import React from "react";
import styles from "./UserLogin.module.css";
import {
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBInput,
  // MDBCheckbox,
} from "mdb-react-ui-kit";
import { Link } from "react-router-dom";

function UserLogin() {
  return (
    <div className={`${styles.fullHeight} ${styles.container}`}>
      <MDBContainer>
        <MDBRow className="align-items-center justify-content-center full-height">
          <MDBCol col="6" md="6">
            <img
              src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
              className="img-fluid"
              alt="Phone"
            />
          </MDBCol>

          <MDBCol col="4" md="6" className={styles.loginCol}>
            <div className={styles.loginContent}>
              <p className="h1 fw-bold">Welcome, Back</p>
              <h5
                className="fw-normal my-4 pb-3"
                style={{ letterSpacing: "1px" }}
              >
                Sign into your account
              </h5>
              <MDBInput
                wrapperClass="mb-4"
                label="Email address"
                id="formControlLg"
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

              <div className="d-flex justify-content-between align-items-center mb-4">
                {/* <MDBCheckbox
                  name="flexCheck"
                  value=""
                  id="flexCheckDefault"
                  label="Remember me"
                /> */}
                <a href="/">Forgot password?</a>

                <Link to="/signup" className={styles.signupLink}>
                  Don't have an account? Sign Up
                </Link>
              </div>

              <button className=" btn btn-lg btn-primary w-100">Sign in</button>
            </div>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </div>
  );
}

export default UserLogin;
