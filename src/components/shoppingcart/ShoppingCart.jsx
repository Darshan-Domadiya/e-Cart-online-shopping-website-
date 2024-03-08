import React from "react";
import { Col, Row, Container, Image, Form } from "react-bootstrap";
import "./shoppingcart.scss";
import OrderSummary from "./OrderSummary";
import cartWishlist from "/Images/cartWishlist.png";
import CartProduct from "./CartProduct";

const ShoppingCart = () => {
  return (
    <>
      <Container className="mt-5">
        <Row>
          <Col>
            {/* For heading */}
            <Row>
              <Col className="col-12 col-sm-6 col-sm-6 d-flex align-items-center gap-2">
                <p className="h2 fw-bold">Shopping Cart</p>
                (3 Items)
              </Col>
              <Col className="col-12 col-sm-6 gap-2 p-2 d-flex align-items-center justify-content-end">
                <Image src={cartWishlist} />
                <span className="h6">Go to wishlist</span>
              </Col>
            </Row>

            <CartProduct />
          </Col>

          <Col className="col-md-12   mt-5 mt-md-5 col-lg-4 col-xl-4">
            <OrderSummary />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default ShoppingCart;
