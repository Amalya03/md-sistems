import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import classes from "./Products.module.css";

import { removeProduct } from "../../../store/productsSlice";

import Title from "../../../components/title";
import { Button } from "../../../components/buttons";
import ProductCard from "../../../components/card/product";
import VerificationModal from "../../../components/modal/verificationModal";

const ProductsData = ({
  status,
  filteredData,
  editProduct,
}) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [show, setShow] = useState(false);
  const [productId, setProductId] = useState("");

  const data = useSelector((item) => item.products.products);
  const productData = !status ? data?.slice(0, 4) : filteredData;

  const showModal = (id) => {
    setProductId(id);
    setShow(true);
  };

  const deleteProduct = async (id) => {
    dispatch(removeProduct(id));
    setShow(false);
  };

  return (
    <>
      <div
        className={` ${classes.gap_50} d-flex flex-wrap justify-content-center w-100 ${!status ? classes.padding_x_20 : ''} ${classes.padding_bottom_50} `}
      >
        {!status && (
          <Title
            text={{
              firstText: "Women's Week",
              secondText: "The Celebration Is On",
              lastText:
                "Fresh voices, fire fits, and new kicks. Shop a brand new collection inspired by strong women.",
            }}
          />
        )}
        <div
          className={`d-flex flex-wrap w-100 ${classes.gap_20} ${!status ? 'justify-content-center' : classes.items_container}`}
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
        {!status && (
          <Button
            text="See All"
            status={true}
            onClick={() => {
              navigate("/products");
              window.scrollTo(0, 0);
            }}
          />
        )}
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
