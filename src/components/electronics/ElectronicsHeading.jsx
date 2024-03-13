import React from "react";
import { Col, Row } from "react-bootstrap";
import rArrow from "/Images/cArrow.png";

const ElectronicsHeading = () => {
  return (
    <>
      <Row className="d-flex">
        <Col>
          <div>
            <p className="h2 fw-bolder fontsize-electronics">Electronics</p>
          </div>
        </Col>
        <Col className="d-flex justify-content-end align-items-center ">
          <div>
            <span className="fontsize-deal">View All Deals</span>
            <img src={rArrow} className="mx-2" />
          </div>
        </Col>
      </Row>
    </>
  );
};

export default ElectronicsHeading;
