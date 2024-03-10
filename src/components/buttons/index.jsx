import React from "react";

import classes from "./Buttons.module.css";

export const Button = ({ onClick, text, status, type, disabled }) => {
  const buttonClassName = `${classes.confirming_button} ${
    status ? classes.active_button : classes.passive_button
  }`;

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      type={type}
      className={`border-0 ${buttonClassName}`}
    >
      {text}
    </button>
  );
};
