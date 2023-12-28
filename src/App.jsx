// App.js
import React from 'react';
import Landing from './components/landing/Landing';
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,

} from "react-router-dom";
import AboutUs from "./components/aboutUs/AboutUs";
import ContactUs from "./components/aboutUs/ContactUs";
import Faqs from "./components/aboutUs/Faqs";
import UserLogin from "./components/authentication/UserLogin";
import SignUp from "./components/user/SignUp";
import MyBookings from "./components/user/MyBookings";
import AdminLogin from "./components/authentication/AdminLogin";
import MainDiv from "./components/MainDiv";
import UserManagement from './components/user/UserManagement.jsx';

import {
  AddTrain,
  TrainList,
  TrainStatus,
} from './components/train/trainIndex.js';
import AdminHome from './components/admin/AdminHome';
import {
  BookingSuccess,
  PassengerDetails,

} from "./components/bookings/bookingsIndex.js";
import { AuthProvider } from "./contexts/AuthContext";
import UserProfile from "./components/user/UserProfile";
import EditProfile from "./components/user/EditProfile";
import PaymentManagement from "./components/admin/PaymentManagement.jsx";
import CancelTrain from "./components/train/CancelTrain.jsx";
import AdminRoutes from './components/admin/AdminRoutes.jsx';
import UserRoutes from './components/user/UserRoutes.jsx';



const App = () => {
  const appStyles = {
    // backgroundColor: "#C5FFF8",
    minHeight: '100vh',
    width: '100%',
  };

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<MainDiv />}>
        <Route index element={<Landing />} />

        <Route path="paymentmanagement" element={<PaymentManagement />} />
        <Route path="canceltrain" element={<CancelTrain />} />
        <Route path='about' element={<AboutUs />} />
        <Route path='contact' element={<ContactUs />} />
        <Route path='faqs' element={<Faqs />} />
        <Route path='userlogin' element={<UserLogin />} />
        <Route path='signup' element={<SignUp />} />
        <Route path='adminlogin' element={<AdminLogin />} />
        
        <Route
          path='adminhome'
          element={
            <AdminRoutes>
              <AdminHome />
            </AdminRoutes>
          }
        />
        <Route
          path='addtrain'
          element={
            <AdminRoutes>
              <AddTrain />
            </AdminRoutes>
          }
        />
        <Route
          path='usermanagement'
          element={
            <AdminRoutes>
              <UserManagement />
            </AdminRoutes>
          }
        />
        <Route
          path='trainlist'
          element={
            <UserRoutes>
              <TrainList />
            </UserRoutes>
          }
        />
        <Route
          path='trainstatus'
          element={
            <UserRoutes>
              <TrainStatus />
            </UserRoutes>
          }
        />
        <Route
          path='passengerdetails'
          element={
            <UserRoutes>
              <PassengerDetails />
            </UserRoutes>
          }
        />
        <Route
          path='booksuccess'
          element={
            <UserRoutes>
              <BookingSuccess />
            </UserRoutes>
          }
        />
        <Route
          path='mybookings'
          element={
            <UserRoutes>
              <MyBookings />
            </UserRoutes>
          }
        />
        <Route
          path='userprofile'
          element={
            <UserRoutes>
              <UserProfile />
            </UserRoutes>
          }
        />
        <Route
          path='edituserprofile'
          element={
            <UserRoutes>
              <EditProfile />
            </UserRoutes>
          }
        />

        {/* why am I not able to use 'userprofile' instead of 'userprof' in the above line. If I use 'userprofile' then landing page is not shown*/}
        <Route path='*' element={<Landing />} />
      </Route>
    )
  );

  return (
    <AuthProvider>
      <div style={appStyles}>
        <RouterProvider router={router} />
      </div>
    </AuthProvider>
  );
};

export default App;