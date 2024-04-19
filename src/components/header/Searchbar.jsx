import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { AsyncTypeahead } from "react-bootstrap-typeahead";
import searchImage from "/Images/search-normal.png";
import axios from "axios";
import "./searchbar.scss";
import { useNavigate, useParams } from "react-router-dom";
import { productListApi } from "../../api/Constant";

const Searchbar = () => {
  // const { productId } = useParams();
  // console.log("product in the search bar components", productId);
  const navigate = useNavigate();
  const [searchResult, setSearchResult] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [query, setQuery] = useState("");

  const handleSearch = async (query) => {
    if (query.length > 0) {
      setIsLoading(true);
    }

    try {
      const response = await axios.post(productListApi, { search: query });
      if (response.status === 200) {
        setSearchResult(response.data.result.data);
        setIsLoading(false);
        // console.log("search result", response.data.result.data);
      }
    } catch (error) {
      console.log("Error while searching", error);
    }
  };

  const filterBy = () => true;
  const handleProductClick = (productListData) => {
    navigate(
      `/productDetails/${productListData.slug}/${productListData.unique_id}/${productListData.sku}`
    ),
      setQuery("");
  };

  return (
    <>
      <AsyncTypeahead
        filterBy={filterBy}
        id="async-example"
        className="w-100 "
        isLoading={isLoading}
        labelKey="name"
        minLength={1}
        onChange={() => setQuery([])}
        onSearch={handleSearch}
        options={searchResult}
        placeholder="Search Products..."
        renderMenuItemChildren={(item) => (
          <>
            <div
              className="d-flex align-items-center"
              onClick={() => handleProductClick(item)}
            >
              <img
                src={item.product_images[0].product_image_url}
                style={{
                  height: "24px",
                  marginRight: "10px",
                  width: "24px",
                }}
              />
              <p>{item.name}</p>
            </div>
          </>
        )}
        selected={query}
      />

      <Button className="p-2 searchbar-button" onClick={handleSearch}>
        <img src={searchImage} />
      </Button>
    </>
  );
};

export default Searchbar;
