import React from "react";
import "./productprice.scss";
import { Col, Container, Row } from "react-bootstrap";

const ProductPrice = ({ price, discount }) => {
  return (
    <>
      <Container>
        <Row className="d-flex align-items-center justify-content-between">
          <Col className="d-flex align-items-center  gap-3 col-12 col-sm-12 col-lg-6">
            <div className="h2 fw-bold">
              <sup>$</sup>
              <span>{price}</span>
            </div>
            <div>
              <strike>$38.98</strike>
            </div>
            <div className="discountBackground text-center">
              <p className="text-white">
                <span>{discount}</span>% off
              </p>
            </div>
          </Col>
          <Col className="col-12 col-sm-12 col-lg-6">
            <p>
              View this product from{" "}
              <span className="text-danger">other sellers</span>
            </p>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default ProductPrice;
