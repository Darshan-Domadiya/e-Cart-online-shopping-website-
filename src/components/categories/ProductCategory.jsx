import React, { useState } from "react";
import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import product1 from "/Images/homeKitchen.png";
import product2 from "/Images/beauty.png";
import product3 from "/Images/electronics.png";
import product4 from "/Images/toys.png";
import product5 from "/Images/sports.png";
import product6 from "/Images/clearance.png";
import banner from "/Images/banner.png";
import "./productCategory.scss";
import SingleProductCategory from "./SingleProductCategory";
import { Link } from "react-router-dom";

const ProductCategory = () => {
  const [activeTab, setActiveTab] = useState("first");

  const handleMouseEnter = (eventKey) => {
    setActiveTab(eventKey);
  };

  return (
    <>
      <Container className="mt-5 d-flex align-items-center justify-content-center ">
        <Row className="d-flex align-items-center justify-content-center">
          <Col className="col-6 col-sm-6 col-md-2 col-lg-2 ">
            <div className="position-relative categoryHome">
              <div>
                <SingleProductCategory
                  imgUrl={product1}
                  textTitle="Home & Kitchen"
                />
              </div>
              <div className="position-absolute homeHover">
                <Tab.Container id="left-tabs-example" activeKey={activeTab}>
                  <Row>
                    <Col sm={3}>
                      <Nav className="flex-column">
                        <Nav.Item className="mt-2 navItem-width ">
                          <Nav.Link
                            eventKey="first"
                            onMouseEnter={() => handleMouseEnter("first")}
                            className="text-body"
                          >
                            <span className="hoverColor text-muted">Home</span>
                          </Nav.Link>
                        </Nav.Item>
                        <Nav.Item className="navItem-width">
                          <Nav.Link
                            eventKey="second"
                            onMouseEnter={() => handleMouseEnter("second")}
                            className="text-body"
                          >
                            <span className="hoverColor text-muted">
                              Kitchen
                            </span>
                          </Nav.Link>
                        </Nav.Item>
                        <Nav.Item className="navItem-width">
                          <Nav.Link
                            eventKey="third"
                            onMouseEnter={() => handleMouseEnter("third")}
                            className="text-body"
                          >
                            <span className="hoverColor text-muted">
                              Office
                            </span>
                          </Nav.Link>
                        </Nav.Item>
                      </Nav>
                    </Col>
                    <Col sm={9} className="submenu-content mt-2">
                      <Tab.Content>
                        <Tab.Pane eventKey="first">
                          <ul>
                            <li>
                              <Link className="text-decoration-none text-body ">
                                Appliances & Accessories
                              </Link>
                            </li>
                            <li>
                              <Link className="text-decoration-none text-body">
                                Cleaning & Household
                              </Link>
                            </li>
                            <li>
                              <Link className="text-decoration-none text-body">
                                Lighting
                              </Link>
                            </li>
                            <li>
                              <Link className="text-decoration-none text-body">
                                Bedroom
                              </Link>
                            </li>
                            <li>
                              <Link className="text-decoration-none text-body">
                                Bathroom
                              </Link>
                            </li>
                            <li>
                              <Link className="text-decoration-none text-body">
                                Furnishings
                              </Link>
                            </li>
                            <li>
                              <Link className="text-decoration-none text-body">
                                Decor
                              </Link>
                            </li>
                            <li>
                              <Link className="text-decoration-none text-body">
                                Mix
                              </Link>
                            </li>
                          </ul>
                        </Tab.Pane>
                        <Tab.Pane eventKey="second">
                          <ul>
                            <li>
                              <Link className="text-decoration-none text-body">
                                Appliances
                              </Link>
                            </li>
                            <li>
                              <Link className="text-decoration-none text-body">
                                Utensils, Tools & Gadgets
                              </Link>
                            </li>
                            <li>
                              <Link className="text-decoration-none text-body">
                                Cooking & Baking
                              </Link>
                            </li>
                            <li>
                              <Link className="text-decoration-none text-body">
                                Tableware
                              </Link>
                            </li>
                          </ul>
                        </Tab.Pane>
                        <Tab.Pane eventKey="third">
                          <ul>
                            <li>
                              <Link className="text-decoration-none text-body">
                                Storage & Organisation
                              </Link>
                            </li>
                            <li>
                              <Link className="text-decoration-none text-body">
                                Supplies
                              </Link>
                            </li>
                            <li>
                              <Link className="text-decoration-none text-body">
                                Printers
                              </Link>
                            </li>
                            <li>
                              <Link className="text-decoration-none text-body">
                                Shredders
                              </Link>
                            </li>
                          </ul>
                        </Tab.Pane>
                      </Tab.Content>
                    </Col>
                  </Row>
                </Tab.Container>
              </div>
            </div>
          </Col>

          <Col className="col-6 col-sm-6 col-md-2 col-lg-2 ">
            <div className="position-relative categoryKitchen">
              <div>
                <SingleProductCategory
                  imgUrl={product2}
                  textTitle="Health & Beauty"
                />
              </div>
              <div className="position-absolute kitchenHover">
                <Tab.Container id="left-tabs-example" activeKey={activeTab}>
                  <Row>
                    <Col sm={3}>
                      <Nav className="flex-column">
                        <Nav.Item className="mt-2 navItem-width">
                          <Nav.Link
                            eventKey="first"
                            onMouseEnter={() => handleMouseEnter("first")}
                            className="text-body"
                          >
                            <span className="hoverColor text-muted">
                              Health
                            </span>
                          </Nav.Link>
                        </Nav.Item>
                        <Nav.Item className="navItem-width">
                          <Nav.Link
                            eventKey="second"
                            onMouseEnter={() => handleMouseEnter("second")}
                            className="text-body"
                          >
                            <span className="hoverColor text-muted">
                              Beauty
                            </span>
                          </Nav.Link>
                        </Nav.Item>
                        <Nav.Item className="navItem-width">
                          <Nav.Link
                            eventKey="third"
                            onMouseEnter={() => handleMouseEnter("third")}
                            className="text-body"
                          >
                            <span className="hoverColor text-muted">
                              Baby & Kids
                            </span>
                          </Nav.Link>
                        </Nav.Item>
                      </Nav>
                    </Col>
                    <Col sm={9} className="submenu-content mt-2">
                      <Tab.Content>
                        <Tab.Pane eventKey="first">
                          <ul>
                            <li>
                              <Link className="text-decoration-none text-body ">
                                Shaving & Hair Removal
                              </Link>
                            </li>
                            <li>
                              <Link className="text-decoration-none text-body">
                                Oral Care
                              </Link>
                            </li>
                            <li>
                              <Link className="text-decoration-none text-body">
                                Massage & Relaxation
                              </Link>
                            </li>
                            <li>
                              <Link className="text-decoration-none text-body">
                                Medical & Mobility
                              </Link>
                            </li>
                            <li>
                              <Link className="text-decoration-none text-body">
                                Sexual Pleasure & Wellbeing
                              </Link>
                            </li>
                          </ul>
                        </Tab.Pane>
                        <Tab.Pane eventKey="second">
                          <ul>
                            <li>
                              <Link className="text-decoration-none text-body">
                                Skincare & Beauty
                              </Link>
                            </li>
                            <li>
                              <Link className="text-decoration-none text-body">
                                Hair Care & Styling
                              </Link>
                            </li>
                          </ul>
                        </Tab.Pane>
                        <Tab.Pane eventKey="third">
                          <ul>
                            <li>
                              <Link className="text-decoration-none text-body">
                                Baby Products
                              </Link>
                            </li>
                            <li>
                              <Link className="text-decoration-none text-body">
                                Kids
                              </Link>
                            </li>
                          </ul>
                        </Tab.Pane>
                      </Tab.Content>
                    </Col>
                  </Row>
                </Tab.Container>
              </div>
            </div>
          </Col>

          <Col className="col-6 col-sm-6 col-md-2 col-lg-2 ">
            <div className="position-relative categoryElectronics">
              <div>
                <SingleProductCategory
                  imgUrl={product3}
                  textTitle="Electronics"
                />
              </div>
              <div className="position-absolute electronicsHover">
                <Tab.Container id="left-tabs-example" activeKey={activeTab}>
                  <Row>
                    <Col sm={3}>
                      <Nav className="flex-column">
                        <Nav.Item className="mt-2 navItem-width">
                          <Nav.Link
                            eventKey="first"
                            onMouseEnter={() => handleMouseEnter("first")}
                            className="text-body"
                          >
                            <span className="hoverColor text-muted">
                              Computing
                            </span>
                          </Nav.Link>
                        </Nav.Item>
                        <Nav.Item className="navItem-width">
                          <Nav.Link
                            eventKey="second"
                            onMouseEnter={() => handleMouseEnter("second")}
                            className="text-body"
                          >
                            <span className="hoverColor text-muted">
                              Appliances
                            </span>
                          </Nav.Link>
                        </Nav.Item>
                      </Nav>
                    </Col>
                    <Col sm={9} className="submenu-content mt-2">
                      <Tab.Content>
                        <Tab.Pane eventKey="first">
                          <ul>
                            <li>
                              <Link className="text-decoration-none text-body ">
                                Computing & Accessories
                              </Link>
                            </li>
                            <li>
                              <Link className="text-decoration-none text-body">
                                Phone & Tables
                              </Link>
                            </li>
                            <li>
                              <Link className="text-decoration-none text-body">
                                Audio & Visual
                              </Link>
                            </li>
                            <li>
                              <Link className="text-decoration-none text-body">
                                Gaming
                              </Link>
                            </li>
                          </ul>
                        </Tab.Pane>
                        <Tab.Pane eventKey="second">
                          <ul>
                            <li>
                              <Link className="text-decoration-none text-body">
                                Kitchen Appliances
                              </Link>
                            </li>
                            <li>
                              <Link className="text-decoration-none text-body">
                                Heating, Cooling & Air
                              </Link>
                            </li>
                            <li>
                              <Link className="text-decoration-none text-body">
                                Home Appliances
                              </Link>
                            </li>
                          </ul>
                        </Tab.Pane>
                      </Tab.Content>
                    </Col>
                  </Row>
                </Tab.Container>
              </div>
            </div>
          </Col>

          <Col className="col-6 col-sm-6 col-md-2 col-lg-2 ">
            <div className="position-relative categoryToys">
              <div>
                <SingleProductCategory
                  imgUrl={product4}
                  textTitle="Toys & Crafts"
                />
              </div>
              <div className="position-absolute toysHover">
                <Tab.Container id="left-tabs-example" activeKey={activeTab}>
                  <Row>
                    <Col sm={3}>
                      <Nav className="flex-column">
                        <Nav.Item className="mt-2 navItem-width">
                          <Nav.Link
                            eventKey="first"
                            onMouseEnter={() => handleMouseEnter("first")}
                            className="text-body"
                          >
                            <span className="hoverColor text-muted">
                              {" "}
                              Toys & Games
                            </span>
                          </Nav.Link>
                        </Nav.Item>
                        <Nav.Item className="navItem-width">
                          <Nav.Link
                            eventKey="second"
                            onMouseEnter={() => handleMouseEnter("second")}
                            className="text-body"
                          >
                            <span className="hoverColor text-muted">
                              {" "}
                              Crafts & Party
                            </span>
                          </Nav.Link>
                        </Nav.Item>
                      </Nav>
                    </Col>
                    <Col sm={9} className="submenu-content mt-2">
                      <Tab.Content>
                        <Tab.Pane eventKey="first">
                          <ul>
                            <li>
                              <Link className="text-decoration-none text-body ">
                                Games & Puzzles
                              </Link>
                            </li>
                            <li>
                              <Link className="text-decoration-none text-body">
                                Outdoor & Sports Toys
                              </Link>
                            </li>
                            <li>
                              <Link className="text-decoration-none text-body">
                                Educational Toys
                              </Link>
                            </li>
                            <li>
                              <Link className="text-decoration-none text-body">
                                Dolls & Figures
                              </Link>
                            </li>
                          </ul>
                        </Tab.Pane>
                        <Tab.Pane eventKey="second">
                          <ul>
                            <li>
                              <Link className="text-decoration-none text-body">
                                Arts & Crafts
                              </Link>
                            </li>
                            <li>
                              <Link className="text-decoration-none text-body">
                                Fancy Dress & Party
                              </Link>
                            </li>
                          </ul>
                        </Tab.Pane>
                      </Tab.Content>
                    </Col>
                  </Row>
                </Tab.Container>
              </div>
            </div>
          </Col>

          <Col className="col-6 col-sm-6 col-md-2 col-lg-2 ">
            <div className="position-relative categorySports">
              <div>
                <SingleProductCategory
                  imgUrl={product5}
                  textTitle="Sports & Leisure"
                />
              </div>
              <div className="position-absolute sportsHover">
                <Tab.Container id="left-tabs-example" activeKey={activeTab}>
                  <Row>
                    <Col sm={3}>
                      <Nav className="flex-column">
                        <Nav.Item className="mt-2 navItem-width">
                          <Nav.Link
                            eventKey="first"
                            onMouseEnter={() => handleMouseEnter("first")}
                            className="text-body"
                          >
                            <span className="hoverColor text-muted">
                              {" "}
                              Sports & Games
                            </span>
                          </Nav.Link>
                        </Nav.Item>
                        <Nav.Item className="navItem-width">
                          <Nav.Link
                            eventKey="second"
                            onMouseEnter={() => handleMouseEnter("second")}
                            className="text-body"
                          >
                            <span className="hoverColor text-muted">
                              {" "}
                              Travel & Camping
                            </span>
                          </Nav.Link>
                        </Nav.Item>
                        <Nav.Item className="navItem-width">
                          <Nav.Link
                            eventKey="third"
                            onMouseEnter={() => handleMouseEnter("third")}
                            className="text-body"
                          >
                            <span className="hoverColor text-muted">
                              {" "}
                              Garden & DIY
                            </span>
                          </Nav.Link>
                        </Nav.Item>
                        <Nav.Item className="navItem-width">
                          <Nav.Link
                            eventKey="third"
                            onMouseEnter={() => handleMouseEnter("forth")}
                            className="text-body"
                          >
                            <span className="hoverColor text-muted">
                              {" "}
                              Entertainment
                            </span>
                          </Nav.Link>
                        </Nav.Item>
                      </Nav>
                    </Col>
                    <Col sm={9} className="submenu-content mt-2">
                      <Tab.Content>
                        <Tab.Pane eventKey="first">
                          <ul>
                            <li>
                              <Link className="text-decoration-none text-body ">
                                Watersports
                              </Link>
                            </li>
                            <li>
                              <Link className="text-decoration-none text-body">
                                Ballsports
                              </Link>
                            </li>
                            <li>
                              <Link className="text-decoration-none text-body">
                                Bikes, Scooters & Ride-Ons
                              </Link>
                            </li>
                            <li>
                              <Link className="text-decoration-none text-body">
                                Outdoor & Sporting Toys
                              </Link>
                            </li>
                            <li>
                              <Link className="text-decoration-none text-body">
                                Training & Fitness
                              </Link>
                            </li>
                          </ul>
                        </Tab.Pane>
                        <Tab.Pane eventKey="second">
                          <ul>
                            <li>
                              <Link className="text-decoration-none text-body">
                                Luggage & Travel
                              </Link>
                            </li>
                            <li>
                              <Link className="text-decoration-none text-body">
                                Camping & Outdoor
                              </Link>
                            </li>
                            <li>
                              <Link className="text-decoration-none text-body">
                                Caravans & Campers
                              </Link>
                            </li>
                            <li>
                              <Link className="text-decoration-none text-body">
                                Motors
                              </Link>
                            </li>
                          </ul>
                        </Tab.Pane>
                        <Tab.Pane eventKey="third">
                          <ul>
                            <li>
                              <Link className="text-decoration-none text-body">
                                Gardening
                              </Link>
                            </li>
                            <li>
                              <Link className="text-decoration-none text-body">
                                DIY
                              </Link>
                            </li>
                          </ul>
                        </Tab.Pane>
                        <Tab.Pane eventKey="forth">
                          <ul>
                            <li>
                              <Link className="text-decoration-none text-body">
                                Books
                              </Link>
                            </li>
                            <li>
                              <Link className="text-decoration-none text-body">
                                Party
                              </Link>
                            </li>
                            <li>
                              <Link className="text-decoration-none text-body">
                                Music
                              </Link>
                            </li>
                          </ul>
                        </Tab.Pane>
                      </Tab.Content>
                    </Col>
                  </Row>
                </Tab.Container>
              </div>
            </div>
          </Col>

          <Col className="col-6 col-sm-6 col-md-2 col-lg-2 ">
            <div className="position-relative categoryClearance">
              <div>
                <SingleProductCategory
                  imgUrl={product6}
                  textTitle="Clearance"
                />
              </div>
              <div className="position-absolute clearanceHover">
                <Tab.Container
                  id="left-tabs-example"
                  activeKey={activeTab}
                ></Tab.Container>
              </div>
            </div>
          </Col>
        </Row>
      </Container>

      <Container fluid>
        <Row>
          <Col className="p-0">
            <img src={banner} className="img-fluid" />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default ProductCategory;
