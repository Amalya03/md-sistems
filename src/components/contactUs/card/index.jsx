import React from "react";

import classes from "./Card.module.css";
import Image from "./components/image";
import Titles from "./components/titles";

const ContactUsCard = ({ src, link, value, title }) => {
  return (
    <div
      className={`d-flex align-items-center justify-content-center flex-wrap ${classes.card_container}`}
    >
      <div
        className={`d-flex justify-content-start w-100 flex-wrap ${classes.gap_20}`}
      >
        <Image src={src} />
        <Titles title={title} link={link} value={value} />
      </div>
    </div>
  );
};

export default ContactUsCard;
