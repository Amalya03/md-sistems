import React from "react";

import classes from "../InformationModal.module.css";

const Select = ({ options, defaultValue, onChange, className }) => {
  return (
    <div className={`d-flex flex-wrap ${className}`}>
      <span className={`${classes.title}`}>Currency Symbols</span>
      <select
        defaultValue={defaultValue}
        onChange={onChange}
        className={`w-100 bg-light border-0 ${classes.information_item} align-items-center`}
      >
        {options.map((item) => {
          return <option key={item.name ?? item}>{item.name ?? item}</option>;
        })}
      </select>
    </div>
  );
};

export default Select;
