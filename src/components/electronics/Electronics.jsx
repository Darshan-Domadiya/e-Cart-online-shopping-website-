import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import rArrow from "/Images/cArrow.png";
import { Container, Row, Col } from "react-bootstrap";
import electronics1 from "/Images/electronics1.png";
import electronics2 from "/Images/electronics2.png";
import electronics3 from "/Images/electronics3.png";
import electronics4 from "/Images/electronics4.png";
import SingleEleProduct from "./SingleEleProduct";

function Arrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "#FF7900", color:"whitesmoke" }}
      onClick={onClick}
    />
  );
}

const Electronics = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    nextArrow: <Arrow />,
    prevArrow: <Arrow />,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="slider-container ">
      <Container className="mt-5">
        <Row className="d-flex">
          <Col>
            <div>
              <p className="h2 fw-fw-bolder">Electronics</p>
            </div>
          </Col>
          <Col className="d-flex justify-content-end align-items-center ">
            <div>
              View All Deals
              <img src={rArrow} className="mx-3" />
            </div>
          </Col>
        </Row>

        <Slider {...settings}>
          <div>
            <SingleEleProduct
              img={electronics1}
              prodDes="Apple iPad (9th Generation): with A13 Bionic chip, 10.2-inch Retina Display, 256GB, Wi-Fi, 12MP"
            />
          </div>
          <div>
            <SingleEleProduct
              img={electronics2}
              prodDes="Eilik - an Electronic Robot Pets Toys with Intelligent and Interactive | Abundant Emotions, Idle..."
            />
          </div>
          <div>
            <SingleEleProduct
              img={electronics3}
              prodDes="LOBKIN Wireless Bluetooth Headphones, Over-Ear Headphones with Built-in HD Mic,With smooth sound and comfort "
            />
          </div>
          <div>
            <SingleEleProduct
              img={electronics4}
              prodDes="SAMSUNG Galaxy Watch 5 40mm Bluetooth Smartwatch w/ Body, Health, Fitness and Sleep Tracker.."
            />
          </div>
        </Slider>
      </Container>
    </div>
  );
};

export default Electronics;
