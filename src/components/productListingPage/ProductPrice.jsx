import React from "react";
import polygon from "/Images/polygon.png";
import "./productprice.scss";

const ProductPrice = ({ productPrice }) => {
  return (
    <>
      <div className="d-flex align-items-center justify-content-between">
        <div className="d-flex align-items-center price-fontSize ">
          <span className="fw-bold mb-2 fs-5">$</span>
          <span className="fw-bold fs-4">{productPrice.sale_price}</span>
          <strike className="mx-3 fw-bold">
            <span>$</span>
            <span>{productPrice.main_rrp}</span>
          </strike>
        </div>
        <div className="position-relative mb-2">
          <img src={polygon} className="img-fluid" />
          <div className="position-absolute polygonShape text-white discount-fontSize">
            {productPrice.discount_percentage}
            <span>%</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductPrice;
