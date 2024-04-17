import React from "react";
import "./producttitle.scss";

const ProductTitle = ({ productDescription }) => {
  return (
    <>
      <p className="singleline-description fw-bold">
        {productDescription?.name}
      </p>
      <p className="singleline-description greyText">
        {productDescription?.description}{" "}
      </p>
    </>
  );
};

export default ProductTitle;
