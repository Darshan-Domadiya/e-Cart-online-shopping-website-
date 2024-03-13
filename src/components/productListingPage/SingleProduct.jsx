import React from "react";
import ProductImage from "./ProductImage";
import { Col } from "react-bootstrap";
import ProductTitle from "./ProductTitle";
import ProductReview from "./ProductReview";
import ProductPrice from "./ProductPrice";
import { useNavigate } from "react-router-dom";

const SingleProduct = ({ details }) => {
  const navigate = useNavigate();

  const { price, less, review, discount, imgUrl, description } = details;

  return (
    <>
      <Col className="col-9 d-flex align-items-center justify-content-center col-xl-3 col-lg-4 col-md-6  ">
        <div
          className="dealCard-border mt-3 mt-sm-3  mt-lg-3 mt-xl-0"
          onClick={() => navigate("/productdetails")}
        >
          <ProductImage productImage={imgUrl} />

          <div className="p-2">
            <ProductTitle productDescription={description} />
            <div className="d-flex align-items-center gap-3 ">
              <ProductReview review={review} />
            </div>

            <div className="mt-2 d-flex align-items-start justify-content-between mx-4">
              <ProductPrice price={price} less={less} discount={discount} />
            </div>
          </div>
        </div>
      </Col>
    </>
  );
};

export default SingleProduct;
