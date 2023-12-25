import React from "react";
import Footer from "../common/Footer";
import Header from "../common/Header1";

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
      </div>
    </>
  );
};

export default BookingSuccess;
