import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./singleproductcategory.scss";

const SingleProductCategory = ({ imgUrl, textTitle }) => {
  return (
    <>
      <Container>
        <Row className="d-flex align-items-center justify-content-center">
          <Col>
            <div className="d-flex flex-column align-items-center justify-content-center">
              <img src={imgUrl} className="img-fluid" />
              <p className="text-center fw-bold">{textTitle}</p>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default SingleProductCategory;
