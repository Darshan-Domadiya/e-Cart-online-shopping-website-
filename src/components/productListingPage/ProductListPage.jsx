import React, { useEffect, useState } from "react";
import "./productlistpage.scss";
import { Container, Row, Col } from "react-bootstrap";
import SingleProduct from "./SingleProduct";
import Paging from "./Paging";
import { IoFilter } from "react-icons/io5";
import Button from "react-bootstrap/Button";
import { Offcanvas } from "react-bootstrap";
import axios from "axios";
import Spinner from "react-bootstrap/Spinner";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { Checkbox } from "pretty-checkbox-react";
import "@djthoms/pretty-checkbox";

const ProductListPage = () => {
  const filterData = [
    {
      id: 6,
      title: "Discount",
      key: "discount",
      type: "radio",
      data: [
        { id: 1, title: "90% off or more", slug: "90" },
        { id: 2, title: "80% off or more", slug: "80" },
        { id: 3, title: "70% off or more", slug: "70" },
        { id: 4, title: "60% off or more", slug: "60" },
        { id: 5, title: "50% off or more", slug: "50" },
        { id: 6, title: "40% off or more", slug: "40" },
        { id: 7, title: "30% off or more", slug: "30" },
      ],
    },
    {
      id: 8,
      title: "Price",
      key: "price_range",
      type: "radio",
      data: [
        { id: 1, title: "Under £10", slug: "0-10" },
        { id: 2, title: "£10 - £25", slug: "10-25" },
        { id: 3, title: "£25 - £50", slug: "25-50" },
        { id: 4, title: "£50 - £100", slug: "50-100" },
        { id: 5, title: "Over £100", slug: "100-0" },
      ],
    },
  ];

  const PricingFilters = [
    {
      min: 0,
      max: 10,
      range: "0-10",
    },
    {
      min: 10,
      max: 25,
      range: "10-25",
    },
    {
      min: 25,
      max: 50,
      range: "25-50",
    },
    {
      min: 50,
      max: 100,
      range: "50-100",
    },
    {
      min: 0,
      max: 100,
      range: "100-0",
    },
  ];

  const [pageResult, setPageResult] = useState({});
  const [show, setShow] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [productList, setProductList] = useState([]);

  const navigate = useNavigate();

  const { category_id, sub_category_id, collection_id } = useParams();

  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const pageValue = searchParams.get("page");
  const minPrice = searchParams.get("min_price");
  const maxPrice = searchParams.get("max_price");
  const priceRange = searchParams.get("price_range");
  const discountValue = searchParams.get("discount");
  const sortByValue = searchParams.get("sort_by");

  const [selectedPrice, setSelectedPrice] = useState(priceRange);
  const [selectedDiscount, setSelectedDiscount] = useState(discountValue);
  const [sortBy, setSortBy] = useState(sortByValue);

  const handlePriceChange = (e) => {
    const priceChangeValue = e.target.value;

    if (selectedPrice === priceChangeValue) {
      setSelectedPrice(null);
    } else {
      setSelectedPrice(priceChangeValue);
    }
  };

  const handleDiscountChange = (e) => {
    const discountChangeValue = e.target.value;
    if (selectedDiscount === discountChangeValue) {
      setSelectedDiscount(null);
    } else {
      setSelectedDiscount(discountChangeValue);
    }
  };

  useEffect(() => {
    let path = "";
    if (selectedDiscount || selectedPrice) {
      if (selectedDiscount) {
        path += `&discount=${selectedDiscount}`;
      }
      if (selectedPrice) {
        const test = PricingFilters.find((o) => o.range === selectedPrice);
        if (test.min >= 0) {
          path += `&min_price=${test.min}`;
        }
        if (test.max >= 0) {
          path += `&max_price=${test.max}`;
        }
        path += `&price_range=${selectedPrice}`;
      }

      navigate(`?page=1${path}`);
    }
    if (!selectedDiscount && !selectedPrice && !sortBy) {
      path = path.replace(/&?discount=[^&]*/g, "");
      navigate(`${path}`);
    }

    if (minPrice) {
      path = path.replace(/&?min_price=[^&]*/g, "");
      path += `&min_price=${minPrice}`;
    }
    if (maxPrice) {
      path = path.replace(/&?max_price=[^&]*/g, "");
      path += `&max_price=${maxPrice}`;
    }

    if (priceRange) {
      path = path.replace(/&?price_range=[^&]*/g, "");
      path += `&price_range=${priceRange}`;
    }
  }, [
    selectedDiscount,
    selectedPrice,
    minPrice,
    maxPrice,
    priceRange,
    discountValue,
  ]);

  const handleSortBy = (e) => {
    const selectedSortBy = e.target.value;

    setSortBy(selectedSortBy);

    let path = "";

    if (category_id) path += `/${category_id}`;

    if (sub_category_id) path += `/${sub_category_id}`;

    if (collection_id) path += `/${collection_id}`;

    if (selectedSortBy !== "default") {
      path = path.replace(/&?sort_by=[^&]*/g, "");
      path += `?sort_by=${selectedSortBy}`;
    }

    navigate(`${path}`);
  };

  const getProductList = async () => {
    try {
      let data = {};
      const pageNum = 12;
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
      if (pageValue) {
        data.page = pageValue;
      }
      if (selectedDiscount) {
        data.discount = selectedDiscount;
      }
      if (selectedPrice) {
        const priceFilter = PricingFilters.find(
          (price) => price.range === selectedPrice
        );
        data.min_price = priceFilter.min;
        data.max_price = priceFilter.max;
      }
      if (pageNum) {
        data.per_page = pageNum;
      }

      setIsLoading(true);
      const response = await axios.post(
        "https://bargainfox-dev.concettoprojects.com/api/product/list",
        data
      );
      if (response.status === 200) {
        setProductList(response.data.result.data);
        setPageResult(response.data.result);
      }
    } catch (error) {
      console.log("Error", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getProductList();
  }, [
    category_id,
    collection_id,
    sub_category_id,
    sortBy,
    pageValue,
    selectedDiscount,
    selectedPrice,
  ]);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Container fluid>
        {/* Filters and Results section */}
        <Row className="mt-5 ">
          {/* Filter column */}

          <Col className="d-none d-md-flex col-xl-3 col-lg-3 col-md-3 ">
            {/* <ProductFilter /> */}
            <div>
              <p className="fw-bold h3">Filters</p>

              <div className="gap-2">
                <p className="h4 fw-bold mt-3 mt-md-5">Price</p>

                <div>
                  {filterData[1].data.map((item, index) => {
                    return (
                      <div className="mx-2" key={index}>
                        <Checkbox
                          className="fs-5 m-2"
                          shape="round"
                          value={item.slug}
                          onChange={handlePriceChange}
                          checked={selectedPrice == item.slug}
                        >
                          {item.title}
                        </Checkbox>
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="mt-4">
                <p className="h4 fw-bold  mt-3 mt-md-5">Discount</p>

                <div>
                  {filterData[0].data.map((item, index) => {
                    return (
                      <div className="mx-2" key={index}>
                        <Checkbox
                          className="fs-5 m-2"
                          shape="round"
                          onChange={handleDiscountChange}
                          value={item.slug}
                          checked={selectedDiscount == item.slug}
                        >
                          {item.title}
                        </Checkbox>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </Col>

          {/* Results section column */}

          <Col className="col-xl-9 col-lg-9 ">
            <Row>
              <Col className="d-flex align-items-center justify-content-around justify-content-md-start gap-2 text-md-start text-lg-start text-xl-start col-12 col-sm-6 col-md-4 col-lg-6 col-xl-6 text-center ">
                <p className="greyText fs-5 mt-2">
                  Showing 1 - {productList.length} of {productList.length}{" "}
                  {category_id && (
                    <>
                      <span>results for </span>
                      <span className="fw-bold category-Name">
                        "{category_id}"
                      </span>
                    </>
                  )}
                </p>

                <div className="d-flex align-items-center gap-2 d-md-none">
                  <Button onClick={handleShow} className="px-2">
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
                    <Offcanvas.Body>{/* <ProductFilter /> */}</Offcanvas.Body>
                  </Offcanvas>
                </div>
              </Col>

              <Col className="mt-3 mt-sm-0 col-12 col-sm-6 col-md-7 col-lg-6 col-xl-6 justify-content-sm-end col-md-8 d-flex align-items-center justify-content-center">
                <div className="text-md-end filter-div filter-border rounded-5 p-2 input-div d-flex justify-content-center align-items-center gap-2">
                  <label>
                    Sort By <span>:</span>
                  </label>

                  <select
                    name="options"
                    className="custom-select px-2 border-0"
                    value={sortBy || "default"}
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
            {isLoading ? (
              <div className="text-center mt-5 mb-5">
                <Spinner animation="border" variant="primary" />
              </div>
            ) : productList.length === 0 ? (
              <div className="h-75 d-flex align-items-center justify-content-center">
                <p className="fs-2 fw-bold"> No Product Available</p>
              </div>
            ) : (
              <>
                <Row className="mt-5 mt-sm-5 mt-md-3 d-flex align-items-center justify-content-center justify-content-sm-start">
                  {productList.map((listData) => {
                    return (
                      <SingleProduct
                        productListData={listData}
                        key={listData.id}
                      />
                    );
                  })}
                </Row>
              </>
            )}
            <Row>
              <Paging lastpage={pageResult.last_page} />
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default ProductListPage;
