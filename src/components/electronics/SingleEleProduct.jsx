import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import "./singleEleProduct.scss";
import normalStar from "/Images/normalStar.png";
import orangeStar from "/Images/orangeStar.png";
import polygon from "/Images/polygon.png";

const SingleEleProduct = ({ img, prodDes }) => {
  return (
    <>
      <Container className="border-danger mt-1 d-flex align-items-center justify-content-center">
        <Row>
          <Col>
            <div className="product-border">
              <div>
                <img src={img} />
              </div>

              <div className="mx-1">
                <p>
                  {prodDes}
                </p>
                <div className="d-flex align-items-center gap-3 ">
                  <div className="d-flex gap-2">
                    <img src={orangeStar} />
                    <img src={orangeStar} />
                    <img src={orangeStar} />
                    <img src={orangeStar} />
                    <img src={normalStar} />
                    <span>46,656</span>
                  </div>
                </div>

                <div className="mt-2 d-flex align-items-start justify-content-between mx-4">
                  <div className="d-flex align-items-start gap-2">
                    $44 <strike>$38.98</strike>
                  </div>
                  <div className="position-relative mb-2">
                    <img src={polygon} />
                    <div className="position-absolute polygonText text-white fw-600 ">
                      -10 <span>%</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default SingleEleProduct;
