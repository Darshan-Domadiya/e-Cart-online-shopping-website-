import React from "react";

const ProductDeliverySection = ({ list }) => {
  return (
    <>
      {list.map((item, index) => (
        <div key={index}>
          <div className="text-center">
            <img src={item.imgUrl} />
            <p>
              {item.text}
              <span className="text-danger"> Read More </span>
            </p>
          </div>
        </div>
      ))}
    </>
  );
};

export default ProductDeliverySection;
