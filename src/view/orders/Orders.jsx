import React, { useEffect, useState } from "react";
import { Col, Container, Form, Row } from "react-bootstrap";
import "./orders.scss";
import axios from "axios";
import { myOrderListApi } from "../../api/Constant";
import noProductImage from "/Images/noproduct.svg";
import { useNavigate } from "react-router-dom";
import Loader from "../../components/loader/Loader";
import OrdersData from "../../components/orderData/OrdersData";

const Orders = () => {
  const [orderData, setOrderData] = useState();
  const [selectedYear, setSelectedYear] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [orderType, setOrderType] = useState("Type: All orders");
  // const navigate = useNavigate();

  const getOrderList = async () => {
    try {
      setIsLoading(true);
      const response = await axios.post(
        myOrderListApi,
        {
          per_page: 10,
          order_type: orderType,
          year: selectedYear,
        },
        {
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        }
      );
      if (response.status === 200) {
        setOrderData(response.data.result.data);
        setIsLoading(false);
        // console.log("Successfully api call ", response.data.result.data);
      }
    } catch (error) {
      console.log("Error while getting your order list", error);
    }
  };

  // console.log("each order data", orderData);

  const handleOrderType = (e) => {
    setOrderType(e.target.value);
    // console.log(e.target.value);
  };

  const handleYearChange = (e) => {
    setSelectedYear(e.target.value);
    console.log(e.target.value);
  };

  const handleGoToOrderPage = () => {
    setOrderType("all_orders");
    setSelectedYear("Year");
  };

  useEffect(() => {
    getOrderList();
  }, [orderType, selectedYear]);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <Container className="mt-5">
          <Row>
            <Col className="text-center text-sm-start">
              <span className="fs-2 fw-bold">Your Orders</span>
            </Col>
            <Col className="col-12 col-sm-8 d-flex align-items-center justify-content-center justify-content-sm-end mt-3 mt-sm-0">
              <Form>
                <div className="d-flex align-items-center justify-content-end gap-3">
                  <div>
                    <Form.Select
                      name="year"
                      className="orders-select"
                      value={selectedYear}
                      onChange={(e) => handleYearChange(e)}
                    >
                      <option name="year">Period : Select...</option>
                      <option name="year" value="2024">
                        2024
                      </option>
                      <option name="year" value="2023">
                        2023
                      </option>
                      <option name="year" value="2022">
                        2022
                      </option>
                      <option name="year" value="2021">
                        2021
                      </option>
                      <option name="year" value="2020">
                        2020
                      </option>
                    </Form.Select>
                  </div>
                  <div>
                    <Form.Select
                      name="orders"
                      className="orders-select"
                      value={orderType}
                      onChange={(e) => handleOrderType(e)}
                    >
                      <option name="orders" value="all_orders">
                        Type: All Orders
                      </option>
                      <option name="orders" value="out_for_delivery">
                        On the way
                      </option>
                      <option name="orders" value="delivered">
                        Delivered
                      </option>
                      <option name="orders" value="order_cancel">
                        Cancelled
                      </option>
                      <option name="orders" value="return_request">
                        Returned
                      </option>
                    </Form.Select>
                  </div>
                </div>
              </Form>
            </Col>
          </Row>
          <hr className="horizontal-line" />
          {orderData && orderData.length > 0 ? (
            orderData.map((eachOrder, index) => {
              return (
                <React.Fragment key={index}>
                  <OrdersData eachOrderData={eachOrder} index={index} />

                  <hr className="horizontal-line" />
                </React.Fragment>
              );
            })
          ) : (
            <>
              <Container>
                <div className="d-flex align-items-center justify-content-center">
                  <div className="d-flex flex-column">
                    <div className="text-center">
                      <img src={noProductImage} height="75%" width="75%" />
                    </div>
                    <div className="text-center">
                      <span className="fs-3 fw-bold">No order found</span>
                    </div>
                    <div>
                      <span className="fs-6">
                        Try using different filter or go to back to orders
                      </span>
                    </div>
                    <div className="text-center mt-3">
                      <button
                        className="btn btn-primary fw-bold  goToYourOrders"
                        onClick={handleGoToOrderPage}
                      >
                        Go to My Orders
                      </button>
                    </div>
                  </div>
                </div>
              </Container>
            </>
          )}
        </Container>
      )}
    </>
  );
};

export default Orders;
