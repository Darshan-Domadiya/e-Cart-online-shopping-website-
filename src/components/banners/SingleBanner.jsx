import React from "react";
import { Col } from "react-bootstrap";

const SingleBanner = ({ list }) => {
  return (
    <>
      {list.map((banner) => {
        return (
          <Col className="col-xl-4 col-lg-4 col-md-6 col-12 d-flex flex-column align-items-center justify-content-center ">
            <img src={banner.bannerImg} className="img-fluid" />
            <span className="fw-bold ">{banner.bannerTitle}</span>
            <small className="text-warning ">View All Products</small>
          </Col>
        );
      })}
    </>
  );
};

export default SingleBanner;
