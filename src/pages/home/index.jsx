import React from "react";

import classes from "./Home.module.css";
import "bootstrap/dist/css/bootstrap.css";

import Image from "./components/image";
import Carousel from "../../components/slider";
import Description from "./components/description";
import ProductsData from "./products";
import ContactUs from "../../components/contactUs";

const Home = () => {
  return (
    <div className={`d-flex flex-wrap ${classes.gap_150}`}>
      <div
        className={`d-flex w-100 ${classes.data_container} justify-content-center`}
      >
        <div className={`d-flex ${classes.max_width_1100} ${classes.gap_50}`}>
          <Description />
          <Image />
        </div>
      </div>
      <Carousel/>
      <ContactUs/>
      <ProductsData/>
    </div>
  );
};

export default Home;
