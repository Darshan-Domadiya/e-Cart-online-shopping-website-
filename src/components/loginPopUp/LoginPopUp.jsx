import { Formik, ErrorMessage } from "formik";
import React from "react";
import { Form, Button } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import * as yup from "yup";

const LoginPopUp = ({ show, handleClose }) => {
  const defaultValues = {
    name: "",
    email: "",
  };

  const validationSchema = yup.object({
    name: yup
      .string()
      .required("Name is required")
      .min(3, "Name must be more than 3 letters"),

    email: yup.string().required("Email is required").email("Invalid format"),
  });

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Login/Register</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Formik
            validationSchema={validationSchema}
            initialValues={defaultValues}
            onSubmit={(values, { resetForm }) => {
              alert(JSON.stringify(values));
              // console.log("values", values);
              resetForm();
            }}
          >
            {({ handleSubmit, handleChange, values }) => (
              <Form onSubmit={handleSubmit}>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label className="fw-bold">Name</Form.Label>
                  <Form.Control
                    type="text"
                    value={values.name}
                    name="name"
                    placeholder="Enter Your Name"
                    onChange={handleChange}
                  />
                  <small className="text-danger">
                    <ErrorMessage name="name" />
                  </small>
                  <br />
                  <Form.Label className=" fw-bold">Email address</Form.Label>
                  <Form.Control
                    type="email"
                    name="email"
                    value={values.email}
                    onChange={handleChange}
                    placeholder="Enter Valid Email"
                  />
                  <small className="text-danger">
                    <ErrorMessage name="email" />
                  </small>
                </Form.Group>

                <Modal.Footer>
                  <Button
                    variant="danter"
                    className="btn btn-danger"
                    onClick={handleClose}
                  >
                    Cancel
                  </Button>
                  <Button variant="primary" type="submit">
                    Login
                  </Button>
                </Modal.Footer>
              </Form>
            )}
          </Formik>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default LoginPopUp;
