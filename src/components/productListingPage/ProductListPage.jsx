import React, { useState } from "react";
import "./productlistpage.scss";
import productList1 from "/Images/productList1.png";
import { Container, Row, Col } from "react-bootstrap";
import SingleProduct from "./SingleProduct";
import ProductFilter from "./ProductFilter";
import Paging from "./Paging";
import { IoFilter } from "react-icons/io5";
import Button from "react-bootstrap/Button";
import { Offcanvas } from "react-bootstrap";

const singleProductDetails = [
  {
    price: "$44",
    less: "$50",
    review: "34,565",
    discount: "-10",
    imgUrl: productList1,
    desc: "Lucky Cat Print Open Front Kimono, Casual Cover Up Kimono For Spring & Summer, Women's Clothing",
  },
  {
    price: "$34",
    less: "$20",
    review: "32,456",
    discount: "-8",
    imgUrl: productList1,
    desc: "Lucky Cat Print Open Front Kimono, Casual Cover Up Kimono For Spring & Summer, Women's Clothing",
  },
  {
    price: "$56",
    less: "$12",
    review: "22,565",
    discount: "-15",
    imgUrl: productList1,
    desc: "Lucky Cat Print Open Front Kimono, Casual Cover Up Kimono For Spring & Summer, Women's Clothing",
  },
  {
    price: "$34",
    less: "$12",
    review: "12,565",
    discount: "-12",
    imgUrl: productList1,
    desc: "Lucky Cat Print Open Front Kimono, Casual Cover Up Kimono For Spring & Summer, Women's Clothing",
  },
];

const ProductListPage = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Container fluid>
        {/* Filters and Results section */}

        <Row className="mt-5 ">
          {/* Filter column */}

          <Col className="d-none d-md-flex col-xl-3 col-lg-3 col-md-3 ">
            <ProductFilter />
          </Col>

          {/* Results section column */}
          <Col className="col-xl-9 col-lg-9 ">
            <Row>
              <Col className="d-flex align-items-center justify-content-around gap-2 text-md-start text-lg-start text-xl-start col-12 col-sm-6 col-md-4 col-lg-6 col-xl-6 text-center ">
                <p className="fw-bold h2">Results</p>
                <div className="d-flex align-items-center gap-2 d-md-none">
                  <Button onClick={handleShow} className="px-2 ">
                    {" "}
                    <div className="d-flex align-items-center gap-2 d-md-none">
                      <p className="fw-bold h5">Filter</p>
                      <IoFilter />
                    </div>
                  </Button>
                  <Offcanvas show={show} onHide={handleClose} placement="end" className="d-md-none offcanvas-style">
                    <Offcanvas.Header closeButton></Offcanvas.Header>
                    <Offcanvas.Body>
                      {" "}
                      <ProductFilter />
                    </Offcanvas.Body>
                  </Offcanvas>
                </div>
              </Col>

              <Col className="mt-3 mt-sm-0 col-12 col-sm-6 col-md-7 col-lg-6 col-xl-6 justify-content-sm-end col-md-8 d-flex align-items-center justify-content-center">
                <div className="text-md-end  filter-div filter-border rounded-5 p-2 input-div d-flex justify-content-center align-items-center gap-2">
                  <label>
                    Sort By <span>:</span>
                  </label>

                  <select
                    name="options"
                    className="custom-select px-2 border-0"
                  >
                    <input
                      type="text"
                      placeholder="Select..."
                      className="border-danger"
                    />

                    <option defaultChecked>Select...</option>
                    <option value="highest price">Highest Price</option>
                    <option value="lowest price">Lowest Price</option>
                    <option value="top customer revies">
                      Top Customer Reviews
                    </option>
                    <option value="most recent">Most Recent</option>
                  </select>
                </div>
              </Col>
            </Row>

            <Row className="mt-5 mt-sm-5 mt-md-5 d-flex align-items-center justify-content-center justify-content-sm-start">
              {/* Productlisting section */}
              <SingleProduct details={singleProductDetails} />
            </Row>

            <Row>
              <Paging />
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default ProductListPage;
