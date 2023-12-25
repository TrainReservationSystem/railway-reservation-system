// ClassCard.js
import React from "react";

const ClassCard = ({ classType, availability }) => {
  const isAvailable = availability.toLowerCase().includes("avl");
  const isWaitlisted = availability.toLowerCase().includes("wl");

  return (
    <>
      <div
        className={`container border rounded p-3 my-3 ${
          isAvailable
            ? "border-success text-success"
            : isWaitlisted
            ? "border-danger text-danger"
            : ""
        }`}
        style={{ maxWidth: "150px" }}
      >
        <div className="class-type">{classType}</div>
        <div className="availability">{availability}</div>
      </div>
    </>
  );
};

export default ClassCard;
