// App.js
import React from "react";
import Landing from "./components/landing/Landing";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import TrainList from "./components/train/TrainList";
import AboutUs from "./components/aboutUs/AboutUs";
import ContactUs from "./components/aboutUs/ContactUs";
import Faqs from "./components/aboutUs/Faqs";
import UserLogin from "./components/user/Login";
import SignUp from "./components/user/SignUp";
import AdminLogin from "./components/admin/Login";

const App = () => {
  const appStyles = {
    backgroundColor: "#C5FFF8",
    minHeight: "100vh",
  };

  return (
    <div style={appStyles}>
      <BrowserRouter>
        {/* <Landing /> */}
        {/* <TrainList /> */}
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="about" element={<AboutUs />} />
          <Route path="contact" element={<ContactUs />} />
          <Route path="faqs" element={<Faqs />} />
          <Route path="login" element={<UserLogin />} />
          <Route path="signup" element={<SignUp />} />
          <Route path="adminlogin" element={<AdminLogin />} />
          <Route path="*" element={<Landing />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
