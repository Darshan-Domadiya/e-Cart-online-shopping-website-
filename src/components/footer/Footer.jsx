import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import instagram from "/Images/instagram.png";
import facebook from "/Images/facebook.png";
import twitter from "/Images/twitter.png";
import pinterest from "/Images/pinterest.png";
import "./footer.scss";

const Footer = () => {
  return (
    <>
      <Container fluid className="mt-5 bg-dark">
        <Row className=" ">
          <Col className="d-flex col-sm-4 flex-column align-items-center justify-content-center">
            <ul className="text-white list-unstyled">
              <li className="h5">Help</li>
              <li>Delivery</li>
              <li>Returns</li>
              <li>Help Center</li>
            </ul>
          </Col>
          <Col className="d-flex col-sm-4 flex-column align-items-center justify-content-center">
            <ul className="text-white list-unstyled">
              <li className="h5">About us</li>
              <li>About us</li>
              <li>Our Blogs</li>
              <li>Contact Us</li>
            </ul>
          </Col>
          <Col className="mt-3 col-sm-4 d-flex flex-column align-items-center justify-content-center">
            <ul className="text-white list-unstyled">
              <li className="h5 ">Your Account</li>
              <li>Your Orders</li>
              <li>Checkout</li>
              <li>Download the App</li>
              <li>FastFox Subscription</li>
            </ul>
          </Col>
        </Row>
        <hr className="hrLine" />
        <Row className="mt-4">
          <Col className=" col-12 col-xl-4 col-lg-12  col-md-12 d-flex align-items-center justify-content-center">
        
              <div className="mx-3">
                <img src={instagram}/>
              </div>
              <div className="mx-3">
                <img src={facebook} />
              </div>
              <div className="mx-3">
                <img src={twitter} />
              </div>
              <div className="mx-3">
                <img src={pinterest} />
              </div>
     
          </Col>
          <Col className=" mt-lg-3 mt-md-3 mt-3 col-12 col-xl-4 col-lg-12 col-md-12 d-flex align-items-center justify-content-center">
            <p className="text-white text-center ">All rights reserved © 2023 BargainFox.com</p>
          </Col>
          <Col className="col-12 col-xl-4 col-lg-12 col-md-12 d-flex align-items-center justify-content-center">
            <p className="text-white text-center">Terms of Service <span>|</span> Privacy Policy</p>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Footer;
