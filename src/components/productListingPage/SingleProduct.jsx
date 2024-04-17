import React, { useEffect } from "react";
import ProductImage from "./ProductImage";
import { Col } from "react-bootstrap";
import ProductTitle from "./ProductTitle";
import ProductReview from "./ProductReview";
import ProductPrice from "./ProductPrice";
import { useNavigate } from "react-router-dom";

const SingleProduct = ({ productListData }) => {
  const navigate = useNavigate();

  const handleProductClick = () => {
    navigate(
      `/productDetails/${productListData.slug}/${productListData.unique_id}/${productListData.sku}`
    );
  };

  // console.log("product List data in single product", productListData);

  return (
    <>
      <Col className="col-9 d-flex align-items-center justify-content-center col-xl-3 col-lg-4 col-md-6  mt-4 ">
        <div
          className="dealCard-border mt-3 mt-sm-3  mt-lg-3 mt-xl-0"
          onClick={() => handleProductClick(productListData.id)}
        >
          <ProductImage productImage={productListData} />

          <div className="p-2">
            <ProductTitle productDescription={productListData} />
            <div className="d-flex align-items-center gap-3 ">
              <ProductReview />
            </div>

            <div className="mt-2 ">
              <ProductPrice productPrice={productListData} />
            </div>
          </div>
        </div>
      </Col>
    </>
  );
};

export default SingleProduct;
