import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import "./singlebestdeal.scss";
import BestDealImage from "./BestDealImage";
import BestDealDescription from "./BestDealDescription";
import BestDealReview from "./BestDealReview";
import BestDealDiscount from "./BestDealDiscount";

const SingleBestDeal = ({
  img,
  bestDealDes,
  review,
  price,
  lessPrice,
  discount,
}) => {
  return (
    <>
      <Container className="border-danger mt-1 d-flex align-items-center justify-content-center">
        <Row>
          <Col>
            <div className="dealCard-border">
              <BestDealImage imgUrl={img} />

              <div className="mx-1">
                <BestDealDescription bestDealDes={bestDealDes} />
                <div className="d-flex align-items-center gap-3 ">
                  <BestDealReview review={review} />
                </div>

                <div className="mt-2 d-flex align-items-start justify-content-between mx-4">
                  <BestDealDiscount
                    price={price}
                    lessPrice={lessPrice}
                    discount={discount}
                  />
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default SingleBestDeal;
