import React, { useEffect, useState } from "react";
import orangePolygon from "/Images/orangePolygon.png";
import normalPolygon from "/Images/normalPolygon.png";
import bigStar from "/Images/bigStar.png";
import { Button, Col, Container, Form, Modal, Row } from "react-bootstrap";
import ProgressbarReviewSection from "./ProgressbarReviewSection";
import { toast } from "react-toastify";
import "./customerreview.scss";
import normalStar from "/Images/normalStar.png";
import imageUpload from "/Images/image-upload.svg";
import axios from "axios";
import {
  addReviewListApi,
  myOrderListApi,
  reviewListApi,
} from "../../api/Constant";
import { ErrorMessage, Formik } from "formik";
import * as yup from "yup";
import CustomerComments from "./CustomerComments";

const reviewStars = [
  { imgUrl: orangePolygon },
  { imgUrl: orangePolygon },
  { imgUrl: orangePolygon },
  { imgUrl: orangePolygon },
  { imgUrl: normalPolygon },
];

const ratingStars = [
  { imgUrl: normalStar },
  { imgUrl: normalStar },
  { imgUrl: normalStar },
  { imgUrl: normalStar },
  { imgUrl: normalStar },
];

const bigStars = [
  { imgUrl: bigStar },
  { imgUrl: bigStar },
  { imgUrl: bigStar },
  { imgUrl: bigStar },
  { imgUrl: bigStar },
];

const progressBarValues = [
  {
    number: "5",
    now: "60",
    reviews: "5,321",
  },
  {
    number: "4",
    now: "40",
    reviews: "2,230",
  },
  {
    number: "3",
    now: "80",
    reviews: "3,345",
  },
  {
    number: "2",
    now: "30",
    reviews: "1023",
  },
  {
    number: "1",
    now: "20",
    reviews: "456",
  },
];

const defaultRatingValues = {
  ratingTitle: "",
  ratingDescription: "",
};

const ratingValidationSchema = yup.object().shape({
  ratingTitle: yup
    .string()
    .required("* Title is required!")
    .min(5, "Too short Title!"),

  ratingDescription: yup
    .string()
    .required("* Description is required!")
    .min(5, "Too short Description"),
});

