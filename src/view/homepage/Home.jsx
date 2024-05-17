import React from "react";
import ProductCategory from "../..//components/home/categories/ProductCategory";
import Carousel from "../..//components/home/carousel/Carousel";
import Trending from "../..//components/home/trendingSection/Trending";
import Banner from "../..//components/home/banners/Banner";
import BestDeals from "../..//components/home/bestDeals/BestDeals";
import Subscribe from "../..//components/home/subscribe/Subscribe";
import Electronics from "../..//components/home/electronics/Electronics";

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
