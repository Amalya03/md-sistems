import React from "react";
import classes from "./Description.module.css";

const Description = () => {
  return (
    <div className="h-100 align-items-center d-flex">
      <span className={`${classes.description} text-center font-weight-bold`}>
        Another clothing brand for
      </span>
    </div>
  );
};

export default Description;
