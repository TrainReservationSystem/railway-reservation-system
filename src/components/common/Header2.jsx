import React from "react";
import trainLogo from "../../assets/trainLogo.jpg";
import { Link } from "react-router-dom";

const Header2 = () => {
  return (
    <header class="p-3 text-bg-dark">
      <div class="container">
        <div class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
          <img src={trainLogo} alt="logo" className="me-5 img-fluid logo-img" />

          <a
            href="/"
            class="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none"
          >
            <svg
              class="bi me-2"
              width="40"
              height="32"
              role="img"
              aria-label="Bootstrap"
            >
              <use xlinkHref="#bootstrap"></use>
            </svg>
          </a>

          <ul class="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
            <li>
              <Link to="/" class="nav-link px-2 text-white">
                Home
              </Link>
            </li>
            <li>
              <Link to="/contact" class="nav-link px-2 text-white">
                ContactUs
              </Link>
            </li>
            <li>
              <Link to="/about" class="nav-link px-2 text-white">
                AboutUs
              </Link>
            </li>
            <li>
              <Link to="/faqs" class="nav-link px-2 text-white">
                FAQs
              </Link>
            </li>
          </ul>

          {/* <form class="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3" role="search">
            <input
              type="search"
              class="form-control form-control-dark text-bg-dark"
              placeholder="Search..."
              aria-label="Search"
            />
          </form> */}

          <div class="text-end">
            <button type="button" class="btn btn-outline-light me-2">
              <Link to="/login" class="nav-link px-2 text-white">
                Login
              </Link>
            </button>
            <button type="button" class="btn btn-outline-light me-2">
            <Link to="/signup" class="nav-link px-2 text-white">
                SignUp
              </Link>
            </button>
            <button type="button" class="btn btn-danger me-2">
            <Link to="/adminlogin" class="nav-link px-2 text-white">
                Admin
              </Link>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header2;
