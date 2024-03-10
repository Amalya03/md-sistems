import React, { useState } from "react";

import Search from "../../../../components/search";
import Select from "../../../../components/select";

import classes from "../../Products.module.css";

const ProductFilterBar = ({ data, setFilteredData, setShow }) => {
  const [text, setText] = useState("Sort by manufacturer");

  const filterProducts = (value, key) => {
    const filteredData = data.filter((item) =>
      item[key]?.toLowerCase().includes(value?.toLowerCase())
    );
    setFilteredData(filteredData);
  };

  return (
    <div className="w-100 d-flex justify-content-start align-items-center position-relative ">
      <div className={`d-flex ${classes.container}`}>
        <Search onChange={(e) => filterProducts(e.target.value, "title")} />
        <button
          onClick={() => setShow("add")}
          className={`bg-transparent border-0 ${classes.img_container}`}
        >
          <img src="./assets/products/add.png" alt="add" />
        </button>
      </div>
      <Select
        text={text}
        filterByManufacturer={(value) => {
          filterProducts(value, "manufacturer");
          setText(value);
        }}
      />
    </div>
  );
};

export default ProductFilterBar;
