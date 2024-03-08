import React, { useState } from "react";
import "./header.scss";
import navbarLogo from "/Images/logoMain.svg";
import searchImage from "/Images/search-normal.png";
import wishList from "/Images/wishlist.png";
import user from "/Images/user.png";
import shoppingCart from "/Images/shopping-cart.png";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link, useNavigate } from "react-router-dom";
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";

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
  const navigate = useNavigate();

  //For loginPop when clicked on login/Register button.
  const [show, setShow] = useState(false);

  const handleClose = () => {
    setShow(false);
  };

  //For hamburgermenu display in mobile screen size.
  const [showHamburgerMenu, setShowHamburgermenu] = useState(false);

  const hideClose = () => setShowHamburgermenu(false);
  const handleShow = () => setShowHamburgermenu(true);

  return (
    <>
      {/* First header for large screen-xl */}
      <header className="shadow-sm  main-header">
        <Container fluid className="mt-2 mb-3 p-3">
          <Row className="d-flex align-items-center  justify-content-between px-1">
            <Col className="col-6 col-sm-6 col-md-4">
              <Navbar className="gap-1">
                <div onClick={handleShow}>
                  <GiHamburgerMenu className=" d-flex d-sm-none" />
                </div>
                <Offcanvas show={showHamburgerMenu} onHide={hideClose}>
                  <Offcanvas.Header closeButton>
                    <Offcanvas.Title>
                      <p className="fw-bold h3">Sign In/Register</p>
                    </Offcanvas.Title>
                  </Offcanvas.Header>
                  <Offcanvas.Body>
                    <div className="hamburgerMenu border-2  bg-white d-sm-none">
                      <ul className=" text-center  list-unstyled text-black">
                        <Button
                          className="hamburger-loginButton rounded-4 mt-2 border-0 text-white fw-bold"
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
                  </Offcanvas.Body>
                </Offcanvas>
                <Link to="/">
                  <div style={{ width: "110px" }}>
                    <img
                      src={navbarLogo}
                      className=" align-top mx-1 w-100 img-fluid"
                    />
                  </div>
                </Link>
              </Navbar>
            </Col>

            <Col className="d-none d-md-flex">
              <InputGroup>
                <Form.Control placeholder="Search Products" className="searchbar-header"/>
                <Button className="p-2 ">
                  <img src={searchImage} className="img-fluid" />
                </Button>
              </InputGroup>
            </Col>

            <Col className="col-6 col-sm-6  col-md-4 d-flex justify-content-end mt-2 align-items-center">
              <Nav.Link className="position-relative">
                <img src={wishList} className="img-fluid" />
                <span className="circle position-absolute d-flex align-items-center justify-content-center">
                  5
                </span>
              </Nav.Link>

              <Nav.Link
                className="mx-4 position-relative"
                onClick={() => navigate("/shoppingcart")}
              >
                <img src={shoppingCart} className="img-fluid" />

                <span className="circle position-absolute d-flex align-items-center justify-content-center">
                  3
                </span>
              </Nav.Link>

              <Nav.Link className="loginMenu">
                <div className=" d-flex gap-2 align-items-center">
                  <img src={user} className="img-fluid" />

                  <div className="d-xl-flex  justify-content-center flex-column d-none">
                    <span>Hello there,</span>
                    <span className="fw-bold ">SIGNUP/REGISTER</span>
                  </div>
                  <div className=" border-2  bg-white d-none d-md-flex">
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
              </Nav.Link>
            </Col>

            {/* SearchBar for small screen */}
            <Col className="d-md-none d-flex mt-3 ">
              <InputGroup>
                <Form.Control placeholder="Search Products" />
                <Button className="p-2 ">
                  <img src={searchImage} />
                </Button>
              </InputGroup>
            </Col>
          </Row>
        </Container>
      </header>

      {show && <LoginPopUp show={show} handleClose={handleClose} />}
    </>
  );
};

export default Header;
