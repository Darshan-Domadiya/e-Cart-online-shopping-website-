import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import CustomerPhotos from "./CustomerPhotos";
import Comment from "./Comment";
import customer from "/Images/customer.png";
import like from "/Images/like.png";

const customerReview = [
  {
    customerImage: customer,
    name: "Celina Peterburg",
    review:
      " A very good quality fabric top. Same as shown. Fitting is just perfect. And as expected. All over I liked this top very much.",
    additionalComment: " Low price . Love it !",
    date: "10 July 2021",
    helpful: "Was this helpful?",
    likeImage: like,
  },
  {
    customerImage: customer,
    name: "Celina Peterburg",
    review:
      " A very good quality fabric top. Same as shown. Fitting is just perfect. And as expected. All over I liked this top very much.",
    additionalComment: " Low price . Love it !",
    date: "10 July 2021",
    helpful: "Was this helpful?",
    likeImage: like,
  },
  {
    customerImage: customer,
    name: "Celina Peterburg",
    review:
      " A very good quality fabric top. Same as shown. Fitting is just perfect. And as expected. All over I liked this top very much.",
    additionalComment: " Low price . Love it !",
    date: "10 July 2021",
    helpful: "Was this helpful?",
    likeImage: like,
  },
  {
    customerImage: customer,
    name: "Celina Peterburg",
    review:
      " A very good quality fabric top. Same as shown. Fitting is just perfect. And as expected. All over I liked this top very much.",
    additionalComment: " Low price . Love it !",
    date: "10 July 2021",
    helpful: "Was this helpful?",
    likeImage: like,
  },
  {
    customerImage: customer,
    name: "Celina Peterburg",
    review:
      " A very good quality fabric top. Same as shown. Fitting is just perfect. And as expected. All over I liked this top very much.",
    additionalComment: " Low price . Love it !",
    date: "10 July 2021",
    helpful: "Was this helpful?",
    likeImage: like,
  },
];

const CustomerComments = () => {
  return (
    <>
      <Container>
        <Row>
          <Col>
            <CustomerPhotos />
            {customerReview.map((reviewDetails, index) => {
              return <Comment list={reviewDetails} key={index} />;
            })}
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default CustomerComments;
