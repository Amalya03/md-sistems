import React from "react";

import classes from "../../../ProductCard.module.css";

const EditButton = ({ onClick }) => {
  return (
    <button
      className={`${classes.img_edit} position-absolute border-0 p-0 bg-transparent`}
      onClick={onClick}
    >
      <img src="./assets/products/card/edit.svg" alt="edit" />
    </button>
  );
};

export default EditButton;
