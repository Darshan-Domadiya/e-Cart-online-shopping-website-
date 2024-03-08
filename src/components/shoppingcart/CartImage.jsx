import React from "react";
import { Col, Form } from "react-bootstrap";
import cartProduct1 from "/Images/cartProduct1.png";


const CartImage = () => {
  return (
    <>
      <Col className=" col-12 col-sm-4  d-flex align-items-center justify-content-center gap-2">
        <span>
          <Form.Check aria-label="option 1" />
        </span>
        <img src={cartProduct1} className="img-fluid" />
      </Col>
    </>
  );
};

export default CartImage;
