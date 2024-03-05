import React from "react";
import "./productdetails.scss";
import miniImage1 from "/Images/productDetailImage1.png";
import miniImage2 from "/Images/productDetailImage2.png";
import miniImage3 from "/Images/productDetailImage3.png";
import miniImage4 from "/Images/productDetailImage4.png";
import miniImage5 from "/Images/productDetailImage5.png";
import mainImage from "/Images/mainProductDetailImage.png";
import shareImage from "/Images/shareImage.png";
import orangePolygon from "/Images/orangePolygon.png";
import normalPolygon from "/Images/normalPolygon.png";
import { Col, Container, Row } from "react-bootstrap";
import ProductPrice from "./ProductPrice";
import ProductColorSize from "./ProductColorSize";

const productDetailImage = [
  miniImage1,
  miniImage2,
  miniImage3,
  miniImage4,
  miniImage5,
];

const reviewStars = [
  { imgUrl: orangePolygon },
  { imgUrl: orangePolygon },
  { imgUrl: orangePolygon },
  { imgUrl: orangePolygon },
  { imgUrl: normalPolygon },
];

const ProductDetails = () => {
  return (
    <>
      <Container className="mt-5">
        <Row>
          <Col>
            <div className="d-flex gap-3">
              <div className="d-flex flex-column">
                {productDetailImage.map((imgUrl) => {
                  return <img src={imgUrl} />;
                })}
              </div>
              <div>
                <img src={mainImage} />
              </div>
            </div>
          </Col>

          <Col>
            <div>
              <div className="d-flex gap-4">
                <p className="fw-bold h5">
                  Women's Blouse Solid Simple Long Sleeve V Neck Button Blouse
                </p>
                <div>
                  <img src={shareImage} />
                </div>
              </div>

              <div className="d-flex justify-content-between">
                <div className="d-flex gap-2 ">
                  <div>
                    {reviewStars.map((item) => {
                      return <img src={item.imgUrl} />;
                    })}
                  </div>
                  <div>
                    <span>46,546</span>
                  </div>
                </div>

                <div>
                  <p>374 sold, by Celby Store</p>
                </div>
              </div>
            </div>

            <ProductPrice price="12" discount="65" />
            <ProductColorSize />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default ProductDetails;
