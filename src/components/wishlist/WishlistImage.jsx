import React from "react";
import "./wishlistImage.scss";

const WishlistImage = ({ wishlistImage }) => {
  return (
    <>
      <div className="wishlistImage-div d-flex align-items-center justify-content-center">
        <img
          src={wishlistImage}
          className="wishlist-image"
          height="100%"
          width="100%"
        />
      </div>
    </>
  );
};

export default WishlistImage;
