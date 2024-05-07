import React, { useContext, useEffect, useState } from "react";
import ProductImage from "./ProductImage";
import wishList from "/Images/wishlist.png";
import { Col } from "react-bootstrap";
import ProductTitle from "./ProductTitle";
import ProductReview from "./ProductReview";
import ProductPrice from "./ProductPrice";
import { useNavigate } from "react-router-dom";
import "./singleproduct.scss";
import axios from "axios";
import { manageWishlistApi } from "../../api/Constant";
import { ToastContainer, toast } from "react-toastify";
import LoginPopUp from "../loginPopUp/LoginPopUp";
import WishlistContext from "../context/WishlistContext";

const SingleProduct = ({ productListData }) => {
  const [showLoginPopup, setShowLoginPopup] = useState(false);
  const { wishlistItemCount, setWishlistItemCount } =
    useContext(WishlistContext);
  const navigate = useNavigate();

  const handleProductClick = () => {
    navigate(
      `/productDetails/${productListData.slug}/${productListData.unique_id}/${productListData.sku}`
    );
  };

  const isUserLoggedIn = localStorage.getItem("token");

  const handleWishlistClick = async (wishListId, variationWishlistId) => {
    if (!isUserLoggedIn) {
      setShowLoginPopup(true);
      return;
    }
    try {
      const requestWishlistData = {
        product_id: wishListId,
        action: "add",
      };

      if (variationWishlistId) {
        requestWishlistData.product_variation_id = variationWishlistId;
      }

      const response = await axios.post(
        manageWishlistApi,
        requestWishlistData,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      if (response.status === 200) {
        setWishlistItemCount(wishlistItemCount + 1);
        toast.success("Product is added to wishlist", {
          position: "top-right",
        });
      }
    } catch (error) {
      toast.warn("Something went wrong");
      console.log("Error while adding wishlist", error);
    }
  };

  // console.log("product List data in single product", productListData);

  return (
    <>
      <Col className="wishlist-col col-9 d-flex align-items-center justify-content-center col-xl-3 col-lg-4 col-md-6  mt-4 ">
        <div
          className="dealCard-border mt-3 mt-sm-3  mt-lg-3 mt-xl-0"
          onClick={() => handleProductClick()}
        >
          <ProductImage productImage={productListData} />

          <div className="p-2">
            <ProductTitle productDescription={productListData} />
            <div className="d-flex align-items-center gap-3 ">
              <ProductReview />
            </div>

            <div className="mt-2 ">
              <ProductPrice productPrice={productListData} />
            </div>
          </div>
        </div>
        <div
          className="wishList-logo d-flex align-items-center justify-content-center"
          onClick={() =>
            handleWishlistClick(
              productListData.id,
              productListData.product_variation_detail &&
                productListData.product_variation_detail.length > 0
                ? productListData.product_variation_detail[0].product_id
                : null
            )
          }
        >
          <img
            src={wishList}
            className="img--fluid"
            height="20px"
            width="20px"
          />
        </div>
      </Col>
      {showLoginPopup && (
        <LoginPopUp
          show={showLoginPopup}
          handleClose={() => setShowLoginPopup(false)}
        />
      )}
    </>
  );
};

export default SingleProduct;
