import React, { useEffect, useState } from "react";
import { Col } from "react-bootstrap";
import WishlistPrice from "./WishlistPrice";
import WishlistReview from "./WishlistReview";
import WishlistTitle from "./WishlistTitle";
import WishlistImage from "./WishlistImage";
import deleteWishlist from "/Images/delete.svg";
import "./wishlistproduct.scss";
import axios from "axios";
import { manageWishlistApi } from "../../api/Constant";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const WishlistProduct = ({ wishlistData }) => {
  const navigate = useNavigate();
  const handleWishlistDelete = async (wishlistId, wishlistVariationId) => {
    try {
      const response = await axios.post(
        manageWishlistApi,
        {
          product_id: wishlistId,
          action: "delete",
          product_variation_id: wishlistVariationId,
        },
        {
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        }
      );
      if (response.status === 200) {
        // console.log("Deleted successfully", response);
        toast.success("Product deleted from wishlist successfully", {
          position: "top-right",
        });
        window.location.reload();
      }
    } catch (error) {
      console.log("Error while delete wishlist product", error);
    }
  };

  const handleWishlistClick = () => {
    navigate(
      `/productDetails/${wishlistData.slug}/${wishlistData.unique_id}/${wishlistData.sku}`
    );
  };

  return (
    <>
      <Col className="wishlistProduct-col d-flex align-items-center justify-content-center col-xl-3 col-lg-4 col-md-6  mt-4">
        <div
          className=" dealCard-border mt-3 mt-sm-3  mt-lg-3 mt-xl-0"
          onClick={handleWishlistClick}
        >
          <ToastContainer />
          <WishlistImage
            wishlistImage={wishlistData.product_images[0].product_image_url}
          />

          <div className="p-2">
            <WishlistTitle wishlistTitle={wishlistData} />
            <div className="d-flex align-items-center gap-3 ">
              <WishlistReview />
            </div>

            <div className="mt-2 ">
              <WishlistPrice wishlistPrice={wishlistData} />
            </div>
          </div>
        </div>
        <div
          className="deleteWishlistProduct-logo d-flex align-items-center justify-content-center"
          onClick={() =>
            handleWishlistDelete(
              wishlistData.id,
              wishlistData &&
                wishlistData.product_variation_detail &&
                wishlistData.product_variation_detail.length > 0
                ? wishlistData.product_variation_detail[0].product_id
                : null
            )
          }
        >
          <img src={deleteWishlist} />
        </div>
      </Col>
    </>
  );
};

export default WishlistProduct;
