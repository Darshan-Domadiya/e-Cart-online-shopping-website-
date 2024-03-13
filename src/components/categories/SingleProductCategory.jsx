import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./singleproductcategory.scss";

const SingleProductCategory = ({ imgUrl, textTitle }) => {
  return (
    <>
      <Container>
        <Row className="gap-5">
          <Col className="d-flex align-items-center justify-content-center">
            <div className="d-flex flex-column align-items-center justify-content-center">
              <img
                src={imgUrl}
                className="img-fluid"
                height="100px"
                width="100px"
              />
              <p className="text-center  fw-bold">{textTitle}</p>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default SingleProductCategory;
