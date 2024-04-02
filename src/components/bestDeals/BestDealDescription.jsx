import React from "react";
import "./singlebestdeal.scss";

const BestDealDescription = ({ dataList }) => {
  return (
    <>
      <p className="fw-bold product-name singleline-text">{dataList.name}</p>
      <p className="singleline-text">{dataList.description}</p>
    </>
  );
};

export default BestDealDescription;
