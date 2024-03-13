import React from "react";
import { Row, Col } from "react-bootstrap";
import rArrow from "/Images/cArrow.png";

const BestdealHeading = () => {
  return (
    <>
      <Row className="d-flex justify-content-center align-items-center">
        <Col>
          <div>
            <p className="h2 fw-bolder fontsize-title ">Garden & DIY</p>
          </div>
        </Col>
        <Col className="d-flex justify-content-end align-items-center col-md-6 mb-2 mb-sm-0">
          <div>
            <span className="fontsize-deals">View All Deals</span>
            <img src={rArrow} className="mx-2" />
          </div>
        </Col>
      </Row>
    </>
  );
};

export default BestdealHeading;
