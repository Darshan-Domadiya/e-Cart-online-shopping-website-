import React from "react";

const ElectronicImage = ({ imgUrl }) => {
  return (
    <>
      <div>
        <img src={imgUrl} className="img-fluid" />
      </div>
    </>
  );
};

export default ElectronicImage;
