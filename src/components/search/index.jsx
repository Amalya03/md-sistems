import React from "react";

import classes from "./Search.module.css";

import Input from "../input";

const Search = (props) => {
  const { onChange } = props;

  return (
    <Input
      id="search"
      src={"./assets/navBar/search.svg"}
      onChange={onChange}
      style={{
        containerStyle: "position-relative",
        labelStyle: `position-absolute ${classes.search_img} justify-content-center align-items-center d-flex`,
        inputStyle: classes.input,
      }}
      type="text"
      placeholder="Search"
    />
  );
};

export default Search;
