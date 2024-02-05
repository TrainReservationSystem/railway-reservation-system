// UserCard.js
import React from "react";

const UserCard = ({ user, onToggleStatus }) => {
  const statusColor =
    user.status === "active" ? "text-success" : "text-danger";

  return (
    <div className={`row ${statusColor} mb-2`}>
      <div className="col">{user.userId}</div>
      <div className="col">{user.username}</div>
      <div className="col">{user.email}</div>
      <div className="col">{user.status}</div>
      <div className="col">
        <button
          className={`btn btn-sm ${
            user.status === "active" ? "btn-danger" : "btn-success"
          }`}
          onClick={() => onToggleStatus(user.userId)}
        >
          {user.status === "active" ? "Set Inactive" : "Set Active"}
        </button>
      </div>
    </div>
  );
};

export default UserCard;
