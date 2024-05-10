import React from "react";
import { Col } from "react-bootstrap";
import TrendingImage from "./TrendingImage";
import TrendingDiscount from "./TrendingDiscount";
import TrendingTitle from "./TrendingTitle";

const SingleTrendingProduct = ({ list }) => {
  const { imgUrl, title, discount } = list;

  return (
    <>
      <Col className="trendingCard-width col-6 col-sm-3 col-md-3 col-lg-2 d-flex  flex-column align-items-center justify-content-center">
        <div className="imgBackground p-2 ">
          <img
            src={imgUrl}
            className="img-fluid "
            height="110px"
            width="110px"
          />
        </div>

        <p className="discountBackGround text-white px-3 py-1 ">{discount}</p>

        <p className="fw-bold">{title}</p>
      </Col>
    </>
  );
};

export default SingleTrendingProduct;
