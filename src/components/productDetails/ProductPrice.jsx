import React from "react";
import "./productprice.scss";

const ProductPrice = ({ price, discount }) => {
  return (
    <>
      <div className="d-flex align-items-center justify-content-between">
        <div className="d-flex align-items-center  gap-3">
          <div className="h2 fw-bold">
            <sup>$</sup>
            <span>{price}</span>
          </div>
          <div>
            <strike>$38.98</strike>
          </div>
          <div className="discountBackground text-center">
            <p className="text-white">
              <span>{discount}</span>% off
            </p>
          </div>
        </div>
        <div>
          <p>
            View this product from{" "}
            <span className="text-danger">other sellers</span>
          </p>
        </div>
      </div>
    </>
  );
};

export default ProductPrice;
