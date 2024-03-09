import React from "react";
import { Link } from "react-router-dom";

import classes from "./Menu.module.css";

const Menu = () => {
  return (
    <div className={`d-flex ${classes.gap_30}`}>
      {[ "Contacts", "About Us", "Products"].map((item) => {
        return (
          <Link to={`/${item.replace(/ /g, '').charAt(0).toLowerCase() + item.replace(/ /g, '').slice(1)}`} className={classes.menu_item} key={item}>
            {item}
          </Link>
        );
      })}
    </div>
  );
};

export default Menu;
