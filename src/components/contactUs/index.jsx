import React from "react";

import classes from "./ContactUs.module.css";

import Title from "../title";
import ContactUsCard from "./card";
import { contactInfo } from "../../utils/halpers/contactUs/contactInfo";

const ContactUs = () => {
  return (
    <section
      className={`w-100 d-flex justify-content-center flex-wrap ${classes.card_item}`}
      id="contacts"
    >
      <Title
        text={{
          firstText: "HAPPY TO HELP YOU",
          secondText: "HAVE QUESTIONS? GET IN TOUCH",
          lastText: "CONTACT US FOR MORE INFORMATION.",
        }}
      />
      <div
        className={`d-flex w-100 justify-content-center ${classes.card_item}`}
      >
        {contactInfo.map(({ title, src, link, value }) => (
          <div key={title} className={`justify-content-center d-flex`}>
            <ContactUsCard src={src} link={link} value={value} title={title} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default ContactUs;
