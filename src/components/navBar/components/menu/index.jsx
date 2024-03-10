import React from "react";
import { Link, useNavigate } from "react-router-dom";

import classes from "./Menu.module.css";

import {
  linkes
} from "../../../../utils/halpers/navBar/menu";
import { navigateToElement } from "../../../../utils/halpers/navigateToElement/navigateToElement";

const Menu = () => {
  const navigate = useNavigate();

  return (
    <div className={`d-flex ${classes.menu_container}`}>
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
