import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import "./singleCard.scss";
import { useNavigate } from "react-router-dom";

const SingleCard = ({ list }) => {
  const { imgUrl, discount, title } = list;

  return (
    <>
      <Container
        fluid
        className=" mt-1 d-flex align-items-center justify-content-center"
      >
        <Row>
          <Col>
            <div className="border-class">
              <div>
                <img src={imgUrl} className="img-fluid" />
              </div>
              <div className="p-3">
                <small>{discount}</small>
                <p className="fw-bold">{title}</p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default SingleCard;
