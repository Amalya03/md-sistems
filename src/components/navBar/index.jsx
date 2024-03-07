import React from "react";

import Menu from "./menu";
import Search from "./search";

import classes from "./navBar.module.css";

const NavBar = () => {
  return (
    <nav
      className={`w-100 ${classes.navBar_container} d-flex justify-content-between`}
    >
      <div>
        <span>Name</span>
      </div>
      <Menu/>
      <Search/>
    </nav>
  );
};

export default NavBar;
