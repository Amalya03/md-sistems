import React from "react";

import classes from "../../AboutUs.module.css";

const Image = () => {
  return (
    <div className={`${classes.logo_container}`}>
      <img className="w-100" src="./assets/aboutUs/about_us.jpg" alt="" />
    </div>
  );
};

export default Image;
