import { Formik, ErrorMessage } from "formik";
import React, { useContext, useState } from "react";
import { Form } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import * as yup from "yup";
import "./loginpopup.scss";
import axios from "axios";
import VerificationPopUp from "./VerificationPopUp";
import { useDispatch, useSelector } from "react-redux";
import { userInfo } from "../../app/features/UserSlice";

const LoginPopUp = ({ show, handleClose }) => {
  const dispatch = useDispatch();

  //For showing the verification modal on click of continue button.
  const [verification, setVerification] = useState(false);

  //For loginpopup hiding when verification popup shows up.
  const [loginPopUpVisible, setLoginPopUpVisible] = useState(true);

  const defaultValues = {
    username: "",
  };

  const validationSchema = yup.object({
    username: yup
      .string()
      .required("* UserName is required")
      .min(3, "* UserName must be more than 3 letters"),
  });

  const handleLogin = async (values) => {
    const { username } = values;

    try {
      const response = await axios.post(
        "https://bargainfox-dev.concettoprojects.com/api/send-otp",
        {
          email: username,
        }
      );

      if (response.status === 200) {
        setVerification(true);
        setLoginPopUpVisible(false);
        dispatch(userInfo(username));
      } else {
        console.log("Something went wrong");
      }
    } catch (error) {
      if (error.response && error.response.status === 422) {
        alert("Please enter valid Email or Mobile number");
      }
    }
  };

  return (
    <>
      {" "}
      {loginPopUpVisible && (
        <Modal show={show} onHide={handleClose} backdrop="static" size="md">
          <Modal.Header className="border-bottom-0 p-4" closeButton>
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
                handleLogin(values);
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
                      type="submit"
                      className="mt-2 continue-button btn btn-primary w-100"
                    >
                      Continue
                    </button>
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
      {verification && (
        <VerificationPopUp show={verification} handleClose={handleClose} />
      )}
    </>
  );
};

export default LoginPopUp;
