import React, { useRef, useState, useEffect } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import miniImage1 from "/Images/productDetailImage1.png";
import miniImage2 from "/Images/productDetailImage2.png";
import miniImage3 from "/Images/productDetailImage3.png";
import miniImage4 from "/Images/productDetailImage4.png";
import miniImage5 from "/Images/productDetailImage5.png";
import mainImage from "/Images/mainProductDetailImage.png";
import "./productImage.scss";

const productDetailImage = [
  miniImage1,
  miniImage2,
  miniImage3,
  miniImage4,
  miniImage5,
  mainImage,
];

const productDetailImage2 = [
  miniImage1,
  miniImage2,
  miniImage3,
  miniImage4,
  miniImage5,
  mainImage,
];

const ProductImages = ({ productImage }) => {
  const [nav1, setNav1] = useState(null);
  const [nav2, setNav2] = useState(null);
  let sliderRef1 = useRef(null);
  let sliderRef2 = useRef(null);

  useEffect(() => {
    setNav1(sliderRef1);
    setNav2(sliderRef2);
  }, []);

  return (
    <>
      {productImage && (
        <div className="slider-container d-flex ">
          <div className="smallImagediv">
            <Slider
              asNavFor={nav1}
              ref={(slider) => (sliderRef2 = slider)}
              slidesToShow={productImage.length > 4 ? 4 : productImage.length}
              swipeToSlide={true}
              focusOnSelect={true}
              arrows={false}
              infinite={false}
              vertical={true}
            >
              {productImage !== undefined &&
                productImage.length > 0 &&
                productImage.map((smallImg, index) => {
                  return (
                    <div key={index}>
                      <img
                        src={smallImg.product_image_url}
                        className="img-fluid"
                        height="73px"
                        width="73px"
                      />
                    </div>
                  );
                })}
            </Slider>
          </div>

          <div className="bigImagediv ">
            <Slider
              asNavFor={nav2}
              arrows={false}
              ref={(slider) => (sliderRef1 = slider)}
              // slidesToShow={1}
              vertical={true}
            >
              {productImage.length > 0 &&
                productImage.map((bigImg, index) => {
                  return (
                    <div key={index}>
                      <img
                        src={bigImg.product_image_url}
                        className="img-fluid"
                        height="600px"
                        width="500px"
                      />
                    </div>
                  );
                })}
            </Slider>
          </div>
        </div>
      )}
    </>
  );
};

export default ProductImages;
