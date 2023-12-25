// App.js
import React from "react";
import Landing from "./components/landing/Landing";
import { BrowserRouter } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import TrainList from "./components/train/TrainList";

const App = () => {
  const appStyles = {
    backgroundColor: "#C5FFF8", 
    minHeight: "100vh", 
  };

  return (
    <div style={appStyles}>
      <BrowserRouter>
        <Landing />
        {/* <TrainList /> */}
      </BrowserRouter>
    </div>
  );
};

export default App;
