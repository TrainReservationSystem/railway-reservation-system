import React from "react";
import Landing from "./components/landing/Landing";
import { BrowserRouter } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import PassengerDetails from "./components/bookings/PassengerDetails";

const App = () => {
  return (
    <BrowserRouter>
      {/* <Landing />
       */}

       <PassengerDetails/>
    </BrowserRouter>
  );
};

export default App;