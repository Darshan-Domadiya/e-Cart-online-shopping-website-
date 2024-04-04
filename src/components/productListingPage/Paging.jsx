import React, { useEffect, useState } from "react";
import { Pagination } from "react-bootstrap";
import { useLocation, useNavigate } from "react-router-dom";

const Paging = ({ lastpage }) => {
  const [activePage, setActivePage] = useState(1);

  console.log("activepage", activePage);
  const navigate = useNavigate();
  const location = useLocation();

  const handlePageItem = () => {
    const queryParams = new URLSearchParams(location.search);
    const pageParams = queryParams.get("page");
    const page = pageParams ? parseInt(pageParams) : 1;
    console.log("pageparams", pageParams);
    setActivePage(page);
    navigate(`?page=${page}`);
  };

  useEffect(() => {
    handlePageItem();
  }, [location.search]);

  // const handlePageItem = (page) => {
  //   console.log("pagevalue", page);
  //   setActivePage(page);
  // };

  const handlePrev = () => {
    const prevPage = activePage - 1;
    setActivePage(prevPage);
    navigate(`?page=${prevPage}`);
  };

  const handleNext = () => {
    const nextPage = activePage + 1;
    setActivePage(nextPage);
    navigate(`?page=${nextPage}`);
  };

  let pageItems = [];
  for (let page = 1; page <= lastpage; page++) {
    pageItems.push(
      <Pagination.Item
        key={page}
        active={page === activePage}
        onClick={() => handlePageItem(page)}
      >
        {page}
      </Pagination.Item>
    );
  }

  return (
    <>
      <div className="d-flex align-items-center justify-content-center mt-5">
        <Pagination>
          <Pagination.Prev disabled={activePage == 1} onClick={handlePrev}>
            &laquo; Previous
          </Pagination.Prev>
          {pageItems}
          <Pagination.Next
            disabled={activePage === lastpage}
            onClick={handleNext}
          >
            Next &raquo;
          </Pagination.Next>
        </Pagination>
      </div>
    </>
  );
};

export default Paging;
