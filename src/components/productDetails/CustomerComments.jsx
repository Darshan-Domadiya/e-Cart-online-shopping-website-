import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import CustomerPhotos from "./CustomerPhotos";
import Comment from "./Comment";
import customer from "/Images/customer.png";
import like from "/Images/like.png";
import orangePolygon from "/Images/orangePolygon.png";
import normalPolygon from "/Images/normalPolygon.png";

const reviewStarsList = [
  { imgUrl: orangePolygon },
  { imgUrl: orangePolygon },
  { imgUrl: orangePolygon },
  { imgUrl: orangePolygon },
  { imgUrl: normalPolygon },
];

const CustomerComments = ({ reviewItem }) => {
  // console.log("review item", reviewItem);
  return (
    <>
      <Container>
        <Row>
          <Col>
            <CustomerPhotos />

            <p>Customer Reviews({reviewItem && reviewItem.length})</p>

            {reviewItem &&
              reviewItem.map((eachReview, index) => {
                return (
                  <Row key={index} className=" col-12">
                    <Row className="d-flex align-items-center gap-3">
                      <div className="userReviewAvatar-div">
                        <img
                          src={eachReview.user.avatar_url}
                          className="userReviewAvatar"
                        />
                      </div>
                      <div>
                        <p className="fw-bold h6">{eachReview.user.name}</p>
                      </div>
                    </Row>
                    <Row className="">
                      <p>{eachReview.title}</p>
                      <p>{eachReview.feedback}</p>
                    </Row>
                    <Row className="d-flex align-items-center justify-content-between">
                      <Col className="d-flex align-items-center gap-1 col-12 col-lg-6">
                        {reviewStarsList.map((star, index) => {
                          return <img src={star.imgUrl} key={index} />;
                        })}
                      </Col>
                      <Col className="d-flex align-items-center gap-2 col-12 col-lg-6">
                        <span>Was this helpful?</span>
                        <img src={like} />
                      </Col>
                    </Row>
                  </Row>
                );
              })}
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default CustomerComments;
