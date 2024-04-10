import React from "react";
import highlight from "/Images/highlight.png";
import { Image } from "react-bootstrap";
import DescriptionDetails from "./DescriptionDetails";

const ProductDescription = ({ productData }) => {
  return (
    <>
      <div className="col-12 col-md-12 col-sm-12 px-3 px-sm-0">
        <hr />
        <div className="mt-4 ">
          <p className="h4 fw-bold">Highlight</p>
          <div className="d-flex gap-2 mt-4 mb-4">
            <div>
              <Image src={highlight} />
            </div>
            <div>
              <p>80+ Customers bought this item</p>
            </div>
          </div>
        </div>
        <hr />
        <div>
          <p className="fw-bold h3 mb-4">Product Description</p>
          <DescriptionDetails productDescription={productData} />
        </div>
      </div>
    </>
  );
};

export default ProductDescription;
