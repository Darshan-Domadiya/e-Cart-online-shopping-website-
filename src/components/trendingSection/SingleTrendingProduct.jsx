import React from "react";
import TrendingImage from "./TrendingImage";

const SingleTrendingProduct = ({ imgUrl, discount, productName }) => {
  return (
    <>
      <div className="d-flex justify-content-center   ">
        <TrendingImage imgUrl={imgUrl} />
      </div>
      <div className="text-center  ">
        <p className="text-white textBackground">{discount}</p>
      </div>
      <div className="text-center fw-bold">{productName}</div>
    </>
  );
};

export default SingleTrendingProduct;
