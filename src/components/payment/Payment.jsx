import React, { useEffect, useRef, useState } from "react";
import {
  Button,
  Col,
  Container,
  Form,
  Modal,
  Navbar,
  Row,
} from "react-bootstrap";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "./payment.scss";
import visa from "/Images/visa.png";
import mastercard from "/Images/mastercard.png";
import american from "/Images/american.png";
import navbarLogo from "/Images/logoMain.svg";
import * as yup from "yup";
import orderComplete from "/Images/completeorder.png";

import { Formik, ErrorMessage } from "formik";
import axios from "axios";
import {
  getDeliveryAddressApi,
  myCartApi,
  placeOrderApi,
} from "../../api/Constant";
import { ToastContainer, toast } from "react-toastify";

const Payment = () => {
  const location = useLocation();
  const selectedAddressId = location.state.selectedAddress;
  // console.log("Id of selected Address", selectedAddressId);

  const ref = useRef(null);
  const navigate = useNavigate();

  const [selectRadio, setSelectRadio] = useState("same");
  const [orderCompletePopUp, setOrderCompletePopUp] = useState(false);

  const handleClose = () => setOrderCompletePopUp(false);
  const handleShow = () => setOrderCompletePopUp(true);

  const [addressItem, setAddressItem] = useState("");
  const [myCartItem, setMyCartItem] = useState("");

  const initialValues = {
    selectField: "",
    fullName: "",
    address: "",
    address2: "",
    state: "",
    city: "",
    phoneNumber: "",
    postcode: "",
  };

  const [formData, setFormData] = useState(initialValues);
  const validationSchema = yup.object({
    fullName: yup
      .string()
      .required("* Full Name is required")
      .min(5, "* Name must be more than 5 letters"),

    address: yup
      .string()
      .required("* Address is required")
      .min(10, "* Address must be more than 10 letters"),

    address2: yup
      .string()
      .required("* Address-2 is required")
      .min(5, "* Address2 must be more than 5 letters"),

    city: yup
      .string()
      .required("* City Name is required")
      .min(3, "City Name must be  3 letters."),

    state: yup
      .string()
      .required("* State Name is required")
      .min(3, "State Name must be  3 letters."),

    phoneNumber: yup
      .number()
      .required("* Phone number is required")
      .typeError("That doesn't look like phone number")
      .positive("Phone number can not start with minus")
      .integer("Phone number can not be decimal number")
      .min(10, "Phone number must be length of 10"),

    postcode: yup
      .number()
      .required("* Post Code is required")
      .typeError("That doesn't look like post code.")
      .positive("Postcode can not start with minus")
      .integer("Postcode can not be decimal number")
      .min(6, "Postcode must be length of 6"),

    selectField: yup.string().required("* Please select country"),
  });

  //   API calls

  //   Get Delivery Address api call to display address
  const displayAddressInPayment = async () => {
    try {
      const response = await axios.get(getDeliveryAddressApi, {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      });
      if (response.status === 200) {
        // console.log("Address in payment ", response.data.result);
        if (response.data.result) {
          const filteredAddress = response.data.result.find(
            (eachAddressItem) => eachAddressItem.id === selectedAddressId
          );
          setAddressItem(filteredAddress);
        }
        // console.log(address);
      }
    } catch (error) {
      console.log("Error while displaying address in payment page", error);
    }
  };

  // My-cart api to display order summary details and product details.
  const getMyCartApi = async () => {
    try {
      const response = await axios.post(
        myCartApi,
        {},
        {
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        }
      );
      if (response.status === 200) {
        setMyCartItem(response.data.result);
        // console.log("data of my-cart api in payment", response.data.result);
      }
    } catch (error) {
      console.log("Error in my-cart api call", error);
    }
  };

  useEffect(() => {
    displayAddressInPayment();
    getMyCartApi();
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const shippingAddress = {
    country: addressItem.country,
    full_name: addressItem.full_name,
    state: addressItem.state,
    city: addressItem.city,
    address: addressItem.address,
    address2: addressItem.address2,
    postcode: addressItem.postcode,
    mobile: addressItem.mobile,
  };

  const billingAddress = {
    country: formData.selectField,
    full_name: formData.fullName,
    state: formData.state,
    city: formData.city,
    postcode: formData.postcode,
    address: formData.address,
    address2: formData.address2,
    mobile: formData.phoneNumber,
  };

  //   console.log(billingAddress);

  const handlePayment = async () => {
    try {
      const response = await axios.post(
        placeOrderApi,
        {
          address_id: selectedAddressId,
          delivery_type_id: 1,
          shipping_address: shippingAddress,
          billing_address:
            selectRadio === "same" ? shippingAddress : billingAddress,
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );

      if (response.status === 200) {
        // console.log("Successfull", response.data.result);
        setOrderCompletePopUp(true);
        setTimeout(() => {
          navigate("/");
        }, 5000);
      }
    } catch (error) {
      toast.warn("Please fill different address fields", {
        position: "top-center",
      });
    }
  };

  const handleRadioChange = (value) => {
    setSelectRadio(value);
  };

  const handleReturnHome = () => {
    navigate("/");
  };

  return (
    <>
      {/* Header section for NavbarLogo and Payment Page Name */}
      <header className="shadow-sm  main-header">
        <Container fluid className="mt-2 mb-3 p-3">
          <Row className="d-flex align-items-center text-center  justify-content-between px-1">
            <Col className="col-6 col-sm-6 col-md-4">
              <header className="gap-1">
                <Link to="/">
                  <div style={{ width: "110px" }}>
                    <img
                      src={navbarLogo}
                      className=" align-top mx-1 w-100 img-fluid"
                    />
                  </div>
                </Link>
              </header>
            </Col>

            <Col className="d-none d-md-flex justify-content-center">
              <span className="fs-2">Checkout</span>
            </Col>

            <Col className="d-none d-md-flex justify-content-between">
              <span className="fs-2"></span>
            </Col>
          </Row>
        </Container>
      </header>

      {/* Body container  */}
      <Container className="mt-5 mb-5">
        <Row>
          <Col className="col-12 col-md-8">
            <p className="fw-bold fs-1">Payment</p>
            <hr />

            {/* Row for delivery address  */}
            <Row className="">
              <Col>
                {" "}
                <span className="greyText fontweight  fs-4">
                  Delivery Address
                </span>
                <div className="deliverAddress-div mt-3">
                  <span>
                    <span className="fw-bold h5">{addressItem?.full_name}</span>{" "}
                    <br />
                    {addressItem?.address}, {addressItem?.address2},{" "}
                    {addressItem?.city}, {addressItem?.country},{" "}
                    {addressItem?.postcode} <br />
                    Phone number: +91 {addressItem?.mobile}
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
                    <Form.Check type="radio" checked />
                    <div className="d-flex flex-column">
                      <span className="fw-bold">Standard</span>{" "}
                      {myCartItem.standard_expected_delivery}
                    </div>
                  </div>
                  <div className="d-flex gap-2 mt-2">
                    <Form.Check type="radio" />
                    <div className="d-flex flex-column">
                      <span className="fw-bold">
                        {" "}
                        Express: $12, Free over $200
                      </span>
                      {myCartItem.express_expected_delivery}
                    </div>
                  </div>
                </div>
              </Col>
            </Row>

            {/* Row for cart product details */}
            <Row className="mt-4">
              <span className="mb-2 greyText fw-bold">Item Details (3)</span>
              <hr />
              <Col className="d-flex gap-4">
                {myCartItem &&
                  myCartItem.user_cart &&
                  myCartItem.user_cart.length > 0 &&
                  myCartItem.user_cart.map((eachItem, index) => {
                    return (
                      <div key={index} className="d-flex flex-column ">
                        <div className="paymentPageImage-div">
                          <img
                            src={
                              eachItem.product_info.product_images[0]
                                .product_image_url
                            }
                            className="paymentPage-image"
                          />
                        </div>
                        <div className="d-flex gap-3 mx-2">
                          <div className="fs-4 fw-bold">
                            $<span>{eachItem.product_info.sale_price}</span>
                          </div>
                          <div className="mt-2">
                            <strike>
                              <span>${eachItem.product_info.main_rrp}</span>
                            </strike>
                          </div>
                        </div>
                        <div className="d-flex  align-items-center gap-2 mx-2 mt-1">
                          <span className="greyText fw-bold"> Quantity :</span>
                          <span>{eachItem.quantity}</span>
                        </div>
                      </div>
                    );
                  })}
              </Col>
            </Row>

            <Row className="mt-5">
              <span className="mb-2 fw-bold fs-3">Payment Method</span>
              <hr />
              <div className="d-flex align-items-center gap-2">
                <Form.Check type="radio" checked />
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
                  onSubmit={(values, { resetForm }) => {
                    console.log("values of debit/credit card", values);
                    resetForm();
                  }}
                >
                  {({}) => {
                    return (
                      <div className="debitcard">
                        <Form>
                          <Form.Group>
                            <Form.Label className="fw-bold">
                              Name on Card
                              <sup className="text-danger mx-1">*</sup>
                            </Form.Label>
                            <Form.Control
                              className="register-input "
                              type="text"
                              autoComplete="off"
                            />

                            <br />

                            <Form.Label className="fw-bold">
                              Card Number
                              <sup className="text-danger mx-1">*</sup>
                            </Form.Label>
                            <Form.Control
                              className="register-input w-100"
                              type="text"
                              autoComplete="off"
                            />

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
                                  autoComplete="off"
                                />
                              </div>

                              <div>
                                <Form.Label className="fw-bold">
                                  Year
                                  <sup className="text-danger mx-1">*</sup>
                                </Form.Label>
                                <Form.Control
                                  className="register-input "
                                  type="text"
                                  autoComplete="off"
                                />
                              </div>

                              <div>
                                <Form.Label className="fw-bold">
                                  CVV
                                  <sup className="text-danger mx-1">*</sup>
                                </Form.Label>
                                <Form.Control
                                  className="register-input"
                                  type="text"
                                  autoComplete="off"
                                />
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
                <Form.Check
                  type="radio"
                  value="same"
                  onChange={() => handleRadioChange("same")}
                  checked={selectRadio == "same"}
                />
                Same as Delivery Address
              </div>
              <div className="d-flex align-items-center gap-2">
                <Form.Check
                  type="radio"
                  value="different"
                  onChange={() => handleRadioChange("different")}
                  checked={selectRadio == "different"}
                />
                Use Different Address
              </div>
              {selectRadio === "different" && (
                <div className="mx-5 mt-3">
                  <Formik
                    innerRef={ref}
                    validationSchema={validationSchema}
                    initialValues={initialValues}
                    onSubmit={(values, { resetForm }) => {
                      resetForm();
                    }}
                  >
                    {({ values }) => {
                      return (
                        <div className="different-address">
                          <Form>
                            <Form.Group>
                              <div className="d-flex justify-content-around align-items-center ">
                                <div>
                                  <Form.Label className="fw-bold">
                                    Country/Region
                                    <sup className="text-danger mx-1">*</sup>
                                  </Form.Label>
                                  <Form.Select
                                    className="selectInput-payment text-dark px-3"
                                    value={formData.selectField}
                                    onChange={(e) => handleChange(e)}
                                    name="selectField"
                                  >
                                    <option className="text-dark">
                                      Select...
                                      <sup className="text-danger">*</sup>
                                    </option>
                                    <option value="India">India</option>
                                    <option value="UK">UK</option>
                                    <option value="USA">USA</option>
                                  </Form.Select>
                                  <small className="mx-2 text-danger">
                                    <ErrorMessage name="selectField" />
                                  </small>
                                  <br />

                                  <Form.Label className="fw-bold">
                                    Address
                                    <sup className="text-danger mx-1">*</sup>
                                  </Form.Label>
                                  <Form.Control
                                    className="register-input"
                                    type="text"
                                    value={formData.address}
                                    name="address"
                                    onChange={(e) => handleChange(e)}
                                    autoComplete="off"
                                  />
                                  <small className="text-danger">
                                    <ErrorMessage name="address" />
                                  </small>
                                  <br />

                                  <Form.Label className="fw-bold">
                                    City
                                    <sup className="text-danger mx-1">*</sup>
                                  </Form.Label>
                                  <Form.Control
                                    className="register-input"
                                    type="text"
                                    value={formData.city}
                                    name="city"
                                    onChange={(e) => handleChange(e)}
                                    autoComplete="off"
                                  />
                                  <small className="text-danger">
                                    <ErrorMessage name="city" />
                                  </small>
                                  <br />

                                  <Form.Label className="fw-bold">
                                    PostCode
                                    <sup className="text-danger mx-1">*</sup>
                                  </Form.Label>
                                  <Form.Control
                                    className="register-input w-100"
                                    type="text"
                                    value={formData.postcode}
                                    name="postcode"
                                    onChange={(e) => handleChange(e)}
                                    autoComplete="off"
                                  />
                                  <small className="text-danger">
                                    <ErrorMessage name="postcode" />
                                  </small>
                                  <br />
                                </div>

                                <div>
                                  <Form.Label className="fw-bold">
                                    Full Name
                                    <sup className="text-danger mx-1">*</sup>
                                  </Form.Label>
                                  <Form.Control
                                    className="register-input "
                                    type="text"
                                    value={formData.fullName}
                                    name="fullName"
                                    onChange={(e) => handleChange(e)}
                                    autoComplete="off"
                                  />
                                  <small className="text-danger">
                                    <ErrorMessage name="fullName" />
                                  </small>
                                  <br />

                                  <Form.Label className="fw-bold">
                                    Apartment,Suite,etc.
                                    <sup className="text-danger mx-1">*</sup>
                                  </Form.Label>
                                  <Form.Control
                                    className="register-input w-100"
                                    type="text"
                                    value={formData.address2}
                                    name="address2"
                                    onChange={(e) => handleChange(e)}
                                    autoComplete="off"
                                  />
                                  <small className="text-danger">
                                    <ErrorMessage name="address2" />
                                  </small>
                                  <br />

                                  <Form.Label className="fw-bold">
                                    State
                                    <sup className="text-danger mx-1">*</sup>
                                  </Form.Label>
                                  <Form.Control
                                    className="register-input w-100"
                                    type="text"
                                    value={formData.state}
                                    name="state"
                                    onChange={(e) => handleChange(e)}
                                    autoComplete="off"
                                  />
                                  <small className="text-danger">
                                    <ErrorMessage name="state" />
                                  </small>
                                  <br />

                                  <Form.Label className="fw-bold">
                                    Phone
                                  </Form.Label>
                                  <Form.Control
                                    className="register-input"
                                    type="number"
                                    value={formData.phoneNumber}
                                    name="phoneNumber"
                                    onChange={(e) => handleChange(e)}
                                    autoComplete="off"
                                  />
                                  <small className="text-danger">
                                    <ErrorMessage name="phoneNumber" />
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
              )}
            </Row>
          </Col>
          {orderCompletePopUp && (
            <>
              <Modal
                show={orderCompletePopUp}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
                centered
              >
                <Modal.Body className="d-flex flex-column align-items-center justify-content-center">
                  <span className="fs-2">Thank You for Your Order!!!</span>
                  <img
                    src={orderComplete}
                    className="img-fluid rounded-5"
                    height="110px"
                    width="110px"
                  />
                </Modal.Body>
                <Modal.Footer>
                  <Button variant="secondary" onClick={handleReturnHome}>
                    Close
                  </Button>
                </Modal.Footer>
              </Modal>
            </>
          )}
          {/* Column for order summary box */}
          <Col className="col-12 col-md-4">
            {" "}
            <div className="cardBackground-payment px-3 mx-md-5 mx-lg-0 ">
              <p className="h4 mt-4">Order Summary</p>
              <hr />
              <div className="d-flex align-items-center justify-content-between">
                <div>
                  <p>
                    Item<span>(s)</span> Total
                  </p>
                </div>
                <div>
                  <p>${myCartItem.cart_total}</p>
                </div>
              </div>

              <div className="d-flex align-items-center justify-content-between">
                <div>
                  <p>
                    Item<span>(s)</span> Discount
                  </p>
                </div>
                <div>
                  <p>${myCartItem.product_discount_total}</p>
                </div>
              </div>

              <div className="d-flex align-items-center justify-content-between">
                <div>
                  <p>
                    Subtotal<span>:</span>
                  </p>
                </div>
                <div>
                  <p>${myCartItem.cart_sub_total}</p>
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
                  <p>${myCartItem.grand_total}</p>
                </div>
              </div>
              <div className="text-center">
                <Button
                  type="submit"
                  className="custom-button w-100"
                  onClick={() => handlePayment()}
                >
                  Pay Now
                </Button>
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
