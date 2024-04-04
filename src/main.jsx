import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import "react-toastify/dist/ReactToastify.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./components/layout/Layout.jsx";
import Home from "./components/home/Home.jsx";
import ProductListPage from "./components/productListingPage/ProductListPage.jsx";
import ProductDetails from "./components/productDetails/ProductDetails.jsx";
import ShoppingCart from "./components/shoppingcart/ShoppingCart.jsx";
import Checkout from "./components/checkout/Checkout.jsx";
import { UserContextProvider } from "./components/context/UserContext.jsx";
import { Provider } from "react-redux";
import store from "./app/store.js";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "productlisting",
        element: <ProductListPage />,
      },
      {
        path: "productdetails",
        element: <ProductDetails />,
      },
      {
        path: "shoppingcart",
        element: <ShoppingCart />,
      },
      {
        path: "checkout",
        element: <Checkout />,
      },
      {
        path: "/:category_id?/:sub_category_id?/:collection_id",
        element: <ProductListPage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <UserContextProvider>
      <RouterProvider router={router}>
        <App />
      </RouterProvider>
    </UserContextProvider>
  </Provider>
);
