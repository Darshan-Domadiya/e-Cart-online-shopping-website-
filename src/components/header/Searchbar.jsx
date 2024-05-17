import React, { useEffect, useRef, useState } from "react";
import { Button } from "react-bootstrap";
import { AsyncTypeahead, Typeahead } from "react-bootstrap-typeahead";
import searchImage from "/Images/search-normal.png";
import axios from "axios";
import "./searchbar.scss";
import { useNavigate, useParams } from "react-router-dom";
import { productListApi } from "../../api/Constant";
import { ref } from "yup";

const Searchbar = () => {
  // const { productId } = useParams();
  // console.log("product in the search bar components", productId);
  const navigate = useNavigate();
  const [searchResult, setSearchResult] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [query, setQuery] = useState([]);
  const searchInputRef = useRef(null);

  const handleSearch = async (query) => {
    // if (query.length > 0) {
    //   setIsLoading(true);
    // }

    try {
      setIsLoading(true);
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

  const handleInputChange = (query) => {
    if (!query) {
      setSearchResult([]);
    }
  };

  const handleProductClick = (productListData) => {
    navigate(
      `/productDetails/${productListData.slug}/${productListData.unique_id}/${productListData.sku}`
    );
    setQuery([]);
  };

  const handleSearchButton = () => {
    const searchQuery = searchInputRef.current.inputNode.value;
    const searchUrl = `/search-results?searchText=${searchQuery}`;
    // console.log(searchQuery, searchUrl);
    if (searchQuery) {
      navigate(searchUrl);
      searchInputRef.current.clear();
      searchInputRef.current.blur();
    }
  };

  const handleEnterPress = (e) => {
    if (e.key == "Enter") {
      handleSearchButton();
    }
  };

  return (
    <>
      <AsyncTypeahead
        ref={searchInputRef}
        filterBy={filterBy}
        id="async-example"
        className="w-100"
        isLoading={isLoading}
        labelKey="name"
        minLength={2}
        onChange={() => setQuery([])}
        onKeyDown={handleEnterPress}
        onInputChange={handleInputChange}
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

      <Button className="p-2 searchbar-button" onClick={handleSearchButton}>
        <img src={searchImage} />
      </Button>
    </>
  );
};

export default Searchbar;
