import React from "react";
import orangePolygon from "/Images/orangePolygon.png";
import normalPolygon from "/Images/normalPolygon.png";
import { Row, Col } from "react-bootstrap";

const reviewStarsList = [
  { imgUrl: orangePolygon },
  { imgUrl: orangePolygon },
  { imgUrl: orangePolygon },
  { imgUrl: orangePolygon },
  { imgUrl: normalPolygon },
];

const Comment = ({ list }) => {
  const {
    customerImage,
    name,
    review,
    additionalComment,
    date,
    helpful,
    likeImage,
  } = list;

  return (
    <>
      <p>Customer Reviews(3)</p>

      <Row className="mb-3 col-12">
        <Row className="d-flex align-items-center gap-3">
          <div>
            <img src={customerImage} />
          </div>
          <div>
            <p className="fw-bold h6">{name}</p>
          </div>
        </Row>
        <Row className="mt-2">
          <p>{review}</p>
          <p>{additionalComment}</p>
        </Row>
        <Row className="d-flex align-items-center justify-content-between">
          <Col className="d-flex align-items-center gap-1 col-12 col-lg-6">
            {reviewStarsList.map((star, index) => {
              return <img src={star.imgUrl} key={index} />;
            })}
            <small>{date}</small>
          </Col>
          <Col className="d-flex align-items-center gap-2 col-12 col-lg-6 mt-2">
            <small>{helpful}</small>
            <img src={likeImage} />
          </Col>
        </Row>
      </Row>
    </>
  );
};

export default Comment;
