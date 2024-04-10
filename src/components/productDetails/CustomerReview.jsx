import React from "react";
import orangePolygon from "/Images/orangePolygon.png";
import normalPolygon from "/Images/normalPolygon.png";
import bigStar from "/Images/bigStar.png";

import { Col, Container, Row } from "react-bootstrap";
import ProgressbarReviewSection from "./ProgressbarReviewSection";

const reviewStars = [
  { imgUrl: orangePolygon },
  { imgUrl: orangePolygon },
  { imgUrl: orangePolygon },
  { imgUrl: orangePolygon },
  { imgUrl: normalPolygon },
];

const bigStars = [
  { imgUrl: bigStar },
  { imgUrl: bigStar },
  { imgUrl: bigStar },
  { imgUrl: bigStar },
  { imgUrl: bigStar },
];

const progressBarValues = [
  {
    number: "5",
    now: "60",
    reviews: "5,321",
  },
  {
    number: "4",
    now: "40",
    reviews: "2,230",
  },
  {
    number: "3",
    now: "80",
    reviews: "3,345",
  },
  {
    number: "2",
    now: "30",
    reviews: "1023",
  },
  {
    number: "1",
    now: "20",
    reviews: "456",
  },
];

const CustomerReview = () => {
  return (
    <>
      <hr />
      <div>
        <p className="h4 fw-bold">Customer Reviews</p>
      </div>
      <Container>
        <Row>
          <Col className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6">
            <div className="mb-2">
              <div className="text-center">
                <div className="h1 fw-bolder">4</div>
                <div>
                  {reviewStars.map((item, index) => {
                    return <img src={item.imgUrl} key={index} />;
                  })}
                </div>
                <p>46,546 Gloabal ratings</p>
              </div>
            </div>
          </Col>
          <Col className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6">
            <ProgressbarReviewSection list={progressBarValues} />
          </Col>
        </Row>
        <hr />
        <Row className="text-center">
          <Col className="text-md-center col-12 col-md-12 col-lg-8 col-xl-6  ">
            <div>
              {bigStars.map((star, index) => {
                return <img src={star.imgUrl} key={index} />;
              })}
            </div>
          </Col>
          <Col className="mt-3 mt-lg-0 text-md-center col-12 col-md-12 col-lg-4 col-xl-6">
            <div>
              <p className=" fw-bold h4">Rate This Product</p>
            </div>
          </Col>
        </Row>
      </Container>

      <hr />
    </>
  );
};

export default CustomerReview;
