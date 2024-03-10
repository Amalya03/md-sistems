import React from "react";

import classes from "../../../ProductCard.module.css";

const DeleteButton = ({ onClick }) => {
  return (
    <div className={`w-100 d-flex justify-content-end ${classes.padding_10}`}>
      <button
        className={`bg-transparent border-0 ${classes.delete_button}`}
        onClick={onClick}
      >
        Delete
      </button>
    </div>
  );
};

export default DeleteButton;
