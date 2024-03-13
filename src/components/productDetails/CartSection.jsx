import React from "react";
import peopleImage from "/Images/people.png";
import { Image } from "react-bootstrap";
import "./cartsection.scss";
import { useNavigate } from "react-router-dom";

const CartSection = () => {
  const navigate = useNavigate();

  return (
    <>
      <div>
        <div className="d-flex  justify-content-between">
          <div>
            <p>HURRY, THERE ARE ONLY 6 ITEM(S) LEFT!</p>
          </div>
          <div>
            <img src={peopleImage} className="img-fluid mx-1" />8
            <span className="mx-1">People looking at this product</span>
          </div>
        </div>

        {/* Add to cart & Buy Now section */}
        <div className="d-flex">
          <button
            className="text-white w-75 border-0 p-2 mx-2 cartBackground d-flex align-items-center justify-content-center"
            onClick={() => navigate("/shoppingcart")}
          >
            Add to Cart
          </button>
          <button className="text-white w-75 p-2 buyBackground d-flex align-items-center justify-content-center">
            Buy Now
          </button>
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
