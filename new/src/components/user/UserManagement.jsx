// UserManagement.js
import React, { useState } from "react";
import UserCard from "./UserCard";

const UserManagement = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [users, setUsers] = useState([
    {
      userId: 8101,
      username: "Meetvasani",
      email: "m@gmail.com",
      status: "active",
    },
    {
      userId: 8102,
      username: "Jayeshsuthar",
      email: "j@gmail.com",
      status: "inactive",
    },
    {
      userId: 8103,
      username: "Yashpathak",
      email: "y@gmail.com",
      status: "active",
    },
    {
      userId: 8104,
      username: "Dhruvdalal",
      email: "d@gmail.com",
      status: "active",
    },
    {
      userId: 8105,
      username: "Rohanchavan",
      email: "rc@gmail.com",
      status: "inactive",
    },
    {
      userId: 8106 ,
      username: "Rohitgaikar",
      email: "r@gmail.com",
      status: "inactive",
    },
  ]);

  const [filteredUsers, setFilteredUsers] = useState([]);

  const handleSearch = () => {
    const filtered = users.filter(
      (user) =>
        user.userId.toString().includes(searchTerm) ||
        user.username.toLowerCase().includes(searchTerm.toLowerCase()) ||
        user.email.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredUsers(filtered);
  };

  const handleToggleStatus = (userId) => {
    setUsers((prevUsers) =>
      prevUsers.map((user) => {
        if (user.userId === userId) {
          return {
            ...user,
            status: user.status === "active" ? "inactive" : "active",
          };
        }
        return user;
      })
    );
  };

  return (
    <div className="container-fluid mt-5 d-flex align-items-center justify-content-center">
      <div className="container">
        <h1>User Management</h1>
        <div className="row mb-4">
          <div className="col-9">
            <input
              type="text"
              className="form-control"
              placeholder="Enter User ID, Username, or Email"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div className="col-3">
            <button className="btn btn-primary w-100" onClick={handleSearch}>
              🔎 Search
            </button>
          </div>
        </div>

        <div className="border border-dark p-3">
          <div className="row fw-bold mb-2">
            <div className="col">User ID</div>
            <div className="col">Username</div>
            <div className="col">Email</div>
            <div className="col">Status</div>
            <div className="col">Actions</div>
          </div>

          {filteredUsers.length > 0
            ? filteredUsers.map((user) => (
                <UserCard
                  key={user.userId}
                  user={user}
                  onToggleStatus={handleToggleStatus}
                />
              ))
            : users.map((user) => (
                <UserCard
                  key={user.userId}
                  user={user}
                  onToggleStatus={handleToggleStatus}
                />
              ))}
        </div>
      </div>
    </div>
  );
};

export default UserManagement;
