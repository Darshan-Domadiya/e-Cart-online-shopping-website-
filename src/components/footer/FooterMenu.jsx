import React from "react";

const FooterMenu = ({ title, list }) => {
  return (
    <>
      <div className="text-sm-start text-center  ">
        <h3 className="text-white">{title}</h3>

        <ul className="text-white list-unstyled ">
          {list.map((menu) => {
            return <li>{menu.title}</li>;
          })}
        </ul>
      </div>
    </>
  );
};

export default FooterMenu;
