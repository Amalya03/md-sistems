import Modals from "..";
import { Button } from "../../buttons";
import classes from "./VerificationModal.module.css";

const VerificationModal = (props) => {
  const { show, onHide, onClick } = props;

  return (
    <Modals show={show} onHide={onHide} size="md">
      <div
        className={`d-flex justify-content-center w-100 flex-wrap ${classes.modal_container} ${classes.gap_50} `}
      >
        <div
          className={`w-100 d-flex justify-content-center align-items-center`}
        >
          <span className={`text-center ${classes.text}`}>Are you sure ?</span>
        </div>
        <Button onClick={onClick} text="Yes" />
        <Button onClick={onHide} text="No" status={true}/>
      </div>
    </Modals>
  );
};

export default VerificationModal;
