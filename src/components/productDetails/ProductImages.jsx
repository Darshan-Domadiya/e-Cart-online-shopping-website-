import React from "react";
import miniImage1 from "/Images/productDetailImage1.png";
import miniImage2 from "/Images/productDetailImage2.png";
import miniImage3 from "/Images/productDetailImage3.png";
import miniImage4 from "/Images/productDetailImage4.png";
import miniImage5 from "/Images/productDetailImage5.png";
import mainImage from "/Images/mainProductDetailImage.png";

const productDetailImage = [
  miniImage1,
  miniImage2,
  miniImage3,
  miniImage4,
  miniImage5,
];

const ProductImages = () => {
  return (
    <>
      <div className="d-flex gap-3">
        <div className="d-flex flex-column">
          {productDetailImage.map((imgUrl) => {
            return (
              <div>
                {" "}
                <img
                  src={imgUrl}
                  className="img-fluid "
                  height="73px"
                  width="73px"
                />{" "}
              </div>
            );
          })}
        </div>
        <div>
          <img src={mainImage} className=" img-fluid " />
        </div>
      </div>
    </>
  );
};

export default ProductImages;
