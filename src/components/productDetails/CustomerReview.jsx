import React from "react";
import orangePolygon from "/Images/orangePolygon.png";
import normalPolygon from "/Images/normalPolygon.png";
import customerReviewStar from "/Images/customerReviewStar.png";
import bigStar from "/Images/bigStar.png";

import { Col, Container, Image, ProgressBar, Row } from "react-bootstrap";

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

const CustomerReview = () => {
  return (
    <>
      <hr />
      <div>
        <p className="h4 fw-bold">Customer Reviews</p>
      </div>
      <Container>
        <Row>
          <Col>
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
          <Col>
            <div>
              <div className="d-flex align-items-center gap-2">
                <span>5</span>
                <img src={customerReviewStar} />
                <ProgressBar className="w-50" now={20} />
                <span className="mx-2">5,231</span>
              </div>
              <div className="d-flex align-items-center gap-2">
                <span>5</span>
                <img src={customerReviewStar} />
                <ProgressBar className="w-50" now={20} />
                <span className="mx-2">5,231</span>
              </div>
              <div className="d-flex align-items-center gap-2">
                <span>5</span>
                <img src={customerReviewStar} />
                <ProgressBar className="w-50" now={20} />
                <span className="mx-2">5,231</span>
              </div>
              <div className="d-flex align-items-center gap-2">
                <span>5</span>
                <img src={customerReviewStar} />
                <ProgressBar className="w-50" now={20} />
                <span className="mx-2">5,231</span>
              </div>
              <div className="d-flex align-items-center gap-2">
                <span>5</span>
                <img src={customerReviewStar} />
                <ProgressBar className="w-50" now={20} />
                <span className="mx-2">5,231</span>
              </div>
            </div>
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
