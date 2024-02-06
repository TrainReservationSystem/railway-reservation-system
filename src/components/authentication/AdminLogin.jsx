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
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";

function AdminLogin() {
  const navigate = useNavigate();
  const { setNewRole } = useAuth();

  const handleSignIn = () => {
    setNewRole("admin");
    navigate("/trainlist");
  };
  return (
    <MDBContainer className="mt-2 ">
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
                <span className="display-2">Hello👋,Admin</span>
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
                id="formControlLg"
                type="email"
                size="lg"
              />
              <MDBInput
                wrapperClass="mb-2"
                label="Password"
                id="formControlL"
                type="password"
                size="lg"
              />
              <Link to="/adminhome">
                <button
                  className="btn btn-dark btn-lg mb-2"
                  onClick={handleSignIn}
                >
                  Login
                </button>
              </Link>

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
