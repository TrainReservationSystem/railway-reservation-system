import React from "react";
import Landing from "./components/landing/Landing";
import AdminPage from "./components/admin/AdminPage";
import { BrowserRouter } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  return (
    <BrowserRouter>
       <Landing />
    </BrowserRouter>
  );
};

export default App;
