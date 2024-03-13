import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import SingleBestDeal from "./SingleBestDeal";
import { Container, Row, Col } from "react-bootstrap";
import bestdeal1 from "/Images/bestdeal1.png";
import bestdeal2 from "/Images/bestdeal2.png";
import bestdeal3 from "/Images/bestdeal3.png";
import bestdeal4 from "/Images/bestdeal4.png";
import "./bestdeal.scss";
import BestdealHeading from "./BestdealHeading";


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

const bestDealDetails = [
  {
    img: bestdeal1,
    bestDealDescription:
      "Oismys Glow in Dark Tree Elves Fairy 20Pcs Luminous Ghost Micro Landscape Accessories Garden...",
    review: "34,564",
    price: "$34",
    lessPrice: "$56",
    discount: "-20",
  },
  {
    img: bestdeal2,
    bestDealDes:
      "Oismys Glow in Dark Tree Elves Fairy 20Pcs Luminous Ghost Micro Landscape Accessories Garden...",
    review: "34,564",
    price: "$34",
    lessPrice: "$56",
    discount: "-12",
  },
  ,
  {
    img: bestdeal3,
    bestDealDes:
      "Oismys Glow in Dark Tree Elves Fairy 20Pcs Luminous Ghost Micro Landscape Accessories Garden...",
    review: "34,564",
    price: "$34",
    lessPrice: "$56",
    discount: "-12",
  },
  ,
  {
    img: bestdeal4,
    bestDealDes:
      "Oismys Glow in Dark Tree Elves Fairy 20Pcs Luminous Ghost Micro Landscape Accessories Garden...",
    review: "34,564",
    price: "$34",
    lessPrice: "$56",
    discount: "-15",
  },
];

const BestDeals = () => {
  var settings = {
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
          initialSlide: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
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
    <div className="slider-container p-3 ">
      <Container className="mt-5 ">
        <BestdealHeading />

        <Slider {...settings} className="mt-2  ">
          {bestDealDetails.map((list,index) => {
            return (
              <div key={index}>
                <SingleBestDeal bestDealList={list} />
              </div>
            );
          })}
        </Slider>
      </Container>
    </div>
  );
};

export default BestDeals;
