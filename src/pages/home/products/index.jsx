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
  const {status, filteredData, setFilteredData, editProduct} = props

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const [productId, setProductId] = useState("");

  const data = useSelector((item) => item.products.products); 
  const productData = !status ? data?.slice(0, 5) : filteredData

  const showModal = (id) => {
    setProductId(id);
    setShow(true);
  };

  const deleteProduct = async (id) => {
     dispatch(removeProduct(id));
     setShow(false);
    const data = filteredData.filter((item) => item.id !== id)
    setFilteredData(data)
  };

  return (
    <>
      <div
        className={` ${classes.gap_50} d-flex flex-wrap justify-content-center ${classes.padding_bottom_50}`}
      >
        {!status && <Title />}
        <div
          className={`d-flex flex-wrap w-100 justify-content-center ${classes.gap_20}`}
        >
          {productData?.map((item, index) => {
            return (
              <ProductCard
                editProduct={() => editProduct(item.id)} 
                status={status}
                deleteProduct={() => showModal(item.id)}
                key={`${item.title}_${index}`}
                image={item.image}
                title={item.title}
                price={item.price}
                monetaryUnites={item.monetaryUnites}
                manufacture={item.manufacture}
              />
            );
          })}
        </div>
        {!status && <Button text='See All' status={true} onClick={() => {navigate('/products'); window.scrollTo(0,0)}}/>}
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
