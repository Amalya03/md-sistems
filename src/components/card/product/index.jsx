import React from "react";

import classes from "./ProductCard.module.css";

const ProductCard = (props) => {
  const { image, deleteProduct } = props;

  return (
    <div className={`${classes.card_container} d-flex flex-wrap`}>
      <div className={classes.img_container}>
        <img src={image} alt="" className="w-100 h-100" />
      </div>
      <div className={`d-flex flex-wrap ${classes.padding_x_10} w-100`}>
        {["title", "price"].map((item) => {
          return (
            <span
              key={item}
              className={`w-100 ${classes.text} ${classes[item]}`}
            >
              {props[item]}
            </span>
          );
        })}
      </div>
      <div className={`w-100 d-flex justify-content-end ${classes.padding_10}`}>
        <button
          className={`bg-transparent border-0 ${classes.delete_button}`}
          onClick={deleteProduct}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
