import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import instagram from "/Images/instagram.png";
import facebook from "/Images/facebook.png";
import twitter from "/Images/twitter.png";
import pinterest from "/Images/pinterest.png";
import "./footer.scss";
import FooterMenu from "./FooterMenu";
import SocialLogo from "./SocialLogo";

const menuList = [
  {
    id: "delivery",
    title: "Delivery",
    url: "/delivery",
  },
  {
    id: "returns",
    title: "Returns",
    url: "/returns",
  },
  {
    id: "help-center",
    title: "Help Center s",
    url: "/help-center",
  },
];

const aboutList = [
  {
    id: "delivery",
    title: "Delivery",
    url: "/delivery",
  },
  {
    id: "returns",
    title: "Returns",
    url: "/returns",
  },
  {
    id: "help-center",
    title: "Help Center",
    url: "/help-center",
  },
];

const accountList = [
  {
    id: "your-account",
    title: "Your Account",
    url: "/your-account",
  },
  {
    id: "your-order",
    title: "Your Orders",
    url: "/your-orders",
  },
  {
    id: "checkout",
    title: "Checkout",
    url: "/checkout",
  },
  {
    id: "download-the-app",
    title: "Download The App",
    url: "/download-the-app",
  },
  {
    id: "fastfox-subscription",
    title: "FastFox Subscription",
    url: "/fastfox-subscription",
  },
];

const Footer = () => {
  return (
    <>
      <Container fluid className="mt-5 bg-dark">
        <Row>
          <Col className="d-flex col-sm-4 flex-column align-items-center justify-content-center">
            <FooterMenu title="Help" list={aboutList} />
          </Col>
          <Col className="d-flex col-sm-4 flex-column align-items-center justify-content-center">
            <FooterMenu title="About us" list={aboutList} />
          </Col>
          <Col className="mt-3 col-sm-4 d-flex flex-column align-items-center justify-content-center">
            <FooterMenu title="Your Account" list={accountList} />
          </Col>
        </Row>
        
        <hr className="hrLine" />

        <Row className="mt-4">
          <Col className=" col-12 col-xl-4 col-lg-12  col-md-12 d-flex align-items-center justify-content-center">
            <SocialLogo socialImage={instagram} />
            <SocialLogo socialImage={facebook} />
            <SocialLogo socialImage={twitter} />
            <SocialLogo socialImage={pinterest} />
          </Col>
          <Col className=" mt-lg-3 mt-md-3 mt-3 col-12 col-xl-4 col-lg-12 col-md-12 d-flex align-items-center justify-content-center">
            <p className="text-white text-center ">
              All rights reserved © 2023 BargainFox.com
            </p>
          </Col>
          <Col className="col-12 col-xl-4 col-lg-12 col-md-12 d-flex align-items-center justify-content-center">
            <p className="text-white text-center">
              Terms of Service <span>|</span> Privacy Policy
            </p>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Footer;
