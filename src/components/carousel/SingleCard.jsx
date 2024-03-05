import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import "./singleCard.scss";
import { useNavigate } from "react-router-dom";

const SingleCard = ({ imgUrl, text, textDes }) => {
  const navigate = useNavigate();

  return (
    <>
      <Container
        fluid
        className=" mt-1 d-flex align-items-center justify-content-center"
      >
        <Row>
          <Col onClick={() => navigate("/productlisting")}>
            <div className="border-class">
              <div>
                <img src={imgUrl} />
              </div>
              <div>
                <small>{text}</small>
                <p>{textDes}</p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default SingleCard;
