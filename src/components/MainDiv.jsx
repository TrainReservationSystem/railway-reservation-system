import React, { useState } from "react";
import Header2 from "./common/Header2";
import { Outlet } from "react-router-dom";
import Footer from "./common/Footer";

const MainDiv = () => {
  const [isLoggedIn, setLoggedIn] = useState(true);

  return (
    <>
      <Header2 isLoggedIn={isLoggedIn} setLoggedIn={setLoggedIn} />
      <Outlet />
      <Footer />
    </>
  );
};

export default MainDiv;
