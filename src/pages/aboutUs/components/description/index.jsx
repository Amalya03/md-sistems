import React from "react";

import classes from "../../AboutUs.module.css";

const Description = () => {
  return (
    <div className={`d-flex flex-wrap ${classes.text_container}`}>
      <span className={classes.title}>Empowering Innovation</span>
      <span className={classes.text}>
        A rapidly expanding software development company that warmly welcomes
        innovative and ambitious professionals. At M&D, we build an environment
        that brings together intelligent, ambitious, and motivated individuals.
        Here, we have created a culture of teaching and learning as this is the
        guarantee of a strong company and a team.
      </span>
    </div>
  );
};

export default Description;
