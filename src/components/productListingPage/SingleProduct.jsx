import React from "react";
import ProductImage from "./ProductImage";
import { Row, Col, Container } from "react-bootstrap";
import ProductTitle from "./ProductTitle";
import ProductReview from "./ProductReview";
import ProductPrice from "./ProductPrice";

const SingleProduct = ({ price, less, review, discount, imgUrl }) => {
  return (
    <>
      <Col className="col-xl-3 col-lg-4 col-md-6 ">
        <div className="dealCard-border">
          <ProductImage productImage={imgUrl} />

          <div className="mx-1">
            <ProductTitle productDescription="Lucky Cat Print Open Front Kimono, Casual Cover Up Kimono For Spring & Summer, Women's Clothing" />
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
