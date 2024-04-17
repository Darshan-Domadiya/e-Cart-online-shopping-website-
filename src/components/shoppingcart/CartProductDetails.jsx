import React, { useState } from "react";
import { Col } from "react-bootstrap";
import "./cartproductdetails.scss";

const CartProductDetails = ({ cartProductInfo }) => {
  const [cartItemQuantity, setCartItemQuantity] = useState(
    cartProductInfo.quantity
  );
  // console.log("cart product name and quantity", cartProductInfo);


  
  return (
    <>
      
    </>
  );
};

export default CartProductDetails;
