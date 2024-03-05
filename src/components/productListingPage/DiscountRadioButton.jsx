import React from "react";

const DiscountRadioButton = ({ discountList }) => {
  return (
    <>
      {discountList.map((item) => {
        return (
          <div>
            <input type="radio" />
            <span>{item.discount}</span>
          </div>
        );
      })}
    </>
  );
};

export default DiscountRadioButton;
