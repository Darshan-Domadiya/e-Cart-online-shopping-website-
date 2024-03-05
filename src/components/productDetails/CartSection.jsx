import React from "react";
import peopleImage from "/Images/people.png";
import { Button, Image } from "react-bootstrap";
import "./cartsection.scss";

const CartSection = () => {
  return (
    <>
      <div>
        <div className="d-flex  justify-content-between">
          <div>
            <p>HURRY, THERE ARE ONLY 6 ITEM(S) LEFT!</p>
          </div>
          <div>
            <Image src={peopleImage} />8
            <span className="mx-1">People looking at this product</span>
          </div>
        </div>

        {/* Add to cart & Buy Now section */}
        <div className="d-flex">
          <div className="w-75  mx-2 cartBackground d-flex align-items-center justify-content-center">
            Add to Cart
          </div>
          <div className="w-75 buyBackground d-flex align-items-center justify-content-center">
            Buy Now
          </div>
        </div>

        {/* Order within text */}
        <div className="mt-3">
          <small>
            Order within <span className="text-success">2h 25m</span> and choose{" "}
            <span className="text-danger">Express Shipping</span> to get it by{" "}
            <span className="fw-bold">Tuesday 25/7/2023</span>
          </small>
        </div>
      </div>
    </>
  );
};

export default CartSection;
