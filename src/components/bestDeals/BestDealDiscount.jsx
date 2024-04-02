import React from "react";
import polygon from "/Images/polygon.png";
import "./bestdealdiscount.scss";

const BestDealDiscount = ({ dataList }) => {
  return (
    <>
      <div className="d-flex justify-content-between">
        <div className="d-flex align-items-center price-fontSize ">
          <span className="fw-bold fs-5 mb-2">$</span>
          <span className="fw-bold fs-4"> {dataList.sale_price} </span>
          <strike className="mx-3 fw-bold">
            <span>$</span>
            <span>{dataList.main_rrp}</span>
          </strike>
        </div>

        <div>
          <div className="position-relative mb-2">
            <img src={polygon} className="img-fluid" />
            <div className="position-absolute polygonShape text-white  discount-fontSize">
              {dataList.discount_percentage}
              <span>%</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BestDealDiscount;
