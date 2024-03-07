import React from "react";
import { Link } from "react-router-dom";

import classes from "./Menu.module.css";

const Menu = () => {
  return (
    <div className={`d-flex ${classes.gap_30}`}>
      {["About", "Contact", "Brend"].map((item) => {
        return (
          <Link to="" className={classes.menu_item} key={item}>
            {item}
          </Link>
        );
      })}
    </div>
  );
};

export default Menu;
