import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import "react-toastify/dist/ReactToastify.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./components/layout/Layout.jsx";
import Home from "./view/homepage/Home.jsx";
import ProductListPage from "./view/productListPage/ProductListPage.jsx";
import ProductDetails from "./view/productDetails/ProductDetails.jsx";
import ShoppingCart from "./view/cart/ShoppingCart.jsx";
import Checkout from "./view/checkout/Checkout.jsx";
import { UserContextProvider } from "./components/context/UserContext.jsx";
import { Provider } from "react-redux";
import store from "./app/store.js";
import Payment from "./view/payment/Payment.jsx";
import Orders from "./view/orders/Orders.jsx";
import Profile from "./view/profile/Profile.jsx";
import Wishlist from "./view/wishlistpage/Wishlist.jsx";
import { WishlistContextProvider } from "./components/context/WishlistContext.jsx";
import { ToastContainer } from "react-toastify";
import OrderDetail from "./view/orderDetail/OrderDetail.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: ":category_id?/:sub_category_id?/:collection_id?",
        element: <ProductListPage />,
      },
      {
        path: "search-results",
        element: <ProductListPage />,
      },

      {
        path: "/orders",
        element: <Orders />,
      },
      {
        path: "/orders/:sub_order_number/:order_number",
        element: <OrderDetail />,
      },
      {
        path: "/profile",
        element: <Profile />,
      },
      {
        path: "/productdetails/:slug/:uniqueId/:sku",
        element: <ProductDetails />,
      },
      {
        path: "/productdetails/:slug/:uniqueId/:sku/:orderId",
        element: <ProductDetails />,
      },
      {
        path: "/shoppingcart",
        element: <ShoppingCart />,
      },
      {
        path: "/checkout",
        element: <Checkout />,
      },
      {
        path: "/wishlist",
        element: <Wishlist />,
      },
    ],
  },
  {
    path: "/payment",
    element: <Payment />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <ToastContainer
      position="top-right"
      style={{ zIndex: "99999" }}
      autoClose={2000}
    />
    <WishlistContextProvider>
      <UserContextProvider>
        <RouterProvider router={router}>
          <App />
        </RouterProvider>
      </UserContextProvider>
    </WishlistContextProvider>
  </Provider>
);
