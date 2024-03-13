import React from "react";

const BannerImage = ({ imgUrl }) => {
  return (
    <>
      <img src={imgUrl} className="img-fluid" />
    </>
  );
};

export default BannerImage;
