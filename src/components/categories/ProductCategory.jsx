import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import product1 from "/Images/homeKitchen.png";
import product2 from "/Images/beauty.png";
import product3 from "/Images/electronics.png";
import product4 from "/Images/toys.png";
import product5 from "/Images/sports.png";
import product6 from "/Images/clearance.png";
import banner from "/Images/banner.png";

const ProductCategory = () => {
  return (
    <>
      <Container className="mt-5 d-flex align-items-center justify-content-center">
        <Row>
          <Col className="d-flex flex-column align-items-center col-md-2">
            <img src={product1} />
            <p className="text-center fw-bold">Home & Kitchen</p>
          </Col>

          <Col className="d-flex flex-column align-items-center">
            <img src={product2} />
            <p className="text-center fw-bold">Health & Beauty</p>
          </Col>

          <Col className="d-flex flex-column align-items-center">
            <img src={product3} />
            <p className="text-center fw-bold">Electronics</p>
          </Col>

          <Col className="d-flex flex-column align-items-center">
            <img src={product4} />
            <p className="text-center fw-bold">Toys & Crafts</p>
          </Col>

          <Col className="d-flex flex-column align-items-center">
            <img src={product5} />
            <p className="text-center fw-bold">Sports & Leisure</p>
          </Col>

          <Col className="d-flex flex-column align-items-center col-md-2">
            <img src={product6} />
            <p className="text-center fw-bold">Clearance</p>
          </Col>
        </Row>
      </Container>

      <Container fluid>
        <Row>
          <Col>
            <img src={banner} className="img-fluid" />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default ProductCategory;
