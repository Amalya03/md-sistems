import React from "react";

import classes from "../../ProductCard.module.css";

const Image = ({ image }) => {
  return (
    <div className={classes.img_container}>
      <img src={image} alt="" className="w-100 h-100" />
    </div>
  );
};

export default Image;
