import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import SingleBestDeal from "./SingleBestDeal";
import rArrow from "/Images/cArrow.png";
import { Container, Row, Col } from "react-bootstrap";
import bestdeal1 from "/Images/bestdeal1.png";
import bestdeal2 from "/Images/bestdeal2.png";
import bestdeal3 from "/Images/bestdeal3.png";
import bestdeal4 from "/Images/bestdeal4.png";
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

const BestDeals = () => {
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
      <Container className="mt-5 ">
        <Row className="d-flex">
          <Col>
            <div>
              <p className="h2 fw-fw-bolder">Garden & DIY</p>
            </div>
          </Col>
          <Col className="d-flex justify-content-end col-md-6">
            <div>
              View All Deals
              <img src={rArrow} className="mx-3" />
            </div>
          </Col>
        </Row>

        <Slider {...settings} className="mt-2">
          <div>
            <SingleBestDeal
              img={bestdeal1}
              bestDealDes="Oismys Glow in Dark Tree Elves Fairy 20Pcs Luminous Ghost Micro Landscape Accessories Garden..."
              review="34,564"
              price="$34"
              lessPrice="$56"
              discount="-20"
            />
          </div>
          <div>
            <SingleBestDeal
              img={bestdeal2}
              bestDealDes="Oismys Glow in Dark Tree Elves Fairy 20Pcs Luminous Ghost Micro Landscape Accessories Garden..."
              review="34,564"
              price="$34"
              lessPrice="$56"
              discount="-12"
            />
          </div>
          <div>
            <SingleBestDeal
              img={bestdeal3}
              bestDealDes="Oismys Glow in Dark Tree Elves Fairy 20Pcs Luminous Ghost Micro Landscape Accessories Garden..."
              review="34,564"
              price="$34"
              lessPrice="$56"
              discount="-12"
            />
          </div>
          <div>
            <SingleBestDeal
              img={bestdeal4}
              bestDealDes="Oismys Glow in Dark Tree Elves Fairy 20Pcs Luminous Ghost Micro Landscape Accessories Garden..."
              review="34,564"
              price="$34"
              lessPrice="$56"
              discount="-15"
            />
          </div>
        </Slider>
      </Container>
    </div>
  );
};

export default BestDeals;
