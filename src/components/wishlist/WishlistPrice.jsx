import React from "react";
import polygon from "/Images/polygon.png";

const WishlistPrice = ({ wishlistPrice }) => {
  const { sale_price, main_rrp, discount_percentage } = wishlistPrice;

  return (
    <>
      <div className="d-flex align-items-center justify-content-between">
        <div className="d-flex align-items-center price-fontSize ">
          <span className="fw-bold mb-2 fs-5">$</span>
          <span className="fw-bold fs-4">{sale_price}</span>
          <strike className="mx-3 fw-bold">
            <span>$</span>
            <span>{main_rrp}</span>
          </strike>
        </div>
        <div className="position-relative mb-2">
          <img src={polygon} />
          <div className="position-absolute polygonShape text-white discount-fontSize">
            {Math.floor(discount_percentage)}
            <span>%</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default WishlistPrice;
