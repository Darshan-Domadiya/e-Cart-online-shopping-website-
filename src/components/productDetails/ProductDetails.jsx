import React, { useEffect, useState, useRef, useContext } from "react";
import "./productdetails.scss";
import { Col, Container, Row, Spinner } from "react-bootstrap";
import ProductPrice from "./ProductPrice";
// import ProductColorSize from "./ProductColorSize";
import ProductDelivery from "./ProductDelivery";
// import CartSection from "./CartSection";
import CustomerReview from "./CustomerReview";
import ProductDescription from "./ProductDescription";
import CustomerComments from "./CustomerComments";
import ProductImages from "./ProductImages";
import ProductTitle from "./ProductTitle";
import { useParams } from "react-router-dom";
import axios from "axios";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import peopleImage from "/Images/people.png";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import {
  addToCartApi,
  manageWishlistApi,
  productDetailsApi,
  reviewListApi,
} from "../../api/Constant";
import { useDispatch } from "react-redux";
import { cartProductCount } from "../../app/features/CartCountSlice";
import wishlistLogo from "/Images/wishlist.png";
import WishlistContext from "../context/WishlistContext";

const ProductDetails = () => {
  const { wishlistItemCount, setWishlistItemCount } =
    useContext(WishlistContext);

  const initialState = {
    id: null,
    parent_id: null,
    vendor_id: null,
    name: null,
    sku: null,
    avg_rating: null,
    cart_qty_count: null,
    category_id: null,
    category_info: null,
    collection_id: null,
    created_at: null,
    description: null,
    discount_percentage: null,
    discount_value: null,
    expected_delivery: null,
    fastfox_enabled: null,
    id: null,
    is_added_cart: null,
    is_discount_on: null,
    is_out_stock: null,
    is_purchased: null,
    is_wishlisted: null,
    main_rrp: null,
    minimum_sale_price: null,
    name: null,
    parent_id: null,
    percentage_discount: null,
    price: null,
    product_condition: null,
    product_images: null,
    product_specification: null,
    product_view: null,
    purchase_count: null,
    rating_count: null,
    review: null,
    sale_price: null,
    share_url: null,
    size_chart_url: null,
    sku: null,
    slug: null,
    standard_expected_delivery: null,
    stock: null,
    sub_category_id: null,
    totol_review: null,
    unique_id: null,
    variation_list: null,
    vendor_id: null,
    vendor_info: null,
    colorList: null,
    color_id: null,
    color_name: null,
    size_id: null,
    size: null,
  };

  const [productDetail, setProductDetail] = useState(initialState);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState(false);
  const [quantityCount, setQuantityCount] = useState(1);
  const [selectedColorBox, setSelectedColorBox] = useState(null);
  const [selectedSizeBox, setSelectedSizeBox] = useState(null);
  const [addedToCart, setAddedToCart] = useState(false);
  const { slug, uniqueId, sku, orderId } = useParams();
  // console.log("test slug", slug);
  // console.log("test id", uniqueId);
  // console.log("test sku", sku);
  // console.log("orderId", orderId);

  const productDetailApi = async () => {
    try {
      setIsLoading(true);
      const response = await axios.get(
        `${productDetailsApi}/${slug}/${uniqueId}?/${sku}`
      );
      if (response.status === 200) {
        setProductDetail(response.data.result);
        // console.log(" response", response.data.result);
        if (
          response.data.result.variation_list &&
          response.data.result.variation_list.length > 0
        ) {
          const productSku = response.data.result.variation_list.find(
            (item) => item.sku === sku
          );
          // console.log("sku product data", productSku.color);

          setProductDetail({
            ...productDetail,
            parent_id: response.data.result.parent_id,
            vendor_id: response.data.result.vendor_id,
            avg_rating: response.data.result.avg_rating,
            cart_qty_count: response.data.result.cart_qty_count,
            category_id: response.data.result.category_id,
            category_info: response.data.result.category_info,
            collection_id: response.data.result.collection_id,
            created_at: response.data.result.created_at,
            discount_value: response.data.result.discount_value,
            expected_delivery: response.data.result.expected_delivery,
            fastfox_enabled: response.data.result.fastfox_enabled,
            is_added_cart: response.data.result.is_added_cart,
            is_discount_on: response.data.result.is_discount_on,
            is_out_stock: response.data.result.is_out_stock,
            is_purchased: response.data.result.is_purchased,
            is_wishlisted: response.data.result.is_wishlisted,
            minimum_sale_price: response.data.result.minimum_sale_price,
            parent_id: response.data.result.parent_id,
            product_specification: response.data.result.product_specification,
            product_view: response.data.result.product_view,
            purchase_count: response.data.result.purchase_count,
            rating_count: response.data.result.rating_count,
            review: response.data.result.review,
            share_url: response.data.result.share_url,
            size_chart_url: response.data.result.size_chart_url,
            slug: response.data.result.slug,
            standard_expected_delivery:
              response.data.result.standard_expected_delivery,
            stock: response.data.result.stock,
            sub_category_id: response.data.result.sub_category_id,
            total_review: response.data.result.total_review,
            unique_id: response.data.result.unique_id,
            variation_list: response.data.result.variation_list,
            vendor_id: response.data.result.vendor_id,
            vendor_info: response.data.result.vendor_info,
            colorList: response.data.result.color,
            product_condition: productSku
              ? productSku.product_condition
              : response.data.result.product_condition,
            sku: productSku ? productSku.sku : response.data.result.sku,
            rrp: productSku ? productSku.rrp : response.data.result.rrp,
            name: productSku ? productSku.name : response.data.result.name,
            main_rrp: response.data.result.main_rrp,
            description: productSku
              ? productSku.description
              : response.data.result.description,
            discount_value: productSku.discount_value,
            price: productSku ? productSku.price : response.data.result.price,
            percentage_discount: productSku
              ? productSku.percentage_discount
              : response.data.result.percentage_discount,
            product_images: productSku
              ? productSku.product_images
              : response.data.result.product_images,
            main_rrp: productSku
              ? productSku.main_rrp
              : response.data.result.main_rrp,
            sale_price: productSku
              ? productSku.sale_price
              : response.data.result.sale_price,
            stock: productSku ? productSku.stock : response.data.result.stock,
            product_variation_id: productSku
              ? productSku.product_variation_id
              : response.data.result.product_variation_id,
            color_id: productSku
              ? productSku.color
              : response.data.result.color_id,
            size: response.data.result.size,
            size_id: productSku
              ? productSku.size_id
              : response.data.result.size_id,
            id: productSku ? productSku.product_id : response.data.result.id,
          });
        }
        setIsLoading(false);
      }
    } catch (error) {
      console.log("error", error);
    }
  };

  useEffect(() => {
    productDetailApi();
  }, [slug, uniqueId, sku]);

  const handleMinusCount = () => {
    if (quantityCount <= 1) {
      return quantityCount;
    } else {
      setQuantityCount(quantityCount - 1);
    }
  };

  const handlePlusCount = () => {
    if (quantityCount < productDetail.stock)
      setQuantityCount(quantityCount + 1);
  };

  const handleSizeClick = (sizeId, colorId) => {
    setSelectedSizeBox(sizeId);
    setAddedToCart(false);
    setQuantityCount(1);
    // console.log("value of selected size box", selectedSizeBox);
    // console.log("color id", productDetail.color_id);
    // console.log("size is clicked", sizeId);
    const selectedSizeVariation = productDetail.variation_list.find(
      (sizeVariation) =>
        sizeVariation.size === sizeId && sizeVariation.color === colorId
    );
    // console.log("size matched", selectedSizeVariation);
    if (selectedSizeVariation)
      setProductDetail({
        ...productDetail,
        price: selectedSizeVariation.price,
        percentage_discount: selectedSizeVariation.percentage_discount,
        rrp: selectedSizeVariation.rrp,
        sale_price: selectedSizeVariation.sale_price,
        description: selectedSizeVariation.description,
        product_condition: selectedSizeVariation.product_condition,
        product_variation_id: selectedSizeVariation.product_variation_id,
        color_id: selectedSizeVariation.color,
        size_id: selectedSizeVariation.size_id,
      });
  };

  const handleColorClick = (colorId) => {
    setSelectedColorBox(colorId);
    setAddedToCart(false);
    setQuantityCount(1);
    const selectedVariation = productDetail.variation_list.find(
      (variation) => variation.color === colorId
    );
    // console.log("test variation", selectedVariation);
    if (selectedVariation) {
      setProductDetail({
        ...productDetail,
        product_images: selectedVariation.product_images,
        price: selectedVariation.price,
        percentage_discount: selectedVariation.percentage_discount,
        rrp: selectedVariation.rrp,
        sale_price: selectedVariation.sale_price,
        description: selectedVariation.description,
        product_condition: selectedVariation.product_condition,
        product_variation_id: selectedVariation.product_variation_id,
        color_id: selectedVariation.color,
      });
    }
  };

  // console.log("product details ", productDetail);

  const handleAddToCart = async () => {
    try {
      if (
        productDetail &&
        productDetail.size &&
        productDetail.size.length === 0
      ) {
        const response = await axios.post(
          addToCartApi,

          {
            quantity: quantityCount,
            product_id: productDetail.id,
            product_variation_id: productDetail.product_variation_id,
          },
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        );
        if (response.status === 200) {
          dispatch(cartProductCount(response.data.result.quantity));
          toast.success("Product is Added to Cart!", {
            position: "top-center",
          });
          setAddedToCart(true);
          if (addedToCart === true) {
            navigate("/shoppingcart");
          }
        }
      } else if (
        productDetail &&
        productDetail.size &&
        productDetail.size.length > 0 &&
        selectedSizeBox != null
      ) {
        const response = await axios.post(
          addToCartApi,

          {
            quantity: quantityCount,
            product_id: productDetail.id,
            product_variation_id: productDetail.product_variation_id,
          },
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        );
        if (response.status === 200) {
          console.log("cart api call successfull", response.data.result);
          dispatch(cartProductCount(response.data.result.quantity));
          toast.success("Product is Added to Cart!", {
            position: "top-center",
          });
          setAddedToCart(true);
        }
      } else {
        {
          toast.warn("Please select Size!", {
            position: "top-center",
          });
        }
      }
    } catch (error) {
      console.log("some error while adding product to cart", error);
    }
  };

  // console.log("product details", productDetail.product_images[0].product_id);

  const handleGoToCart = () => {
    navigate("/shoppingcart");
  };

  const handleAddToWishlist = async (productId, productVariationId) => {
    try {
      const response = await axios.post(
        manageWishlistApi,
        {
          product_id: productId,
          product_variation_id: productVariationId,
          action: "add",
        },
        {
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        }
      );
      if (response.status === 200) {
        setWishlistItemCount(wishlistItemCount + 1);
        toast.success("Product is added to wishlist", {
          position: "top-right",
        });
      }
    } catch (error) {
      console.log("Error while adding product to wishlist", error);
    }
  };

  return isLoading ? (
    <Container className="d-flex align-items-center justify-content-center h-100 w-100 mt-5 mb-5">
      <Spinner variant="primary" />
    </Container>
  ) : (
    <>
      {productDetail && (
        <Container className="mt-5">
          <Row>
            {productDetail && productDetail.product_images && (
              <Col className="col-12 col-md-6 wishlist-mainDiv">
                <ProductImages productImage={productDetail.product_images} />
                <div
                  className="productDetail-wishlistLogo"
                  onClick={() =>
                    handleAddToWishlist(
                      productDetail.id,
                      productDetail.product_variation_id
                        ? productDetail.product_variation_id
                        : ""
                    )
                  }
                >
                  <img
                    src={wishlistLogo}
                    className="img-fluid"
                    height="25px"
                    width="25px"
                  />
                </div>
              </Col>
            )}
            <Col className="col-12 col-sm-7 col-md-6 col-lg-6 col-xl-6">
              <ProductTitle productData={productDetail} />
              <ProductPrice productData={productDetail} />

              <>
                {/* Product condition */}

                {productDetail && productDetail.product_condition && (
                  <p className="mx-3">
                    Condition:{" "}
                    <span className="fw-bold">
                      {productDetail.variation_list &&
                      productDetail.variation_list.length > 0 &&
                      productDetail.variation_list.product_condition
                        ? productDetail.variation_list.product_condition.title
                        : productDetail.product_condition.title}
                    </span>
                  </p>
                )}

                {/* Color variation */}

                {productDetail &&
                productDetail.colorList &&
                productDetail.colorList.length > 0 ? (
                  <>
                    <div className="mx-3">
                      <p>
                        Color :
                        <span className="fw-bold">
                          {selectedColorBox === null
                            ? productDetail.colorList.find(
                                (initialColor) =>
                                  initialColor.variation_id ===
                                  productDetail.color_id
                              ).variation_name
                            : selectedColorBox &&
                              productDetail.colorList &&
                              productDetail.colorList.length > 0 &&
                              productDetail.colorList.find(
                                (colorName) =>
                                  colorName.variation_id === selectedColorBox
                              ).variation_name}
                        </span>
                      </p>
                    </div>
                    <div className="d-flex gap-2 mx-3">
                      {productDetail.colorList &&
                        productDetail.colorList.length > 0 &&
                        productDetail.colorList.map((eachColor, index) => {
                          const isSelected =
                            selectedColorBox === eachColor.variation_id;
                          const isInitial =
                            selectedColorBox === null &&
                            productDetail.color_id === eachColor.variation_id;

                          return (
                            <div
                              key={eachColor.variation_id}
                              className={`selectedColorBox-border ${
                                isSelected || isInitial ? "borderColorBox" : ""
                              }`}
                            >
                              <div
                                onClick={() =>
                                  handleColorClick(eachColor.variation_id)
                                }
                                key={index}
                                className="boxColor"
                                style={{
                                  backgroundColor: eachColor.variation_name,
                                }}
                              ></div>
                            </div>
                          );
                        })}
                    </div>
                  </>
                ) : (
                  ""
                )}

                {/* Size variation */}
                {productDetail &&
                  productDetail.size &&
                  productDetail.size.length > 0 && (
                    <div className="d-flex gap-2 align-items-center mt-4 mx-3">
                      <span>Size :</span>

                      {productDetail &&
                        productDetail.size &&
                        productDetail.size.length > 0 &&
                        productDetail.size.map((eachSize) => {
                          return (
                            <div
                              key={eachSize.variation_id}
                              className={`selectedSizeBox-border d-flex gap-3 ${
                                selectedSizeBox &&
                                eachSize.variation_id === selectedSizeBox
                                  ? "borderSizeBox"
                                  : ""
                              }`}
                            >
                              <div
                                onClick={() =>
                                  handleSizeClick(
                                    eachSize.variation_id,
                                    productDetail.color_id
                                  )
                                }
                                className=" sizeGuideBackground d-flex align-items-center justify-content-center p-2 text-center"
                                key={eachSize.variation_id}
                              >
                                {eachSize.variation_name}
                              </div>
                            </div>
                          );
                        })}
                    </div>
                  )}

                <div className="d-flex mt-4 gap-3 align-items-center mx-3">
                  Quantity<span>:</span>
                  <button
                    className="btn fw-bold px-2 py-0 quantity-button"
                    onClick={handleMinusCount}
                  >
                    -
                  </button>{" "}
                  {quantityCount}{" "}
                  <button
                    className="btn fw-bold px-2 py-0 quantity-button"
                    onClick={handlePlusCount}
                  >
                    +
                  </button>
                </div>
              </>

              <ProductDelivery />

              {/* Cart Section */}
              <div>
                <div className="d-flex  justify-content-between">
                  <div>
                    <p>HURRY, THERE ARE ONLY 6 ITEM(S) LEFT!</p>
                  </div>
                  <div>
                    <img src={peopleImage} className="img-fluid mx-1" />
                    {productDetail.product_view}
                    <span className="mx-1">People looking at this product</span>
                  </div>
                </div>

                {/* Add to cart & Buy Now section */}
                <div className="d-flex">
                  {addedToCart ? (
                    <button
                      className="text-white w-75 border-0 p-2 mx-2 d-flex align-items-center justify-content-center
                      goToCartBackground"
                      onClick={handleGoToCart}
                    >
                      Go to Cart
                    </button>
                  ) : (
                    <button
                      className="text-white w-75 border-0 p-2 mx-2 d-flex align-items-center justify-content-center
                        cartBackground"
                      onClick={handleAddToCart}
                    >
                      Add to cart
                    </button>
                  )}

                  <button className="text-white w-75 p-2 buyBackground d-flex align-items-center justify-content-center">
                    Buy Now
                  </button>
                </div>

                {/* Order within text */}
                <div className="mt-3">
                  <small>
                    Order within <span className="text-success">2h 25m</span>{" "}
                    and choose{" "}
                    <span className="text-danger">Express Shipping</span> to get
                    it by <span className="fw-bold">Tuesday 25/7/2023</span>
                  </small>
                </div>
              </div>

              {/* <CartSection /> */}
            </Col>
          </Row>

          <Row>
            <Col className="col-12 col-md-6">
              <Container>
                <CustomerReview orderId={orderId} productData={productDetail} />
              </Container>
            </Col>
            <Col className="col-12 col-md-6">
              <ProductDescription productData={productDetail.description} />
            </Col>
          </Row>
        </Container>
      )}
    </>
  );
};

export default ProductDetails;
