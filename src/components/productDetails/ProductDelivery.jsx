import React from "react";
import delivery from "/Images/delivery.png";
import returnOrder from "/Images/returnPolicy.png";
import warranty from "/Images/warranty.png";
import ProductDeliverySection from "./ProductDeliverySection";

const deliverySectionList = [
  {
    text: "Free delivery on orders over £50.",
    url: "/free-delivery",
    imgUrl: delivery,
  },
  {
    text: "Free 45 day returns.",
    url: "/return-order",
    imgUrl: returnOrder,
  },
  {
    text: "6 month warranty with the Bargain Fox guarantee. ",
    url: "/warranty",
    imgUrl: warranty,
  },
];

const ProductDelivery = () => {
  return (
    <> 
      <hr className="mt-4" />
      <div className="d-flex mt-4 align-items-center justify-content-center">
        <ProductDeliverySection list={deliverySectionList} />
      </div>

      <hr />
    </>
  );
};

export default ProductDelivery;
