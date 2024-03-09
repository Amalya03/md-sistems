import { useDispatch, useSelector } from "react-redux";
import React, { useEffect, useState } from "react";

import classes from "./Products.module.css";
import { v4 as uuidv4 } from "uuid";

import ProductsData from "../home/products";
import Select from "../../components/select";
import PageTitle from "../../components/pageTitle";
import Search from "../../components/navBar/search";
import { addProduct, editProduct } from "../../store/todoSlice";
import InformationModal from "./components/informationModal";


const Products = () => {
  const dispatch = useDispatch()
  const [show, setShow] = useState('')
  const [editableInfo, setEditableInfo] = useState({})
  const [text, setText] = useState("Sort by manufacturer");

  const data = useSelector((item) => item.products.products);
  const [filteredData, setFilteredData] = useState(data);

  useEffect(() => {
    setFilteredData(data)
  }, [data])


  const onHide = () => {
    setShow('')
    setEditableInfo({})
  }

  const filterProducts = (value, key) => {
    const filteredData = data.filter((item) =>
      item[key]?.toLowerCase().includes(value?.toLowerCase())
    );
    setFilteredData(filteredData);
  };

  const editProductData = (id) => {
    const data = filteredData.find((item) => item.id === id)
    setEditableInfo(data)
    setShow('edit')
  }

  const changeProductData = (e, name) => {
    setEditableInfo({...editableInfo, [name]: e.target.value})
  }

  const editProducts = (name) => {
    if(name === 'edit') {
      dispatch(editProduct(editableInfo))
    } else {
      editableInfo['id'] = uuidv4()
      editableInfo['image'] = "./assets/products/card/nike.png"
      dispatch(addProduct(editableInfo))
    }
    setShow('')
  }

  return (
    <>
    <div
      className={`w-100 flex-wrap d-flex ${classes.gap_50} justify-content-center`}
    >
      <PageTitle title="Products" />
      <div
        className={`d-flex flex-wrap ${classes.data_container} ${classes.gap_50} w-100 position-relative`}
      >
        <div className="w-100 d-flex justify-content-start align-items-center position-relative ">
          <Search onChange={(e) => filterProducts(e.target.value, "title")} />
            <button onClick={() => setShow('add')} className={`bg-transparent border-0 ${classes.img_container}`}>
              <img src='./assets/products/add.png' alt="add"/>
            </button>
          <Select
            text={text}
            filterByManufacturer={(value) => {
              filterProducts(value, "manufacturer");
              setText(value);
            }}
          />
        </div>
        {filteredData.length > 0 ? (
          <ProductsData status={true} filteredData={filteredData} setFilteredData={setFilteredData} editProduct={editProductData}/>
        ) : (
          <div
            className={`w-100 d-flex justify-content-center align-items-center ${classes.no_data_container}`}
          >
            <img src="./assets/products/smile.svg" alt="" />
            <span>No Data</span>
          </div>
        )}
      </div>
    </div>
     <InformationModal show={show !== ''} onHide={onHide} data={editableInfo} onchange={changeProductData} onClick={editProducts}/>
    </>
  );
};

export default Products;
