import React, { useState } from "react";

import classes from "./Select.module.css";

import manufacturer from "../../data/manufacturer.json";

const Select = (props) => {
  const {text, filterByManufacturer} = props 
  const [show, setShow] = useState(false);
  const data = manufacturer.manufacturer;

  return (
    <div
      className={`${classes.select_container} ${
        show ? classes.animated : classes.height_50
      } position-absolute d-flex flex-wrap top-0 ${classes.gap_20}`}
      onClick={() => setShow(!show)}
    >
      <div className={`w-100 ${classes.height_50} d-flex align-items-center ${classes.title}`}>{text}</div>
      <div className={`d-flex flex-wrap ${classes.gap_5}`}>
        {data.map((item) => {
          return (
            <div className={`w-100`} onClick={() => filterByManufacturer(item.name)} key={item.name}>
              <span className={`${!show ? classes.text_white : classes.text_black} ${classes.text}`}>
                {item.name}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Select;
