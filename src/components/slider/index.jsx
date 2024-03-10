import React from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import classes from "./Slider.module.css";
import "slick-carousel/slick/slick-theme.css";

import Title from "../title";
import { slider } from "../../utils/halpers/slider/slider";

const Carousel = () => {
  return (
    <section
      className={`w-100 d-flex flex-column  ${classes.gap_50} ${classes.carousel_container}`}
    >
      <Title
        text={{
          firstText: "Women's Week",
          secondText: "The Celebration Is On",
          lastText:
            "Fresh voices, fire fits, and new kicks. Shop a brand new collection inspired by strong women.",
        }}
      />
      <Slider {...slider.settings} className={classes.item_container}>
        {slider.data.map((item) => {
          return (
            <div
              key={item}
              className={`relative align-center ${classes.item} d-flex justify-content-center`}
            >
              <img
                src={`./assets/slider/${item}.jpg`}
                className={`h-100 ${classes.img}`}
                alt=""
              />
            </div>
          );
        })}
      </Slider>
    </section>
  );
};
export default Carousel;
