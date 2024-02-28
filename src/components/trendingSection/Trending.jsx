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
          <Col md={3} lg={4} sm={2} xl={4} xxl={2}>
            <div className="d-flex justify-content-center   ">
              <img src={trending1} className="imgBackground" />
            </div>
            <div className="text-center textBackground ">
              <p className=" text-white">Up to 10% off</p>
            </div>
            <div className="text-center fw-bold ">Electronics</div>
          </Col>

          <Col
            md={3}
            lg={4}
            sm={2}
            xl={3}
            xxl={2}
            className="d-flex flex-column justify-content-center"
          >
            <div className="d-flex justify-content-center align-items-center">
              <img src={trending2} className="imgBackground" />
            </div>
            <div className="text-center ">
              <p className="textBackground text-white">Up to 50% off</p>
            </div>
            <div className="text-center fw-bold">Kitchen</div>
          </Col>

          <Col md={3} lg={4} sm={2} xl={3} xxl={2}>
            <div className="d-flex justify-content-center align-items-center">
              <img src={trending3} className="imgBackground" />
            </div>
            <div className="text-center">
              <p className="textBackground text-white">From £50</p>
            </div>
            <div className="text-center fw-bold">Home</div>
          </Col>

          <Col md={3} lg={4} sm={2} xl={3} xxl={2}>
            <div className="d-flex justify-content-center align-items-center">
              <img src={trending4} className="imgBackground" />
            </div>
            <div className="text-center ">
              <p className="textBackground text-white">From £100</p>
            </div>
            <div className="text-center fw-bold">Toys & Crafts</div>
          </Col>

          <Col md={3} lg={4} sm={2} xl={3} xxl={2}>
            <div className="d-flex justify-content-center align-items-center">
              <img src={trending5} className="imgBackground" />
            </div>
            <div className="text-center ">
              <p className="textBackground text-white">Up to 5% off</p>
            </div>
            <div className="text-center fw-bold">Sports & Leisure</div>
          </Col>

          <Col md={3} lg={4} sm={2} xl={3} xxl={2}>
            <div className="d-flex justify-content-center align-items-center">
              <img src={trending6} className="imgBackground" />
            </div>
            <div className="text-center ">
              <p className="textBackground text-white">Up to 15% off</p>
            </div>
            <div className="text-center fw-bold">Job Lots</div>
          </Col>

          <Col md={3} lg={4} sm={2} xl={3} xxl={2}>
            <div className="d-flex justify-content-center align-items-center">
              <img src={trending7} className="imgBackground" />
            </div>
            <div className="text-center ">
              <p className="textBackground text-white">Up to 10% off</p>
            </div>
            <div className="text-center fw-bold">Pets</div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Trending;
