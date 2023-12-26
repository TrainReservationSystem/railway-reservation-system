import React from "react";

import {
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBRow,
  MDBCol,
  MDBInput,
} from "mdb-react-ui-kit";
import adminImage from "../../assets/adminlogin.png";

function AdminLogin() {
  return (
    <MDBContainer className="mt-2 d-flex justify-content-center align-items-center">
      <MDBCard className="shadow p-2">
        <MDBRow className="g-0">
          <MDBCol md="6">
            <MDBCardImage
              src={adminImage}
              alt="login form"
              className="rounded-start w-100"
            />
          </MDBCol>

          <MDBCol md="6">
            <MDBCardBody className="d-flex flex-column px-0">
              <div className="d-flex flex-row mt-1">
                <span className="display-3">Hello👋, Admin</span>
              </div>

              <h5
                className="fw-normal my-1 pb-1"
                style={{ letterSpacing: "1px" }}
              >
                Sign into your account
              </h5>

              <MDBInput
                wrapperClass="mb-2"
                label="Email address"
                id="formControlL"
                type="email"
                size="lg"
              />
              <MDBInput
                wrapperClass="mb-2"
                label="Password"
                id="formControl"
                type="password"
                size="lg"
              />

              <button className="btn btn-dark btn-lg mb-2">Login</button>
              <a className="small text-muted" href="#!">
                Forgot password?
              </a>

              <div className="d-flex flex-row justify-content-start">
                <a href="#!" className="small text-muted me-1">
                  Terms of use.
                </a>
                <a href="#!" className="small text-muted">
                  Privacy policy
                </a>
              </div>
            </MDBCardBody>
          </MDBCol>
        </MDBRow>
      </MDBCard>
    </MDBContainer>
  );
}

export default AdminLogin;
