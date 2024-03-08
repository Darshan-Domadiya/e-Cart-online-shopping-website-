import React from "react";
import { Col } from "react-bootstrap";

const CartProductDetails = () => {
  return (
    <>
      <Col className="mt-2 mx-sm-0 col-12 col-md-4 col-lg-8">
        <p>Women's Blouse Solid Simple Long Sleeve V Neck Button Blouse</p>
        <div className=" d-flex align-items-center gap-3">
          <div>
            <span className="fw-bold h2">$</span>
            <span className="fw-bold h2">12</span>
          </div>
          <span>
            <strike>$38.98</strike>
          </span>
          <span className="text-primary fw-bold">-65%</span>
        </div>
        <div className="mt-3 d-flex align-items-center gap-2">
          <span className="text greyText fw-bold">Qunatity:</span>
          <input type="number" className="custom-input" min={0} max={15} />
          <div className="d-flex"></div>
          <button className="border-0 p-1 rounded-3">Delete</button>
          <button className="border-0 p-1 rounded-3">Save</button>
        </div>
      </Col>
    </>
  );
};

export default CartProductDetails;
