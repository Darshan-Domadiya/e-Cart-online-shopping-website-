import React from "react";
import Spinner from "react-bootstrap/Spinner";

const Loader = () => {
  return (
    <>
      <div className="d-flex align-items-center justify-content-center mt-5 mb-5 w-100 h-100">
        <Spinner animation="border" variant="primary" />
      </div>
    </>
  );
};

export default Loader;
