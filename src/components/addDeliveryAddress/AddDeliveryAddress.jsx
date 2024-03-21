import React from "react";
import { Col, Form, Row } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import * as yup from "yup";
import { Formik, ErrorMessage } from "formik";
import "./addDeliveryAddress.scss";

const AddDeliveryAddress = ({ show, handleClose }) => {
  const defaultValues = {
    fullName: "",
    email: "",
    phoneNumber: "",
    city: "",
    postcode: "",
    address: "",
    selectField: "",
  };

  const validationSchema = yup.object({
    fullName: yup
      .string()
      .required("* Full Name is required")
      .min(5, "* Name must be more than 5 letters"),

    address: yup
      .string()
      .required("* Address is required")
      .min(15, "* Address must be more than 15 letters"),

    email: yup
      .string()
      .required("* Email is required")
      .email("* Invalid format"),

    city: yup
      .string()
      .required("* City Name is required")
      .min(3, "City Name must be  3 letters."),

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

  return (
    <>
      <Modal show={show} onHide={handleClose} backdrop="static" className="p-0">
        <Modal.Header className="border-bottom-0 p-sm-4 " closeButton>
          <Modal.Title className="text-start">
            <div>
              <span className="fw-bold h2 ">Add Delivery Address</span>
            </div>
          </Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Formik
            validationSchema={validationSchema}
            initialValues={defaultValues}
            onSubmit={(values, { resetForm }) => {
              alert(JSON.stringify(values));
              resetForm();
            }}
          >
            {({ handleSubmit, handleChange, values }) => (
              <Form onSubmit={handleSubmit} className="px-3">
                <Form.Group
                  className="mb-3 "
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Select
                    aria-label="Default select example"
                    className="select-input text-dark px-3"
                    value={values.selectField}
                    onChange={handleChange}
                    name="selectField"
                  >
                    <option className="text-dark">
                      Country/Region <sup className="text-danger">*</sup>
                    </option>
                    <option value="india">India</option>
                    <option value="uk">UK</option>
                    <option value="usa">USA</option>
                  </Form.Select>
                  <small className="mx-2 text-danger">
                    <ErrorMessage name="selectField" />
                  </small>
                  <br />

                  <Form.Label className="fw-bold">
                    Full Name<sup className="text-danger mx-1">*</sup>
                  </Form.Label>
                  <Form.Control
                    className="register-input"
                    type="text"
                    value={values.fullName}
                    name="fullName"
                    onChange={handleChange}
                    autoComplete="off"
                  />
                  <small className="text-danger">
                    <ErrorMessage name="fullName" />
                  </small>
                  <br />

                  <Form.Label className="fw-bold">
                    Address<sup className="text-danger mx-1">*</sup>
                  </Form.Label>
                  <Form.Control
                    className="register-input"
                    type="text"
                    value={values.address}
                    name="address"
                    onChange={handleChange}
                    autoComplete="off"
                  />
                  <small className="text-danger">
                    <ErrorMessage name="address" />
                  </small>
                  <br />

                  <Row className="d-flex gap-2 p-0">
                    <Col className="col-12 col-sm-5">
                      <div>
                        <Form.Label className="fw-bold">City</Form.Label>
                      </div>
                      <div>
                        <Form.Control
                          className="register-input"
                          type="text"
                          value={values.city}
                          name="city"
                          onChange={handleChange}
                          autoComplete="off"
                        />
                        <small className="text-danger">
                          <ErrorMessage name="city" />
                        </small>
                      </div>
                    </Col>

                    <Col className="col-12 col-sm-5">
                      <div>
                        <Form.Label className="fw-bold">
                          PostCode<sup className="text-danger mx-1">*</sup>
                        </Form.Label>
                      </div>
                      <div>
                        <Form.Control
                          className="register-input"
                          type="number"
                          value={values.postcode}
                          name="postcode"
                          onChange={handleChange}
                          autoComplete="off"
                        />
                        <small className="text-danger">
                          <ErrorMessage name="postcode" />
                        </small>
                      </div>
                    </Col>
                  </Row>

                  <Form.Label className="fw-bold mt-3">Phone</Form.Label>
                  <Form.Control
                    className="register-input"
                    type="number"
                    value={values.phoneNumber}
                    name="phoneNumber"
                    onChange={handleChange}
                    autoComplete="off"
                  />
                  <small className="text-danger">
                    <ErrorMessage name="phoneNumber" />
                  </small>
                  <br />

                  <div className="d-flex gap-2 mt-2 ">
                    <Form.Check aria-label="option 1" />
                    <span>Save this information for next time</span>
                  </div>

                  {/* <Row className="d-flex align-items-center justify-content-between">
                    <Col className="col-12  d-flex gap-2">
                    
                      <Form.Check aria-label="option 1" />{" "}
                      <span>Text me with news and offers</span>
                    </Col>
                    <Col className="col-12 mx-3 d-flex align-items-center gap-2">
                  <span className="greyText">  Make this default </span>
                      <Form.Check // prettier-ignore
                        type="switch"
                        id="custom-switch"
                      />
                    </Col>
                  </Row> */}

                  <button className="register-button text-white w-100 p-2 border-0 mt-3">
                    Continue
                  </button>
                </Form.Group>
              </Form>
            )}
          </Formik>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default AddDeliveryAddress;
