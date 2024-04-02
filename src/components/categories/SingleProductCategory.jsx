import React, { useState } from "react";
import HoverMenu from "./HoverMenu";
import "./singleproductcategory.scss";
import { Link } from "react-router-dom";

const SingleProductCategory = ({ dataList }) => {
  const [isHovered, setIsHovered] = useState(false);
  // console.log(dataList);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <>
      <div className=" position-relative d-flex flex-column justify-content-center align-items-center">
        <Link className="text-decoration-none text-dark" to={dataList.slug}>
          <div
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className="product-category d-flex flex-column align-items-center justify-content-center"
          >
            <img
              src={dataList.image_url}
              className="img-fluid"
              height="100px"
              width="100px"
            />
            <p className="fw-bold">{dataList.title}</p>
            {isHovered && dataList.subcategory != "" && (
              <HoverMenu menuList={dataList} />
            )}
          </div>

          {isHovered && <div className="dot-div position-absolute"></div>}
        </Link>
      </div>
    </>
  );
};

export default SingleProductCategory;
