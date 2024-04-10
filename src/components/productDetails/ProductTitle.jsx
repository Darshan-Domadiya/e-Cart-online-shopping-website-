import React from "react";
import shareImage from "/Images/shareImage.png";
import orangePolygon from "/Images/orangePolygon.png";
import normalPolygon from "/Images/normalPolygon.png";
import { Container, Col, Row } from "react-bootstrap";

const reviewStars = [
  { imgUrl: orangePolygon },
  { imgUrl: orangePolygon },
  { imgUrl: orangePolygon },
  { imgUrl: orangePolygon },
  { imgUrl: normalPolygon },
];

const ProductTitle = ({ productData }) => {
  return (
    <>
      <Container>
        <Row className="mt-3 mt-sm-0">
          <Col className="d-flex gap-4 ">
            <p className="fw-bold h5">{productData.name}</p>
            <div>
              <img src={shareImage} />
            </div>
          </Col>

          <Row className="d-flex justify-content-between">
            <Col className="d-flex gap-2 col-12 col-sm-7 col-lg-6  ">
              <div>
                {reviewStars.map((item, index) => {
                  return <img src={item.imgUrl} key={index} />;
                })}
              </div>
              <div>
                <span>46,546</span>
              </div>
            </Col>

            <Col className="col-12 col-sm-7 col-lg-6 col-md-7 ">
              <p>374 sold, by Celby Store</p>
            </Col>
          </Row>
        </Row>
      </Container>
    </>
  );
};

export default ProductTitle;
