import React from "react";

import classes from "./TabBar.module.css";
import { Link, useNavigate } from "react-router-dom";
import { linkes } from "../../utils/halpers/navBar/menu";
import { navigateToElement } from "../../utils/halpers/navigateToElement/navigateToElement";

const TabBar = () => {
  const navigate = useNavigate();

  return (
    <div
      className={`w-100 d-none position-fixed justify-content-around align-items-center ${classes.tabBar_container}`}
    >
      {linkes.map((item, index) => {
        return (
          <Link
            to={item.link}
            onClick={() => {
              index === 1 && navigateToElement(navigate, "contacts");
              window.scrollTo(0, 0);
            }}
            key={item.name}
            className={classes.link}
          >
            {item.name}
          </Link>
        );
      })}
    </div>
  );
};

export default TabBar;
