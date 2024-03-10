import React from "react";

import classes from "../Home.module.css";

import Image from "./components/image";
import Description from "./components/description";

const Header = () => {
  return (
    <header
      className={`d-flex w-100 ${classes.data_container} justify-content-center`}
    >
      <div className={`d-flex ${classes.max_width_1100} ${classes.gap_50}`}>
        <Description />
        <Image />
      </div>
    </header>
  );
};

export default Header;
