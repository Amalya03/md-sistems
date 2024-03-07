import {
  SampleNextArrow,
  SamplePrevArrow,
} from "../../../components/slider/components/arrowButtons";

export const slider = {
 settings : {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow:3,
    slidesToScroll: 1,
    initialSlide: 0,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow:3,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  },

  data: [
    "slider_img_1",
    "slider_img_2",
    "slider_img_3",
    "slider_img_4",
    "slider_img_5",
    "slider_img_6",
  ],
};
