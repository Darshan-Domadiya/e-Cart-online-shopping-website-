import React from "react";
import { Col, Row } from "react-bootstrap";
import cancelIcon from "/Images/cancel-icon.svg";
import { useNavigate } from "react-router-dom";

const OrdersData = ({ eachOrderData, index }) => {
  const navigate = useNavigate();

  const handleOrderClick = (eachOrderData) => {
    navigate(
      `/orders/${eachOrderData.sub_order_number}/${eachOrderData.order_info.order_number}`
    );
  };

  return (
    <>
      <Row className="mt-2" key={index}>
        <span>
          Order # :
          <span className="fw-bold">{eachOrderData.sub_order_number}</span>
        </span>
        <Col className="col-lg-8 mt-2" key={index}>
          <Row>
            <Col>
              <div className="d-flex gap-3">
                <div
                  className="orderImage-div"
                  onClick={() => handleOrderClick(eachOrderData)}
                >
                  <img
                    src={
                      eachOrderData.product_info.product_images[0]
                        .product_image_url
                    }
                    className="orderImage"
                    height="100%"
                    width="100%"
                  />
                </div>
                <div className="d-flex flex-column gap-2">
                  <div
                    className="yourOrder-name"
                    onClick={() => handleOrderClick(eachOrderData)}
                  >
                    <span className="fs-6 singlelineOrder-text">
                      {eachOrderData.product_info.name}
                    </span>
                  </div>
                  <div className="fw-bold">
                    <sup className="fs-6">$</sup>
                    <span className="fs-4">{eachOrderData.amount}</span>
                  </div>
                  <div className="d-flex">
                    <div>
                      {eachOrderData &&
                        eachOrderData.product_info &&
                        eachOrderData.product_info.product_condition && (
                          <span className="fw-bold">
                            <span className="greyText">Condition :</span>
                            {eachOrderData.product_info.product_condition.title}
                          </span>
                        )}
                    </div>
                    <div>
                      <span className="fw-bold">
                        <span className="greyText">Quantity :</span>
                        {eachOrderData.quantity}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Col>
        <Col className="col-lg-4 d-sm-flex flex-sm-column align-items-sm-end align-items-baseline gap-4 justify-content-center">
          <div className="mt-3 mt-sm-0 arrivingOrder ">
            <span className="text-success fw-bold ">Arriving on :</span>
            <span> Apr 29, 2024</span>
          </div>
          <div className="cancelOrder-div">
            <div className="d-flex align-items-center gap-2 mt-sm-5 cancelOrder-border">
              <img src={cancelIcon} className="img-fluid mx-2" />
              <span className="fw-bold">Cancel Order</span>
            </div>
          </div>
        </Col>
      </Row>
    </>
  );
};

export default OrdersData;
