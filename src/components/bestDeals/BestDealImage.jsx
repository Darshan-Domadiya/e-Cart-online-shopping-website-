import React from "react";

const BestDealImage = ({ imgUrl }) => {
  return (
    <>
      <div>
        <img src={imgUrl} className="img-fluid" />
      </div>
    </>
  );
};

export default BestDealImage;
