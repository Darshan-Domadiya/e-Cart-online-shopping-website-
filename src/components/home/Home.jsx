import React from "react";
import Header from "../header/Header";
import ProductCategory from "../categories/ProductCategory";
import Carousel from "../carousel//Carousel";
import Trending from "../trendingSection//Trending";
import Banner from "../banners/Banner";
import BestDeals from "../bestDeals/BestDeals";
import Subscribe from "../subscribe/Subscribe";
import Electronics from "../electronics/Electronics";
import Footer from "../footer/Footer";

const Home = () => {
  return (
    <>
      <ProductCategory />
      <Carousel />
      <Trending />
      <Banner />
      <BestDeals />
      <Subscribe />
      <Electronics />
    </>
  );
};

export default Home;
