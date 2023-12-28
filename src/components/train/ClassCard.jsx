// ClassCard.js
import React from "react";

const ClassCard = ({ classType, availability }) => {
  const isAvailable = availability.toLowerCase().includes("avl");
  const isWaitlisted = availability.toLowerCase().includes("wl");

  return (
    <>
      <div
        className={`container rounded p-3 my-3 ${
          isAvailable
            ? "alert alert-success"
            : isWaitlisted
            ? "alert alert-danger"
            : ""
        }`}
        style={{ width: "18%" }}
      >
        <div className="class-type">{classType}</div>
        <div className="availability">{availability}</div>
      </div>
    </>
  );
};

export default ClassCard;