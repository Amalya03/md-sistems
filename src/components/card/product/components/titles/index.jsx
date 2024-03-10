import React from "react";

import classes from "../../ProductCard.module.css";

const Titles = (props) => {
  return (
    <>
      {["title", "price"].map((item, index) => {
        return (
          <span key={item} className={`w-100 ${classes.text} ${classes[item]}`}>
            {`${props[item]} ${index === 1 ? props["monetaryUnites"] : ""}`}
          </span>
        );
      })}
    </>
  );
};

export default Titles;
