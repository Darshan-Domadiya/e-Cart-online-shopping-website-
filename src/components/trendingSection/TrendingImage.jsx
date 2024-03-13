import React from "react";

const TrendingImage = ({ imgUrl }) => {
  return (
    <>
      <div className="imgBackground p-2 ">
        <img src={imgUrl} className="img-fluid " height="110px" width="110px" />
      </div>
    </>
  );
};

export default TrendingImage;
