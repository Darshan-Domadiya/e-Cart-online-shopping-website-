import React from "react";
import { Col } from "react-bootstrap";

const SingleBanner = ({ list }) => {
  const { bannerImg, bannerTitle } = list;

  return (
    <>
      <Col className="mt-4 mt-lg-0 col-xl-4 col-lg-4 col-md-6 col-12 d-flex flex-column align-items-center justify-content-center ">
        <img src={bannerImg} className="img-fluid" />
        <span className="fw-bold mt-1 ">{bannerTitle}</span>
        <small className="text-warning ">View All Products</small>
      </Col>
    </>
  );
};

export default SingleBanner;
