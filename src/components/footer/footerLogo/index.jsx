import React from "react";
import { Link } from "react-router-dom";

import classes from "./FooterLogo.module.css";

const FooterLogo = () => {
  return (
    <div className="d-flex">
      <Link
        href="/"
        className={`d-flex align-items-center ${classes.logo_container}`}
      >
        <img src="/assets/footer/logo.svg" className="h-32 me-3" alt="Logo" />
      </Link>
    </div>
  );
};

export default FooterLogo;
