import React from "react";
import UserHeader from "../common/UserHeader";
import UserSideBar from "./UserSideBar";
import UserContent from "./UserContent";

const UserProfile = () => {
  return (
    <>
      <UserHeader />
      <div className="d-flex">
        <UserSideBar />
        <UserContent />
      </div>
    </>
  );
};

export default UserProfile;
