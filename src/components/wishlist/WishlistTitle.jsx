import React from "react";

const WishlistTitle = ({ wishlistTitle }) => {
  return (
    <>
      <p className="singleline-description fw-bold">{wishlistTitle?.name}</p>
      <p className="singleline-description greyText">
        {wishlistTitle?.description}{" "}
      </p>
    </>
  );
};

export default WishlistTitle;
