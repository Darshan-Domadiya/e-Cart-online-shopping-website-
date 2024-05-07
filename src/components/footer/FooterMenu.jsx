import React from "react";
import { useNavigate } from "react-router-dom";
import "./footermenu.scss";

const FooterMenu = ({ list }) => {
  const { title, menu, url } = list;
  const navigate = useNavigate();

  const handleMenuItemClick = (url) => {
    navigate(url);
  };

  return (
    <>
      <div className="text-sm-start ">
        <h3 className="text-white">{title}</h3>

        <ul className="text-white list-unstyled ">
          {list.map((menu, index) => {
            return (
              <li
                onClick={() => handleMenuItemClick(menu.url)}
                className="accountList-footer"
                key={index}
              >
                {menu.title}
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default FooterMenu;
