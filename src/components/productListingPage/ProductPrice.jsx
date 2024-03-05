import React from "react";
import polygon from "/Images/polygon.png";

const ProductPrice = ({ price, less, discount }) => {
  return (
    <>
      <div className="d-flex align-items-start gap-2">
        {price} <strike>{less}</strike>
      </div>
      <div className="position-relative mb-2">
        <img src={polygon} />
        <div className="position-absolute polygonText text-white fw-600 ">
          {discount} <span>%</span>
        </div>
      </div>
    </>
  );
};

export default ProductPrice;
