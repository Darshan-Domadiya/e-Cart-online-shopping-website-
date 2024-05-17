import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import helpLogo from "/Images/help.svg";
import cancelIcon from "/Images/cancel-icon.svg";
import liveChatLogo from "/Images/live-chat.svg";
import downloadInvoice from "/Images/download.svg";
import confirmOrder from "/Images/orderConfirm.svg";
import deliveredOrder from "/Images/orderDelivered.svg";
import orderDelivery from "/Images/orderOutForDelivery.svg";
import orderShipped from "/Images/orderShipped.svg";
import axios from "axios";
import { myOrderListApi } from "../../api/Constant";
import { useNavigate, useParams } from "react-router-dom";
import Loader from "../../components/loader/Loader";
import OrderStatusLogo from "../../components/orderStatusLogo/OrderStatusLogo.jsx";
import "./orderdetail.scss";

const orderStatus = [
  { statusLogo: confirmOrder, index: 0 },
  { statusLogo: orderShipped, index: 1 },
  { statusLogo: orderDelivery, index: 2 },
  { statusLogo: deliveredOrder, index: 3 },
];

const OrderDetail = () => {
  const [displayData, setDisplayData] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { sub_order_number } = useParams();
  //   console.log(sub_order_number, order_number);
  const navigate = useNavigate();

  const displayDeliveryAddress = async () => {
    try {
      setIsLoading(true);
      const response = await axios.post(
        myOrderListApi,
        {},
        {
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        }
      );
      if (response.status === 200) {
        const filteredOrderItem = response.data.result.data.filter(
          (eachOrderItem) => eachOrderItem.sub_order_number === sub_order_number
        );
        setDisplayData(filteredOrderItem);
        setIsLoading(false);
        // console.log("response successfull", response.data.result.data);
      }
    } catch (error) {
      console.log("Error while displaying error", error);
    }
  };

  // console.log("data", displayData);

  useEffect(() => {
    displayDeliveryAddress();
  }, []);

  const handleOrderDetailClick = (displayData) => {
    navigate(
      `/productdetails/${displayData[0].product_info.slug}/${displayData[0].product_info.unique_id}/${displayData[0].product_info.sku}/${displayData[0].order_id}`
    );
  };

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <Container className="mt-5 ">
          <Row>
            <Col>
              <span className="fs-2 fw-bolder"> Order Details </span>
            </Col>
            <Col className="d-flex align-items-center justify-content-end">
              <div className="d-flex align-items-center justify-content-center gap-2 helpLogo-icon">
                <img src={helpLogo} /> <span className="fw-bolder">Help</span>
              </div>
            </Col>
          </Row>
          <hr className="hr-line" />
          <Row className="">
            <Col className="col-12 col-sm-6">
              <span className="greyText fw-bolder  fs-5">Delivery Address</span>
              <div className=" mt-3">
                <span>
                  <span className="fw-bold h6">Darshan Domadiya</span> <br />
                  D-04,Takshashila orient, Kalyan Chawk, Ahmedabad, India,
                  382330 {/* {displayData[0]?.order_info?.address} */}
                  <br />
                  Phone number: +91 9687211245
                </span>
              </div>
            </Col>

            <Col className="leftBorder  col-12 col-sm-6 ">
              <div className="mt-3 mt-sm-0 greyText fw-bolder fs-5 mx-sm-5">
                Actions
              </div>
              <div className="mt-sm-4 mt-3 d-flex  align-items-center gap-2 mx-sm-5">
                <img src={downloadInvoice} />
                <span className="invoice-color fw-bold">Download Invoice</span>
              </div>
            </Col>
          </Row>
          <hr className="hr-line" />
          <Row className="mt-4">
            <div>
              {/* main div */}
              <div className="d-flex align-items-center gap-3 gap-sm-4">
                <div
                  className="orderItem-div"
                  onClick={() => handleOrderDetailClick(displayData)}
                >
                  <img
                    src={
                      displayData[0]?.product_info?.product_images[0]
                        ?.product_image_url
                    }
                    className="orderItemImage"
                  />
                </div>
                <div>
                  <span
                    className="orderDetail-description singlelineOrderDetail-text"
                    onClick={() => handleOrderDetailClick(displayData)}
                  >
                    {displayData[0]?.product_info?.description}
                  </span>
                  <div className="d-sm-flex  align-items-sm-center gap-sm-3 mt-3 ">
                    <div className="fw-bold">
                      <sup className="fs-6">$</sup>
                      <span className="fs-4">
                        {displayData[0]?.product_info?.sale_price}
                      </span>
                    </div>
                    <div className="my-2 my-sm-0">
                      <span>
                        <span className="greyText"> Condition:</span>
                        <span className="fw-bold">Brand New</span>
                      </span>
                    </div>
                    <div>
                      <span>
                        <span className="greyText"> Quantity:</span>
                        <span className="fw-bold">
                          {displayData[0]?.quantity}
                        </span>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="gap-3 mt-5">
              <div className="d-flex align-items-center justify-content-center position-relative  orderStatusLine">
                {orderStatus.map((eachStatusLogo, index) => {
                  return (
                    <OrderStatusLogo
                      key={index}
                      orderStatusImage={eachStatusLogo}
                    />
                  );
                })}
              </div>

              <div className="col-3 text-center">
                <div className="textColor-confirmOrder fw-bolder">
                  Order Confirmed
                </div>
                <div className="greyText">26 Apr 2024</div>
              </div>
            </div>

            <div className="d-flex align-items-center gap-3">
              <div className="d-flex align-items-center gap-2 mt-5 liveChat-icon">
                <img src={liveChatLogo} className="img-fluid mx-2" />
                <span className="fw-bold">Chat with Vendor</span>
              </div>
              <div className="d-flex align-items-center gap-2 mt-5 cancelOrder-icon">
                <img src={cancelIcon} className="img-fluid mx-2" />
                <span className="fw-bold">Cancel Order</span>
              </div>
            </div>
            <hr className="hr-line mt-4" />
          </Row>
        </Container>
      )}
    </>
  );
};

export default OrderDetail;
