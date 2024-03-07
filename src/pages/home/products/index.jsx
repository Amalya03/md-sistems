import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import classes from "./Products.module.css";

import Title from "../../../components/title";
import { Button } from "../../../components/buttons";
import { removeProduct } from "../../../store/todoSlice";
import ProductCard from "../../../components/card/product";
import VerificationModal from "../../../components/modal/delete";


const ProductsData = (props) => {
  const {status, filteredData} = props
  const navigate = useNavigate()
  const [show, setShow] = useState(false);
  const [productId, setProductId] = useState("");

  const dispatch = useDispatch();
  const data = useSelector((item) => item.products.products);
  const productData = !status ? data?.slice(0, 5) : filteredData

  const showModal = (id) => {
    setProductId(id);
    setShow(true);
  };

  const deleteProduct = (id) => {
    dispatch(removeProduct(id));
    setShow(false);
  };

  return (
    <>
      <div
        className={` ${classes.gap_50} d-flex flex-wrap justify-content-center ${classes.padding_bottom_50}`}
      >
        {!status && <Title />}
        <div
          className={`d-flex flex-wrap justify-content-center ${classes.gap_20}`}
        >
          {productData?.map((item, index) => {
            return (
              <ProductCard
                deleteProduct={() => showModal(item.id)}
                key={`${item.title}_${index}`}
                image={item.image}
                title={item.title}
                price={item.price}
                manufacture={item.manufacture}
              />
            );
          })}
        </div>
        {!status && <Button text='See All' status={true} onClick={() => navigate('/products')}/>}
      </div>
      <VerificationModal
        show={show}
        onHide={() => setShow(false)}
        onClick={() => deleteProduct(productId)}
      />
    </>
  );
};

export default ProductsData;
