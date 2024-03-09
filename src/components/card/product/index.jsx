import React from "react";

import classes from "./ProductCard.module.css";

const ProductCard = (props) => {
  const { image, deleteProduct, status, editProduct} = props;

  return (
    <div className={`${classes.card_container} d-flex flex-wrap`}>
      <div className={classes.img_container}>
        <img src={image} alt="" className="w-100 h-100" />
      </div>

    
      <div className={`d-flex flex-wrap ${classes.padding_x_10} w-100 position-relative`}>
        {["title", "price"].map((item, index) => {
          return (
            <span
              key={item}
              className={`w-100 ${classes.text} ${classes[item]}`}
            >
              {`${props[item]} ${index === 1 ? props['monetaryUnites'] : ''}`}
            </span>
          );
        })}
       {status && <button className={`${classes.img_edit} position-absolute border-0 p-0 bg-transparent`} onClick={editProduct}>
        <img src='./assets/products/card/edit.svg' alt="edit"/>
        </button>}
      </div>
      {status && <div className={`w-100 d-flex justify-content-end ${classes.padding_10}`}>
        <button
          className={`bg-transparent border-0 ${classes.delete_button}`}
          onClick={deleteProduct}
        >
          Delete
        </button>
      </div>}
    </div>
  );
};

export default ProductCard;
