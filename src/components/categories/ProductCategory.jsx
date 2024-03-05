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
      <Container className="mt-5 d-flex align-items-center justify-content-center">
        <Row className="d-flex align-items-center justify-content-center">
          <Col>
            <div className="position-relative categoryHome">
              <div>
                <SingleProductCategory
                  imgUrl={product1}
                  textDes="Home & Kitchen"
                />
              </div>
              <div className="position-absolute homeHover">
                <Tab.Container
                  id="left-tabs-example"
                  // defaultActiveKey={activeTab}
                  activeKey={activeTab}
                >
                  <Row>
                    <Col sm={3}>
                      <Nav className="flex-column">
                        <Nav.Item className="mt-2">
                          <Nav.Link
                            eventKey="first"
                            onMouseEnter={() => handleMouseEnter("first")}
                            className="text-body"
                          >
                            Home
                          </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                          <Nav.Link
                            eventKey="second"
                            onMouseEnter={() => handleMouseEnter("second")}
                            className="text-body"
                          >
                            Kitchen
                          </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                          <Nav.Link
                            eventKey="third"
                            onMouseEnter={() => handleMouseEnter("third")}
                            className="text-body"
                          >
                            Office
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

          <Col>
            <div className="position-relative categoryKitchen">
              <div>
                <SingleProductCategory
                  imgUrl={product2}
                  textDes="Health & Beauty"
                />
              </div>
              <div className="position-absolute kitchenHover">
                <Tab.Container
                  id="left-tabs-example"
                  // defaultActiveKey={activeTab}
                  activeKey={activeTab}
                >
                  <Row>
                    <Col sm={3}>
                      <Nav className="flex-column">
                        <Nav.Item className="mt-2">
                          <Nav.Link
                            eventKey="first"
                            onMouseEnter={() => handleMouseEnter("first")}
                            className="text-body"
                          >
                            Health
                          </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                          <Nav.Link
                            eventKey="second"
                            onMouseEnter={() => handleMouseEnter("second")}
                            className="text-body"
                          >
                            Beauty
                          </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                          <Nav.Link
                            eventKey="third"
                            onMouseEnter={() => handleMouseEnter("third")}
                            className="text-body"
                          >
                            Baby & Kids
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

          <Col>
            <div className="position-relative categoryElectronics">
              <div>
                <SingleProductCategory
                  imgUrl={product3}
                  textDes="Electronics"
                />
              </div>
              <div className="position-absolute electronicsHover">
                <Tab.Container
                  id="left-tabs-example"
                  // defaultActiveKey={activeTab}
                  activeKey={activeTab}
                >
                  <Row>
                    <Col sm={3}>
                      <Nav className="flex-column">
                        <Nav.Item className="mt-2">
                          <Nav.Link
                            eventKey="first"
                            onMouseEnter={() => handleMouseEnter("first")}
                            className="text-body"
                          >
                            Computing
                          </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                          <Nav.Link
                            eventKey="second"
                            onMouseEnter={() => handleMouseEnter("second")}
                            className="text-body"
                          >
                            Appliances
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

          <Col>
            <div className="position-relative categoryToys">
              <div>
                <SingleProductCategory
                  imgUrl={product4}
                  textDes="Toys & Crafts"
                />
              </div>
              <div className="position-absolute toysHover">
                <Tab.Container
                  id="left-tabs-example"
                  // defaultActiveKey={activeTab}
                  activeKey={activeTab}
                >
                  <Row>
                    <Col sm={3}>
                      <Nav className="flex-column">
                        <Nav.Item className="mt-2">
                          <Nav.Link
                            eventKey="first"
                            onMouseEnter={() => handleMouseEnter("first")}
                            className="text-body"
                          >
                            Toys & Games
                          </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                          <Nav.Link
                            eventKey="second"
                            onMouseEnter={() => handleMouseEnter("second")}
                            className="text-body"
                          >
                            Crafts & Party
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

          <Col>
            <div className="position-relative categorySports">
              <div>
                <SingleProductCategory
                  imgUrl={product5}
                  textDes="Sports & Leisure"
                />
              </div>
              <div className="position-absolute sportsHover">
                <Tab.Container
                  id="left-tabs-example"
                  // defaultActiveKey={activeTab}
                  activeKey={activeTab}
                >
                  <Row>
                    <Col sm={3}>
                      <Nav className="flex-column">
                        <Nav.Item className="mt-2">
                          <Nav.Link
                            eventKey="first"
                            onMouseEnter={() => handleMouseEnter("first")}
                            className="text-body"
                          >
                            Sports & Games
                          </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                          <Nav.Link
                            eventKey="second"
                            onMouseEnter={() => handleMouseEnter("second")}
                            className="text-body"
                          >
                            Travel & Camping
                          </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                          <Nav.Link
                            eventKey="third"
                            onMouseEnter={() => handleMouseEnter("third")}
                            className="text-body"
                          >
                            Garden & DIY
                          </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                          <Nav.Link
                            eventKey="third"
                            onMouseEnter={() => handleMouseEnter("forth")}
                            className="text-body"
                          >
                            Enterntainment
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

          <Col>
            <div className="position-relative categoryClearance">
              <div>
                <SingleProductCategory imgUrl={product6} textDes="Clearance" />
              </div>
              <div className="position-absolute clearanceHover">
                <Tab.Container
                  id="left-tabs-example"
                  // defaultActiveKey={activeTab}
                  activeKey={activeTab}
                >
                  <Row>
                    {/* <Col sm={3}>
                      <Nav className="flex-column">
                        <Nav.Item className="mt-2">
                          <Nav.Link
                            eventKey="first"
                            onMouseEnter={() => handleMouseEnter("first")}
                            className="text-body"
                          >
                            Home
                          </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                          <Nav.Link
                            eventKey="second"
                            onMouseEnter={() => handleMouseEnter("second")}
                            className="text-body"
                          >
                            Kitchen
                          </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                          <Nav.Link
                            eventKey="third"
                            onMouseEnter={() => handleMouseEnter("third")}
                            className="text-body"
                          >
                            Office
                          </Nav.Link>
                        </Nav.Item>
                      </Nav>
                    </Col> */}
                    {/* <Col sm={9} className="submenu-content mt-2">
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
                                Utensils, Tools & Household
                              </Link>
                            </li>
                            <li>
                              <Link className="text-decoration-none text-body">
                                Kitchen Accessories
                              </Link>
                            </li>
                            <li>
                              <Link className="text-decoration-none text-body">
                                Tableware
                              </Link>
                            </li>
                            <li>
                              <Link className="text-decoration-none text-body">
                                Utensils
                              </Link>
                            </li>
                          </ul>
                        </Tab.Pane>
                        <Tab.Pane eventKey="third">
                          <ul>
                            <li>
                              <Link className="text-decoration-none text-body">
                                Office Gadgets
                              </Link>
                            </li>
                            <li>
                              <Link className="text-decoration-none text-body">
                                Furnitures
                              </Link>
                            </li>
                            <li>
                              <Link className="text-decoration-none text-body">
                                Laptops & Devices
                              </Link>
                            </li>
                            <li>
                              <Link className="text-decoration-none text-body">
                                Office Items
                              </Link>
                            </li>
                          </ul>
                        </Tab.Pane>
                      </Tab.Content>
                    </Col> */}
                  </Row>
                </Tab.Container>
              </div>
            </div>
          </Col>
        </Row>
      </Container>

      <Container fluid>
        <Row>
          <Col>
            <img src={banner} className="img-fluid" />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default ProductCategory;
