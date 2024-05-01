export const Base_url = import.meta.env.VITE_BASE_URL;

export const removeFromCartApi = `${Base_url}/remove-from-cart`;
export const categoryListApi = `${Base_url}/category-list`;
export const userDetailApi = `${Base_url}/user-detail`;
export const productDetailsApi = `${Base_url}/product/detail`;
export const productListApi = `${Base_url}/product/list`;
export const sendOtpApi = `${Base_url}/send-otp`;
export const verifyOtpApi = `${Base_url}/verify-otp`;
export const addToCartApi = `${Base_url}/add-to-cart`;
export const registerApi = `${Base_url}/register`;
export const myCartApi = `${Base_url}/my-cart`;
export const cartItemCountApi = `${Base_url}/cart-item-count`;
export const storeDeliveryAddressApi = `${Base_url}/store-delivery-address`;
export const getDeliveryAddressApi = `${Base_url}/get-delivery-address`;
export const placeOrderApi = `${Base_url}/place-order`;
export const updateProfileApi = `${Base_url}/update-profile`;
export const myOrderListApi = `${Base_url}/my-order-list`;
export const manageWishlistApi = `${Base_url}/manage-wishlist`;
export const wishlistApi = `${Base_url}/wishlist`;
export const wishlistCountApi = `${Base_url}/wishlist-count`;