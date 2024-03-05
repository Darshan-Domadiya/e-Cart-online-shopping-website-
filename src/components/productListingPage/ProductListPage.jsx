import React, { useState } from "react";
import "./productlistpage.scss";

import productList1 from "/Images/productList1.png";
import { Pagination } from "react-bootstrap";

import { Container, Row, Col } from "react-bootstrap";
import SingleProduct from "./SingleProduct";
import ProductFilter from "./ProductFilter";

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

              <SingleProduct
                imgUrl={productList1}
                price="$44"
                less="$50"
                review="34,565"
                discount="-10"
              />
              <SingleProduct
                imgUrl={productList1}
                price="$23"
                less="$30"
                discount="-12"
              />

              <SingleProduct
                imgUrl={productList1}
                price="$33"
                less="$45.50"
                discount="-5"
              />
            </Row>

            <Row>
              <div className="d-flex align-items-center justify-content-center mt-5">
                <Pagination>
                  <Pagination.First />
                  <Pagination.Prev />
                  <Pagination.Item active>{1}</Pagination.Item>
                  <Pagination.Item>{2}</Pagination.Item>

                  <Pagination.Item>{3}</Pagination.Item>
                  <Pagination.Item>{4}</Pagination.Item>
                  <Pagination.Ellipsis />

                  <Pagination.Next />
                  <Pagination.Last />
                </Pagination>
              </div>
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default ProductListPage;
