import React from "react";

import classes from "./NoDataDisplay.module.css";

const NoDataDisplay = () => {
  return (
    <div
      className={`w-100 d-flex justify-content-center align-items-center ${classes.no_data_container}`}
    >
      <img src="./assets/products/smile.svg" alt="" />
      <span>No Data</span>
    </div>
  );
};

export default NoDataDisplay;
