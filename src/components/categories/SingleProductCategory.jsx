import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./singleproductcategory.scss";

const SingleProductCategory = ({ imgUrl, textDes }) => {
  return (
    <>
      <Container className="d-flex align-items-center justify-content-center">
        <Row className="d-flex align-items-center justify-content-center">
          <Col className="d-flex flex-column align-items-center justify-content-center">
            <img src={imgUrl} />
            <p className="text-center fw-bold">{textDes}</p>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default SingleProductCategory;
