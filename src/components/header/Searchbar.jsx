import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { AsyncTypeahead } from "react-bootstrap-typeahead";
import searchImage from "/Images/search-normal.png";
import axios from "axios";
import "./searchbar.scss";
import { useNavigate, useParams } from "react-router-dom";

const Searchbar = () => {
  const { productId } = useParams();
  console.log("product in the search bar components", productId);
  const navigate = useNavigate();
  const [searchResult, setSearchResult] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleSearch = async (query) => {
    if (query.length > 0) {
      setIsLoading(true);
    }

    try {
      const response = await axios.post(
        "https://bargainfox-dev.concettoprojects.com/api/product/list",
        { search: query }
      );
      if (response.status === 200) {
        setSearchResult(response.data.result.data);
        setIsLoading(false);
        // console.log("search result", response.data.result.data);
      }
    } catch (error) {
      console.log("Error while searching", error);
    }
  };

  const handleProductClick = (clickedProductId) => {
    navigate(`/productdetails/${clickedProductId}`);
  };

  const filterBy = () => true;

  return (
    <>
      <AsyncTypeahead
        filterBy={filterBy}
        id="async-example"
        className="w-100 "
        isLoading={isLoading}
        labelKey="name"
        minLength={1}
        onSearch={handleSearch}
        options={searchResult}
        placeholder="Search Products..."
        renderMenuItemChildren={(item) => (
          <>
            <div
              className="d-flex align-items-center"
              onClick={() => handleProductClick(item.id)}
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
      />

      <Button className="p-2 searchbar-button" onClick={handleSearch}>
        <img src={searchImage} />
      </Button>
    </>
  );
};

export default Searchbar;
