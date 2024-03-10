import React from "react";

import classes from "./Home.module.css";
import "bootstrap/dist/css/bootstrap.css";

import Header from "./header";
import ProductsData from "./products";
import Carousel from "../../components/slider";
import ContactUs from "../../components/contactUs";

const Home = () => {
  return (
    <div className={`d-flex flex-wrap ${classes.gap_150}`}>
      <Header />
      <Carousel />
      <ContactUs />
      <ProductsData />
    </div>
  );
};

export default Home;
