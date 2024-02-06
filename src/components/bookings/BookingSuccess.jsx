import React from "react";

import Footer from "../common/Footer";
import Header from "../common/Header1";
import { Link } from "react-router-dom";


const BookingSuccess = () => {
  return (
    <>
      <div>

        <Header/>

        <div>
          <div class="container mt-5">
            {/* First Line: Message in center with green line */}
            <div class="text-center">
              <div class="alert alert-success">
                Your Ticket is Booked Successfully
              </div>
            </div>

            {/*(Two buttons with blue color */}
            <div class="text-center">
              <button type="button" class="btn btn-primary mr-2 mx-5">
                {" "}
                My Bookings{" "}
              </button>
              <button type="button" class="btn btn-primary mx-5">
                Button 2
              </button>
            </div>

            {/* Message with warning color */}
            <div class="mt-3">
              <div class="alert alert-warning">
                confermation has sent to your Email
              </div>
            </div>

            <h4>click here to download ticket</h4>
            {/*Feedback area with submit button*/}

            <div class="mt-3">
              <form>
                <div class="form-group">
                  <label for="feedback">Feedback:</label>
                  <textarea
                    class="form-control"
                    id="feedback"
                    rows="3"
                  ></textarea>
                </div>
                <br></br>
                <button type="submit" class="btn btn-primary">
                  Submit Feedback
                </button>
              </form>
            </div>
          </div>
        </div>
        <Footer/>
                    
        <div className="container mt-5">
          <div className="text-center">
            <div className="alert alert-success">
              Your Ticket is Booked Successfully !
            </div>
          </div>

          <div className="text-center">
            <Link to="/mybookings">
              <button type="button" className="btn btn-primary mr-2 mx-5">
                {" "}
                My Bookings{" "}
              </button>
            </Link>
            <Link to="/">
              <button type="button" className="btn btn-primary mx-5">
                Home Page
              </button>
            </Link>
          </div>

          <div className="mt-3">
            <div className="alert alert-warning">
              Confirmation is sent to email examplexxxx@gmail.com and 98xxxxxx21
            </div>
          </div>

          <h4>Click here to download ticket ! </h4>
          <div className="mt-3">
            <form>
              <div className="form-group">
                <label for="feedback">Feedback:</label>
                <textarea
                  className="form-control"
                  id="feedback"
                  rows="3"
                ></textarea>
              </div>
              <br></br>
              <button type="submit" className="btn btn-primary">
                Submit Feedback !
              </button>
            </form>
          </div>
        </div>

      </div>
    </>
  );
};

export default BookingSuccess;
