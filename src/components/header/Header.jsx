import React, { useState } from "react";
import "./header.scss";
import navbarLogo from "/Images/navbarlogo.png";
import searchImage from "/Images/search-normal.png";
import wishList from "/Images/wishlist.png";
import user from "/Images/user.png";
import shoppingCart from "/Images/shopping-cart.png";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from "react-router-dom";

import {
  Container,
  InputGroup,
  Row,
  Col,
  Navbar,
  Nav,
  Form,
  Button,
} from "react-bootstrap";
import LoginPopUp from "../loginPopUp/LoginPopUp";

const Header = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => {
    setShow(false);
  };

  return (
    <>
      {/* First header for large screen-xl */}
      <header className="shadow-sm d-none d-md-flex main-header">
        <Container fluid>
          <Row className="d-flex align-items-center  justify-content-between mx-2">
            <Col>
              <Navbar>
                <Link to="/">
                  <img
                    src={navbarLogo}
                    width="187"
                    height="85"
                    className="d-inline-block align-top"
                  />
                </Link>
              </Navbar>
            </Col>

            <Col>
              <InputGroup>
                <Form.Control placeholder="Search Products" />
                <Button className="p-2 ">
                  <img src={searchImage} />
                </Button>
              </InputGroup>
            </Col>

            <Col className="d-flex justify-content-end mt-2">
              <Nav.Link className="position-relative">
                <img src={wishList} width="31" height="31" />
                <span className="circle position-absolute d-flex align-items-center justify-content-center">
                  5
                </span>
              </Nav.Link>

              <Nav.Link className="mx-4 position-relative">
                <img src={shoppingCart} width="31" height="31" />
                <span className="circle position-absolute d-flex align-items-center justify-content-center">
                  3
                </span>
              </Nav.Link>

              <Nav.Link className="loginMenu">
                <div className=" d-flex gap-2 justify-content-center">
                  <img src={user} width="31" height="31" />

                  <div className="d-xl-flex  justify-content-center flex-column d-none">
                    <span>Hello there,</span>
                    <span className="fw-bold ">SIGNUP/REGISTER</span>
                    <div className=" border-2  bg-white">
                      <ul className="dropDownMenu text-center  list-unstyled text-black">
                        <Button
                          className="rounded-4 mt-2 border-0 text-white fw-bold"
                          onClick={() => setShow(true)}
                        >
                          Login/Register
                        </Button>

                        <li>
                          <Link to="#">Your Profile</Link>
                        </li>

                        <li>
                          <Link to="#">Fastfox Subscription</Link>
                        </li>
                        <li>
                          <Link to="#">Your Orders</Link>
                        </li>
                        <li>
                          <Link to="#">Addresses</Link>
                        </li>
                        <li>
                          <Link to="#">Notifications</Link>
                        </li>
                        <li>
                          <Link to="#">Wishlists</Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </Nav.Link>
            </Col>
          </Row>
        </Container>
      </header>

      {/* Second header for medium and small screen. */}
      <header className=" d-flex d-md-none shadow-sm main-header">
        <Container>
          <Row className="d-flex align-items-center  justify-content-between">
            <Col className="col-6">
              <Navbar>
                <GiHamburgerMenu className="mx-1 " height="24" width="24" />
                <Link to="#">
                  <img
                    src={navbarLogo}
                    width="100"
                    height="60"
                    className="d-inline-block align-top "
                  />
                </Link>
              </Navbar>
            </Col>

            <Col className="d-flex justify-content-end mt-2 col-6">
              <Nav.Link className="position-relative">
                <img src={wishList} width="24" height="24" />
                <span className="circle position-absolute d-flex align-items-center justify-content-center">
                  5
                </span>
              </Nav.Link>

              <Nav.Link className="mx-4 position-relative">
                <img src={shoppingCart} width="24" height="24" />
                <span className="circle position-absolute d-flex align-items-center justify-content-center">
                  3
                </span>
              </Nav.Link>

              <Nav.Link className="secongLoginMenu">
                <div className=" d-flex gap-2 justify-content-center">
                  <img src={user} width="25" height="25" />

                  <ul className="secondDropdownMenu   text-center  list-unstyled text-black">
                    <Button
                      className="rounded-4 mt-2 border-0 text-white fw-bold"
                      onClick={() => setShow(true)}
                    >
                      Login/Register
                    </Button>

                    <li>
                      <Link to="#">Your Profile</Link>
                    </li>

                    <li>
                      <Link to="#">Fastfox Subscription</Link>
                    </li>
                    <li>
                      <Link to="#">Your Orders</Link>
                    </li>
                    <li>
                      <Link to="#">Addresses</Link>
                    </li>
                    <li>
                      <Link to="#">Notifications</Link>
                    </li>
                    <li>
                      <Link to="#">Wishlists</Link>
                    </li>
                  </ul>

                  <div className="  justify-content-center flex-column d-none">
                    <span>Hello there,</span>
                    <span className="fw-bold ">SIGNUP/REGISTER</span>
                  </div>
                </div>
              </Nav.Link>
            </Col>

            <div className="mb-2 ">
              <Col>
                <InputGroup>
                  <Form.Control placeholder="Search Products" />
                  <Button className="p-2 ">
                    <img src={searchImage} />
                  </Button>
                </InputGroup>
              </Col>
            </div>
          </Row>
        </Container>
      </header>

      {show && <LoginPopUp show={show} handleClose={handleClose} />}
    </>
  );
};

export default Header;
