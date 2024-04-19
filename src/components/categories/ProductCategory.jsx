import React, { useEffect, useState } from "react";
import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import banner from "/Images/banner.png";
import "./productCategory.scss";
import SingleProductCategory from "./SingleProductCategory";
import axios from "axios";
import Spinner from "react-bootstrap/Spinner";
import { categoryListApi } from "../../api/Constant";

const ProductCategory = () => {
  const [productCategoryData, setProductCategoryData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchProductCategory = async () => {
    try {
      setIsLoading(true);
      const response = await axios.get(categoryListApi);
      if (response.status === 200) {
        // console.log("product category data", response.data.result);
        setProductCategoryData(response.data.result);
      } else {
        console.log("Product category data is not fatched.");
      }
    } catch (error) {
      console.log("Error", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchProductCategory();
  }, []);

  return (
    <>
      {isLoading ? (
        <div className="text-center mt-5 mb-5">
          <Spinner animation="border" variant="primary" />
        </div>
      ) : (
        <Container className="mt-5 mb-3">
          <Row className=" d-flex align-items-center justify-content-center">
            {productCategoryData.map((eachData, index) => {
              return (
                <Col
                  key={index}
                  className="productCategory-width col-6 col-sm-6 col-md-3 col-lg-2 col-xl-2"
                >
                  <SingleProductCategory dataList={eachData} />
                </Col>
              );
            })}
          </Row>
        </Container>
      )}

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