const CustomerReview = ({ orderId, productData }) => {
  const [showRating, setShowRating] = useState(false);
  const [ratingProduct, setRatingProduct] = useState("");
  const [reviewList, setReviewList] = useState("");
  // console.log("order id rating pop up",orderId)

  // console.log("Product details Id", productData.id);

  const getMyOrderListDetail = async () => {
    try {
      const response = await axios.post(
        myOrderListApi,
        {},
        {
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        }
      );
      if (response.status === 200) {
        const filteredRatingProduct = response.data.result.data.filter(
          (ratingItem) => ratingItem.order_id == orderId
        );
        setRatingProduct(filteredRatingProduct);
        // console.log("Response in rating", filteredRatingProduct);
      }
    } catch (error) {
      console.log("Error while rating product", error);
    }
  };

  useEffect(() => {
    getMyOrderListDetail();
  }, []);

  const handleClose = () => {
    setShowRating(false);
  };

  const handleRatingClick = () => {
    if (orderId) {
      setShowRating(!showRating);
    } else {
      toast.error(
        "You can not rate this product because you haven't purchased it"
      );
    }
  };

  const handleButtonSubmit = async (values) => {
    console.log("values", values.ratingDescription);
    try {
      const response = await axios.post(
        addReviewListApi,
        {
          title: values.ratingTitle,
          feedback: values.ratingDescription,
          product_rate: 5,
          product_id:
            (ratingProduct && ratingProduct[0].product_id) || productData.id,
        },
        {
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        }
      );
      if (response.status === 200) {
        toast.success("Review Added successfully");
        setShowRating(false);
        // console.log("Review added successfully", response);
      }
    } catch (error) {
      console.log("Error while adding review", error);
    }
  };

  // console.log("rating product ", ratingProduct[0].product_id);

  const getReviewList = async () => {
    try {
      let productId = null;
      if (ratingProduct && ratingProduct[0].product_id) {
        productId = ratingProduct[0].product_id;
      } else if (productData && productData.id) {
        productId = productData.id;
      }

      if (!productId) {
        return;
      }

      const response = await axios.post(reviewListApi, {
        product_id: productId,
      });
      if (response.status === 200) {
        setReviewList(response.data.result.data);
        // console.log("Review list", response.data.result.data);
      }
    } catch (error) {
      console.log("Error while getting reviews", error);
    }
  };

  useEffect(() => {
    getReviewList();
  }, []);

  // console.log("review list", reviewList.length);

  return (
    <>
      <hr />
      <div>
        <p className="h4 fw-bold">Customer Reviews</p>
      </div>
      <Container>
        <Row>
          <Col className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6">
            <div className="mb-2">
              <div className="text-center">
                <div className="h1 fw-bolder">4</div>
                <div>
                  {reviewStars.map((item, index) => {
                    return <img src={item.imgUrl} key={index} />;
                  })}
                </div>
                <p>46,546 Gloabal ratings</p>
              </div>
            </div>
          </Col>
          <Col className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6">
            <ProgressbarReviewSection list={progressBarValues} />
          </Col>
        </Row>
        <hr />
        <Row className="text-center">
          <Col className="text-md-center col-12 col-md-12 col-lg-8 col-xl-6  ">
            <div>
              {bigStars.map((star, index) => {
                return <img src={star.imgUrl} key={index} />;
              })}
            </div>
          </Col>
          <Col className="mt-3 mt-lg-0 text-md-center col-12 col-md-12 col-lg-4 col-xl-6">
            <div onClick={handleRatingClick} className="rating-div">
              <p className=" fw-bold h4">Rate This Product</p>
            </div>
          </Col>
        </Row>
      </Container>

      <hr />
      {showRating && (
        <Formik
          initialValues={defaultRatingValues}
          validationSchema={ratingValidationSchema}
          onSubmit={(values) => handleButtonSubmit(values)}
        >
          {({ errors, values, handleChange, handleSubmit }) => (
            <Modal
              show={showRating}
              onHide={handleClose}
              animation={true}
              dialogClassName="custom-modal-width p-3"
            >
              <Modal.Header className="custom-modal-header" closeButton>
                <Modal.Title className="d-flex align-items-center justify-content-center w-100 fw-bold fs-3">
                  Add Review
                </Modal.Title>
              </Modal.Header>
              <div className="d-flex align-items-center justify-content-center gap-3 px-4 py-2">
                <div className="ratingImage-div">
                  <img
                    src={
                      ratingProduct &&
                      ratingProduct[0].product_info.product_images[0]
                        .product_image_url
                    }
                    className="ratingImage"
                  />
                </div>
                <div>
                  <span className="singlelineText-ratingPopup">
                    {ratingProduct && ratingProduct[0].product_info.name}
                  </span>
                </div>
              </div>

              <div className=" d-flex align-items-center px-4 py-2 gap-2 ">
                {ratingStars.map((eachRating, index) => {
                  return (
                    <img
                      key={index}
                      src={eachRating.imgUrl}
                      width="24px"
                      className="img-fluid ratingStar-image"
                    />
                  );
                })}
              </div>

              <div className="ratingForm-div">
                <Form onSubmit={handleSubmit}>
                  <Form.Group>
                    <Form.Label className="fw-bolder greyText">
                      Add Title
                    </Form.Label>
                    <Form.Control
                      className="rating-input"
                      onChange={handleChange}
                      value={values.ratingTitle}
                      name="ratingTitle"
                      autoComplete="off"
                    ></Form.Control>
                    {errors && errors.ratingTitle && (
                      <span className="displayErrorMessage">
                        {errors.ratingTitle}
                      </span>
                    )}

                    <div className="">
                      <div className="mt-3 ">
                        <span className="fw-bolder greyText">Add Photos</span>
                      </div>
                      <div className="uploadImage-div mt-2">
                        <img src={imageUpload} className="uploadImage" />
                      </div>
                    </div>

                    <Form.Label className="mt-3 greyText fw-bolder ">
                      Write Your Review
                    </Form.Label>
                    <Form.Control
                      className="ratingDescription-input"
                      name="ratingDescription"
                      onChange={handleChange}
                      value={values.ratingDescription}
                      as="textarea"
                      rows={4}
                    ></Form.Control>
                    {errors && errors.ratingDescription && (
                      <span className="displayErrorMessage">
                        {errors.ratingDescription}
                      </span>
                    )}
                  </Form.Group>

                  <button type="submit" className="btn mt-3 rating-button">
                    <span className="fw-bold">Submit Review</span>
                  </button>
                </Form>
              </div>
            </Modal>
          )}
        </Formik>
      )}

      {/*Review list component */}
      <CustomerComments reviewItem={reviewList} />
    </>
  );
};

export default CustomerReview;
