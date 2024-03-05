import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import "./singleEleProduct.scss";
import ElectronicImage from "./ElectronicImage";
import ElectronicDescription from "./ElectronicDescription";
import ElectronicReview from "./ElectronicReview";
import ElectronicsDiscount from "./ElectronicsDiscount";

const SingleEleProduct = ({
  imgUrl,
  prodDes,
  review,
  price,
  lessPrice,
  discount,
}) => {
  return (
    <>
      <Container className="border-danger mt-1 d-flex align-items-center justify-content-center">
        <Row>
          <Col>
            <div className="product-border">
              <ElectronicImage imgUrl={imgUrl} />

              <div className="mx-1">
                <ElectronicDescription prodDes={prodDes} />
                <div className="d-flex align-items-center gap-3 ">
                  <ElectronicReview review={review} />
                </div>

                <div className="mt-2 d-flex align-items-start justify-content-between mx-4">
                  <ElectronicsDiscount
                    price={price}
                    lessPrice={lessPrice}
                    discount={discount}
                  />
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
