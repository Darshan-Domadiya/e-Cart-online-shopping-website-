import React from "react";
import "./productimage.scss";

const ProductImage = ({ productImage }) => {
  return (
    <>
      <div className="productimage-div d-flex align-items-center justify-content-center">
        <img
          src={productImage.product_images[0].product_image_url}
          className="product-image"
          height="100%"
          width="100%"
        />
      </div>
    </>
  );
};

export default ProductImage;
