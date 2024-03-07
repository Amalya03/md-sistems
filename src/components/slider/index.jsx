import React from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import classes from "./Slider.module.css";
import "slick-carousel/slick/slick-theme.css";

import Title from "../title";
import { slider } from "../../utils/halpers/slider/slider";

const Carousel = () => {
  return (
    <div className={`w-100 d-flex flex-column  ${classes.gap_50}`}>
      <Title />
      <Slider {...slider.settings} className={classes.item_container}>
        {slider.data.map((item) => {
          return (
            <div
              key={item}
              className={`relative align-center ${classes.item} flex h-full justify-center`}
            >
              <img
                src={`./assets/slider/${item}.jpg`}
                className="h-100"
                alt=""
              />
            </div>
          );
        })}
      </Slider>
    </div>
  );
};
export default Carousel;
