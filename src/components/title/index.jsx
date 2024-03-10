import React from "react";

import classes from "./Title.module.css";

const Title = ({ text }) => {
  const texts = ["firstText", "secondText", "lastText"];

  return (
    <div className="d-flex flex-wrap text-center">
      {texts.map((item) => {
        return (
          <span
            key={text[item]}
            className={`w-100 ${classes.text} ${classes[item]}`}
          >
            {text[item]}
          </span>
        );
      })}
    </div>
  );
};

export default Title;
