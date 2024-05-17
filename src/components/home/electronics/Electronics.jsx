import React, { useEffect, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Container } from "react-bootstrap";
import SingleEleProduct from "./SingleEleProduct";
import "./electronics.scss";
import ElectronicsHeading from "./ElectronicsHeading";
import axios from "axios";
import { productListApi } from "..//..//..//api/Constant";
import Loader from "..//..//..//components/loader/Loader";

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

const Electronics = () => {
  const [productData, setProductData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchProductDetails = async () => {
    try {
      setIsLoading(true);
      const response = await axios.post(productListApi, {
        category_id: "electronics",
      });
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
          // dots: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          // dots: true,
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
        <Loader />
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
