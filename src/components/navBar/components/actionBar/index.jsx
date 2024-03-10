import React, { useState } from "react";

import classes from "../../navBar.module.css";

const ActionBar = () => {
  const [like, setLike] = useState(false);

  const toggleLike = () => {
    setLike(!like);
  };

  return (
    <div className="d-flex">
      <button
        className={`${classes.img_container} bg-transparent border-0`}
        onClick={toggleLike}
      >
        <img
          src={`./assets/navBar/${like ? "active" : "passive"}_heart.svg`}
          alt=""
          className="w-100 h-100"
        />
      </button>
      <button className={`${classes.img_container} bg-transparent border-0`}>
        <img src={`./assets/navBar/user.svg`} alt="" className="w-100 h-100" />
      </button>
    </div>
  );
};

export default ActionBar;
