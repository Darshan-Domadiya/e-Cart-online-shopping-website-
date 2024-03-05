import React from "react";
import miniImage1 from "/Images/productDetailImage1.png";
import miniImage2 from "/Images/productDetailImage2.png";
import miniImage3 from "/Images/productDetailImage3.png";
import miniImage4 from "/Images/productDetailImage4.png";
import miniImage5 from "/Images/productDetailImage5.png";

const productDetailImage = [
  miniImage1,
  miniImage2,
  miniImage3,
  miniImage4,
  miniImage5,
];

const CustomerPhotos = () => {
  return (
    <>
     <p>Customer Photos(5)</p>
      <div className="mb-3">
        {productDetailImage.map((imgUrl) => {
          return <img src={imgUrl} />;
        })}
      </div>
    </>
  );
};

export default CustomerPhotos;
