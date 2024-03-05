import React from "react";
import normalStar from "/Images/normalStar.png";
import orangeStar from "/Images/orangeStar.png";

const ElectronicReview = ({ review }) => {
  return (
    <>
      <div className="d-flex gap-2">
        <img src={orangeStar} />
        <img src={orangeStar} />
        <img src={orangeStar} />
        <img src={orangeStar} />
        <img src={normalStar} />
        <span>{review}</span>
      </div>
    </>
  );
};

export default ElectronicReview;
