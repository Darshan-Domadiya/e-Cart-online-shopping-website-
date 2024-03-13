import React from "react";
import { Col } from "react-bootstrap";
import BannerImage from "./BannerImage";
import BannerTitle from "./BannerTitle";

const SingleBanner = ({ list }) => {
  const { bannerImg, bannerTitle } = list;

  return (
    <>
      <Col className="mt-4 mt-lg-0 col-xl-4 col-lg-4 col-md-6 col-12 d-flex flex-column align-items-center justify-content-center ">
        <BannerImage imgUrl={bannerImg} />
        <BannerTitle title={bannerTitle} />
        <small className="text-warning ">View All Products</small>
      </Col>
    </>
  );
};

export default SingleBanner;
