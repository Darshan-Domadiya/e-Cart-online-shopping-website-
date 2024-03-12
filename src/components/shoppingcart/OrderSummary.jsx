import React from "react";
import { Button } from "react-bootstrap";

const OrderSummary = () => {
  return (
    <>
      <div className="cardBackground px-3 ">
        <p className="h4 mt-2">Order Summary</p>
        <hr />
        <div className="d-flex align-items-center justify-content-between">
          <div>
            <p>
              Item<span>(s)</span> Total
            </p>
          </div>
          <div>
            <p>$68.50</p>
          </div>
        </div>

        <div className="d-flex align-items-center justify-content-between">
          <div>
            <p>
              Item<span>(s)</span> Discount
            </p>
          </div>
          <div>
            <p>-$40</p>
          </div>
        </div>

        <div className="d-flex align-items-center justify-content-between">
          <div>
            <p>
              Subtotal<span>:</span>
            </p>
          </div>
          <div>
            <p>$28.50</p>
          </div>
        </div>

        <div className="d-flex align-items-center justify-content-between">
          <div>
            <p>
              Delivery<span>:</span>
            </p>
          </div>
          <div>
            <p className="text-success fw-bold">Free</p>
          </div>
        </div>
        <hr />
        <div className="d-flex align-items-center justify-content-between">
          <div>
            <p>
              Total<span>(3 Items) :</span>
            </p>
          </div>
          <div>
            <p>$28.50</p>
          </div>
        </div>
        <div className="text-center">
          <Button className="custom-button ">Proceed To Checkout</Button>
        </div>
        <div className="mt-2">
          <p>
            Order within <span className="text-warning">2h 25m</span> and choose{" "}
            <span className="text-warning">Express Shipping</span> to get it by{" "}
            <span className="text-warning">Tuesday 25/7/2023</span>
          </p>
        </div>
      </div>
    </>
  );
};

export default OrderSummary;
