import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import "./singleEleProduct.scss";
import ElectronicImage from "./ElectronicImage";
import ElectronicDescription from "./ElectronicDescription";
import ElectronicReview from "./ElectronicReview";
import ElectronicsDiscount from "./ElectronicsDiscount";

const SingleEleProduct = ({ productDataList }) => {
  return (
    <>
      <Container className="border-danger mt-1 d-flex align-items-center justify-content-center">
        <Row>
          <Col>
            <div className="product-border">
              <div className="d-flex align-items-center justify-content-center">
                <ElectronicImage productDetails={productDataList} />
              </div>

              <div className="p-3">
                <ElectronicDescription productDetails={productDataList} />
                <div className="d-flex align-items-center gap-3 ">
                  <ElectronicReview />
                </div>

                <div className="mt-2">
                  <ElectronicsDiscount productDetails={productDataList} />
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
