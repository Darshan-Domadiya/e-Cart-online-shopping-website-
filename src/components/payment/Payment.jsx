import React from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import "./payment.scss";
import testImage1 from "/Images/paymentPageImage.png";
import testImage2 from "/Images/paymentPageImage2.png";
import testImage3 from "/Images/paymentPageImage3.png";
import visa from "/Images/visa.png";
import mastercard from "/Images/mastercard.png";
import american from "/Images/american.png";
import paypal from "/Images/paypal.png";
import * as yup from "yup";
import { Formik, ErrorMessage } from "formik";

const Payment = () => {
  const location = useLocation();
  const selectedAddressId = location.state.selectedAddress;
  //   console.log("Id of selected Address", selectedAddressId);

  const initialValues = {
    cardName: "",
    cardNumber: "",
    month: "",
    year: "",
    cvv: "",
  };

  const validationSchema = yup.object({
    cardName: yup.string().required("Name on Card is required"),

    cardNumber: yup
      .number()
      .required("Card Number is required")
      .min(16, "Card Number's length should be 16"),

    month: yup.number().required("Month on card is required"),

    year: yup.number().required("Year on card is required"),

    cvv: yup
      .number()
      .required("CVV is required")
      .min(3, "CVV should be exact 3 numbers"),
  });

  return (
    <>
      <Container className="mt-5">
        <Row>
          <Col className="col-12 col-md-8">
            <p className="fw-bold fs-1">Payment</p>
            <hr />
            <Row className="">
              <Col>
                {" "}
                <span className="greyText fontweight  fs-4">
                  Delivery Address
                </span>
                <div className="deliverAddress-div mt-3">
                  <span>
                    <span className="fw-bold h5">Stephen Parker</span> <br />
                    22 Walden Street, Greenland, UK, KW14 3XY <br />
                    Phone number: +44 9876543210
                  </span>
                </div>
                <span className="changeAddress fw-bold  d-flex justify-content-end mt-2">
                  {" "}
                  Change Address
                </span>
              </Col>
              {/* <span className="vertical-line"></span> */}

              <Col className="">
                {" "}
                <span className="greyText fontweight fs-4">
                  Delivery Method
                </span>
                <div className="mt-4">
                  <div className="d-flex gap-2">
                    <Form.Check type="radio" />
                    <div className="d-flex flex-column">
                      <span className="fw-bold">Standard</span> Expected
                      Delivery: Aug 10-12
                    </div>
                  </div>
                  <div className="d-flex gap-2 mt-2">
                    <Form.Check type="radio" />
                    <span className="fw-bold">
                      {" "}
                      Express: $12, Free over $200
                    </span>
                  </div>
                </div>
              </Col>
            </Row>
            <Row className="mt-4">
              <span className="mb-2 greyText fw-bold">Item Details (3)</span>
              <hr />
              <Col className="d-flex gap-4">
                <div className="d-flex flex-column ">
                  <div>
                    {" "}
                    <img src={testImage1} className="img-fluid" />
                  </div>
                  <div className="d-flex gap-3">
                    {" "}
                    <div>Price</div> <div>Less Price</div>
                  </div>
                  <div className="d-flex  align-items-center gap-2">
                    Qty : <span className="quantity-box px-3">count</span>
                  </div>
                </div>
                <div className="d-flex flex-column ">
                  <div>
                    {" "}
                    <img src={testImage2} className="img-fluid" />
                  </div>
                  <div className="d-flex gap-3">
                    {" "}
                    <div>Price</div> <div>Less Price</div>
                  </div>
                  <div className="d-flex  align-items-center gap-2">
                    Qty : <span className="quantity-box px-3">count</span>
                  </div>
                </div>
                <div className="d-flex flex-column ">
                  <div>
                    {" "}
                    <img src={testImage3} className="img-fluid" />
                  </div>
                  <div className="d-flex gap-3">
                    {" "}
                    <div>Price</div> <div>Less Price</div>
                  </div>
                  <div className="d-flex  align-items-center gap-2">
                    Qty : <span className="quantity-box px-3">count</span>
                  </div>
                </div>
              </Col>
            </Row>

            <Row className="mt-5">
              <span className="mb-2 fw-bold fs-3">Payment Method</span>
              <hr />
              <div className="d-flex align-items-center gap-2">
                <Form.Check type="radio" />
                <div className="d-flex align-items-center">
                  <span>Debit/Credit Card</span>
                  <div>
                    <img src={visa} className="img-fluid" />{" "}
                  </div>
                  <div>
                    <img src={mastercard} className="img-fluid" />{" "}
                  </div>
                  <div>
                    <img src={american} className="img-fluid" />{" "}
                  </div>
                </div>
              </div>
              <div className="mx-5 mt-3">
                <Formik
                  validationSchema={validationSchema}
                  initialValues={initialValues}
                  onSubmit={(values, { resetForm }) => {
                    console.log("values of debit/credit card", values);
                    resetForm();
                  }}
                >
                  {({ handleSubmit, handleChange, values }) => {
                    return (
                      <div className="debitcard">
                        <Form onSubmit={handleSubmit}>
                          <Form.Group>
                            <Form.Label className="fw-bold">
                              Name on Card
                              <sup className="text-danger mx-1">*</sup>
                            </Form.Label>
                            <Form.Control
                              className="register-input "
                              type="text"
                              value={values.cardName}
                              name="cardName"
                              onChange={handleChange}
                              autoComplete="off"
                            />
                            <small className="text-danger">
                              <ErrorMessage name="cardName" />
                            </small>
                            <br />

                            <Form.Label className="fw-bold">
                              Card Number
                              <sup className="text-danger mx-1">*</sup>
                            </Form.Label>
                            <Form.Control
                              className="register-input w-100"
                              type="text"
                              value={values.cardNumber}
                              name="cardNumber"
                              onChange={handleChange}
                              autoComplete="off"
                            />
                            <small className="text-danger">
                              <ErrorMessage name="cardNumber" />
                            </small>
                            <br />

                            <div className="d-flex align-items-center justify-content-center gap-3">
                              <div>
                                <Form.Label className="fw-bold">
                                  Month{" "}
                                  <sup className="text-danger mx-1">*</sup>
                                </Form.Label>
                                <Form.Control
                                  className="register-input "
                                  type="text"
                                  value={values.month}
                                  name="month"
                                  onChange={handleChange}
                                  autoComplete="off"
                                />
                                <small className="text-danger">
                                  <ErrorMessage name="month" />
                                </small>
                              </div>

                              <div>
                                <Form.Label className="fw-bold">
                                  Year
                                  <sup className="text-danger mx-1">*</sup>
                                </Form.Label>
                                <Form.Control
                                  className="register-input "
                                  type="text"
                                  value={values.year}
                                  name="year"
                                  onChange={handleChange}
                                  autoComplete="off"
                                />
                                <small className="text-danger">
                                  <ErrorMessage name="year" />
                                </small>
                              </div>

                              <div>
                                <Form.Label className="fw-bold">
                                  CVV
                                  <sup className="text-danger mx-1">*</sup>
                                </Form.Label>
                                <Form.Control
                                  className="register-input"
                                  type="text"
                                  value={values.cvv}
                                  name="cvv"
                                  onChange={handleChange}
                                  autoComplete="off"
                                />
                                <small className="text-danger">
                                  <ErrorMessage name="cvv" />
                                </small>
                              </div>
                            </div>
                          </Form.Group>
                        </Form>
                      </div>
                    );
                  }}
                </Formik>
              </div>
            </Row>

            <Row className="mt-5">
              <span className="mb-2 fw-bold fs-3">Billing Address</span>
              <hr />
              <div className="d-flex align-items-center gap-2">
                {" "}
                <Form.Check type="radio" /> Same as Delivery Address
              </div>
              <div className="d-flex align-items-center gap-2">
                {" "}
                <Form.Check type="radio" />
                Use Different Address
              </div>
              <div className="mx-5 mt-3">
                <Formik
                  validationSchema={validationSchema}
                  initialValues={initialValues}
                  onSubmit={(values, { resetForm }) => {
                    console.log("values of debit/credit card", values);
                    resetForm();
                  }}
                >
                  {({ handleSubmit, handleChange, values }) => {
                    return (
                      <div className="different-address">
                        <Form onSubmit={handleSubmit}>
                          <Form.Group>
                            <div className="d-flex align-items-center gap-3">
                              <div>
                                <Form.Label className="fw-bold">
                                  Name on Card
                                  <sup className="text-danger mx-1">*</sup>
                                </Form.Label>
                                <Form.Control
                                  className="register-input "
                                  type="text"
                                  value={values.cardName}
                                  name="cardName"
                                  onChange={handleChange}
                                  autoComplete="off"
                                />
                                <small className="text-danger">
                                  <ErrorMessage name="cardName" />
                                </small>
                                <br />

                                <Form.Label className="fw-bold">
                                  Card Number
                                  <sup className="text-danger mx-1">*</sup>
                                </Form.Label>
                                <Form.Control
                                  className="register-input w-100"
                                  type="text"
                                  value={values.cardNumber}
                                  name="cardNumber"
                                  onChange={handleChange}
                                  autoComplete="off"
                                />
                                <small className="text-danger">
                                  <ErrorMessage name="cardNumber" />
                                </small>
                                <br />
                                <Form.Label className="fw-bold">
                                  Card Number
                                  <sup className="text-danger mx-1">*</sup>
                                </Form.Label>
                                <Form.Control
                                  className="register-input w-100"
                                  type="text"
                                  value={values.cardNumber}
                                  name="cardNumber"
                                  onChange={handleChange}
                                  autoComplete="off"
                                />
                                <small className="text-danger">
                                  <ErrorMessage name="cardNumber" />
                                </small>
                                <br />
                                <Form.Label className="fw-bold">
                                  Card Number
                                  <sup className="text-danger mx-1">*</sup>
                                </Form.Label>
                                <Form.Control
                                  className="register-input w-100"
                                  type="text"
                                  value={values.cardNumber}
                                  name="cardNumber"
                                  onChange={handleChange}
                                  autoComplete="off"
                                />
                                <small className="text-danger">
                                  <ErrorMessage name="cardNumber" />
                                </small>
                                <br />
                              </div>
                              <div>
                                <Form.Label className="fw-bold">
                                  Name on Card
                                  <sup className="text-danger mx-1">*</sup>
                                </Form.Label>
                                <Form.Control
                                  className="register-input "
                                  type="text"
                                  value={values.cardName}
                                  name="cardName"
                                  onChange={handleChange}
                                  autoComplete="off"
                                />
                                <small className="text-danger">
                                  <ErrorMessage name="cardName" />
                                </small>
                                <br />

                                <Form.Label className="fw-bold">
                                  Card Number
                                  <sup className="text-danger mx-1">*</sup>
                                </Form.Label>
                                <Form.Control
                                  className="register-input w-100"
                                  type="text"
                                  value={values.cardNumber}
                                  name="cardNumber"
                                  onChange={handleChange}
                                  autoComplete="off"
                                />
                                <small className="text-danger">
                                  <ErrorMessage name="cardNumber" />
                                </small>
                                <br />
                                <Form.Label className="fw-bold">
                                  Card Number
                                  <sup className="text-danger mx-1">*</sup>
                                </Form.Label>
                                <Form.Control
                                  className="register-input w-100"
                                  type="text"
                                  value={values.cardNumber}
                                  name="cardNumber"
                                  onChange={handleChange}
                                  autoComplete="off"
                                />
                                <small className="text-danger">
                                  <ErrorMessage name="cardNumber" />
                                </small>
                                <br />
                                <Form.Label className="fw-bold">
                                  Card Number
                                  <sup className="text-danger mx-1">*</sup>
                                </Form.Label>
                                <Form.Control
                                  className="register-input w-100"
                                  type="text"
                                  value={values.cardNumber}
                                  name="cardNumber"
                                  onChange={handleChange}
                                  autoComplete="off"
                                />
                                <small className="text-danger">
                                  <ErrorMessage name="cardNumber" />
                                </small>
                                <br />
                              </div>
                            </div>
                          </Form.Group>
                        </Form>
                      </div>
                    );
                  }}
                </Formik>
              </div>
            </Row>
          </Col>

          {/* Column for order summary box */}
          <Col className="col-12 col-md-4">
            {" "}
            <div className="cardBackground px-3 mx-md-5 mx-lg-0 ">
              <p className="h4 mt-4">Order Summary</p>
              <hr />
              <div className="d-flex align-items-center justify-content-between">
                <div>
                  <p>
                    Item<span>(s)</span> Total
                  </p>
                </div>
                <div>
                  <p>$873</p>
                </div>
              </div>

              <div className="d-flex align-items-center justify-content-between">
                <div>
                  <p>
                    Item<span>(s)</span> Discount
                  </p>
                </div>
                <div>
                  <p>$87387</p>
                </div>
              </div>

              <div className="d-flex align-items-center justify-content-between">
                <div>
                  <p>
                    Subtotal<span>:</span>
                  </p>
                </div>
                <div>
                  <p>$5536</p>
                </div>
              </div>

              <div className="d-flex align-items-center justify-content-between">
                <div>
                  <p>
                    Delivery<span>:</span>
                  </p>
                </div>
                <div>
                  <p className="text-success fw-bold">Free</p>
                </div>
              </div>
              <hr />
              <div className="d-flex align-items-center justify-content-between">
                <div>
                  <p>
                    Total<span>(3 Items) :</span>
                  </p>
                </div>
                <div>
                  <p>$83943</p>
                </div>
              </div>
              <div className="text-center">
                <Button className="custom-button w-100">Pay Now</Button>
              </div>
              <div className="mt-2">
                <p>
                  Order within <span className="text-warning">2h 25m</span> and
                  choose <span className="text-warning">Express Shipping</span>{" "}
                  to get it by{" "}
                  <span className="text-warning">Tuesday 25/7/2023</span>
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Payment;
