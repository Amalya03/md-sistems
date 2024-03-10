import React from "react";

import classes from "./InformationModal.module.css";

import Title from "../title";
import Select from "./components";
import Input from "../../../../components/input";
import { Button } from "../../../../components/buttons";
import Modals from "../../../../components/modal/index";
import manufacturer from "../../../../data/manufacturer.json";

const InformationModal = ({ show, onHide, data, onchange, onClick, disabled, message}) => {
  const monetaryUnites = ["֏", "$", "₽"];
  const inputFieldNames = ["Title", "Description", "Quantity", "Price"];
  const fieldDescriptions = { monetaryUnites: "Currency Symbols",  manufacturer: "Manufacturer" };

  const defoultName = manufacturer.manufacturer.find(
    (item) => item.name === data?.manufacturer
  );

  return (
    <Modals show={show} onHide={onHide} size="lg">
      <div className={`d-flex flex-wrap ${classes.gap_10}`}>
        <Title title="Edit" />
        {inputFieldNames.map((item, index) => {
          return (
            <Input
            key={item}
              min={1}
              text={item}
              style={{
                labelStyle: classes.title,
                containerStyle: `${item === "Price" ? "w-25" : "w-100"} d-flex flex-wrap`,
                inputStyle: `w-100 bg-light border-0 ${classes.information_item}`,
              }}
              placeholder={item}
              type={index > 1 ? "number" : "text"}
              defaultValue={data[item.toLowerCase()] ?? ""}
              onChange={(e) => onchange(e, item.toLowerCase())}
              required
            />
          );
        })}

          {Object.keys(fieldDescriptions).map((item, index) => {
            return (
              <Select
              key={item}
                options={
                  index === 0 ? monetaryUnites : manufacturer.manufacturer
                }
                defaultValue={
                  index === 0 ? data.monetaryUnites : defoultName?.name
                }
                onChange={(e) => onchange(e, item)}
                className={ "w-25"}
              />
            );
          })}

        <div className="d-flex flex-wrap w-100">
          <span className={`${classes.title}`}>Content</span>
          <textarea
            type="text"
            onChange={(e) => onchange(e, "content")}
            className={`w-100 bg-light border-0 ${classes.information_item} align-items-center`}
            placeholder={"Content"}
            defaultValue={data["content"] ?? ""}
          />
        </div>
        {message !== "" && <span className={`${classes.message} ${disabled ? classes.color_red : classes.color_green}`}>{message}</span>}
        <div
          className={`w-100 d-flex justify-content-center ${classes.gap_20}`}
        >
          <Button text="Close" onClick={onHide} />
          <Button status={true} text="Apply" onClick={onClick} disabled={disabled}/>
        </div>
      </div>
    </Modals>
  );
};

export default InformationModal;
