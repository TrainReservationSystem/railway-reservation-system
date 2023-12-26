// App.js
import React from "react";
import Landing from "./components/landing/Landing";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import AboutUs from "./components/aboutUs/AboutUs";
import ContactUs from "./components/aboutUs/ContactUs";
import Faqs from "./components/aboutUs/Faqs";
import UserLogin from "./components/user/Login";
import SignUp from "./components/user/SignUp";
import AdminLogin from "./components/admin/Login";
import MainDiv from "./components/MainDiv";
import TrainList from "./components/train/TrainList"
import PassengerDetails from "./components/bookings/PassengerDetails"

const App = () => {
  const appStyles = {
    // backgroundColor: "#C5FFF8",
    minHeight: "100vh",
    width: "100vw",
  };

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainDiv />}>
        <Route index element={<Landing />} />
        <Route path="about" element={<AboutUs />} />
        <Route path="contact" element={<ContactUs />} />
        <Route path="faqs" element={<Faqs />} />
        <Route path="login" element={<UserLogin />} />
        <Route path="signup" element={<SignUp />} />
        <Route path="adminlogin" element={<AdminLogin />} />
        <Route path="trainlist" element={<TrainList />} />
        <Route path="passengerdetails" element={<PassengerDetails />} />
        <Route path="*" element={<Landing />} />
      </Route>
    )
  );

  return (
    <div style={appStyles}>
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
