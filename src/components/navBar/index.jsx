import React from "react";

import classes from "./navBar.module.css";

import Menu from "./components/menu";
import Logo from "./components/logo";
import ActionBar from "./components/actionBar";

const NavBar = () => {
  return (
    <nav
      className={`w-100 ${classes.navBar_container} d-flex justify-content-between align-items-center`}
    >
      <Logo />
      <Menu />
      <ActionBar />
    </nav>
  );
};

export default NavBar;
