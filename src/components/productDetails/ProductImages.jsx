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

const ProductImages = () => {
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
      <div className="slider-container d-flex ">
        <div className="smallImagediv">
          <Slider
            asNavFor={nav1}
            ref={(slider) => (sliderRef2 = slider)}
            slidesToShow={5}
            swipeToSlide={true}
            focusOnSelect={true}
            arrows={false}
            vertical={true}
          >
            <div>
              <img
                src={miniImage1}
                className="img-fluid"
                height="73px"
                width="73px"
              />
            </div>
            <div>
              <img
                src={miniImage2}
                className="img-fluid"
                height="73px"
                width="73px"
              />
            </div>
            <div>
              <img
                src={miniImage3}
                className="img-fluid"
                height="73px"
                width="73px"
              />
            </div>
            <div>
              <img
                src={miniImage4}
                className="img-fluid"
                height="73px"
                width="73px"
              />
            </div>
            <div>
              <img
                src={miniImage5}
                className="img-fluid"
                height="73px"
                width="73px"
              />
            </div>
            <div>
              <img
                src={mainImage}
                className="img-fluid"
                height="73px"
                width="73px"
              />
            </div>
          </Slider>
        </div>
        <div className="bigImagediv">
          <Slider
            asNavFor={nav2}
            arrows={false}
            ref={(slider) => (sliderRef1 = slider)}
          >
            <div>
              <img
                src={miniImage1}
                className="img-fluid"
                height="600px"
                width="500px"
              />
            </div>
            <div>
              <img
                src={miniImage2}
                className="img-fluid"
                height="600px"
                width="500px"
              />
            </div>
            <div>
              <img
                src={miniImage3}
                className="img-fluid"
                height="600px"
                width="500px"
              />
            </div>
            <div>
              <img
                src={miniImage4}
                className="img-fluid"
                height="600px"
                width="500px"
              />
            </div>
            <div>
              <img
                src={miniImage5}
                className="img-fluid"
                height="600px"
                width="500px"
              />
            </div>
            <div>
              <img
                src={mainImage}
                className="img-fluid"
                height="600px"
                width="500px"
              />
            </div>
          </Slider>
        </div>
      </div>

      {/* <div className="d-flex gap-3">
        <div className="d-flex flex-column">
          {productDetailImage.map((imgUrl) => {
            return (
              <div>
                {" "}
                <img
                  src={imgUrl}
                  className="img-fluid "
                  height="73px"
                  width="73px"
                />{" "}
              </div>
            );
          })}
        </div>
        <div>
          <img src={mainImage} className=" img-fluid " />
        </div>
      </div> */}
    </>
  );
};

export default ProductImages;
