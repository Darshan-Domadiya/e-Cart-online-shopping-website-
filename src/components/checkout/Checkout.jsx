import React, { useState } from "react";
import paypal from "/Images/paypal.png";
import mastercard from "/Images/mastercard.png";
import american from "/Images/american.png";
import visa from "/Images/visa.png";
import add from "/Images/add.png";
import "./checkout.scss";
import { Row, Col, Container, Form } from "react-bootstrap";
import AddDeliveryAddress from "../addDeliveryAddress/AddDeliveryAddress";

const Checkout = () => {
  const [showPopup, setShowPopup] = useState(false);

  const handleClose = () => {
    setShowPopup(!showPopup);
  };

  return (
    <>
      <Container className="mt-5 ">
        <Row className="d-flex align-items-center justify-content-center">
          <Col className="col-12 col-xl-7 col-lg-7 col-sm-7  col-sm-12">
            <Row className="d-flex align-items-center justify-content-between">
              <Col className="col-md-9 col-12  mx-sm-0 text-center text-sm-start">
                <p className="fw-bold fs-3">Select Delivery address</p>
              </Col>
              <Col className="col-md-3">
                <div className="d-flex align-items-center justify-content-end gap-2">
                  <button
                    className="border-0 addNew-button"
                    onClick={handleClose}
                  >
                    <img src={add} className="img-fluid" /> <span>Add new</span>
                  </button>
                </div>
              </Col>
            </Row>
            <hr className="mt-3 mt-sm-0" />
            <Row>
              <span className="fw-bold text-warning d-flex d-sm-none align-items-center justify-content-end">
                Edit Address
              </span>

              <Col className=" col-12 col-md-8 mt-2 mb-2 d-flex align-items-center gap-3">
                <div>
                  <Form.Check type="radio" aria-label="radio 1" />
                </div>

                <span>
                  <span className="fw-bold h5">Stephen Parker</span> <br />
                  22 Walden Road, Greenland, UK, KW14 3XY <br />
                  Phone number: +44 9876543210
                </span>
              </Col>
              <Col className="d-md-flex align-items-baseline d-none  justify-content-end ">
                <div className="text-warning fw-bold d-flex align-items-center justify-content-end">
                  Edit address
                </div>
              </Col>
            </Row>
            <hr />
          </Col>

          {/* Column for payment section  */}

          <Col className="mt-3 mt-sm-1 offset-2 justify-content-end border col-lg-4 p-md-3 mx-lg-4 col-xl-4  col-sm-7  col-10  payment-border mx-xl-5 ">
            <Row className="border-bottom p-3 d-flex align-items-center justify-content-center">
              <button className="continue-button btn btn-primary w-100 ">
                Continue To Payment
              </button>
            </Row>
            <Row className="py-3">
              <div>
                <div className="fw-bold ">We accept :</div>
                <div className="d-flex align-items-center justify-content-start gap-1 mt-1">
                  <div>
                    <img src={paypal} className="img-fluid" />
                  </div>
                  <div>
                    <img src={visa} className="img-fluid" />
                  </div>
                  <div>
                    <img src={mastercard} className="img-fluid" />
                  </div>
                  <div>
                    <img src={american} className="img-fluid" />
                  </div>
                </div>
              </div>
            </Row>
          </Col>
        </Row>
      </Container>
      {showPopup && (
        <AddDeliveryAddress show={showPopup} handleClose={handleClose} />
      )}
    </>
  );
};

export default Checkout;
