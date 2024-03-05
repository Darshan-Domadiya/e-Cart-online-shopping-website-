import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import SingleCard from "./SingleCard";
import carousel1 from "/Images/c1.png";
import carousel2 from "/Images/c2.png";
import carousel3 from "/Images/c3.png";
import carousel4 from "/Images/c4.png";
import carousel5 from "/Images/c5.png";
import carousel6 from "/Images/c6.png";
import rArrow from "/Images/cArrow.png";
import { Container, Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function Arrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        background: "#FF7900",
        color: "whitesmoke",
      }}
      onClick={onClick}
    />
  );
}

const Carousel = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 4,
    nextArrow: <Arrow />,
    prevArrow: <Arrow />,
    initialSlide: 0,
    responsive: [
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
        breakpoint: 600,
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
    <div className="slider-container mt-3 mx-4 me-5 ">
      <Container>
        <Row className="d-flex">
          <Col>
            <div>
              <p className="h2 fw-fw-bolder">Deals of the Day</p>
            </div>
          </Col>
          <Col className="d-flex justify-content-end  align-items-center ">
            <div>
              View All Deals
              <img src={rArrow} className="mx-2" />
            </div>
          </Col>
        </Row>
        <Slider {...settings}>
          <div>
            <SingleCard
              imgUrl={carousel1}
              text="Upto 40% off"
              textDes="Women's Western Clothing"
            />
          </div>
          <div>
            <SingleCard
              imgUrl={carousel2}
              text="Upto 40% off"
              textDes="Men's Western Clothing"
            />
          </div>
          <div>
            <SingleCard
              imgUrl={carousel3}
              text="Upto 40% off"
              textDes="Casual Shoes"
            />
          </div>
          <div>
            <SingleCard
              imgUrl={carousel4}
              text="Upto 40% off"
              textDes="Men's Running shoes"
            />
          </div>
          <div>
            <SingleCard
              imgUrl={carousel5}
              text="Upto 40% off"
              textDes="Statement Fashion Jewellery"
            />
          </div>
          <div>
            <SingleCard
              imgUrl={carousel6}
              text="Upto 40% off"
              textDes="Sunglasses "
            />
          </div>
        </Slider>
      </Container>
    </div>
  );
};

export default Carousel;
