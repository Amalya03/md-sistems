import React from "react";

import classes from "./Search.module.css";

const Search = (props) => {
  const { onChange } = props;

  return (
    <div className="position-relative">
      <label
        htmlFor="search"
        className={`position-absolute ${classes.search_img} justify-content-center align-items-center d-flex`}
      >
        <img src="./assets/navBar/search.svg" alt="" />
      </label>
      <input
        id="serach"
        className={`${classes.input}`}
        type="text"
        onChange={onChange}
        placeholder="Search"
      />
    </div>
  );
};

export default Search;
