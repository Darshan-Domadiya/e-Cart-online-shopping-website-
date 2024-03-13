import React from "react";
import normalStar from "/Images/normalStar.png";
import orangeStar from "/Images/orangeStar.png";

const reviewStartList = [
  {
    imgUrl: orangeStar,
  },
  {
    imgUrl: orangeStar,
  },
  {
    imgUrl: orangeStar,
  },
  {
    imgUrl: orangeStar,
  },
  {
    imgUrl: normalStar,
  },
];

const BestDealReview = ({ review }) => {
  return (
    <>
      <div className="d-flex align-items-center gap-2">
        {reviewStartList.map((value,index) => {
          return <img key={index} src={value.imgUrl} className="img-fluid" />;
        })}
        <span>{review}</span>
      </div>
    </>
  );
};

export default BestDealReview;
