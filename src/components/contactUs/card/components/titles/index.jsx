import React from "react";

import classes from "../../Card.module.css";

import { Link } from "react-router-dom";

const Titles = ({ title, link, value }) => {
  return (
    <div
      className={`d-flex align-items-center w-100 flex-wrap ${classes.gap_10}`}
    >
      <span className={classes.title}>{title}</span>
      <Link className={`w-100 ${classes.text}`} to={link}>
        {value}
      </Link>
    </div>
  );
};

export default Titles;
