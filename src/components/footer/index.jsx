import Info from "./info/index";
import FooterLogo from "./footerLogo/index";

import classes from "./Footer.module.css";

const Footer = () => {
  return (
    <footer
      className={`w-100 d-flex align-items-center position-absolute bottom-0 ${classes.footer_container}`}
    >
      <div
        className={`d-flex justify-content-around w-100 ${classes.items_container}`}
      >
        <FooterLogo />
        <Info />
      </div>
    </footer>
  );
};

export default Footer;
