import React, { useContext, useEffect, useState } from "react";
import "./wishlist.scss";
import { Col, Container, Row } from "react-bootstrap";
import axios from "axios";
import { manageWishlistApi, wishlistApi } from "../../api/Constant";
import Spinner from "react-bootstrap/Spinner";
import noWishlistProduct from "/Images/noproduct.svg";
import { useNavigate } from "react-router-dom";
import WishlistContext from "../context/WishlistContext";
import normalStar from "/Images/normalStar.png";
import orangeStar from "/Images/orangeStar.png";
import polygon from "/Images/polygon.png";
import deleteWishlist from "/Images/delete.svg";
import { toast } from "react-toastify";

const reviewStarList = [
  { star: orangeStar },
  { star: orangeStar },
  { star: orangeStar },
  { star: orangeStar },
  { star: normalStar },
];

const Wishlist = () => {
  const [wishlistProduct, setWishlistProduct] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const wishlistProducts = async () => {
    try {
      setIsLoading(true);
      const response = await axios.post(
        wishlistApi,
        {},
        {
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        }
      );
      if (response.status === 200) {
        // console.log("Wishlist products", response.data.result.data);
        setWishlistProduct(response.data.result.data);
        setIsLoading(false);
      }
    } catch (error) {
      console.log("Error while getting wishlist", error);
    }
  };

  const navigate = useNavigate();
  const { wishlistItemCount, setWishlistItemCount } =
    useContext(WishlistContext);

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
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      if (response.status === 200) {
        toast.success("Product deleted from wishlist successfully");
        setWishlistItemCount(wishlistItemCount - 1);
        const filteredWishlistData = wishlistProduct.filter(
          (wishlistItem) => wishlistItem.id !== wishlistId
        );
        setWishlistProduct(filteredWishlistData);
        // wishlistProducts();
      }
    } catch (error) {
      console.log("Error while delete wishlist product", error);
    }
  };

  const handleWishlistClick = (sku, uniqueId, slug) => {
    navigate(`/productDetails/${slug}/${uniqueId}/${sku}`);
  };

  useEffect(() => {
    wishlistProducts();
  }, []);

  return (
    <>
      <Container>
        <Row className="mt-5">
          <div className="d-flex align-items-center gap-2">
            <span className="fs-2 fw-medium">My Wishlist </span>
            <span className="fs-5 mt-2">
              ({wishlistProduct.length} <span>Items</span>)
            </span>
          </div>
        </Row>

        <Row className="mt-5 mt-sm-5 mt-md-2 d-flex align-items-center justify-content-center justify-content-sm-start">
          {isLoading ? (
            <div className="d-flex align-items-center justify-content-center mt-5 mb-5">
              <Spinner animation="border" variant="primary" />
            </div>
          ) : wishlistProduct && wishlistProduct.length > 0 ? (
            wishlistProduct.map((data) => {
              {
                /* return <WishlistProduct wishlistData={data} key={data.id} />; */
              }
              return (
                <Col
                  key={data.id}
                  className="wishlistProduct-col d-flex align-items-center justify-content-center col-7  col-sm-6 col-xl-3 col-lg-4 col-md-6  mt-4"
                >
                  <div
                    className=" dealCard-border mt-3 mt-sm-3  mt-lg-3 mt-xl-0"
                    onClick={() =>
                      handleWishlistClick(data.sku, data.unique_id, data.slug)
                    }
                  >
                    <div className="wishlistImage-div d-flex align-items-center justify-content-center">
                      <img
                        src={data.product_images[0].product_image_url}
                        className="wishlist-image"
                        height="100%"
                        width="100%"
                      />
                    </div>

                    <div className="p-2">
                      <p className="singleline-description fw-bold">
                        {data?.name}
                      </p>
                      <p className="singleline-description greyText">
                        {data?.description}
                      </p>
                      <div className="d-flex align-items-center gap-3 ">
                        <div className="d-flex gap-2 align-items-center">
                          {reviewStarList.map((value, index) => {
                            return (
                              <img
                                src={value.star}
                                key={index}
                                className="img-fluid"
                              />
                            );
                          })}
                        </div>
                      </div>

                      <div className="mt-2 ">
                        <div className="d-flex align-items-center justify-content-between">
                          <div className="d-flex align-items-center price-fontSize ">
                            <span className="fw-bold mb-2 fs-5">$</span>
                            <span className="fw-bold fs-4">
                              {data.sale_price}
                            </span>
                            <strike className="mx-3 fw-bold">
                              <span>$</span>
                              <span>{data.main_rrp}</span>
                            </strike>
                          </div>
                          <div className="position-relative mb-2">
                            <img src={polygon} />
                            <div className="position-absolute polygonShape text-white discount-fontSize">
                              {Math.floor(data.discount_percentage)}
                              <span>%</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="deleteWishlistProduct-logo d-flex align-items-center justify-content-center"
                    onClick={() =>
                      handleWishlistDelete(
                        data.id,
                        data &&
                          data.product_variation_detail &&
                          data.product_variation_detail.length > 0
                          ? data.product_variation_detail[0].product_id
                          : null
                      )
                    }
                  >
                    <img src={deleteWishlist} />
                  </div>
                </Col>
              );
            })
          ) : (
            <Container className="mt-4">
              <div className="d-flex align-items-center justify-content-center">
                <div className="d-flex flex-column">
                  <div className="text-center">
                    <img src={noWishlistProduct} height="60%" width="60%" />
                  </div>
                  <div className="text-center mt-3">
                    <span className="fs-3 fw-bold">
                      No Products in the Wishlist
                    </span>
                  </div>
                </div>
              </div>
            </Container>
          )}
        </Row>
      </Container>
    </>
  );
};
export default Wishlist;
