import React from "react";
import { Pagination } from "react-bootstrap";

const Paging = () => {
  return (
    <>
      <div className="d-flex align-items-center justify-content-center mt-5">
        <Pagination>
          <Pagination.First />
          <Pagination.Prev />
          <Pagination.Item active>{1}</Pagination.Item>
          <Pagination.Item>{2}</Pagination.Item>

          <Pagination.Item>{3}</Pagination.Item>
          <Pagination.Item>{4}</Pagination.Item>
          <Pagination.Ellipsis />

          <Pagination.Next />
          <Pagination.Last />
        </Pagination>
      </div>
    </>
  );
};

export default Paging;
