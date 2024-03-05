import React from "react";

const RadioButtonDiscount = ({ priceList }) => {
  return (
    <>
      {priceList.map((item) => {
        return (
          <div>
            <input type="radio" />
            <span>{item.price}</span>
          </div>
        );
      })}
    </>
  );
};

export default RadioButtonDiscount;
