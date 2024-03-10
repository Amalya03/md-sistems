import React from "react";

import Modals from "..";
import Title from "./title";
import { Button } from "../../buttons";

import classes from "./VerificationModal.module.css";

const VerificationModal = (props) => {
  const { show, onHide, onClick } = props;

  return (
    <Modals show={show} onHide={onHide} size="md">
      <div
        className={`d-flex justify-content-center w-100 flex-wrap ${classes.modal_container} ${classes.gap_50} `}
      >
        <Title title={"Are you sure ?"} />
        <Button onClick={onClick} text="Yes" />
        <Button onClick={onHide} text="No" status={true} />
      </div>
    </Modals>
  );
};

export default VerificationModal;
