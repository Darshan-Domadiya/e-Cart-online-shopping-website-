import { useEffect, useState } from "react";
import { Col, Row, Container } from "react-bootstrap";
import "./shoppingcart.scss";
import OrderSummary from "./OrderSummary";
import axios from "axios";
import Spinner from "react-bootstrap/Spinner";
import { addToCartApi, myCartApi, removeFromCartApi } from "../../api/Constant";
import { useDispatch } from "react-redux";
import { cartProductCount } from "../../app/features/CartCountSlice";
import {  toast } from "react-toastify";
import noCartProduct from "/Images/noproduct.svg";

const ShoppingCart = () => {
  const [cartItem, setCartItem] = useState();
  const [testState, setTestState] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [cartItemQuantity, setCartItemQuantity] = useState([]);
  const dispatch = useDispatch();

  const isUserLoggedIn = localStorage.getItem("token");

  const cartItemApi = async () => {
    try {
      setIsLoading(true);
      const response = await axios.post(
        myCartApi,
        {},
        {
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        }
      );
      if (response.status === 200) {
        // console.log("api success shoppingcart", response.data.result);
        setIsLoading(false);
        setCartItem(response.data.result);
      }
    } catch (error) {
      console.log("Something went wrong in cart page", error);
    }
  };

  // console.log("cart Item", cartItem);

  useEffect(() => {
    if (isUserLoggedIn) {
      cartItemApi();
    }
  }, [testState]);

  useEffect(() => {
    if (cartItem && cartItem.user_cart && cartItem.user_cart.length > 0) {
      const initialQuantity = cartItem.user_cart.map(
        (cartItem) => cartItem.quantity
      );
      setCartItemQuantity(initialQuantity);
    }
  }, [cartItem]);

  const countCartItem = async (index, id, variationId) => {
    // console.log("console in api call", index, id, variationId);
    setIsLoading(true);
    try {
      const response = await axios.post(
        addToCartApi,
        {
          quantity: index,
          product_id: id,
          product_variation_id: variationId,
        },
        {
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        }
      );
      if (response.status === 200) {
        // console.log("response successfull", response.data.result);
        setCartItem(response.data.result);
        setIsLoading(false);
        setTestState(!testState);
      }
    } catch (error) {
      console.log("Some error in cart Item quantity", error);
      setIsLoading(false);
    }
  };

  const handleCountChange = (index, newQuantity) => {
    const updatedQuantity = [...cartItemQuantity];
    updatedQuantity[index] = newQuantity;
    setCartItemQuantity(updatedQuantity);
  };

  const handleDecreaseQuantity = (index, id, variationId) => {
    if (cartItemQuantity[index] > 1) {
      handleCountChange(index, cartItemQuantity[index] - 1);
      countCartItem(cartItemQuantity[index] - 1, id, variationId);
    }
  };
  const handleIncrementQuantity = (index, id, variationId) => {
    handleCountChange(index, cartItemQuantity[index] + 1);
    countCartItem(cartItemQuantity[index] + 1, id, variationId);
  };

  // console.log(cartItem.user_cart.length);

  const handleDeleteCartProduct = async (cartId) => {
    try {
      const response = await axios.post(
        removeFromCartApi,
        {
          cart_product_id: [cartId],
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      if (response.status === 200) {
        setCartItem(response.data.result);
        setTestState(!testState);
        toast.success("Product is deleted successfully!", {
          position: "top-right",
        });
        dispatch(cartProductCount(response.data.result.user_cart.length));
        // console.log("cart product deleted successfully", response.data.result);
      }
    } catch (error) {
      console.log(
        "Something went wrong while deleting product in the shopping cart",
        error
      );
    }
  };

  return (
    <>
      
      {isLoading ? (
        <div className="text-center mt-5 mb-5">
          <Spinner animation="border" variant="primary" />
        </div>
      ) : (
        <Container className="mt-5 ">
          <Row>
            <Col>
              {/* For heading */}
              <Row>
                <Col className="col-12 col-sm-6 col-sm-6 d-flex align-items-center gap-2">
                  <p className="h2 fw-bold">Shopping Cart</p>(
                  {cartItem &&
                    cartItemQuantity &&
                    cartItem.user_cart &&
                    cartItem.user_cart.length}{" "}
                  Items)
                </Col>
              </Row>

              {cartItem &&
              cartItemQuantity &&
              cartItem.user_cart &&
              cartItem.user_cart.length > 0 ? (
                cartItem.user_cart.map((cartItem, index) => {
                  return (
                    cartItem && (
                      <Row key={index} className="border rounded-4 p-3 mt-4">
                        {/* Column for img and product description/features */}
                        <Col className="col-md-12 col-lg-8 col-xl-9  d-flex align-items-center justify-content-center gap-5 ">
                          <Row>
                            {/* Column for checkbox and product image */}
                            {cartItem.product_info && (
                              <Col className=" col-12 col-sm-4  d-flex align-items-center justify-content-center gap-2">
                                <img
                                  src={
                                    cartItem.product_info.product_images[0]
                                      .product_image_url
                                  }
                                  className="img-fluid"
                                />{" "}
                              </Col>
                            )}

                            {/* Column for product description and save/delete button */}

                            <Col className="mt-2 mx-sm-0 col-12 col-md-4 col-lg-8">
                              <p>{cartItem.product_info.name}</p>
                              <div className=" d-flex align-items-center gap-3">
                                <div>
                                  <span className="fw-bold h2">$</span>
                                  <span className="fw-bold h2">
                                    {cartItem.product_info.sale_price}
                                  </span>
                                </div>
                                <span>
                                  <strike>
                                    ${cartItem.product_info.main_rrp}
                                  </strike>
                                </span>
                                <span className="text-primary fw-bold">
                                  {Math.floor(
                                    cartItem.product_info.discount_percentage
                                  )}
                                  <span>%</span> Off
                                </span>
                              </div>
                              <div className="mt-3 d-flex align-items-center gap-2">
                                <span className="text greyText fw-bold">
                                  Qunatity:
                                </span>
                                <button className="counter-button btn px-2 py-0">
                                  <span
                                    className="fw-bold"
                                    onClick={() =>
                                      handleDecreaseQuantity(
                                        index,
                                        cartItem.product_id,
                                        cartItem.product_variation_id
                                      )
                                    }
                                  >
                                    -
                                  </span>
                                </button>

                                <span>{cartItemQuantity[index]}</span>

                                <button className="counter-button btn px-2 py-0">
                                  <span
                                    className="fw-bold"
                                    onClick={() =>
                                      handleIncrementQuantity(
                                        index,
                                        cartItem.product_id,
                                        cartItem.product_variation_id
                                      )
                                    }
                                  >
                                    +
                                  </span>
                                </button>
                                <div className="d-flex"></div>
                                <button
                                  className="border-0 p-1 rounded-3"
                                  onClick={() =>
                                    handleDeleteCartProduct(cartItem.id)
                                  }
                                >
                                  Delete
                                </button>
                              </div>
                            </Col>
                          </Row>
                        </Col>

                        {/* Column for condition and items left */}
                        <Col className=" mt-2 mx-sm-0 mt-lg-2 col-12  col-sm-12 col-md-12 col-lg-4 col-xl-3 mt-lg-0 mt-xl-0 col-12 mt-md-3 mx-md-4 mx-lg-0 mx-xl-0 ">
                          <p className="greyText fw-bold">
                            Condition :
                            <span className="fw-bold text-dark">
                              {cartItem.product_variation_id === null
                                ? cartItem.product_info.product_condition.title
                                : cartItem.product_info
                                    .product_variation_detail[0]
                                    .product_condition.title}
                            </span>
                          </p>
                          <p>
                            374 sold, by{" "}
                            <span className="fw-bold">Celby Store</span>,
                            <span className="text-warning fw-bold">
                              {" "}
                              2 left{" "}
                            </span>
                          </p>
                        </Col>
                      </Row>
                    )
                  );
                })
              ) : (
                <Container className="mt-4">
                  <div className="d-flex align-items-center justify-content-center">
                    <div className="d-flex flex-column">
                      <div className="text-center">
                        <img src={noCartProduct} height="75%" width="75%" />
                      </div>
                      <div className="text-center mt-3">
                        <span className="fs-3 fw-bold">
                          No Products in the Cart
                        </span>
                      </div>
                    </div>
                  </div>
                </Container>
              )}
            </Col>

            <Col className="col-md-12   mt-5 mt-md-5 col-lg-4 col-xl-4">
              <OrderSummary orderDetail={cartItem} />
            </Col>
          </Row>
        </Container>
      )}
    </>
  );
};

export default ShoppingCart;
