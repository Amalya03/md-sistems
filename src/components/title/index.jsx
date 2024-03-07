import React from "react";

import classes from "./Title.module.css";

const Title = () => {
  return (
    <div className="d-flex flex-wrap text-center">
      <span className={`w-100 ${classes.text} ${classes.font_size_16}  ${classes.font_weight_600}`}>Women's Week</span>
      <span className={`w-100 ${classes.text} ${classes.font_size_35}  ${classes.font_weight_800} ${classes.padding_bottom_10}`}>The Celebration Is On</span>
      <span className={`w-100 ${classes.text} ${classes.font_size_16}  ${classes.font_weight_600}`}>Fresh voices, fire fits, and new kicks. Shop a brand new collection inspired by strong women.</span>
    </div>
  );
};

export default Title;
