import React from "react";

const DiscountRadioButton = ({ discountList }) => {
  return (
    <>
      {discountList.map((item) => {
        return (
          <div className="mx-2">
            <input type="radio" className="mx-1"/>
            <span>{item.discount}</span>
          </div>
        );
      })}
    </>
  );
};

export default DiscountRadioButton;
