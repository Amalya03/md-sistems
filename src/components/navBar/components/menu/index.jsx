import React from "react";
import { Link, useNavigate } from "react-router-dom";

import classes from "./Menu.module.css";

import { linkes, navigateToElement } from "../../../../utils/halpers/navBar/menu";

const Menu = () => {
  const navigate = useNavigate();

  return (
    <div className={`d-flex ${classes.gap_30}`}>
      {linkes.map((item, index) => {
        return (
          <Link
            to={item.link}
            className={classes.menu_item}
            key={item.name}
            onClick={() => {
              index === 1 && navigateToElement(navigate, "contacts");
            }}
          >
            {item.name}
          </Link>
        );
      })}
    </div>
  );
};

export default Menu;
