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
import "./carousel.scss";

const carouselDetails = [
  {
    imgUrl: carousel1,
    discount: "Upto 40% Off",
    title: "Women's Western ",
  },
  {
    imgUrl: carousel2,
    discount: "Upto 40% Off",
    title: "Men's  Clothing",
  },
  {
    imgUrl: carousel3,
    discount: "Upto 40% Off",
    title: "Casual Shoes",
  },
  {
    imgUrl: carousel4,
    discount: "Upto 40% Off",
    title: "Men's Running Shoes",
  },
  {
    imgUrl: carousel5,
    discount: "Upto 40% Off",
    title: "Statement Fashion ",
  },
  {
    imgUrl: carousel6,
    discount: "Upto 40% Off",
    title: "Sunglasses",
  },
];

function Arrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
      }}
      onClick={onClick}
    />
  );
}

const Carousel = () => {
  var settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 4,
    nextArrow: <Arrow className="slick-prev" />,
    prevArrow: <Arrow />,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 3,
          infinite: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
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
    <div className="slider-container mt-5 p-3">
      <Container>
        <Row className="d-flex">
          <Col className="col-7">
            <div>
              <p className="h2 fw-bolder fontsize-dealOfDay">
                Deals of the Day
              </p>
            </div>
          </Col>
          <Col className="d-flex justify-content-end  align-items-center ">
            <div>
              <span className="fontsize-viewDeals">View All Deals</span>
              <img src={rArrow} className="mx-2 img-fluid" />
            </div>
          </Col>
        </Row>

        <Slider {...settings}>
          {carouselDetails.map((value, index) => {
            return (
              <div key={index}>
                <SingleCard list={value} />
              </div>
            );
          })}
        </Slider>
      </Container>
    </div>
  );
};

export default Carousel;
