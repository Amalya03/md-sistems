import React from "react";

import classes from "./AboutUs.module.css";

import PageTitle from "../../components/pageTitle";

const AboutUs = () => {
  return (
    <div className={`${classes.container} d-flex flex-wrap justify-content-center`}>
      <PageTitle title="About Us" />
      <div className={`${classes.company_info_container} d-flex`}>
      <div className={`d-flex w-100 justify-content-center align-items-start ${classes.company_info} ${classes.gap_50}`}>
        <div className={` ${classes.logo_container}`}>
          <img className="w-100" src="./assets/aboutUs/about_us.jpg" alt="" />
        </div>
        <div className={`d-flex flex-wrap ${classes.text_container}`}>
          <span className={classes.title}>Empowering Innovation</span>
          <span className={classes.text}>
            A rapidly expanding software development company that warmly
            welcomes innovative and ambitious professionals.

            At M&D, we build an environment that brings together intelligent, ambitious, and motivated individuals. Here, we have created a culture of teaching and learning as this is the guarantee of a strong company and a team.
          </span>
        </div>
      </div>
      </div>
    </div>
  );
};

export default AboutUs;
