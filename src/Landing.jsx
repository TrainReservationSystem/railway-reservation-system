import React from "react";
import Header from "./Header1";
import Footer from "./Footer";
import { BrowserRouter } from "react-router-dom";

const Landing = () => {
  return (
    <>
        <Header />

      <hr />
      <div className="container">
        <center>
          <h4>
            To : <input type="text"></input>
            <br />
            <br />
            From : <input type="text"></input>
          </h4>
        </center>
      </div>
      <Footer />
    </>
  );
};

export default Landing;
