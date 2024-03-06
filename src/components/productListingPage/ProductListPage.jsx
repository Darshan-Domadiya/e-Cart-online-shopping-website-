import React, { useState } from "react";
import "./productlistpage.scss";
import productList1 from "/Images/productList1.png";
import { Container, Row, Col } from "react-bootstrap";
import SingleProduct from "./SingleProduct";
import ProductFilter from "./ProductFilter";
import Paging from "./Paging";

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
    review: "32,45",
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
];

const ProductListPage = () => {
  return (
    <>
      <Container fluid>
        {/* Filters and Results section */}

        <Row className="mt-5 ">
          {/* Filter column */}

          <Col className="col-xl-3 col-lg-3 col-md-3 ">
            <ProductFilter />
          </Col>

          {/* Results section column */}
          <Col className="col-xl-9 col-lg-9 ">
            <Row>
              <Col className="text-md-center">
                <p className="fw-bold h2">Results</p>
              </Col>

              <Col className="col-md-8 d-flex align-items-center justify-content-center">
                <div className="filter-div filter-border rounded-5 p-2 input-div d-flex justify-content-center align-items-center gap-2">
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
                    <option value="highest price">Lowest Price</option>
                    <option value="highest price">Top Customer Reviews</option>
                    <option value="highest price">Most Recent</option>
                  </select>
                </div>
              </Col>
            </Row>

            <Row className="mt-5">
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
