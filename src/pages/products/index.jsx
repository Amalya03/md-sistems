import { v4 as uuidv4 } from "uuid";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import classes from "./Products.module.css";

import ProductsData from "../home/products";
import PageTitle from "../../components/pageTitle";
import InformationModal from "./components/informationModal";
import NoDataDisplay from "../../components/noDataDisplay";
import ProductFilterBar from "./components/productsFilterBar";

import { addProduct, editProduct } from "../../store/productsSlice";

const Products = () => {
  const dispatch = useDispatch();

  const [show, setShow] = useState("");
  const [keys, setKeys] = useState([]);
  const [disabled, setDisabled] = useState(true);
  const [message, setMessage] = useState("");
  const defoultData = {
    title: "",
    description: "",
    content: "",
    price: "",
    manufacturer: "Nike",
    quantity: "",
    monetaryUnites: "$",
  };
  const [editableInfo, setEditableInfo] = useState(defoultData);
  const data = useSelector((item) => item.products.products);
  const [filteredData, setFilteredData] = useState(data);

  useEffect(() => {
    setFilteredData(data);
  }, [data, editableInfo]);

  useEffect(() => {
    const requiredKeys = ["title", "description", "quantity", "price"];
    const allKeysPresent = requiredKeys.every((key) => keys.includes(key));
    if (show === "add") {
      setMessage(
        allKeysPresent
          ? "Congratulations! You're ready to add a new product."
          : "Kindly provide the necessary details for the Title, Description, Quantity, and Price fields"
      );
      setDisabled(!allKeysPresent);
    }
  }, [show, keys]);

  const onHide = () => {
    setShow("");
    setMessage("");
    setEditableInfo(defoultData);
  };

  const loadEditableData = (id) => {
    const data = filteredData.find((item) => item.id === id);
    setEditableInfo(data);
    setShow("edit");
  };

  const updateKeys = (e, name) => {
    const updatedKeys =
      e.target.value !== ""
        ? [...keys, name]
        : keys.filter((item) => item !== name);
    setKeys(updatedKeys);
  };

  const updateEditableInfo = (e, name) => {
    updateKeys(e, name);
    if (show === "edit") setDisabled(false);
    setEditableInfo({ ...editableInfo, [name]: e.target.value });
  };

  const dispatchProductAction = (name) => {
    const updatedInfo = {
      ...editableInfo,
      id: uuidv4(),
      image: "./assets/products/card/nike.png",
    };
    dispatch(
      name === "edit" ? editProduct(editableInfo) : addProduct(updatedInfo)
    );
    onHide();
    setKeys([]);
  };

  return (
    <>
      <section
        className={`w-100 flex-wrap d-flex ${classes.gap_50} justify-content-center`}
      >
        <PageTitle title="Products" />
        <div
          className={`d-flex flex-wrap ${classes.data_container} ${classes.gap_50} w-100 position-relative`}
        >
          <ProductFilterBar
            data={data}
            setFilteredData={setFilteredData}
            setShow={setShow}
          />
          {filteredData.length > 0 ? (
            <ProductsData
              status={true}
              filteredData={filteredData}
              setFilteredData={setFilteredData}
              editProduct={loadEditableData}
            />
          ) : (
            <NoDataDisplay />
          )}
        </div>
      </section>
      <InformationModal
        message={message}
        disabled={disabled}
        show={show !== ""}
        onHide={onHide}
        data={editableInfo}
        onchange={updateEditableInfo}
        onClick={() => dispatchProductAction(show)}
      />
    </>
  );
};

export default Products;
