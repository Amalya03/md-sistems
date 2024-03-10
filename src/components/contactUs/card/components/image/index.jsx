import React from "react";

import classes from "../../Card.module.css";

const Image = ({ src }) => {
  return (
    <div className={`d-flex align-items-center w-100 justify-content-start`}>
      <img src={src} alt="" className={classes.img} />
    </div>
  );
};

export default Image;
