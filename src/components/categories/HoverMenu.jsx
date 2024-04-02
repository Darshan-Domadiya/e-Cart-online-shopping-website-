import React, { useState } from "react";
import "./hovermenu.scss";
import { Link } from "react-router-dom";

const HoverMenu = ({ menuList }) => {
  const subcategoryData = menuList.subcategory;
  const [showCollection, setShowCollection] = useState(0);

  const handleMouseEnter = (id) => {
    setShowCollection(id);
  };

  //   console.log("subcategory", subcategoryData);
  return (
    <div className="position-absolute  eachCategory-div">
      <div className="d-flex justify-content-between gap-5">
        <div>
          {subcategoryData.map((eachCategory, index) => {
            return (
              <ul
                className="p-0"
                key={index}
                onMouseEnter={() => handleMouseEnter(index)}
              >
                <li
                  className={`text-muted eachCategoryHover list-unstyled ${
                    showCollection === index ? "text-black " : "text-muted"
                  }`}
                >
                  <Link
                    className="text-decoration-none link"
                    to={`${menuList.slug}/${eachCategory.slug}`}
                  >
                    {eachCategory.title}
                  </Link>
                </li>
              </ul>
            );
          })}
        </div>
        <div className="collection-items">
          {subcategoryData[showCollection]?.collection.map(
            (collectionTitle, index) => {
              return (
                <div key={index}>
                  <ul>
                    <li className="list-unstyled">
                      <Link
                        to={`${menuList.slug}/${subcategoryData[showCollection]?.slug}/${collectionTitle.slug}`}
                        className="link"
                      >
                        {collectionTitle.title}
                      </Link>
                    </li>
                  </ul>
                </div>
              );
            }
          )}
        </div>
      </div>
    </div>
  );
};

export default HoverMenu;
