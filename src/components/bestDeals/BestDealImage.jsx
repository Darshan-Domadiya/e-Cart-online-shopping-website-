import React from "react";
import "./bestdealimage.scss";

const BestDealImage = ({ dataList }) => {
  return (
    <>
      <div className="image-div d-flex align-items-center justify-content-center ">
        <img
          src={dataList.product_images[0].product_image_url}
          className="image "
          height="100%"
          width="100%"
        />
      </div>
    </>
  );
};

export default BestDealImage;
