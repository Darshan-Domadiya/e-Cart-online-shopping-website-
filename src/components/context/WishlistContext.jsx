import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { wishlistCountApi } from "../../api/Constant";

const WishlistContext = createContext();

export const WishlistContextProvider = ({ children }) => {
  const [wishlistItemCount, setWishlistItemCount] = useState("");

  const wishlistCount = async () => {
    try {
      const response = await axios.get(wishlistCountApi, {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      });
      if (response.status === 200) {
        // console.log("Wishlist counts", response.data.result.wishlistcount);
        setWishlistItemCount(response.data.result.wishlistcount);
      }
    } catch (error) {
      console.log("Error in wishlist count", error);
    }
  };

  useEffect(() => {
    if (localStorage.getItem("token")) {
      wishlistCount();
    }
  }, []);

  return (
    <WishlistContext.Provider
      value={{ wishlistItemCount, setWishlistItemCount }}
    >
      {children}
    </WishlistContext.Provider>
  );
};

export default WishlistContext;
