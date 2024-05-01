import React, { useState, useRef, useEffect, useContext } from "react";
import { Form } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import axios from "axios";
import RegisterPopUp from "../registerpopup/RegisterPopUp";
import { useSelector } from "react-redux";
import UserContext from "../context/UserContext";
import { ToastContainer, toast } from "react-toastify";
import { sendOtpApi, verifyOtpApi } from "../../api/Constant";

const VerificationPopUp = ({ show, handleClose }) => {
  const userName = useSelector((state) => state.user.name);

  const [resendOtpButton, setResendOtpButton] = useState(false);
  const [seconds, setSeconds] = useState(5);
  const timeref = useRef(null);

  const { setUser } = useContext(UserContext);

  useEffect(() => {
    timeref.current = setInterval(() => {
      setSeconds((prevSeconds) => prevSeconds - 1);
    }, 1000);

    // Clear the interval when component unmounts
    return () => clearInterval(timeref.current);
  }, []); // Empty dependency array so it runs only once

  useEffect(() => {
    if (seconds === 0) {
      setSeconds(0);
      clearInterval(timeref.current);
      // Optionally, you can perform an action when the countdown reaches 0.
      setResendOtpButton(true);
    }
  }, [seconds]);

  let currentOtpIndex = 0;
  const [otp, setOtp] = useState(new Array(6).fill(""));
  const [activeOTPIndex, setActiveOTPIndex] = useState(0);
  const [error, setError] = useState(false);
  const [disableBtn, setDisableBtn] = useState(true);

  //For showing Register pop up on click of signUp button.
  const [showRegister, setShowRegister] = useState(false);

  //For closing verification pop up on click of verify button
  const [verificationVisible, setVerificationVisible] = useState(true);

  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, [activeOTPIndex]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const enteredOTP = otp.join("");

    if (enteredOTP == "000000") {
      setError(false);
      try {
        const response = await axios.post(verifyOtpApi, {
          otp: enteredOTP,
          email: userName,
        });

        if (response.status === 200) {
          localStorage.setItem("token", response.data.result.token);
          // console.log("otp successful", response.data);
          // alert("OTP is valid");
          if (response.data.result.is_new_user == true) {
            setShowRegister(true);
            setVerificationVisible(false);
          } else if (response.data.result.is_new_user == false) {
            setVerificationVisible(false);

            setUser(response.data.result);
            // alert("User already exists");
          }
        }
      } catch (error) {
        // alert("Some error occured");
        console.log("Error", error);
      }
    } else {
      setError(true);
    }
  };

  const handleOnChange = ({ target }) => {
    const { value } = target;
    const newOTP = [...otp];
    newOTP[currentOtpIndex] = value.substring(value.length - 1);

    if (!value) {
      setActiveOTPIndex(currentOtpIndex - 1);
    } else {
      setActiveOTPIndex(currentOtpIndex + 1);
    }

    setOtp(newOTP);

    const allFieldsFilled = newOTP.every((value) => value !== "");
    setDisableBtn(!allFieldsFilled);
  };

  const handleOnKeyDown = (e, index) => {
    currentOtpIndex = index;
    if (e.key === "backspace") setActiveOTPIndex(currentOtpIndex - 1);
    setError(false);
  };

  const handleResendCode = async () => {
    try {
      const response = await axios.post(sendOtpApi, {
        email: userName,
      });

      if (response.status === 200) {
        setResendOtpButton(false);
        setError(true);
        setSeconds(30);
        timeref.current = setInterval(() => {
          setSeconds((prevSeconds) => prevSeconds - 1);
        }, 1000);
        toast.success("OTP sent successfully !", {
          position: "top-center",
        });
        // console.log("otp resent successfully");
      } else {
        alert("something went wrong");
      }
    } catch (error) {
      if (error.response && error.response.status === 422) {
        alert("Something went wrong while resending otp");
      }
    }
  };

  return (
    <>
      {verificationVisible && (
        <Modal show={show} onHide={handleClose} backdrop="static" size="md">
          <Modal.Header className="border-bottom-0" closeButton></Modal.Header>

          <Modal.Body>
            <Form onSubmit={handleSubmit} className="px-4">
              <div className="text-center">
                <span className="fw-bold h2">Verification Code</span>
                <p className="mt-2">
                  A verification code is sent to{" "}
                  <span className="greyText">{userName}</span>
                </p>
              </div>

              <div className="mt-4">
                <small className=" fw-bold">Verification code</small>
              </div>
              <div className="d-flex gap-3 mt-1">
                {otp.map((_, index) => {
                  return (
                    <Form.Control
                      key={index}
                      ref={activeOTPIndex === index ? inputRef : null}
                      className="verificationCode-background w-100 text-center p-3"
                      onChange={handleOnChange}
                      onKeyDown={(e) => handleOnKeyDown(e, index)}
                      value={otp[index]}
                    ></Form.Control>
                  );
                })}
              </div>
              <div className="text-danger">{error ? "Invalid OTP" : ""}</div>

              <div className="mt-2 d-flex align-items-center justify-content-between">
                <div>
                  {!resendOtpButton && <small>Expires in 00:{seconds}</small>}
                </div>
                <button
                  type="button"
                  className="btn btn-primary text-primary resendCode-button"
                  onClick={handleResendCode}
                  disabled={!resendOtpButton}
                >
                  Resend Code
                </button>
              </div>
              <ToastContainer />

              <Modal.Footer className="text-center greyText border-top-0">
                <button
                  onClick={handleSubmit}
                  disabled={disableBtn}
                  type="submit"
                  className="mt-2 p-2 continue-button btn btn-primary w-100"
                >
                  Verify
                </button>
              </Modal.Footer>
            </Form>
          </Modal.Body>
        </Modal>
      )}
      {showRegister && (
        <RegisterPopUp show={showRegister} handleClose={handleClose} />
      )}
    </>
  );
};

export default VerificationPopUp;
