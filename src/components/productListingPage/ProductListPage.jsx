import React, { useEffect, useState } from "react";
import "./productlistpage.scss";
import { Container, Row, Col } from "react-bootstrap";
import SingleProduct from "./SingleProduct";
import ProductFilter from "./ProductFilter";
import Paging from "./Paging";
import { IoFilter } from "react-icons/io5";
import Button from "react-bootstrap/Button";
import { Offcanvas } from "react-bootstrap";
import axios from "axios";
import Spinner from "react-bootstrap/Spinner";
import { useNavigate, useParams } from "react-router-dom";

const ProductListPage = () => {
  const [show, setShow] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [productList, setProductList] = useState([]);
  const [sortBy, setSortBy] = useState(null);
  const navigate = useNavigate();
  const { category_id, sub_category_id, collection_id } = useParams();

  const handleSortBy = (e) => {
    const selectedSortBy = e.target.value;

    setSortBy(selectedSortBy);
    let path = "";
    if (category_id) {
      path += `/${category_id}`;
    }
    if (sub_category_id) {
      path += `/${sub_category_id}`;
    }
    if (collection_id) {
      path += `/${collection_id}`;
    }

    navigate(`${path}/?sort_by=${selectedSortBy}`);
    console.log("value of sort by", selectedSortBy);
  };

  const getProductList = async () => {
    try {
      let data = {};
      if (category_id) {
        data.category_id = category_id;
      }
      if (sub_category_id) {
        data.sub_category_id = sub_category_id;
      }
      if (collection_id) {
        data.collection_id = collection_id;
      }
      if (sortBy) {
        data.sort_by = sortBy;
      }

      setIsLoading(true);
      const response = await axios.post(
        "https://bargainfox-dev.concettoprojects.com/api/product/list",
        data
      );
      if (response.status === 200) {
        console.log("productlisting", response);
        setProductList(response.data.result.data);
        // console.log("state variable", productList);
      }
    } catch (error) {
      console.log("Error", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getProductList();
  }, [category_id, collection_id, sub_category_id, sortBy]);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      {isLoading ? (
        <div className="text-center mt-5 mb-5">
          <Spinner animation="border" variant="primary" />
        </div>
      ) : (
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
                <Col className="d-flex align-items-center justify-content-around justify-content-md-start gap-2 text-md-start text-lg-start text-xl-start col-12 col-sm-6 col-md-4 col-lg-6 col-xl-6 text-center ">
                  <p className="fw-bold h2">Results</p>
                  <div className="d-flex align-items-center gap-2 d-md-none">
                    <Button onClick={handleShow} className="px-2 ">
                      <div className="d-flex align-items-center gap-2 d-md-none">
                        <p className="fw-bold h5">Filter</p>
                        <IoFilter />
                      </div>
                    </Button>
                    <Offcanvas
                      show={show}
                      onHide={handleClose}
                      placement="end"
                      className="d-md-none offcanvas-style"
                    >
                      <Offcanvas.Header closeButton></Offcanvas.Header>
                      <Offcanvas.Body>
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
                      // onClick={(e) => handleSortBy(e)}
                      onChange={(e) => {
                        if (e.target.value !== "default") {
                          handleSortBy(e);
                        }
                      }}
                    >
                      <option defaultChecked value="default">
                        Select
                      </option>
                      <option value="highest_price">Highest Price</option>
                      <option value="lowest_price">Lowest Price</option>
                      <option value="top_customer_reviews">
                        Top Customer Reviews
                      </option>
                      <option value="most_recent">Most Recent</option>
                    </select>
                  </div>
                </Col>
              </Row>
              {/* Columns of product listing */}
              {productList.length === 0 && category_id && collection_id ? (
                <div className="noData-div d-flex align-items-baseline justify-content-center mt-5">
                  <p className="fw-bolder fs-1">Nothing to show</p>
                </div>
              ) : (
                <Row className="mt-5 mt-sm-5 mt-md-5 d-flex align-items-center justify-content-center justify-content-sm-start">
                  {productList.map((listData, index) => {
                    return (
                      <SingleProduct productListData={listData} key={index} />
                    );
                  })}
                </Row>
              )}

              <Row>
                <Paging className="position-fixed" />
              </Row>
            </Col>
          </Row>
        </Container>
      )}
    </>
  );
};

export default ProductListPage;
