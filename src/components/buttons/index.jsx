import classes from "./Buttons.module.css";

export const Button = (props) => {
  const { onClick, text, status} = props;
  return (
    <button
      onClick={onClick}
      className={`border-0 ${classes.confirming_button} ${status ? classes.active_button : classes.passive_button}`}
    >
      {text}
    </button>
  );
};
