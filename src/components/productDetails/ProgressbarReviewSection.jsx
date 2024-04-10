import React from "react";
import customerReviewStar from "/Images/customerReviewStar.png";
import { ProgressBar } from "react-bootstrap";

const ProgressbarReviewSection = ({ list }) => {
  return (
    <>
      {list.map((value, index) => {
        return (
          <div className="d-flex align-items-center gap-2" key={index}>
            <span>{value.number}</span>
            <img src={customerReviewStar} />
            <ProgressBar className="w-50" now={value.now} />
            <span className="mx-2">{value.reviews}</span>
          </div>
        );
      })}
    </>
  );
};

export default ProgressbarReviewSection;
