import React from "react";
import polygon from "/Images/polygon.png";
import "./electronicdiscount.scss";

const ElectronicsDiscount = ({ productDetails }) => {
  const discountPercentage = productDetails.discount_percentage;
  const integerPercentage = Math.floor(discountPercentage);
  return (
    <>
      <div className="d-flex justify-content-between">
        <div className="d-flex align-items-center price-fontSize ">
          <span className="fw-bold mb-2 fs-5">$</span>
          <span className="fw-bold fs-4">{productDetails.sale_price}</span>
          <strike className="mx-3 fw-bold">
            <span>$</span>
            <span>{productDetails.main_rrp}</span>
          </strike>
        </div>

        <div>
          <div className="position-relative mb-2">
            <img src={polygon} className="img-fluid" />
            <div className="position-absolute polygonShape text-white discount-fontSize">
              {integerPercentage}
              <span>%</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ElectronicsDiscount;
