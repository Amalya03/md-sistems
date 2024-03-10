import React from "react";

import classes from "./Image.module.css";

const Image = () => {
  return (
    <div className={`${classes.max_width_600}`}>
      <img className="w-100 h-100" src="./assets/home/header_img.avif" alt="" />
    </div>
  );
};

export default Image;
