
import React from "react";

const TrainCard = ({ train, onToggleStatus }) => {
  const statusColor =
    train.status === "active" ? "text-success" : "text-danger";

  return (
    <div className={`row ${statusColor} mb-2`}>
      <div className="col">{train.tno}</div>
      <div className="col">{train.tname}</div>
      <div className="col">{train.status}</div>
      <div className="col">
        <button
          className={`btn btn-sm ${
            train.status === "active" ? "btn-danger" : "btn-success"
          }`}
          onClick={() => onToggleStatus(train.tno)}
        >
          {train.status === "active" ? "Set Inactive" : "Set Active"}
        </button>
      </div>
    </div>
  );
};

export default TrainCard