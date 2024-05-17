import React from "react";

const ElectronicDescription = ({ productDetails }) => {
  return (
    <>
      <p className="fw-bold singleline-description">{productDetails.name} </p>
      <p className="singleline-description mt-0">
        {productDetails.description}
      </p>
    </>
  );
};

export default ElectronicDescription;
