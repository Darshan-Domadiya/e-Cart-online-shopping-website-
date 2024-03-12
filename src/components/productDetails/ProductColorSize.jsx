import React from "react";
import "./productcolorsize.scss";
import ruler from "/Images/ruler.png";
import { Image } from "react-bootstrap";

const sizeChart = [
  { size: "XS" },
  { size: "S" },
  { size: "M" },
  { size: "L" },
  { size: "XL" },
  { size: "XXL" },
];

const colorChart = [
  {
    color: "orange",
  },
  {
    color: "black",
  },
  {
    color: "green",
  },
  {
    color: "Purple",
  },
  {
    color: "blue",
  },
];

const ProductColorSize = () => {
  return (
    <>
      <div className="mx-3">
        <p>
          Color : <span className="fw-bold">Orange</span>
        </p>
      </div>
      <div className="d-flex gap-2 mx-3">
        {colorChart.map((value) => {
          return (
            <div
              className="boxColor"
              style={{ backgroundColor: value.color }}
            ></div>
          );
        })}
      </div>
      <div className="d-flex gap-2 align-items-center mt-4 mx-3">
        <span>Size :</span>
        <div className="d-flex gap-3 ">
          {sizeChart.map((item) => {
            return (
              <div className="sizeBackground text-center">{item.size}</div>
            );
          })}
        </div>
      </div>
      <div className="mt-3 sizeGuideBackground text-center mx-3">
        <Image src={ruler} />
        <span> Size guide</span>
      </div>
      <div className="d-flex mt-4 gap-3 align-items-center mx-3">
        Quantity<span>:</span>
        <input
          type="number"
          min={0}
          max={10}
          className="text-center rounded-5 inputBorder"
        />
      </div>
    </>
  );
};

export default ProductColorSize;
