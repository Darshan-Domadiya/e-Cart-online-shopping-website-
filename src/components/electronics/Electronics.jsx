import React, { useEffect, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Container, Row, Col } from "react-bootstrap";
import electronics1 from "/Images/electronics1.png";
import electronics2 from "/Images/electronics2.png";
import electronics3 from "/Images/electronics3.png";
import electronics4 from "/Images/electronics4.png";
import SingleEleProduct from "./SingleEleProduct";
import "./electronics.scss";
import ElectronicsHeading from "./ElectronicsHeading";
import axios from "axios";
import Spinner from "react-bootstrap/Spinner";

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

const productDetails = [
  {
    imgUrl: electronics1,
    prodDes:
      "Apple iPad (9th Generation): with A13 Bionic chip, 10.2-inch Retina Display, 256GB, Wi-Fi, 12MP",
    review: "23,443",
    price: "$34",
    lessPrice: "$56",
    discount: "25",
  },
  {
    imgUrl: electronics2,
    prodDes:
      "Eilik - an Electronic Robot Pets Toys with Intelligent and Interactive | Abundant Emotions, Idle...",
    review: "34,443",
    price: "$67",
    lessPrice: "$95",
    discount: "15",
  },
  {
    imgUrl: electronics3,
    prodDes:
      "LOBKIN Wireless Bluetooth Headphones, Over-Ear Headphones with Built-in HD Mic ",
    review: "45,443",
    price: "$50",
    lessPrice: "$150",
    discount: "75",
  },
  {
    imgUrl: electronics4,
    prodDes:
      "SAMSUNG Galaxy Watch 5 40mm Bluetooth Smartwatch w/ Body, Health, Fitness and Sleep Tracker..",
    review: "13,322",
    price: "$64",
    lessPrice: "$76",
    discount: "10",
  },
];

const Electronics = () => {
  const [productData, setProductData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchProductDetails = async () => {
    try {
      setIsLoading(true);
      const response = await axios.post(
        "https://bargainfox-dev.concettoprojects.com/api/product/list",
        {
          category_id: "electronics",
        }
      );
      if (response.status === 200) {
        setProductData(response.data.result.data);
        // console.log("product details", response.data.result.data);
      }
    } catch (error) {
      console.log("Error", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchProductDetails();
  }, []);

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
    <>
      {isLoading ? (
        <div className="text-center mt-5">
          <Spinner animation="border" variant="primary" />
        </div>
      ) : (
        <div className="slider-container p-3">
          <Container className="mt-5">
            <ElectronicsHeading />

            <Slider {...settings} className="mt-2">
              {productData.map((data, index) => {
                return <SingleEleProduct key={index} productDataList={data} />;
              })}
            </Slider>
          </Container>
        </div>
      )}
    </>
  );
};

export default Electronics;
