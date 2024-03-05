import React from "react";

const TrendingImage = ({ imgUrl }) => {
  return (
    <>
      <div className="d-flex justify-content-center align-items-center">
        <img src={imgUrl} className="imgBackground" />
      </div>
    </>
  );
};

export default TrendingImage;
