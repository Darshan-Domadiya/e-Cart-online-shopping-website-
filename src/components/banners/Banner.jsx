import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import banner1 from "/Images/banner1.png";
import banner2 from "/Images/banner2.png";
import banner3 from "/Images/banner3.png";

const Banner = () => {
  return (
    <>
      <Container className="mt-5">
        <Row className="d-flex align-items-center justify-content-center">
          <Col className="col-xl-4 col-lg-4 col-md-6 col-12 d-flex flex-column align-items-center justify-content-center ">
            <img src={banner1} className="img-fluid" />
            <p className="fw-bold  p-0 m-0">Deals of the Week</p>
            <small className="text-danger">View All Products</small>
          </Col>
          <Col className="col-xl-4 col-lg-4 col-md-6 col-12 d-flex  flex-column align-items-center justify-content-center">
            <img src={banner2} className="img-fluid mt-1" />
            <p className="fw-bold  p-0 m-0">Deals of the Week</p>
            <small className="text-danger">View All Products</small>
          </Col>
          <Col className="col-xl-4 col-lg-4 col-md-6 col-12 mt-md-3 d-flex flex-column align-items-center justify-content-center ">
            <img src={banner3} className="img-fluid" />
            <p className="fw-bold p-0 m-0">Deals of the Week</p>
            <small className="text-danger">View All Products</small>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Banner;
