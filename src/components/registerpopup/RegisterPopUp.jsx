import React, { useContext, useState } from "react";
import "./registerpopup.scss";
import { Form } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import * as yup from "yup";
import { Formik, ErrorMessage } from "formik";
import axios from "axios";
import { useSelector } from "react-redux";
import UserContext from "../context/UserContext";

const RegisterPopUp = ({ show, handleClose }) => {
  const { setUser } = useContext(UserContext);
  const userName = useSelector((state) => state.user.name);

  const [registerPopUpClose, setRegisterPopUpClose] = useState(true);

  const defaultValues = {
    name: "",
    email: "",
    phoneNumber: "",
  };

  if (userName) {
    if (typeof userName === "string" && userName.includes("@")) {
      defaultValues.email = userName;
    } else if (!isNaN(userName)) {
      defaultValues.phoneNumber = userName.toString();
    }
  }

  const handleRegister = async (values) => {
    const { name, email, phoneNumber } = values;

    try {
      const response = await axios.post(
        "https://bargainfox-dev.concettoprojects.com/api/register",
        {
          name,
          email,
          mobile: phoneNumber,
        }
      );
      if (response.status === 200) {
        localStorage.setItem("token", response.data.result.token);
        // alert("Successfully Registered");

        setUser(response.data.result);
        console.log("first", response.data.result);
        setRegisterPopUpClose(false);
      }
    } catch (error) {
      if (error.response && error.response.status === 422) {
        // alert("Something went wrong while registration");
        console.log("Error while registration", error);
      }
    }
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
      {registerPopUpClose && (
        <Modal show={show} onHide={handleClose} backdrop="static" size="md">
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
                handleRegister(values);
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
                      // type="number"
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

                    <button
                      type="submit"
                      className="register-button text-white w-100 p-2 border-0 mt-3"
                    >
                      Continue
                    </button>
                  </Form.Group>
                </Form>
              )}
            </Formik>
          </Modal.Body>
        </Modal>
      )}
    </>
  );
};

export default RegisterPopUp;
