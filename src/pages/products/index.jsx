import { useSelector } from "react-redux";
import React, { useState } from "react";

import ProductsData from "../home/products";
import classes from "./Products.module.css";
import Select from "../../components/select";
import PageTitle from "../../components/pageTitle";
import Search from "../../components/navBar/search";

const Products = () => {
  const [text, setText] = useState("Sort by manufacturer");

  const data = useSelector((item) => item.products.products);
  const [filteredData, setFilteredData] = useState(data);

  const filterProducts = (value, key) => {
    const filteredData = data.filter((item) =>
      item[key]?.toLowerCase().includes(value?.toLowerCase())
    );
    setFilteredData(filteredData);
  };

  return (
    <div
      className={`w-100 flex-wrap d-flex ${classes.gap_50} justify-content-center`}
    >
      <PageTitle title="Products" />
      <div
        className={`d-flex flex-wrap ${classes.data_container} ${classes.gap_50} w-100 position-relative`}
      >
        <div className="w-100 d-flex justify-content-start">
          <Search onChange={(e) => filterProducts(e.target.value, "title")} />
          <Select
            text={text}
            filterByManufacturer={(value) => {
              filterProducts(value, "manufacturer");
              setText(value);
            }}
          />
        </div>
        {filteredData.length > 0 ? (
          <ProductsData status={true} filteredData={filteredData} />
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
  );
};

export default Products;
