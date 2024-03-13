import React from "react";
import "./registerpopup.scss";
import { Form } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import * as yup from "yup";
import { Formik, ErrorMessage } from "formik";

const RegisterPopUp = ({ show, handleClose }) => {
  const defaultValues = {
    name: "",
    email: "",
    phoneNumber: "",
  };

  const validationSchema = yup.object({
    name: yup
      .string()
      .required("* Name is required")
      .min(3, "* Name must be more than 3 letters"),

    email: yup
      .string()
      .required("* Email is required")
      .email("* Invalid format"),

    phoneNumber: yup
      .number()
      .required("* Phone number is required")
      .typeError("That doesn't look like phone number")
      .positive("Phone number can not start with minus")
      .integer("Phone number can not be decimal number")
      .min(10, "Phone number must be length of 10"),
  });

  return (
    <>
      <Modal show={show} onHide={handleClose} backdrop="static">
        <Modal.Header className="border-bottom-0 p-sm-4 " closeButton>
          <Modal.Title className="text-start">
            <div>
              <span className="fw-bold h2 ">Looks like you are new here</span>
            </div>
            <div>
              <small className="fs-6 text-muted  ">
                Please fill your information below.
              </small>
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
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label className="fw-bold">
                    <sup className="text-danger mx-1">*</sup>Name
                  </Form.Label>
                  <Form.Control
                    className="register-input"
                    type="text"
                    value={values.name}
                    name="name"
                    onChange={handleChange}
                    autoComplete="off"
                  />
                  <small className="text-danger">
                    <ErrorMessage name="name" />
                  </small>
                  <br />

                  <Form.Label className="fw-bold">
                    <sup className="text-danger mx-1">*</sup>Phone Number
                  </Form.Label>
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

                  <Form.Label className="fw-bold">
                    <sup className="text-danger mx-1">*</sup>Email
                  </Form.Label>
                  <Form.Control
                    className="register-input"
                    type="email"
                    value={values.email}
                    name="email"
                    onChange={handleChange}
                    autoComplete="off"
                  />
                  <small className="text-danger">
                    <ErrorMessage name="email" />
                  </small>
                  <br />

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

export default RegisterPopUp;
