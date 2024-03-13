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
        <TrendingImage imgUrl={imgUrl} />

        <TrendingDiscount discount={discount} />

        <TrendingTitle title={title} />
      </Col>
    </>
  );
};

export default SingleTrendingProduct;
