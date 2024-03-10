import React from "react";

import classes from "../VerificationModal.module.css";

const Title = ({ title }) => {
  return (
    <div className={`w-100 d-flex justify-content-center align-items-center`}>
      <span className={`text-center ${classes.text}`}>{title}</span>
    </div>
  );
};

export default Title;
