import React from "react";
import "./trending.scss";
import { Container, Row, Col } from "react-bootstrap";
import rArrow from "/Images/cArrow.png";
import trending1 from "/Images/trending1.png";
import trending2 from "/Images/trending2.png";
import trending3 from "/Images/trending3.png";
import trending4 from "/Images/trending4.png";
import trending5 from "/Images/trending5.png";
import trending6 from "/Images/trending6.png";
import trending7 from "/Images/trending7.png";
import SingleTrendingProduct from "./SingleTrendingProduct";

const Trending = () => {
  return (
    <>
      <Container className="mt-4">
        <Row>
          <Col>
            <div>
              <p className="h2 fw-fw-bolder">Trending on BargainFox</p>
            </div>
          </Col>

          <Col className="d-flex justify-content-end align-items-center">
            <div>
              View All Deals
              <img src={rArrow} className="mx-3" />
            </div>
          </Col>
        </Row>
      </Container>

      <Container className="mt-4">
        <Row className="d-flex align-items-baseline justify-content-center">
          <Col className="col-6 col-sm-6  col-md-4 col-lg-3 col-xl-2 ">
            <SingleTrendingProduct
              imgUrl={trending1}
              discount="Upto 10% off"
              productName="Electronics"
            />
          </Col>

          <Col className="col-6 col-sm-6  col-md-4 col-lg-3 col-xl-2 d-flex flex-column justify-content-center">
            <SingleTrendingProduct
              imgUrl={trending2}
              discount="Upto 10% off"
              productName="Home"
            />
          </Col>

          <Col className="col-6 col-sm-6  col-md-4 col-lg-3 col-xl-2">
            <SingleTrendingProduct
              imgUrl={trending3}
              discount="Upto 10% off"
              productName="Electronics"
            />
          </Col>

          <Col className="col-6 col-sm-6  col-md-4 col-lg-3 col-xl-2">
            <SingleTrendingProduct
              imgUrl={trending4}
              discount="Upto 10% off"
              productName="Electronics"
            />
          </Col>

          <Col className="col-6 col-sm-6  col-md-4 col-lg-3 col-xl-2">
            <SingleTrendingProduct
              imgUrl={trending5}
              discount="Upto 10% off"
              productName="Electronics"
            />
          </Col>

          <Col className="col-6 col-sm-6  col-md-4 col-lg-3 col-xl-2">
            <SingleTrendingProduct
              imgUrl={trending6}
              discount="Upto 10% off"
              productName="Electronics"
            />
          </Col>

          <Col className="col-6 col-sm-6  col-md-4 col-lg-3 col-xl-2 mt-4">
            <SingleTrendingProduct
              imgUrl={trending7}
              discount="Upto 10% off"
              productName="Electronics"
            />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Trending;
