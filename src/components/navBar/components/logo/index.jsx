import React from "react";
import { useNavigate } from "react-router-dom";

import classes from "../../navBar.module.css";

const Logo = () => {
  const navigate = useNavigate();

  return (
    <button
      className={`bg-transparent border-0 ${classes.logo_container}`}
      onClick={() => navigate("/")}
    >
      <img className={classes.logo} src="./assets/navBar/logo.svg" alt="logo" />
    </button>
  );
};

export default Logo;
