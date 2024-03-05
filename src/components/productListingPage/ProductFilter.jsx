import React from "react";
import PriceRadioButton from "./PriceRadioButton";
import DiscountRadioButton from "./DiscountRadioButton";

const priceList = [
  { price: "Under $10" },
  { price: "Under $20" },
  { price: "Under $40" },
  { price: "Under $30" },
  { price: "Under $50" },
  { price: "Under $60" },
];

const discountList = [
  { discount: "More than 70% Discount" },
  { discount: "More than 70% Discount" },
  { discount: "Upto 30% Discount" },
  { discount: "More than 50% Discount" },
  { discount: "More than 70% Discount" },
  { discount: "Upto 30% Discount" },
  { discount: "Upto 50% Discount" },
];

const ProductFilter = () => {
  return (
    <>
      <div>
        <p className="fw-bold h3">Filters</p>

        <p className="h4 fw-bold mt-5">Price</p>
        <PriceRadioButton priceList={priceList} />

        <div className="mt-4">
          <p className="h4 fw-bold">Discount</p>
          <DiscountRadioButton discountList={discountList} />
        </div>
      </div>
    </>
  );
};

export default ProductFilter;
