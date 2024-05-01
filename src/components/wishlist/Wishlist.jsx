import React, { useEffect, useState } from "react";
import "./wishlist.scss";
import { Col, Container, Row } from "react-bootstrap";
import WishlistProduct from "./WishlistProduct";
import axios from "axios";
import { wishlistApi } from "../../api/Constant";
import Spinner from "react-bootstrap/Spinner";
import noWishlistProduct from "/Images/noproduct.svg";

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
              return <WishlistProduct wishlistData={data} key={data.id} />;
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
