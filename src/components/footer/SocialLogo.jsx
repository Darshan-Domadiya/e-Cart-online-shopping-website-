import React from "react";

const SocialLogo = ({ logoList }) => {
  return (
    <>
      {logoList.map((logo) => {
        return (
          <div className="mx-3 social-background  p-sm-2 d-flex align-items-center justify-content-center">
            <img src={logo.logoUrl} className="img-fluid" />
          </div>
        );
      })}
    </>
  );
};

export default SocialLogo;
