import React from "react";
import { Col, Row, Container, Image, Form, Button } from "react-bootstrap";
import "./shoppingcart.scss";
import OrderSummary from "./OrderSummary";
import cartProduct1 from "/Images/cartProduct1.png";
import cartWishlist from "/Images/cartWishlist.png";

const ShoppingCart = () => {
  return (
    <>
      <Container className="mt-5">
        <Row>
          <Col className="bg-">
            {/* FOr heading */}
            <Row>
              <Col className="d-flex align-items-center gap-2">
                <p className="h2 fw-bold">Shopping Cart</p>
                <span>(3 Items)</span>{" "}
              </Col>
              <Col className="gap-2 p-2 d-flex align-items-center justify-content-end">
                <Image src={cartWishlist} />
                <span className="h6">Go to wishlist</span>
              </Col>
            </Row>

            <Row className="border-danger">
              <Col className="d-flex align-items-center justify-content-center gap-5 ">
                <div className="d-flex align-items-center gap-2">
                  <span>
                    <Form.Check aria-label="option 1" />
                  </span>
                  <Image src={cartProduct1} className="" />
                </div>
                <div>
                  <p>
                    Women's Blouse Solid Simple Long Sleeve V Neck Button Blouse
                  </p>
                  <div className="d-flex align-items-center gap-3">
                    <div>
                      <span className="fw-bold h2">$</span>
                      <span className="fw-bold h2">12</span>
                    </div>
                    <span>
                      <strike>$38.98</strike>
                    </span>
                    <span className="text-primary fw-bold">-65%</span>
                  </div>
                  <div className="mt-3 d-flex align-items-center gap-2">
                    <span className="text greyText fw-bold">
                      Qunatity <span>: </span>
                    </span>
                    <input
                      type="number"
                      className="custom-input"
                      min={0}
                      max={15}
                    />
                    <div className="d-flex"></div>
                    <button className="border-0 p-1">Delete</button>
                    <button className="border-0 p-1">Save</button>
                  </div>
                </div>
              </Col>
              <Col>
                <p className="greyText fw-bold">
                  Condition :
                  <span className="fw-bold text-dark"> Brand new</span>
                </p>
                <p>
                  374 sold, by <span className="fw-bold">Celby Store</span>,<span className="text-warning fw-bold"> 2 left </span>
                </p>
              </Col>
            </Row>
          </Col>

          <Col className="col-md-4 col-lg-4 col-xl-4">
            <OrderSummary />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default ShoppingCart;
