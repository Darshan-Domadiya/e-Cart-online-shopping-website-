import React from "react";
import { Container, Row } from "react-bootstrap";
import banner1 from "/Images/banner1.png";
import banner2 from "/Images/banner2.png";
import banner3 from "/Images/banner3.png";
import SingleBanner from "./SingleBanner";

const bannerDetails = [
  {
    bannerImg: banner1,
    bannerTitle: "Deals Of The Week",
  },
  {
    bannerImg: banner2,
    bannerTitle: "Trending",
  },
  {
    bannerImg: banner3,
    bannerTitle: "Clearance",
  },
];

const Banner = () => {
  return (
    <>
      <Container className="mt-5 ">
        <Row className=" d-flex align-items-center justify-content-center">
          {bannerDetails.map((bannerList,index) => {
            return <SingleBanner key={index} list={bannerList} className="mt-5" />;
          })}
        </Row>
      </Container>
    </>
  );
};

export default Banner;
