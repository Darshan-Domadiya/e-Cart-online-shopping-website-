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
                  {reviewStars.map((item) => {
                    return <img src={item.imgUrl} />;
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
        <Row>
          <Col className="d-flex align-items-center justify-content-between">
            <div>
              {bigStars.map((star) => {
                return <img src={star.imgUrl} />;
              })}
            </div>
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
