import React from "react";
import orangePolygon from "/Images/orangePolygon.png";
import normalPolygon from "/Images/normalPolygon.png";

const reviewStarsList = [
  { imgUrl: orangePolygon },
  { imgUrl: orangePolygon },
  { imgUrl: orangePolygon },
  { imgUrl: orangePolygon },
  { imgUrl: normalPolygon },
];

const Comment = ({ list }) => {
  return (
    <>
      <p>Customer Reviews(3)</p>
      {list.map((item) => {
        return (
          <div className="mb-3">
            <div className="d-flex align-items-center gap-3">
              <div>
                <img src={item.customerImage} />
              </div>
              <div>
                {" "}
                <p className="fw-bold h6">{item.name}</p>
              </div>
            </div>
            <div className="mt-2">
              <p>{item.review}</p>
              <p>{item.additionalComment}</p>
            </div>
            <div className="d-flex align-items-center justify-content-between">
              <div className="d-flex align-items-center gap-1">
                {" "}
                {reviewStarsList.map((star) => {
                  return <img src={star.imgUrl} />;
                })}
                <small>{item.date}</small>
              </div>
              <div className="d-flex align-items-center gap-2">
                <small>{item.helpful}</small>
                <img src={item.likeImage} />
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Comment;
