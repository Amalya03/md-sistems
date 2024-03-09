import React from "react";

import classes from "./InformationModal.module.css";

import Title from "../title";
import { Button } from "../../../../components/buttons";
import Modals from "../../../../components/modal/index";

import manufacturer from "../../../../data/manufacturer.json";

const InformationModal = (props) => {
  const { show, onHide, data, onchange, onClick } = props;
  const defoultName = manufacturer.manufacturer.find(
    (item) => item.name === data?.manufacturer
  );
  const monetaryUnites = ["֏", "$", "₽"];

  return (
    <Modals show={show} onHide={onHide} size="lg">
      <div className={`d-flex flex-wrap ${classes.gap_20}`}>
        <Title title="Edit" />
        {["Title", "Description", "Quantity"].map((item, index) => {
          return (
            <div className="w-100 d-flex flex-wrap" key={`${item}_${index}`}>
              <span className={`${classes.title}`}>{item}</span>
              <input
                type={index === 2 ? "number" : "text"}
                min={0}
                onChange={(e) => onchange(e, item.toLowerCase())}
                defaultValue={data[item.toLowerCase()] ?? ""}
                className={`w-100 bg-light border-0 ${
                  classes.information_item
                } ${data[item] ? classes.title : ""}`}
                placeholder={item}
              />
            </div>
          );
        })}

        <div className={`w-100 d-flex justify-content-between`}>
          <div className={`d-flex flex-wrap w-25`}>
            <span className={`${classes.title}`}>Price</span>
            <input
              type="number"
              min={1}
              onChange={(e) => onchange(e, "price")}
              defaultValue={data["price"]}
              placeholder={"Price"}
              className={`bg-light border-0 ${classes.information_item} w-100 align-items-center`}
            />
          </div>

          <div className="d-flex flex-wrap w-25">
            <span className={`${classes.title}`}>Price</span>
            <select
              defaultValue={data.monetaryUnites}
              onChange={(e) => onchange(e, "monetaryUnites")}
              className={`w-100 bg-light border-0 ${classes.information_item} align-items-center`}
            >
              {monetaryUnites.map((item) => {
                return <option key={item}>{item}</option>;
              })}
            </select>
          </div>

          <div className="d-flex flex-wrap w-25">
            <span className={`${classes.title}`}>Manufacturer</span>
            <select
              defaultValue={defoultName?.name}
              onChange={(e) => onchange(e, "manufacturer")}
              className={`w-100 bg-light border-0 ${classes.information_item} align-items-center`}
            >
              {manufacturer.manufacturer.map((item, index) => {
                return <option key={item.name}>{item.name}</option>;
              })}
            </select>
          </div>
        </div>

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

        <div
          className={`w-100 d-flex justify-content-center ${classes.gap_20}`}
        >
          <Button text="Close" onClick={onHide} />
          <Button status={true} text="Apply" onClick={onClick} />
        </div>
      </div>
    </Modals>
  );
};

export default InformationModal;
