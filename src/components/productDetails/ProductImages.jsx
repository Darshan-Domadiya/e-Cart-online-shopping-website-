import React, { useRef, useState, useEffect } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "./productImage.scss";
import ReactImageMagnify from "react-image-magnify";
import { SideBySideMagnifier } from "react-image-magnifiers";

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
        <div className="slider-container d-flex gap-3 sliderImage-div col-12">
          <div className="smallImagediv ">
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

          <div className="bigImageDiv">
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
                      <div>
                        <ReactImageMagnify
                          {...{
                            smallImage: {
                              alt: "Wristwatch by Ted Baker London",
                              isFluidWidth: true,
                              src: bigImg.product_image_url,
                            },
                            largeImage: {
                              src: bigImg.product_image_url,
                              width: 1400,
                              height: 1200,
                            },

                            // Controls the lens' height and width with the largeImageContainerDimensions
                            // enlargedImageContainerDimensions: {
                            //   width: 300,
                            //   height: 300,
                            // },

                            enlargedImageContainerStyle: {
                              border: "2px solid grey",
                            },
                            enlargedImagePortalId: "enlargedImage-div",
                          }}
                        />
                      </div>
                    </div>
                  );
                })}
            </Slider>
            <div id="enlargedImage-div"></div>
          </div>
        </div>
      )}
    </>
  );
};

export default ProductImages;
