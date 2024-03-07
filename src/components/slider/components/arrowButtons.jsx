import classes from "./ArrowButtons.module.css";

export const SampleNextArrow = (props) => {
  const { className, onClick } = props;
  return (
    <button
      className={`${
        className ? className : ""
      } d-flex align-items-center justify-content-center ${classes.top_100} ${
        classes.right_100
      } ${classes.arrow_buttons}`}
      onClick={onClick}
    >
      <img src="./assets/slider/next.svg" alt="" />
    </button>
  );
};

export const SamplePrevArrow = (props) => {
  const { className, onClick } = props;
  return (
    <button
      className={`${
        className ? className : ""
      } d-flex align-items-center justify-content-center ${classes.top_100} ${
        classes.right_200
      } ${classes.left_auto} ${classes.arrow_buttons}`}
      onClick={onClick}
    >
      <img src="./assets/slider/prev.svg" alt="" />
    </button>
  );
};
