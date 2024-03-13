import { Formik, ErrorMessage } from "formik";
import React, { useState } from "react";
import { Form } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import * as yup from "yup";
import "./loginpopup.scss";
import google from "/Images/googleLogo.png";
import apple from "/Images/appleLogo.png";
import RegisterPopUp from "../registerpopup/RegisterPopUp";

const LoginPopUp = ({ show, handleClose }) => {
  //For showing Register pop up on click of signUp button.
  const [showRegister, setShowRegister] = useState(false);

  const handleRegister = () => {
    setShowRegister(true);
  };

  const defaultValues = {
    username: "",
  };

  const validationSchema = yup.object({
    username: yup
      .string()
      .required("* UserName is required")
      .min(3, "* UserName must be more than 3 letters"),
  });

  return (
    <>
      {" "}
      {!showRegister && (
        <Modal show={show} onHide={handleClose} backdrop="static">
          <Modal.Header className="border-bottom-0 p-4 " closeButton>
            <Modal.Title className="text-start">
              <div>
                <span className="fw-bold h2 ">Sign In / Register</span>
              </div>
              <div>
                <small className="fs-6 text-muted  ">
                  Please enter your phone number or email below
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
                <Form onSubmit={handleSubmit} className="px-4">
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Label className="fw-bold ">
                      Enter Phone number or Email
                    </Form.Label>
                    <Form.Control
                      className="popup-input"
                      type="text"
                      value={values.username}
                      name="username"
                      onChange={handleChange}
                      autoComplete="off"
                    />
                    <small className="text-danger">
                      <ErrorMessage name="username" />
                    </small>
                    <br />
                    <button
                      onClick={() => handleLogin}
                      className="mt-2 continue-button btn btn-primary w-100"
                    >
                      Continue
                    </button>
                    <p className="greyText continue-text text-center mt-4">
                      Or Continue with
                    </p>

                    <div className="d-flex gap-3 align-items-center justify-content-center">
                      <button className="login-logos login-logos px-4 py-2 d-flex gap-2 align-items-center justify-content-center">
                        <img src={google} className="img-fluid" />
                        <span className="fw-bold">Google</span>
                      </button>
                      <button className="login-logos px-4 py-2 d-flex gap-2 align-items-center justify-content-center">
                        <img src={apple} className="img-fluid" />
                        <span className="fw-bold">Apple</span>
                      </button>
                    </div>

                    <div className="mt-3 text-center greyText ">
                      <small>
                        Don't have Account?{" "}
                        <span
                          style={{ cursor: "pointer" }}
                          onClick={handleRegister}
                          className=" fw-bold border-bottom"
                        >
                          Sign Up
                        </span>
                      </small>
                    </div>
                  </Form.Group>

                  <Modal.Footer className="text-center greyText border-top-0">
                    <small>
                      By continuing, you agree to our{" "}
                      <span
                        className="border-bottom"
                        style={{ cursor: "pointer" }}
                      >
                        Terms of Use
                      </span>{" "}
                      and
                      <span
                        className="border-bottom"
                        style={{ cursor: "pointer" }}
                      >
                        {" "}
                        Privacy & Cookie Policy.
                      </span>
                    </small>
                  </Modal.Footer>
                </Form>
              )}
            </Formik>
          </Modal.Body>
        </Modal>
      )}
      {showRegister && (
        <RegisterPopUp show={showRegister} handleClose={handleClose} />
      )}
      
    </>
  );
};

export default LoginPopUp;
