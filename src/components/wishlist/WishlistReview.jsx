import React from "react";
import normalStar from "/Images/normalStar.png";
import orangeStar from "/Images/orangeStar.png";

const reviewStarList = [
  { star: orangeStar },
  { star: orangeStar },
  { star: orangeStar },
  { star: orangeStar },
  { star: normalStar },
];
const WishlistReview = ({ review }) => {
  return (
    <>
      <div className="d-flex gap-2 align-items-center">
        {reviewStarList.map((value, index) => {
          return <img src={value.star} key={index} className="img-fluid" />;
        })}
        <span>{review}</span>
      </div>
    </>
  );
};

export default WishlistReview;
