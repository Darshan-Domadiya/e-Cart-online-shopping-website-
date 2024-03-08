import React from "react";
import { Container, Button, Row, Col } from "react-bootstrap";
import sArrow from "/Images/subscribeArrow.png";
import "./subscribe.scss";

const Subscribe = () => {
  return (
    <>
      <Container className="mt-5">
        <Row className="subscribeBg  d-flex align-items-center justify-content-center p-3 ">
          <Col className="my-3 col-sm-12 col-lg-7 col-xl-6 col-md-12 col-12 ">
            <p className="fw-bolder text-white h1 ">
              Subscribe to Our Newsletters
            </p>
            <p className="text-white h6">
              Receive exclusive offers, unique gift ideas, and personalised tips
              for shopping and selling on <strong> BargainFox </strong>.
            </p>
          </Col>
          <Col className="d-none d-xl-flex justify-content-end">
            <img src={sArrow} className="img-fluid" />
          </Col>
          <Col className="mb-4 mt-lg-4 mt-sm-0 d-flex mt-4 col-lg-5 col-sm-12 col-xl-4 col-md-12 justify-content-center mb-md-4 mb-4">
            <input
              type="text"
              placeholder="Enter your Email"
              className="subscribe-input border-0 p-3 rounded-start-5"
            />
            <Button className=" subscribe-button btn-dark rounded-end-5 border-0 p-3">
              Subscribe Now
            </Button>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Subscribe;
