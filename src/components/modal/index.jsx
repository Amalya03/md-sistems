import React from "react";

import Modal from "react-bootstrap/Modal";

import classes from "./Modals.module.css";

const Modals = (props) => {
  const { children, onHide, size } = props;

  return (
    <Modal
      {...props}
      size={size}
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <div className="modalHeaderContainer" id="defaultModal">
        <Modal.Header>
          <div className={`d-flex justify-content-end w-100`}>
            <button
              className={`${classes.cancel_button} border-0 bg-transparent`}
              onClick={onHide}
            >
              <img className="w-100" src="./assets/modal/cancel.svg" alt="" />
            </button>
          </div>
        </Modal.Header>
      </div>
      <Modal.Body>{children}</Modal.Body>
    </Modal>
  );
};

export default Modals;
