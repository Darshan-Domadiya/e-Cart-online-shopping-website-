import React from "react";
import "./trending.scss";
import { Container, Row, Col } from "react-bootstrap";
import trending1 from "/Images/trending1.png";
import trending2 from "/Images/trending2.png";
import trending3 from "/Images/trending3.png";
import trending4 from "/Images/trending4.png";
import trending5 from "/Images/trending5.png";
import trending6 from "/Images/trending6.png";
import trending7 from "/Images/trending7.png";
import SingleTrendingProduct from "./SingleTrendingProduct";
import TrendingHeading from "./TrendingHeading";

const productList = [
  {
    imgUrl: trending1,
    discount: "Up to 10% Off",
    title: "Elecronics",
  },
  {
    imgUrl: trending2,
    discount: "Up to 50% Off",
    title: "Kitchen",
  },
  {
    imgUrl: trending3,
    discount: "From £50",
    title: "Home",
  },
  {
    imgUrl: trending4,
    discount: "From £100",
    title: "Toys & Crafts",
  },
  {
    imgUrl: trending5,
    discount: "Up to 5% Off",
    title: "Sports & Leisure",
  },
  {
    imgUrl: trending6,
    discount: "Up to 15% Off",
    title: "Job Lots",
  },
  {
    imgUrl: trending7,
    discount: "Up to 10% Off",
    title: "Pets",
  },
];

const Trending = () => {
  return (
    <>
      <Container className="mt-4">
        <TrendingHeading />
        <Row className="mt-4 d-flex  align-items-center">
          {productList.map((itemList,index) => {
            return <SingleTrendingProduct key={index} list={itemList} />;
          })}
        </Row>
      </Container>
    </>
  );
};

export default Trending;
