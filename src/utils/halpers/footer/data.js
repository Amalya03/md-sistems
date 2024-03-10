import { EMAIL, PHONENUMBER } from "../../../constants/Constants";

export const data = {
  titles: ["Address", "Contacts", "Menu"],
  data: [
    ["6/4 Abelian St., Yerevan, Armenia"],
    [" +37455707520", "info@mdsystems.am"],
    ["Contacts", "About Us", "Products"],
  ],
  links: [
    [""],
    [`tel:${PHONENUMBER}`, `mailto:${EMAIL}`],
    ["contact", "aboutUs", "products"],
  ],
};
