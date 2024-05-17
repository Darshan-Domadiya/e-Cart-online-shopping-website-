import React from "react";
import { Col, Row } from "react-bootstrap";
import rArrow from "/Images/cArrow.png";
import { useNavigate } from "react-router-dom";
import "./electronicheading.scss";

const ElectronicsHeading = () => {
  const navigate = useNavigate();
  return (
    <>
      <Row className="d-flex">
        <Col>
          <div>
            <p className="h2 fw-bolder fontsize-electronics">Electronics</p>
          </div>
        </Col>
        <Col className="d-flex justify-content-end align-items-center ">
          <div
            className="electronic-heading"
            onClick={() => navigate("/productlist")}
          >
            <span className="fontsize-deal">View All Deals</span>
            <img src={rArrow} className="mx-2" />
          </div>
        </Col>
      </Row>
    </>
  );
};

export default ElectronicsHeading;
