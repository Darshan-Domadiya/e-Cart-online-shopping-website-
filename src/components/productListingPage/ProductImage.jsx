import React from "react";

const ProductImage = ({productImage}) => {
  return (
    <>
      <div>
        <img src={productImage} className="img-fluid" />
      </div>
    </>
  );
};

export default ProductImage;
