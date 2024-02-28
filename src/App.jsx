import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/header/Header";
import ProductCategory from "./components/categories/ProductCategory";
import Carousel from "./components/carousel/Carousel";
import Trending from "./components/trendingSection/Trending";
import Banner from "./components/banners/Banner";
import BestDeals from "./components/bestDeals/BestDeals";
import Subscribe from "./components/subscribe/Subscribe";
import Electronics from "./components/electronics/Electronics";
import Footer from "./components/footer/Footer";

const App = () => {
  return (
    <div>
      <Header />
      <ProductCategory />
      <Carousel />
      <Trending />
      <Banner />
      <BestDeals />
      <Subscribe />
      <Electronics />
      <Footer />
    </div>
  );
};

export default App;
