import React from "react";

import classes from "./Title.module.css";

const Title = (props) => {
  const { title } = props;
  return (
    <div className={"w-100"}>
      <span className={`${classes.text}`}>{title}</span>
      <div className={`w-100 ${classes.border}`} />
    </div>
  );
};

export default Title;
