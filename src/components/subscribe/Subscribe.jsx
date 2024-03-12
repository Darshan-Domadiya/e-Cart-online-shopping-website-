import React from "react";
import { Container, Button, Row, Col } from "react-bootstrap";
import sArrow from "/Images/subscribeArrow.png";
import "./subscribe.scss";

const Subscribe = () => {
  return (
    <>
      <Container className="p-4">
        <Row className="subscribeBg p-md-4 ">
          <Col className="mt-3 p-2 p-sm-0 text-white text-center text-lg-start col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6">
            <p className="h2 fw-bold">Subscribe to Our Newsletters</p>
            <p>
              Receive exclusive offers, unique gift ideas, and personalised tips
              for shopping and selling on <strong>BargainFox</strong>.
            </p>
          </Col>
          <Col className="d-none d-xl-flex col-xl-2 d-flex align-items-center justify-content-end">
            <img src={sArrow} className="img-fluid" />
          </Col>
          <Col className="mb-4 col-12 col-sm-12 col-md-12 d-flex align-items-center justify-content-center col-lg-6 col-xl-4 ">
            <div className="inputButton d-flex align-items-center justify-content-start mx-md-3">
              <input
                type="text"
                placeholder="Enter your Email"
                className="subscribe-input "
              />
              <button className="bg-dark text-white btn subscribe-button  ">
                Subscribe Now
              </button>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Subscribe;
