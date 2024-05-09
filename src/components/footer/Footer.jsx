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
    url: "",
  },
  {
    id: "returns",
    title: "Returns",
    url: "",
  },
  {
    id: "help-center",
    title: "Help Center",
    url: "",
  },
];

const aboutList = [
  {
    id: "aboutus",
    title: "Abous Us",
    url: "",
  },
  {
    id: "ourblogs",
    title: "Our Blogs",
    url: "",
  },
  {
    id: "contactus",
    title: "Contact Us",
    url: "",
  },
];

const accountList = [
  {
    id: "your-account",
    title: "Your Account",
    url: "/profile",
  },
  {
    id: "your-order",
    title: "Your Orders",
    url: "/orders",
  },
  {
    id: "checkout",
    title: "Checkout",
    url: "/checkout",
  },
  {
    id: "download-the-app",
    title: "Download The App",
    url: "",
  },
  {
    id: "fastfox-subscription",
    title: "FastFox Subscription",
    url: "",
  },
];

const socialImage = [
  {
    logoUrl: instagram,
  },
  {
    logoUrl: facebook,
  },
  {
    logoUrl: twitter,
  },
  {
    logoUrl: pinterest,
  },
];

const Footer = () => {
  return (
    <>
      <Container fluid className="mt-5  pt-5 bg-dark">
        <Row className="mx-4">
          <Col className="col-12 helpList-margin  col-md-4 d-flex  flex-column align-items-center justify-content-center">
            <FooterMenu title="Help" list={menuList} />
          </Col>
          <Col className="col-12 col-md-4 d-flex  flex-column align-items-center justify-content-center">
            <FooterMenu title="About us" list={aboutList} />
          </Col>
          <Col className=" accountList-margin col-12  pt-md-5 col-md-4 d-flex flex-column align-items-center justify-content-center">
            <FooterMenu title="Your Account" list={accountList} />
          </Col>
        </Row>

        <hr className="hrLine" />

        <Row className="p-3">
          <Col className=" col-12 col-xl-4 col-lg-12  col-md-12 d-flex align-items-center justify-content-center">
            <SocialLogo logoList={socialImage} />
          </Col>
          <Col className=" mt-lg-3 mt-md-3 mt-3 col-12 col-xl-4 col-lg-12 col-md-12 d-flex align-items-center justify-content-center">
            <p className="text-white text-center ">
              All rights reserved © 2024 BargainFox.com
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
