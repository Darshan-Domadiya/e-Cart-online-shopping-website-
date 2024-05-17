import React from "react";
import "..//..//view/orders/orders.scss";

const OrderStatusLogo = ({ orderStatusImage }) => {
  const { index, statusLogo } = orderStatusImage;
  return (
    <>
      <div className="d-flex align-items-center justify-content-center order-width ">
        <span
          className={`d-flex align-items-center justify-content-center ${
            index === 0 ? "orderStatus-div" : "shippedOrder-div"
          }`}
        >
          <img src={statusLogo} width="25px" height="25px" />
        </span>
      </div>
    </>
  );
};

export default OrderStatusLogo;
