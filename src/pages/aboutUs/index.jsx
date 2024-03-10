import React from "react";

import classes from "./AboutUs.module.css";

import Image from "./components/image";
import PageTitle from "../../components/pageTitle";
import Description from "./components/description";

const AboutUs = () => {
  return (
    <div
      className={`${classes.container} d-flex flex-wrap justify-content-center`}
    >
      <PageTitle title="About Us" />
      <div className={`${classes.company_info_container} d-flex`}>
        <div
          className={`d-flex w-100 justify-content-center align-items-start ${classes.company_info} ${classes.gap_50}`}
        >
          <Image />
          <Description />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
