import React from "react";

const SocialLogo = ({ logoList }) => {
  return (
    <>
      {logoList.map((logo) => {
        return (
          <div className="mx-3">
            <img src={logo.logoUrl} />;
          </div>
        );
      })}
    </>
  );
};

export default SocialLogo;
