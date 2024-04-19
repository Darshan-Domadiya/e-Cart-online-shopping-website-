import React, { useEffect, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import SingleBestDeal from "./SingleBestDeal";
import { Container, Row, Col } from "react-bootstrap";
import "./bestdeal.scss";
import BestdealHeading from "./BestdealHeading";
import axios from "axios";
import Spinner from "react-bootstrap/Spinner";
import { productListApi } from "../../api/Constant";

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

const BestDeals = () => {
  const [productData, setProductData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

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

  const fetchProductData = async () => {
    try {
      setIsLoading(true);
      const response = await axios.post(productListApi, {
        category_id: "sports-leisure",
        sub_category_id: "garden-diy",
      });

      if (response.status === 200) {
        // console.log("Product data before state", response.data.result.data);
        setProductData(response.data.result.data);
      } else {
        console.log("error while fetching", error);
      }
    } catch (error) {
      console.log("error");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchProductData();
  }, []);

  return (
    <>
      {isLoading ? (
        <div className="text-center mt-5">
          <Spinner animation="border" variant="primary" />
        </div>
      ) : (
        <div className="slider-container p-3 ">
          <Container className="mt-5 ">
            <BestdealHeading />

            <Slider {...settings} className="mt-2">
              {productData.map((data, index) => (
                <SingleBestDeal key={index} dataList={data} />
              ))}
            </Slider>
          </Container>
        </div>
      )}
    </>
  );
};

export default BestDeals;
