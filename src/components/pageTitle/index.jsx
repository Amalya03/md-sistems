import React from "react";

import classes from "./PageTitle.module.css";

const PageTitle = (props) => {
  const { title } = props;

  return (
    <div
      className={`${classes.products_title_container} d-flex align-items-center w-100 justify-content-center`}
    >
      <div
        className={`${classes.title_container} d-flex align-items-center w-100 flex-wrap justify-content-center`}
      >
        <div
          className={` justify-content-center d-flex align-items-center w-100`}
        >
          <span className="align-items-center text-center d-flex">{title}</span>
        </div>
      </div>
    </div>
  );
};

export default PageTitle;
