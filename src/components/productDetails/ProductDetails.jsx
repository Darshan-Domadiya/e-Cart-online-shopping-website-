import React from "react";
import "./productdetails.scss";
import { Col, Container, Row } from "react-bootstrap";
import ProductPrice from "./ProductPrice";
import ProductColorSize from "./ProductColorSize";
import ProductDelivery from "./ProductDelivery";
import CartSection from "./CartSection";
import CustomerReview from "./CustomerReview";
import ProductDescription from "./ProductDescription";
import CustomerComments from "./CustomerComments";
import ProductImages from "./ProductImages";
import ProductTitle from "./ProductTitle";
import { useLocation, useParams } from "react-router-dom";

const ProductDetails = () => {
  // const { productId } = useParams();
  const { state } = useLocation();

  const singleProductData = state && state.singleProductData;
  
  // console.log("singleProductData", singleProductData);
    // console.log("productId", productId);

  return (
    <>
      <Container className="mt-5">
        <Row>
          <Col className="col-12  col-md-6 col-lg-6 col-xl-6 ">
            <ProductImages productData={singleProductData} />
          </Col>

          <Col className=" col-12 col-sm-7 col-md-6 col-lg-6 col-xl-6 ">
            <ProductTitle productData={singleProductData} />
            <ProductPrice productData={singleProductData} />
            <ProductColorSize />
            <ProductDelivery />
            <CartSection />
          </Col>
        </Row>

        <Row>
          <Col className="col-12 col-md-6">
            <Container>
              <CustomerReview />
              <CustomerComments />
            </Container>
          </Col>
          <Col className="col-12 col-md-6">
            <ProductDescription productData={singleProductData} />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default ProductDetails;
