import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./components/layout/Layout.jsx";
import Home from "./components/home/Home.jsx";
import ProductListPage from "./components/productListingPage/ProductListPage.jsx";
import ProductDetails from "./components/productDetails/ProductDetails.jsx";
import ShoppingCart from "./components/shoppingcart/ShoppingCart.jsx";

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
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router}>
    <App />
  </RouterProvider>
);
