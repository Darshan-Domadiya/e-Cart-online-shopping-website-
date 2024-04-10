import React from "react";
import "./productprice.scss";
import { Col, Container, Row } from "react-bootstrap";

const ProductPrice = ({ productData }) => {
  const discountPercentage = productData.discount_percentage;
  const integerPercentage = Math.floor(discountPercentage);

  return (
    <>
      <Container>
        <Row className="d-flex align-items-center justify-content-between">
          <Col className="d-flex align-items-center  gap-3 col-12 col-sm-12 col-lg-6">
            <div className="h1 fw-bold">
              <sup>$</sup>
              <span>{productData.sale_price}</span>
            </div>
            <div>
              <strike>${productData.main_rrp}</strike>
            </div>
            <div className="discountBackground text-center">
              <p className="text-white">
                <span>{integerPercentage}</span>% off
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
