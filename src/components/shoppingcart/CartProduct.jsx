import React from "react";
import { Row, Col } from "react-bootstrap";
import CartImage from "./CartImage";
import CartProductDetails from "./CartProductDetails";
import CartProductCondition from "./CartProductCondition";

const CartProduct = () => {
  return (
    <>
      <Row className="border rounded-4 p-3 mt-4">
        {/* Column for img,checkbox and product description/features */}
        <Col className="col-md-12 col-lg-8 col-xl-9  d-flex align-items-center justify-content-center gap-5 ">
          <Row>
            {/* Column for checkbox and product image */}
            <CartImage />

            {/* Column for product description and save/delete button */}
            <CartProductDetails />
          </Row>
        </Col>

        {/* Column for condition and items left */}
        <CartProductCondition />
      </Row>
    </>
  );
};

export default CartProduct;
