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
  return (
    <>
      <p>Customer Reviews(3)</p>
      {list.map((value) => {
        return (
          <Row className="mb-3 col-12">
            <Row className="d-flex align-items-center gap-3">
              <div>
                <img src={value.customerImage} />
              </div>
              <div>
                {" "}
                <p className="fw-bold h6">{value.name}</p>
              </div>
            </Row>
            <Row className="mt-2">
              <p>{value.review}</p>
              <p>{value.additionalComment}</p>
            </Row>
            <Row className="d-flex align-items-center justify-content-between">
              <Col className="d-flex align-items-center gap-1 col-12 col-lg-6">
                {" "}
                {reviewStarsList.map((star) => {
                  return <img src={star.imgUrl} />;
                })}
                <small>{value.date}</small>
              </Col>
              <Col className="d-flex align-items-center gap-2 col-12 col-lg-6 mt-2">
                <small>{value.helpful}</small>
                <img src={value.likeImage} />
              </Col>
            </Row>
          </Row>
        );
      })}
    </>
  );
};

export default Comment;
