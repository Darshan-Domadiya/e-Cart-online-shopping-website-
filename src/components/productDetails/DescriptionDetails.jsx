import React from "react";
import orangeCircle from "/Images/desCircle.png";

const DescriptionDetails = ({ productDescription }) => {
  return (
    <>
      {/* {list.map((item) => {
        return ( */}
      <div className="d-flex gap-2  ">
        <div>
        
          <img src={orangeCircle} />
        </div>
        <div>
          <p>{productDescription}</p>
        </div>
      </div>
      {/* );
      })} */}
    </>
  );
};

export default DescriptionDetails;
