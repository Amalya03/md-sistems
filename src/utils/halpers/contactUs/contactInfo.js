import { EMAIL, PHONENUMBER } from "../../../constants/Constants";

export const contactInfo = [
  {
    title: "Email",
    src: `/assets/contactUs/contactEmail.svg`,
    link: `mailto:${EMAIL}`,
    value: EMAIL,
  },
  {
    title: "Phone",
    src: `/assets/contactUs/contactPhone.svg`,
    link: `tel:${PHONENUMBER}`,
    value: PHONENUMBER,
  },
];
