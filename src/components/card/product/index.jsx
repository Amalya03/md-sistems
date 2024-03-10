import React from "react";

import classes from "./ProductCard.module.css";

import Image from "./components/image";
import Titles from "./components/titles";
import EditButton from "./components/buttons/edit";
import DeleteButton from "./components/buttons/delete";

const ProductCard = (props) => {
  const {
    image,
    deleteProduct,
    status,
    editProduct,
    monetaryUnites,
    price,
    title,
  } = props;

  return (
    <div className={`${classes.card_container} d-flex flex-wrap w-100`}>
      <Image image={image} />
      <div
        className={`d-flex flex-wrap ${classes.padding_x_10} w-100 position-relative`}
      >
        <Titles monetaryUnites={monetaryUnites} price={price} title={title} />
        {status && <EditButton onClick={editProduct} />}
      </div>
      {status && <DeleteButton onClick={deleteProduct} />}
    </div>
  );
};

export default ProductCard;
