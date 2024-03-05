import React from "react";

const SocialLogo = ({ socialImage }) => {
  return (
    <>
      <div className="mx-3">
        <img src={socialImage} />
      </div>
    </>
  );
};

export default SocialLogo;
