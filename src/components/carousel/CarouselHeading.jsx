import React from "react";
import { Row, Col } from "react-bootstrap";
import rArrow from "/Images/cArrow.png";
import { useNavigate } from "react-router-dom";
import "./carouselheading.scss";

const CarouselHeading = () => {
  const navigate = useNavigate();
  return (
    <>
      <Row className="d-flex align-items-center ">
        <Col className="col-7">
          <div>
            <p className="h2 fw-bolder fontsize-dealOfDay">Deals of the Day</p>
          </div>
        </Col>
        <Col className="d-flex justify-content-end  align-items-center mb-2 mb-sm-0">
          <div
            onClick={() => navigate("/productlist")}
            className="carousel-heading"
          >
            <span className="fontsize-viewDeals">View All Deals</span>
            <img src={rArrow} className="mx-2 img-fluid" />
          </div>
        </Col>
      </Row>
    </>
  );
};

export default CarouselHeading;
